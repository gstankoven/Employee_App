import React, {useState} from 'react'
import './Popup.css'
import {addEmployee, getData} from '../api/api.js'

function AddEmployeePopup(props) {

    //states for adding a new employee to the database
    //state for id input
    const [id, setId] = useState('')
    //state for first name input
    const [first, setFirst] = useState('')
    //state for last name input
    const [last, setLast] = useState('')
    //state for job input
    const [job, setJob] = useState('')
    //state for city input
    const [city, setCity] = useState('')
    //state for getting and showing error messages
    const [errorMessage, setErrorMessage] = useState('')

    return (
        <div className='popupContainer'>
            <div className='popupBox'>
                <button className='popupClose' onClick={() => {props.setPage('main')}}>X</button>

                <h2 className='popupTitle'>Add Employee</h2>
                
                {/* Input for employee id */}
                <div className='addInput'>
                    <span>Employee ID:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='ID' onChange={(event) => {setId(event.target.value); setErrorMessage('')}}></input>
                </div>
                <br/>

                {/* Input for first name */}
                <div className='addInput'>
                    <span>First Name:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='first name' onChange={(event) => {setFirst(event.target.value); setErrorMessage('')}}></input>
                </div>
                <br/>

                {/* Input for last name */}
                <div className='addInput'>
                    <span>Last Name:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='last name' onChange={(event) => {setLast(event.target.value); setErrorMessage('')}}></input>
                </div>
                <br/>

                {/* Input for job title */}
                <div className='addInput'>
                    <span>Job Title:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='job' onChange={(event) => {setJob(event.target.value); setErrorMessage('')}}></input>
                </div>
                <br/>

                {/* Input for city */}
                <div className='addInput'>
                    <span>City:</span>
                    <br/>
                    <input style={{fontSize: '16px'}} placeholder='city' onChange={(event) => {setCity(event.target.value); setErrorMessage('')}}></input>
                </div>
                <br/>

                <p style={{color: 'red'}}>{errorMessage}</p>

                <button className='popupButton' onClick={ () => {

                    if(id === '' || first === '' || last === '' || job === '' || city === ''){
                        setErrorMessage('Please fill out all of the inputs.')
                    }else{
                        addEmployee(id,first,last,job,city).then(res => {console.log(res); getData(props.setData)})
                        .then(res => props.setPage('main'))
                        .catch(res => setErrorMessage('The employee ID is already being used.'))
                    }
                       
                }}>Add</button>
            </div>
        </div>
    );
}

export default AddEmployeePopup;