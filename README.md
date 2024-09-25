# (Chat+Voice)-Bot

## Overview

This project is designed to assist students and families with college admission queries through a **ChatBot** and **VoiceBot** system. The bots provide instant, personalized responses, addressing common questions related to admissions and basic College Information. Built using Python and various web technologies, the system uses **Natural Language Processing (NLP)** and **Machine Learning (ML)** to improve interaction and accuracy.

## Features

- **ChatBot**: Provides real-time assistance through a text-based interface.
- **VoiceBot**: Uses speech recognition for voice-based queries, improving user convenience.
- **NLP Integration**: Identifies user intent and provides relevant, precise answers.
- **Speech Recognition**: Optimizes the VoiceBot’s accuracy and user experience.

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
   git clone https://github.com/vickspanda/ChatBot-VoiceBot.git
   cd ChatBot-VoiceBot
   ```

2. **Set up a virtual environment**:
   ```bash
   python3 -m venv venv
   . venv/bin/activate
   ```

3. **Install required dependencies**:
   ```bash
   (venv) pip install Flask torch torchvision nltk
   ```

4. **Download NLTK Resources**:
   Inside the Python shell:
   ```bash
   $ (venv) python
   >>> import nltk
   >>> nltk.download('punkt')
   >>> nltk.download('punkt_tab')
   ```

## Running the Application

1. **Train the Bot**:
   ```bash
   $ (venv) python train.py
   ```
2. **Start the Server**:
   ```bash
   $ (venv) python app.py
   ```

3. **Access the Application**:
   Open your browser and go to

   ```
   http://localhost:5000
   ```


## Usage

1. **Chat-Bot**: Users can enter their admission-related or basic college related queries through a text input interface on the college website. The ChatBot will respond based on the query, using NLP techniques to understand user intent.
  
2. **Voice-Bot**: Users can interact with the Voice-Bot by speaking after clicking on the Mic Icon given on the ChatBot-VoiceBot Interface. The bot will process their speech, then user have to send the query, and then response will be generated.

## Customization

You can update the **`intents.json`** file to add or modify responses for different admission-related queries. The file follows this format:

```json
{
  "intents": [
    {
      "tag": "greeting",
      "patterns": [ "hii", "hi", "Hii", "Hi", "Hey", "How are you",  "Is anyone there?", "Hello"
      ],
      "responses": [
        "Hey",
        "Hello, thanks for visiting, will help you with my fullest",
        "Hi there, what can I do for you?",
        "Hi there, how can I help?"
      ]
    }
  ]
}
```

