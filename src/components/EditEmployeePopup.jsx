import React, {useState} from 'react'
import './Popup.css'
import {updateEmployee, getData} from '../api/api.js'

function EditEmployeePopup(props) {

    //state for first name input
    const [first, setFirst] = useState(props.editInfo[1])
    //state for last name input
    const [last, setLast] = useState(props.editInfo[2])
    //state for job input
    const [job, setJob] = useState(props.editInfo[3])
    //state for city input
    const [city, setCity] = useState(props.editInfo[4])
    //state for getting and showing error messages
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <div className='popupContainer'>
            <div className='popupBox'>
                <button className='popupClose' onClick={() => {props.setPage('main')}}>X</button>

                <h2 className='popupTitle'>Edit Employee</h2>
                
                {/* Input for employee id */}
                <div className='addInput'>
                    <span>Employee ID: </span>
                    {props.editInfo[0]}
                </div>
                <br/>

                {/* Input for first name */}
                <div className='addInput'>
                    <span>First Name:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} value={first} onChange={(event) => {setFirst(event.target.value); setErrorMessage('')}} autoComplete='new-password'></input>
                </div>
                <br/>

                {/* Input for last name */}
                <div className='addInput'>
                    <span>Last Name:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} value={last} onChange={(event) => {setLast(event.target.value); setErrorMessage('')}} autoComplete='new-password'></input>
                </div>
                <br/>

                {/* Input for job title */}
                <div className='addInput'>
                    <span>Job Title:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} value={job} onChange={(event) => {setJob(event.target.value); setErrorMessage('')}}></input>
                </div>
                <br/>

                {/* Input for city */}
                <div className='addInput'>
                    <span>City:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} value={city} onChange={(event) => {setCity(event.target.value); setErrorMessage('')}} autoComplete='new-password'></input>
                </div>
                <br/>

                <p style={{color: 'red'}}>{errorMessage}</p>

                <button className='popupButton' onClick={() => {

                    if(first === '' || last === '' || job === '' || city === ''){
                        setErrorMessage('Please fill out all of the inputs.')
                    }else{
                        updateEmployee(first,last,job,city,props.editInfo[0])
                        .then(res => getData(props.setData))
                        .then(res => props.setPage('main'))
                    }
                }}>Edit</button>
            </div>
        </div>
    );
}

export default EditEmployeePopup;