import { useState } from 'react'

function App() {
  // useState hook
  const [count, setCount] = useState(0)

  // Counter Functions
  const decreaseCount = () => {
    setCount(count - 1);
  }
  const resetCount = () => {
    setCount(0);
  }
  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <section className="container">
        <div className="counterWrapper">
          <h1 className="counterHead">Counter</h1>
          <p className="counter">{count}</p>
          <div className="btnContainer">
            <button type="button" onClick={decreaseCount} className="btn btn-primary"> - </button>
            <button type="button" onClick={resetCount} className="btn btn-primary"> Reset </button>
            <button type="button" onClick={increaseCount} className="btn btn-primary"> + </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
