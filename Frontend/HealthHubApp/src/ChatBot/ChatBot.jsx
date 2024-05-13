import { useState } from 'react';
import '../css/chatbot.css'; // Import CSS file for styling

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openChatbot = () => {
    setIsOpen(true);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="chatbot-button" onClick={openChatbot}>
      </button>
      {isOpen && (
          <div className="modal"><button className="close-button" onClick={closeChatbot}>Close</button>
            <iframe
              className="chatbot-frame"
              src="https://landbot.online/v3/H-2219083-MPYQD4F6FHIEKKE7/index.html"
              title="Chatbot"
            ></iframe>
          </div>
      )}
    </div>
  );
};

export default Chatbot;
