// import './Item.css'
// import PropTypes from 'prop-types'
import React from 'react'

// const Item = () => {
//     const name = 'Taxi'
//     const cost = -200
//     return (
//         <li>{name} <span>{cost}</span></li>
//     )
// }


const Item = (props) => {
    const {name, cost} = props
    return (
        <li>{name} <span>{cost}</span></li>
    )
}

// Item.propType = {
//     name: PropType.st,
//     cost,
// }

// const Item = ({name, cost}) => {
//     return (
//         <li>{name} <span>{cost}</span></li>
//     )
// }

export default Item