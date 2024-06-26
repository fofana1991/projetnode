
import Axios from './caller.services'

let login= (credentials)=>{

	return Axios.post('/api/auth/login',credentials) 
}

let signup= (formData)=>{

	return Axios.post('/api/auth/signup',formData ) 
}

let logout=()=>{
	localStorage.removeItem('token')
}
let getToken= ()=>{
	return localStorage.getItem('token')
}

let saveToken=(token) =>{
	localStorage.setItem('token',token)
}


let isLogged= () =>{
	let token= localStorage.getItem('token')
	return !! token
}

let getAllUser=()=>{
	return Axios.get('/api/auth/allUsers')
}

// pour modification

let getuser=(id)=>{
	return Axios.get('/api/auth/user/'+id)
}

// pour condition

let getuser2=()=>{
	return Axios.get('/api/auth/user2')
}

let getuser3=()=>{
	return Axios.get('/api/auth/user3')
}


let modifyUser=(user)=>{
	return Axios.put('/api/auth/'+user._id,user)
}

let deleteUser=(user)=>{
	return Axios.delete('/api/auth/'+user._id,user)
}


export const accountService = {
	signup,
	login,
	logout,
	getToken,
	saveToken,
	isLogged,
	getAllUser,
	getuser,
	deleteUser,
	modifyUser,
	getuser2,
	getuser3
}