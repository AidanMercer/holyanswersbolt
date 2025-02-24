import os
from flask import Flask, request, jsonify, Response
from google import genai
from google.genai import types
from flask_cors import CORS
import json

app = Flask(__name__)
# More permissive CORS configuration
CORS(app, resources={
    r"/*": {
        "origins": "*",
        "allow_headers": [
            "Content-Type", 
            "Authorization", 
            "Access-Control-Allow-Credentials"
        ],
        "supports_credentials": True
    }
})

# Use environment variable for API key (more secure)
client = genai.Client(
    api_key=os.getenv('GOOGLE_AI_API_KEY', 'AIzaSyA_EKbVSEysMq6-hr0Fq90EadQpoI_z7VU')
)

# Simplified system instruction
system_instruction = """You are an AI Bible Assistant. Provide concise, biblically-grounded answers to questions about Christian faith and scripture."""

class ChatState:
    def __init__(self):
        self.stop_generation = False
        self.current_model = "gemini-1.5-flash"
        self.search_enabled = True

    def reset(self):
        self.stop_generation = False

chat_state = ChatState()

def prepare_context_history(context_history):
    """Prepare context history for model input"""
    formatted_history = []
    for msg in context_history:
        role = 'user' if msg['sender'] == 'user' else 'model'
        formatted_history.append(
            types.Content(
                role=role, 
                parts=[types.Part(text=msg['content'])]
            )
        )
    return formatted_history

def generate(user_input, context_history=None):
    """Generate AI response with optional context history"""
    # Reset stop generation flag
    chat_state.stop_generation = False

    # Prepare tools and configuration
    tools = [types.Tool(google_search=types.GoogleSearch())] if chat_state.search_enabled else []

    generate_content_config = types.GenerateContentConfig(
        temperature=0.2,
        top_p=0.95,
        max_output_tokens=8192,
        response_modalities=["TEXT"],
        safety_settings=[
            types.SafetySetting(category="HARM_CATEGORY_HATE_SPEECH", threshold="BLOCK_NONE"),
            types.SafetySetting(category="HARM_CATEGORY_DANGEROUS_CONTENT", threshold="BLOCK_NONE"),
            types.SafetySetting(category="HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold="BLOCK_NONE"),
            types.SafetySetting(category="HARM_CATEGORY_HARASSMENT", threshold="BLOCK_NONE")
        ],
        tools=tools,
        system_instruction=types.Content(role="system", parts=[types.Part(text=system_instruction)]),
    )

    # Prepare contents with context history
    contents = []
    if context_history:
        contents.extend(prepare_context_history(context_history))
    
    # Add current user input
    contents.append(
        types.Content(role="user", parts=[types.Part(text=user_input)])
    )

    def generate_response():
        response_text = ""
        try:
            for chunk in client.models.generate_content_stream(
                model=chat_state.current_model,
                contents=contents,
                config=generate_content_config,
            ):
                # Check for stop generation
                if chat_state.stop_generation:
                    return

                # Process chunk
                if not chunk.candidates:
                    continue
                
                for candidate in chunk.candidates:
                    if not candidate.content.parts:
                        continue
                    
                    for part in candidate.content.parts:
                        if part.text:
                            response_text += part.text
                            yield part.text
            
            # Final yield to signal completion
            yield ""
        
        except Exception as e:
            yield f"Error during generation: {str(e)}"

    return generate_response()

@app.route('/chat', methods=['POST', 'OPTIONS'])
def chat_endpoint():
    """Enhanced chat endpoint supporting context history"""
    # Handle CORS preflight request
    if request.method == 'OPTIONS':
        return jsonify({}), 204

    # Handle POST request
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    user_input = data.get('user_input', '')
    context_history = data.get('context_history', [])

    # Validate input
    if not user_input:
        return jsonify({"error": "No user input provided"}), 400

    # Reset stop generation
    chat_state.stop_generation = False

    return Response(
        generate(user_input, context_history), 
        content_type='text/plain;charset=utf-8'
    )

@app.route('/stop-generation', methods=['POST', 'OPTIONS'])
def stop_generation_endpoint():
    """Endpoint to stop ongoing generation"""
    # Handle CORS preflight request
    if request.method == 'OPTIONS':
        return jsonify({}), 204

    chat_state.stop_generation = True
    return jsonify({"status": "Generation stopped"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
