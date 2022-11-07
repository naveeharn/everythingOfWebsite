import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FuncExternalComponent from './component/external_function'
import ClassExternalComponent from './component/external_class'

const virtual_component = (
  <h1>Virtual Document Object Model</h1>
)

function FuncComponent(input) {
  return <h1>
    Function Component {input}
  </h1>
}

class ClassComponent extends React.Component{
  render(){
    return <h1>
      Class Component
    </h1>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(virtual_component, document.getElementById('virtual-component'))
// ReactDOM.render(FuncComponent(2021), document.getElementById('function-component'))
// ReactDOM.render(<ClassComponent />, document.getElementById('class-component'))
// ReactDOM.render(FuncExternalComponent(2077), document.getElementById('external-function-component'))
// ReactDOM.render(<ClassExternalComponent/>, document.getElementById('external-class-component'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
