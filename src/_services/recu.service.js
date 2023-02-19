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



let getStuff=(id)=>{
	return Axios.get('/api/stuff/'+id)
}



let modifyThing=(thing)=>{
	return Axios.put('/api/stuff/'+thing._id,thing)
}

let deleteThing=(thing)=>{
	return Axios.delete('/api/stuff/'+thing._id,thing)
}
export const recuService = {
	getAllrecu,
	getStuff,
	modifyThing,
	addRecu,
	addImage,
	deleteThing,
	

}