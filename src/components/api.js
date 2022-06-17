import axios from "axios"

export const getData = async (setData) => {
    
    //axios call to get the data from api
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8080/api/employees')
        .then( res => {
            setData(res.data)
            resolve(res.status)
        })
    })
    
}


export const addEmployee = async (id, first, last, job, city) => {
    
    //axios call to get the data from api
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8080/api/employees/add/${id}/${first}/${last}/${job}/${city}`)
        .then( res => {
            resolve(res.status)
        })

    }) 


}


export const updateEmployee = async (first, last, job, city, id) => {
    
    //axios call to update an employee
    return new Promise((resolve, reject) => {
        axios.put(`http://localhost:8080/api/employees/update/${first}/${last}/${job}/${city}/${id}`)
        .then( res => {
            resolve(res.status)
        })       
    }) 
}


export const deleteEmployee = async (id) => {
    
    //axios call to delete an employee
    return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:8080/api/employees/delete/${id}`)
        .then( res => {
            resolve(res.status)
        })       
    }) 
}