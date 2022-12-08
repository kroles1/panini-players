import { useEffect, useState } from "react";
import './style.css'
 
export default function Chat({ socket }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleText = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };
 
  const handleSubmit = () => {
    if (!message) {
      return;
    }
    socket.emit("data", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("data", (data) => {
      setMessages([...messages, data.data]);
    });
    return () => {
      socket.off("data", () => {
        console.log("data event was removed");
      });
    };
  }, [socket, messages]);
 
  return (
    <div  className="chatBox">
      <h2 className="globalChat">Global Chat</h2>
      <input className="inputChat" type="text" value={message} onChange={handleText} />
      <button className="submitChat" onClick={handleSubmit}>Submit</button>
      <ul>
        {messages.map((message, ind, data) => {
          return <li className="messeges" key={ind}>{message}</li>;
        })}
      </ul>
    </div>
  );
}
