import './Item.css'
// import DataContext from '../data/DataContext'
// import { useContext } from 'react'

const Item = (props) => {
    const {name, cost} = props
    const status = cost >= 0 ? 'income':'expense'
    const _cost = cost >= 0 ? '+'+cost.toFixed(2):cost.toFixed(2)
    // const messageContext = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
    }
    return (
        <li className={'item-'+status}>
            <span>{name}</span> <span className={status}>{formatNumber(_cost)}</span>
            {/* <p>{messageContext}</p> */}
            {/* <DataContext.Consumer>
                {value=><p>{value}</p>}
            </DataContext.Consumer> */}
        </li>
        
    )
}

export default Item