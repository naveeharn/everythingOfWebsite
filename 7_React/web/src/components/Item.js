import './Item.css'
// import DataContext from '../data/DataContext'
// import { useContext } from 'react'

const Item = (props) => {
    const {name, cost} = props
    const status = cost >= 0 ? 'income':'expense'
    const _cost = cost >= 0 ? '+'+cost:cost
    // const messageContext = useContext(DataContext)
    
    return (
        <li className={'item-'+status}>
            <span>{name}</span> <span className={status}>{_cost}</span>
            {/* <p>{messageContext}</p> */}
            {/* <DataContext.Consumer>
                {value=><p>{value}</p>}
            </DataContext.Consumer> */}
        </li>
        
    )
}

export default Item