import React, {useState, useEffect} from 'react'
import './App.css';
import {getData} from './components/api.js'
import Table from './components/Table.jsx'
import AddEmployeePopup from './components/AddEmployeePopup.jsx'
import EditEmployeePopup from './components/EditEmployeePopup.jsx'

function App() {

  const [page, setPage] = useState('main')
  const [data, setData] = useState([])
  const [editInfo, setEditInfo] = useState()

  useEffect(() => {
    getData(setData)
  }, [])


  if(page === 'main'){
    return (
      <div className='app'>
        
        <h1>Employees</h1>

        <button className='addEmployee' onClick={() => {setPage('add')}}>Add Employee</button>

        <Table data={data} setData={setData} setPage={setPage} setEditInfo={setEditInfo}/>

      </div>
    );
  }
  else if(page === 'add'){
    return (
      <div className='app'>
  
        <AddEmployeePopup setPage={setPage} setData={setData}/>
  
      </div>
    );
  }
  else if(page === 'edit'){
    return (
      <div className='app'>
  
        <EditEmployeePopup setPage={setPage} editInfo={editInfo} setData={setData}/>
  
      </div>
    );
  }

}

export default App;
