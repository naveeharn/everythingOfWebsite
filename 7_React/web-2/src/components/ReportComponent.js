import { useContext } from "react"
import DataContext from "../data/DataContext"
import './ReportComponent.css'

const ReportComponent = ()=>{
    // const messageContext = useContext(DataContext)
    const {income, expense} = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
    }
    return (
        <div>
            <h4>balance</h4>
            <h1>{formatNumber((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>total income</h4>
                    <p className="report total-income">{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>total expense</h4>
                    <p className="report total-expense">{(formatNumber(expense))}</p>
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