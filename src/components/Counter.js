import React, { useState } from 'react'

const Counter = ({id}) => {

    const [counter, setCounter] = useState(1);

    const increment = ()=> {
      setCounter(counter +1)
    }
    const decrement = ()=> {
      setCounter(counter -1)
    }

  return (
    <div key={id} className="cart-div__counter-div">
    <button onClick={decrement()} className="cart-div__counter-btn" type="button">
      <img
        className="counter-btn__img"
        src="https://www.svgrepo.com/show/532960/minus.svg"
        alt="minus"
      ></img>
    </button>
    <span className="counter-div__number">{counter}</span>
    <button onClick={increment()} className="cart-div__counter-btn" type="button">
      <img
        className="counter-btn__img"
        src="https://www.svgrepo.com/show/532994/plus.svg"
        alt="plus"
      ></img>
    </button>
  </div>
  )
}

export default Counter