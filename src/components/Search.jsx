import React, {useState} from 'react'
import {getSearch} from '../api/api.js'
import './Search.css'


function Search(props) {

    //state for radio button
    const [category, setCategory] = useState('id')
    //state for search value
    const [search, setSearch] = useState('')

    return (
        <div>
            <span>Search:</span>

            <div style={{margin: '10px 0 5px 0'}} onChange={(event) => {setCategory(event.target.value)}}>
                <input className='radioSearch' type='radio' value={'id'} name='category' defaultChecked/> ID 
                <input className='radioSearch' type='radio' value={'first'} name='category'/> <span>First Name</span>
                <input className='radioSearch' type='radio' value={'last'} name='category'/> <span>Last Name</span> 
                <br/>
                <input className='radioSearch' type='radio' value={'job'} name='category'/> <span>Job</span> 
                <input className='radioSearch' type='radio' value={'city'} name='category'/> <span>City</span> 
            </div>

            <input style={{fontSize: '16px'}} placeholder={category} onChange={(event) => setSearch(event.target.value)}></input>
            <button style={{fontSize: '16px'}} onClick={() => getSearch(props.setData, category, search)}>Search</button>
        </div>
    );
}

export default Search;