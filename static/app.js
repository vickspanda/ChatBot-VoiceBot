class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
            mic_icon: document.querySelector('.mic_icon'),
            placeholder_text: document.querySelector('.placeholder_text')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton, mic_icon, placeholder_text} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        mic_icon.addEventListener('click', () => this.toggleText(placeholder_text))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    toggleText(placeholder_text) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            placeholder_text.placeholder = "Write a message...."
        } else {
            placeholder_text.placeholder = "Listening...."
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json())
          .then(r => {
            let msg2 = { name: "Sam", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            this.updateVoice(chatbox)
            textField.value = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            /*this.updateVoice(chatbox)*/
            textField.value = ''
          });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index){
            if (item.name === "Sam")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
    updateVoice(chatbox) {
     var html = '';
      this.messages.slice().reverse().every(function(item, index){
          if (item.name === "Sam")
          {
              var tts;
              tts = item.message;
              textToSpeech(tts);
              console.log(this.messages[0]);
          }
        });

      const chatmessage = chatbox.querySelector('.chatbox__messages');
      chatmessage.innerHTML = html;
  }
  

}

const chatbox = new Chatbox();
chatbox.display();

function voice(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang="en-GB";
    recognition.onresult= function(event){
        console.log(event);
        document.getElementById("speechToText").value = event.results[0][0].transcript;
    }
    recognition.start();
}

function textToSpeech(msg){
  /*let msg = document.querySelector(".messages__item messages__item--visitor").textContent;*/
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}















/*
// for voicebot

const synth = window.speechSynthesis;

const textForm = document.querySelector('.chatbox')
const textInput = document.querySelector('.text-input');
const body = document.querySelector('body');

//Browser identifier
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Init voices array
let voices = [];

const getVoices = () => {
  voices = synth?.getVoices();
  voices.shift()

  // Loop through voices and create an option for each one
  voices.forEach(voice => {
    // Create option element
    const option = document.createElement('option');
    // Fill option with voice and language
    option.textContent = voice?.name + '(' + voice.lang + ')';

    // Set needed option attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect?.appendChild(option);
  });
};


//Line 35, 36 causes voice list duplication
getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

//Fix for duplication, run code depending on the browser
if (isFirefox) {
    getVoices();
}
if (isChrome) {
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = getVoices;
    }
}



// Speak
const speak = () => {
  // Check if speaking
  if (synth.speaking) {
    console.error('Already speaking...');
    return;
  }
  if (textInput.value !== '') {
    

    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    // Speak end
    speakText.onend = e => {
      console.log('Done speaking...');
      body.style.background = '#141414';
    };

    // Speak error
    speakText.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    const selectedVoice = voiceSelect?.selectedOptions[0]?.getAttribute(
      'data-name'
    );

    // Loop through voices
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

   
  }
};

// EVENT LISTENERS

// Text form submit
textForm.addEventListener('submit', e => {
  e.preventDefault();
  speak();
  textInput.blur();
});


// Voice select change
voiceSelect.addEventListener('change', e => speak());
*/
