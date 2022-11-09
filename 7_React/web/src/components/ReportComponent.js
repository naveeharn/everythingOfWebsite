import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'

const ReportComponent = ()=>{
    // const messageContext = useContext(DataContext)
    const {income, expense} = useContext(DataContext)
    return (
        <div>
            <h4>balance</h4>
            <h1>{income-expense}</h1>
            <div className="report-container">
                <div>
                    <h4>total income</h4>
                    <p className="report total-income">{income}</p>
                </div>
                <div>
                    <h4>total expense</h4>
                    <p className="report total-expense">{expense}</p>
                </div>
            </div>
            
            {/* <p>income : {income}</p>
            <p>expense: {expense}</p> */}
            {/* <DataContext.Consumer> */}
                {/* {context => 
                <div>
                    <p>income : {context.income}</p>
                    <p>expense: {context.expense}</p>
                </div>
                } */}

                {/* {context => <p>{context.expense}</p>} */}
            {/* </DataContext.Consumer> */}
            {/* <p>{messageContext}</p> */}
        </div>
    )
}

export default ReportComponent