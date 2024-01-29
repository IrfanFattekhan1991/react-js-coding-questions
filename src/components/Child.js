import { useState } from "react";

const Child = ({ onData }) => {
  const [text, setText] = useState("");

  const sendDataHandler = () => {
    onData(text);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendDataHandler}>Send Data to Parent</button>
    </div>
  );
};

export default Child;
