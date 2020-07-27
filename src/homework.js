
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}
const Total = (props) => {
  console.log(props);
  return(
    <div>
      <p>Number of exercises {props.totalNumber}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name : "Half Stack application development",
    parts : [{
      name : 'part1',
      exercises : 10
    },{
      name : 'part2',
      exercises : 20
    },{
      name : 'part3',
      exercises : 30
    }]
  }
  return(
    <div>
      <Header course={course.name} />
      <Content part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Content part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Content part={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total totalNumber={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)