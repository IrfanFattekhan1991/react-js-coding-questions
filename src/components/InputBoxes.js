import { useState } from "react";

const InputBoxes = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const [arrayList, setArrayList] = useState([]);

  const clickHandler = () => {
    setArrayList((prevState) => [
      ...prevState,
      { input1: input1, input2: input2 },
    ]);
    setInput1("");
    setInput2("");
  };

  return (
    <>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button onClick={clickHandler}>Print Data</button>

      <ul>
        {arrayList.map((item, index) => (
          <>
            <li key={item.input1}>{item.input1}</li>
            <li key={item.input2}>{item.input2}</li>
          </>
        ))}
      </ul>
    </>
  );
};

export default InputBoxes;
