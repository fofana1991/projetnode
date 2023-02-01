import Axios from './caller.services'








let addMessage= (message) =>{

	return  Axios.post('/api/message/',message)

	}


	let getAllMessage= () =>{

	return  Axios.get('/api/message/')

	}


	let getMessage=(id)=>{
	return Axios.get('/api/message/'+id)
}


	let deleteMessage=(message)=>{
	return Axios.delete('/api/message/'+ message._id,message)
}


let modifyThing=(message)=>{
	return Axios.put('/api/message/'+ message._id,message)
}


export const messageService = {
	getAllMessage,
	addMessage,
	getMessage,
	deleteMessage,
	modifyThing

}