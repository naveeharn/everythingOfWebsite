import logo from './logo.svg';
import './App.css';
import Func from './components/function_comp'
import List from './components/List'
import FormComponent from './components/FormComponent'
import { useEffect, useReducer, useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';

function App() {
  const initState = [
    {id:uuid4(), name: 'taxi', cost: -200, },
    {id:uuid4(), name: 'airplane', cost: -1750, },
    // {id:uuid4(), name: 'Meal', cost: -150, },
    // {id:uuid4(), name: 'Ferri', cost: -950, },
  ]
  let list = [
    { id: uuid4(), name: 'taxi', cost: -200, },
    // {id:uuid4(), name: 'airplane', cost: -1750, },
    // {id:uuid4(), name: 'Meal', cost: -150, },
    // {id:uuid4(), name: 'Ferri', cost: -950, },
  ];
  const [data, setData] = useState(initState)
  const onAddNewItem = (newItem) => {
    // list.push(newItem)
    // setData(list)
    setData((previous) => {
      return [newItem, ...previous]
    })
    // console.log(data);
  }
  const income = () => {
    let sum = 0
    data.forEach(element => {
      if (element.cost > 0) {
        sum += element.cost
      }
    });
    return sum
  }
  const expense = () => {
    let sum = 0
    data.forEach(element => {
      if (element.cost < 0) {
        sum += element.cost
      }
    });
    return sum
  }

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  useEffect(() => {
    const cost = data.map(data => data.cost)
    // console.log(cost);
    const incomeCost = cost.filter(element => element > 0).reduce((prev, curr) => prev + curr, 0)
    const expenseCost = cost.filter(element => element < 0).reduce((sum, element) => sum + element, 0) * (-1)
    // console.log(incomeCost, expenseCost);
    setReportIncome(incomeCost)
    setReportExpense(expenseCost)

  }, [data, setReportIncome, setReportExpense])

  // reducer state
  // const [showReport, setShowReport] = useState(0)
  const [showReport, setShowReport] = useState(false)
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state + action.payload
      case 'SUB':
        return state - action.payload
      case 'CLR':
        return 0
      case 'SHOW':
        return setShowReport(true)
      case 'HIDE':
        return setShowReport(false)
      default:
        break;
    }
  }
  const [result, dispatch] = useReducer(reducer, showReport)

  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense,
      }
    }>
      <div className="container">
        <Func />
        <ReportComponent/>
        {/* {showReport && <ReportComponent/>} */}
        <FormComponent onAddItem={onAddNewItem} />
        <List data={data} />

        {/* <div align='center'>
          <p>Hello {result}</p> */}
          {/* <button onClick={() => dispatch({ type: 'SUB', payload: 2 })}>minus</button>
          <button onClick={() => dispatch({ type: 'CLR' })}>clear</button>
          <button onClick={() => dispatch({ type: 'ADD', payload: 2 })}>plus</button> */}
          {/* <button onClick={() => dispatch({ type: 'SHOW'})}>show</button>
          <button onClick={() => dispatch({ type: 'HIDE'})}>hidden</button>
        </div> */}
        
      </div>
    </DataContext.Provider>


  );
}

export default App;
