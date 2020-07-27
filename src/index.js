// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Time = () => {
//   const now = new Date()
//   return (
//     <div>
//       <p>北京时间 : {now.toLocaleString()}</p>
//     </div>
//   )
// }
// const Hello = (props) => {
//   // const name = props.name
//   // const age = props.age
//   // 结构赋值
//   const { name, age } = props
//   const bornYear = () => new Date().getFullYear() - age
//   return (
//     <div>
//       <p>Hello {name} , you are {age} years old</p>
//       <p>So , you were probably born in {bornYear()} .</p>
//     </div>
//   )
// }
// const Counter = (props) => {
//   const {counter} = props
//   const [ counter, setCounter] = useState(0)
//   setTimeout(() => setCounter(counter + 1), 1000)

//   console.log('rendering...', counter)

//   return (
//     <div>
//       <h3>计数器</h3>
//       <p>
//         {counter}
//       </p>
//     </div>
//   )
// }

// const Display = ({ counter }) => <div>{counter}</div>
// const Button = ({handleClick,text}) => (<button onClick={handleClick}>{text}</button>)

// const App = () => {
//   const age = 14
//   const name = 'Siged'
//   const [ counter, setCounter ] = useState(9)
// // 这个地方不理解 为啥刷新会自动执行
//   // setTimeout(() => setCounter(counter + 1),1000)
//   console.log('重新渲染组件-rendering...', counter)

//   const increaseByOne = () => setCounter(counter + 1)
//   const setToZero = () => setCounter(0)
//   const decreaseByOne = () => setCounter(counter - 1)
//   return (
//     <div>
//       {/* <h1>Hello world .</h1>
//       <h2>Hello world .</h2>
//       <h3>Hello world .</h3>
//       <Time />
//       <Time />
//       <Hello name={name} age={11 + 22} />
//       <Hello name="Lux" age={age} /> */}
//       <h2>计数器</h2>
//       <Display counter={counter} />
//       <Button handleClick={increaseByOne} text="+ 1" />
//       <Button handleClick={setToZero} text="= 0" />
//       <Button handleClick={decreaseByOne} text="- 1" />
//     </div>
// )}

// const App = (props) => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const [allClicks, setAll] = useState([])
//   const handleLeftClick = () => {
//     setAll(allClicks.concat['L'])
//     setClicks({
//       ...clicks,
//       left: clicks.left + 1
//     })
//   }
//   const handleRightClick = () => {
//     setAll(allClicks.concat(['R']))
//     setClicks({
//       ...clicks,
//       right: clicks.right + 1 
//     })
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//       <p>allClicks: {allClicks.join(' ')}</p>
//     </div>
//   )
// }

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ onClick, text }) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )

// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   const handleZeroClick = () => {
//     console.log("left:",left);
//     console.log("right:",right);
//     console.log("allclicks:",allClicks);
//     debugger
//     setAll([])
//     setLeft(1)
//     setRight(100)
//   }

//   return (
//     <div>
//       <div>
//         {left}
//         <Button onClick={handleLeftClick} text='left' />
//         <Button onClick={handleZeroClick} text='=0' />
//         <Button onClick={handleRightClick} text='right' />
//         {right}
//         <History allClicks={allClicks} />
//       </div>
//     </div>
//   )
// }
// const App = (props) => {
//   const [value, setValue] = useState(10)
  
//   // 返回函数调用的调用
//   const setToValue = (newValue) => () => {
//     setValue(newValue)
//   }
  
//   return (
//     <div>
//       {value}
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }
const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  console.log('all value is ', all);
  if(all === 0){
    return (
      <div>
        the page is not click 
      </div>
    )
  }
  return (
    <div>
      <p>good : {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad : {bad}</p>
      <p>all : {all}</p>
      <p>average : {good - bad}</p>
      <p>positive : { good / all }</p>
    </div>
  )
}

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title text="Give Feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Title text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}


// const refresh = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
// }

// let counter = 9
// setInterval(() => {
//   refresh()
//   counter ++
// },1000)
// refresh()

