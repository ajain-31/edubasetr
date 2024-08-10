import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EnglishChat.css';

const Chat = () => {
  const { language } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const conversation = {
    English: [
      { question: "Hi! How are you?", answer: "I'm good, thank you! How about you?" },
      { question: "What's your name?", answer: "I am your language assistant"},
      { question: "Hello", answer: "Hii I am an chatbot,How can I help You Today??" },
      { question: "hello", answer: "Hii I am an chatbot,How can I help You Today??" },
      { question: "hii", answer: "Hii I am an chatbot,How can I help You Today??" },
      { question: "how are you", answer: "I'm good, thank you! How about you?" },
      { question: "how is weather", answer: "It's a warm beautiful weather" },
      { question: "tell me a joke?", answer: "Why don't scientists trust atoms? Because they make up everything!" },
      { question: " Can you tell me a joke?", answer: "Why don't scientists trust atoms? Because they make up everything!" },
      { question: "What is passive voice", answer: "Passive voice is a grammatical construction where the object of an action becomes the subject of the sentence. In passive voice, the focus is on the action and the recipient of the action, rather than on who or what is performing the action" },
      { question: "what is passive voice", answer: "Passive voice is a grammatical construction where the object of an action becomes the subject of the sentence. In passive voice, the focus is on the action and the recipient of the action, rather than on who or what is performing the action" },
      {question:"give examples",answer:"For example, in the sentence 'The book was read by John,the focus is on the book, which is the recipient of the action. The structure typically involves a form of the verb to be followed by the past participle of the main verb. Passive voice can be useful when the performer of the action is unknown, unimportant, or when you want to emphasize the action itself."},
      {question:"what is active voice",answer:"a form or set of forms of a verb in which the subject is typically the person or thing performing the action and which can take a direct object (e.g. she loved him as opposed to the passive form he was loved )."},
      {question:"What is active voice",answer:"a form or set of forms of a verb in which the subject is typically the person or thing performing the action and which can take a direct object (e.g. she loved him as opposed to the passive form he was loved )."},
      {question:"give examples",answer:"In the active voice, the subject is performing an action: The dog chases the ball. Notice how the subject, dog, is performing the action, chase, on the target of the action, ball. This is a simple, direct example of the active voice."},
      {question:"What is present tense",answer:"a tense expressing an action that is currently going on or habitually performed, or a state that currently or generally exists."},
      {question:"give examples",answer:"You are standing on my foot is in the present tense. If you describe things you're currently doing, or that you usually do, or a current state, you'll use the present tense without even thinking about it."},
      {question:"What is past tense",answer:"a tense expressing an action that has happened or a state that previously existed.the story is told in the past tense"},
      {question:"what is past tense",answer:"a tense expressing an action that has happened or a state that previously existed.the story is told in the past tense"},
      {question:"give examples",answer:"There are four past tense forms: the past simple (e.g., “you cooked”), the past progressive (e.g., “he was singing”)"},
     {question:"what is future tense",answer:"a tense expressing an action that has not yet happened or a state that does not yet exist.the dialect does not have a past or future tense"},
     {question:"give examples",answer:"When you say, 'The party will be so fun!' 'will be' is in the future tense."}
    ],
    Hindi: [
      { question: "नमस्ते! आप कैसे हैं?", answer: "मैं अच्छा हूँ, धन्यवाद! आप कैसे हैं?" },
      { question: "आपका नाम क्या है?", answer: "मेरा नाम जॉन है। आपका क्या नाम है?" },
      { question: "आप कहाँ से हैं?", answer: "मैं अमेरिका से हूँ। आप कहाँ से हैं?" },
      
    ],
    German: [
      { question: "Hallo! Wie geht's dir?", answer: "Mir geht's gut, danke! Und dir?" },
      { question: "Wie heißt du?", answer: "Ich heiße John. Und du?" },
      { question: "Woher kommst du?", answer: "Ich komme aus den USA. Woher kommst du?" },
      
    ],
  };

  const getResponse = (input) => {
    const convo = conversation[language] || [];
    const found = convo.find(c => c.question.toLowerCase() === input.toLowerCase());
    return found ? found.answer : `I don't understand "${input}". Can you ask something else?`;
  };

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessages = [
        ...messages,
        { text: input, user: 'You' },
        { text: getResponse(input), user: 'Tutor' }
      ];
      setMessages(newMessages);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      <h1>Learn {language} through Chat </h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.user === 'You' ? 'user-message' : 'tutor-message'}`}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button onClick={handleSend} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Chat;

