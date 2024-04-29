import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:3000/chat/", {
        message,
      });
      setResponse(res.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form action="/chat" method="post">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
        <p>{response}</p>
      </form>
    </div>
  );
};

export default Chat;
