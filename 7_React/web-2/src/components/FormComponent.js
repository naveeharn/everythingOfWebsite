import './FormComponent.css'
import { useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import { useEffect } from 'react';


const FormComponent = (props) => {
    const [name, setName] = useState('')
    const [cost, setCost] = useState(0)
    const [formVaild, setFormValid] = useState(false)

    useEffect(()=>{
        console.log('useEffect in FormComponent');
        if (name.trim().length > 0 && cost.toString().trim().length > 0 && cost !== 0 ) {
            setFormValid(true)
        }
    },[name,cost])

    const inputName = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const inputCost = (event) => {
        console.log(event.target.value)
        setCost(event.target.value)
    }
    const saveItem = (event) => {
        event.preventDefault()
        const item = {
            id: uuid4(),
            name: name,
            cost: Number(cost)
        }
        props.onAddItem(item)
        setName('')
        setCost(0)
        setFormValid(false)
        
    }
    return (
        <div align='center' className='form-container'>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>name</label>
                    <input type='text' placeholder='name' onChange={inputName} value={name}></input>
                </div>
                <div className="form-control">
                    <label>cost</label>
                    <input type='number' placeholder='cost' onChange={inputCost} value={cost}></input>
                </div>
                <div>
                    <button className='btn' type='submit' disabled={!formVaild}>add data</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent