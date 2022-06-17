import React, {useState, useEffect} from 'react'
import './App.css';
import {getData} from './api/api.js'
import Table from './components/Table.jsx'
import AddEmployeePopup from './components/AddEmployeePopup.jsx'
import EditEmployeePopup from './components/EditEmployeePopup.jsx'
import Search from './components/Search.jsx'

function App() {

  //state for active page
  const [page, setPage] = useState('main')
  //state for employee data
  const [data, setData] = useState([])
  //state for editing info
  const [editInfo, setEditInfo] = useState()

  //gets the employee data on page load
  useEffect(() => {
    getData(setData)
  }, [])

  //returns main page of employees
  if(page === 'main'){
    return (
      <div className='app'>
        
        <h1>Employees</h1>

        <button className='addEmployee' onClick={() => {setPage('add')}}>Add Employee</button>

        <Search setData={setData}/>

        <div style={{width: '100%', overflow: 'auto', maxHeight: '200vh'}}>
          <Table data={data} setData={setData} setPage={setPage} setEditInfo={setEditInfo}/>
        </div>

      </div>
    );
  }
  //returns the popup for adding an employee
  else if(page === 'add'){
    return (
      <div className='app'>
  
        <AddEmployeePopup setPage={setPage} setData={setData}/>
  
      </div>
    );
  }
  //returns the popup for editing an employee
  else if(page === 'edit'){
    return (
      <div className='app'>
  
        <EditEmployeePopup setPage={setPage} editInfo={editInfo} setData={setData}/>
  
      </div>
    );
  }

}

export default App;
