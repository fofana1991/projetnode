import Axios from './caller.services'

let addThing=(formData)=>{
	
	return Axios.post('/api/stuff',formData)

} 




let addImage=(image)=>{
	return Axios.post('/images/',image)
} 


//let getAllstuff= ()=>{
//return Axios.get('/api/openai/')
//}

let getAllstuff= ()=>{
return Axios.get('/api/stuff')
}

let getclientstuff= ()=>{
return Axios.get('/api/stuff/client')
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
export const stuffService = {
	getAllstuff,
	getclientstuff,
	getStuff,
	modifyThing,
	addThing,
	addImage,
	deleteThing,
	

}