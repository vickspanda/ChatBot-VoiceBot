# ChatBot-VoiceBot

## Overview

This project is designed to assist students and families with college admission queries through a **ChatBot** and **VoiceBot** system. The bots provide instant, personalized responses, addressing common questions related to admissions, such as requirements, deadlines, financial aid, and more. Built using Python and various web technologies, the system uses **Natural Language Processing (NLP)** and **Machine Learning (ML)** to improve interaction and accuracy.

## Features

- **ChatBot**: Provides real-time assistance through a text-based interface.
- **VoiceBot**: Uses speech recognition for voice-based queries, improving user convenience.
- **NLP Integration**: Identifies user intent and provides relevant, precise answers.
- **Speech Recognition**: Optimizes the VoiceBot’s accuracy and user experience.
- **Modular Codebase**: Clean, optimized code using Flask and Python frameworks for better maintainability.

## Technologies Used

- **Languages**: Python, HTML, CSS, JavaScript
- **Frameworks**:
  - Flask (Backend)
  - venv (Virtual environment management)
  - Torch, Torch Vision (ML Framework)
- **Libraries**:
  - NLTK (Natural Language Toolkit) for NLP
  - Punkt, Punkt Tab (Tokenizers for NLP)
  - JSON (Content storage)
- **APIs**:
  - Speech Recognition (for VoiceBot)


## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/college-admission-bot.git
   cd college-admission-bot
   ```

2. **Set up a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # For Linux/Mac
   venv\Scripts\activate  # For Windows
   ```

3. **Install required dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Download NLTK Resources**:
   Inside the Python shell:
   ```python
   import nltk
   nltk.download('punkt')
   ```

## Running the Application

1. **Start Flask Server**:
   ```bash
   python app.py
   ```

2. **Access the Application**:
   Open your browser and go to `http://localhost:5000`.


## Usage

1. **ChatBot**: Users can enter their admission-related queries through a text input interface on the college website. The ChatBot will respond based on the query, using NLP techniques to understand user intent.
  
2. **VoiceBot**: Users can interact with the VoiceBot by speaking into their device. The bot will process their speech, identify the query, and respond accordingly using NLP and speech recognition algorithms.

## Customization

You can update the **`intents.json`** file to add or modify responses for different admission-related queries. The file follows this format:

```json
{
    "intents": [
        {
            "tag": "admission_requirements",
            "patterns": ["What are the admission requirements?", "How to apply?", "Eligibility for admission"],
            "responses": ["The admission requirements are..."]
        },
        ...
    ]
}
```

## Future Enhancements

- **Integrate Machine Learning models** to improve accuracy in query recognition.
- **Deploy on the cloud** to make the system scalable and accessible to a broader audience.
- **Add more features**, such as personalized responses based on user profiles.
