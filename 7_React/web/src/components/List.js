import Item from "./Item"
import './List.css'
import DataContext from "../data/DataContext"
import { useContext } from "react"

const List = (props) => {
    // const data = [
    //     { name: 'taxi', cost: '-200', },
    //     { name: 'airplane', cost: '-1750', },
    //     { name: 'Meal', cost: '-150', },
    //     { name: 'Ferri', cost: '-950', },
    // ]
    const data = props.data
    // const messageContext = useContext(DataContext)
    // const {income, expense} = useContext(DataContext)
    return (
        <div>
            <ul className="item-list">
                {
                    data.map(element => {
                        return <Item key={element.id} {...element} />
                    })
                }
            </ul>
            {/* <p>{income} : {expense}</p> */}
            {/* <p>{messageContext}</p> */}
            {/* <DataContext.Consumer >
                {value=><p>{value}</p>}
            </DataContext.Consumer> */}
        </div>

    )
}

export default List