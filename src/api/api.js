import axios from "axios"

//axios call to get the data from api
export const getData = async (setData) => {
       
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8080/api/employees')
        .then( res => {
            setData(res.data)
            resolve(res.status)
        })
    })
    
}

//axios call to get the data from api using a search
export const getSearch = async (setData, category, search) => {

    let searchParam = search

    if(search === ''){
        searchParam = '*'
    }
    
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/api/employees/search/${category}/${encodeURIComponent(searchParam)}`)
        .then( res => {
            setData(res.data)
            resolve(res.status)
        })
    })
    
}

//axios call to add an employee to the database
export const addEmployee = async (id, first, last, job, city) => {
    
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8080/api/employees/add/${encodeURIComponent(id)}/${encodeURIComponent(first)}
                    /${encodeURIComponent(last)}/${encodeURIComponent(job)}/${encodeURIComponent(city)}`)
        .then( res => {
            resolve(res.status)
        }).catch(res => reject(res))

    }) 


}

//axios call to update an employee from the database
export const updateEmployee = async (first, last, job, city, id) => {
    
    return new Promise((resolve, reject) => {
        axios.put(`http://localhost:8080/api/employees/update/${encodeURIComponent(first)}/${encodeURIComponent(last)}
                    /${encodeURIComponent(job)}/${encodeURIComponent(city)}/${encodeURIComponent(id)}`)
        .then( res => {
            resolve(res.status)
        })    
    }) 
}

//axios call to delete an employee from the database
export const deleteEmployee = async (id) => {
    
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8080/api/employees/delete/${encodeURIComponent(id)}`)
        .then( res => {
            resolve(res.status)
        })       
    }) 
}