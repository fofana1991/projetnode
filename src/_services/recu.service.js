import Axios from './caller.services'

let addRecu=(formData)=>{
	
	return Axios.post('/api/recu',formData)

} 




let addImage=(image)=>{
	return Axios.post('/images/',image)
} 


//let getAllstuff= ()=>{
//return Axios.get('/api/openai/')
//}

let getAllrecu= ()=>{
return Axios.get('/api/recu')
}



let getRecu=(id)=>{
	return Axios.get('/api/recu/'+id)
}



let modifyRecu=(thing)=>{
	return Axios.put('/api/recu/'+thing._id,thing)
}

let deleteRecu=(thing)=>{
	return Axios.delete('/api/recu/'+thing._id,thing)
}
export const recuService = {
	getAllrecu,
	getRecu,
	modifyRecu,
	addRecu,
	addImage,
	deleteRecu,
	

}