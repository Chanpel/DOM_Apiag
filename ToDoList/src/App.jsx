import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/style.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  const onClickHandler = () => (
    setCount(count + 1)
  )
  return (
  <div className='button'>
    <Button text={count} onclick={onClickHandler}/>
    <Button text={count} onclick={onClickHandler}/>
  </div>
  );
}

// function Button({color, text}) {
//   return <button style={{ background: color}}>{text}</button>
// }

export default App
