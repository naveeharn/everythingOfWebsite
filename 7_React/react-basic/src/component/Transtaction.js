import Item from './Item'
import './Transaction.css'
import React from 'react';


import { v4 as uuidv4 } from 'uuid'

const List = () => {
    // const data = [
    //     {id:0,name:'taxi',cost:'-200',},
    //     {id:1,name:'airplane',cost:'-1750',},
    //     {id:2,name:'Meal',cost:'-150',},
    //     {id:3,name:'Ferri',cost:'-950',},
    // ]

    const data = [
        { name: 'taxi', cost: '-200', },
        { name: 'airplane', cost: '-1750', },
        { name: 'Meal', cost: '-150', },
        { name: 'Ferri', cost: '-950', },
    ]

    return (
        <ul className='item-list'>
            {/* {
                data.forEach(element => {
                    <Item name={element.name} cost={element.cost}/>
                })
            } */}

            {/* {
                data.map((element)=>{
                    // return <Item name={element.name} cost={element.cost}/>
                    // console.log(element)
                    return <Item key={element.id} {...element}/>
                })
            } */}
            {
                data.map((element) => {
                    return <Item key={uuidv4()} {...element} />
                })
            }

            {/* <Item name='taxi' cost='-200'/>
            <Item name='airplane' cost='-1750'/>
            <Item name='Meal' cost='-150'/> */}

            {/* <Item /> */}
            {/* <li>Transport <span>-200</span></li>
            <li>Tip <span>+100</span></li>
            <li>Meal <span>-150</span></li> */}
        </ul>
    )
}

export default List