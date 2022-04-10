import React, {useState,useRef} from 'react'

const UseRef = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');

  const changeText = () => {
    setInput(inputRef.current.value);
  }
  return (
    <section>
      <h2>UseRef</h2>
      <p>Text: {input}</p>
      <input type="text" ref={inputRef} placeholder="Your text" />
      <button onClick={changeText}>Change Text</button>
    </section>
  )
}

export default UseRef;
