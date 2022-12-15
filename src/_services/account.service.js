
import Axios from './caller.services'

let login= (credentials)=>{

	return Axios.post('/api/auth/login',credentials) 
}

let signup= (credentials)=>{

	return Axios.post('/api/auth/signup',credentials) 
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


export const accountService = {
	signup,
	login,
	logout,
	getToken,
	saveToken,
	isLogged
}