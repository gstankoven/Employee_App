import React, {useState} from 'react'
import './Popup.css'
import {addEmployee, getData} from './api.js'

function AddEmployeePopup(props) {

    const [id, setId] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [job, setJob] = useState('')
    const [city, setCity] = useState('')

    return (
        <div className='popupContainer'>
            <div className='popupBox'>
                <button className='popupClose' onClick={() => {props.setPage('main')}}>X</button>

                <h2 className='popupTitle'>Add Employee</h2>
                
                {/* Input for employee id */}
                <div className='addInput'>
                    <span>Employee ID:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='53426' onChange={(event) => {setId(event.target.value)}}></input>
                </div>
                <br/>

                {/* Input for first name */}
                <div className='addInput'>
                    <span>First Name:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='John' onChange={(event) => {setFirst(event.target.value)}}></input>
                </div>
                <br/>

                {/* Input for last name */}
                <div className='addInput'>
                    <span>Last Name:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='Smith' onChange={(event) => {setLast(event.target.value)}}></input>
                </div>
                <br/>

                {/* Input for job title */}
                <div className='addInput'>
                    <span>Job Title:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='Carpenter' onChange={(event) => {setJob(event.target.value)}}></input>
                </div>
                <br/>

                {/* Input for city */}
                <div className='addInput'>
                    <span>City:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='Victoria' onChange={(event) => {setCity(event.target.value)}}></input>
                </div>
                <br/>

                <button className='popupButton' onClick={ () => {
                    addEmployee(id,first,last,job,city).then(res => getData(props.setData)).then(res => props.setPage('main'))
                       
                }}>Add</button>
            </div>
        </div>
    );
}

export default AddEmployeePopup;