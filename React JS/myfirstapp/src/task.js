import React, { useState } from 'react';
function Task() 
{
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); 
  const colors = ["purple","violet","skyblue","blue","yellow","deeppink"];
  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };
  let sty = {
    backgroundColor: backgroundColor,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.5s',
    border: '5px solid black',
  }
  return (
    <div style={sty} >
     <button onClick={changeBackgroundColor}>Click and see magic</button>
    </div>
  );
}
export default Task;