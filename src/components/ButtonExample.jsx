import React from 'react'

const ButtonExample = () => {
    const handleClick=(e)=>{
        if(e.target.textContent==="On Sale"){
            e.target.textContent="Sold";
            e.target.disabled=true;
        }
        else e.target.textContent="On Sale";
    }
  return (
    <div>
      <button className="addMovie" onClick={handleClick}>On Sale</button>
    </div>
  )
}

export default ButtonExample
