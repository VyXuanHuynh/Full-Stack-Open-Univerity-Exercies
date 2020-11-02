import React from 'react';
import ReactDOM from 'react-dom';
const Header=(props)=>{
  console.log(props)
  return(
      <h1>{props.course}</h1>
  )
}
const Content =(props)=>{
  const items =props.parts.map(function(part) {
    return (
      <div>
        <p>
          {part.name} {part.exercises}
        </p>
      </div>
    )
  }
  )
  return items
}

const Total = (props) => {
  var total =0
  const items = props.parts.map(function(part){
    total = total + part.exercises
  })
  return (
    <div>
      <p>Number of exercises: {total} </p>
    </div>
  )
}

const App=()=>{
  const course = {

    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
}
  return (
      <div>
         <Header course={course} />
         <Content parts={parts} />
         <Total parts={parts} />
      </div>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
