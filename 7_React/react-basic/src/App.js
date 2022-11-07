import logo from './logo.svg';
import './App.css';
import React from 'react';


import List from './component/Transtaction'



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const design_css = {
  color:'lightskyblue',
  textAlign:'right',
  fontSize:'1.5rem',
}
function App() {
  return (
    <div className='container'>
      <h1 style={{color:'salmon', textAlign:'center', fontSize:'1.75rem'}}>Welcome to Website</h1>
      <h1 style={design_css}>Welcome to Website (Inline Style)</h1>
      <Title />
      <Description />
      <List />
    </div>
  )
}

const Title = () => <h1>Revenue Accounts</h1>

const Description = () => { 
  return (
    <p>detail of data</p>
  )
}



export default App;
