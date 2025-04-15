import Axios from './caller.services'

let addMetier=(formData)=>{
	
	return Axios.post('/api/metier',formData)

} 




let addImage=(image)=>{
	return Axios.post('/images/',image)
} 


//let getAllstuff= ()=>{
//return Axios.get('/api/openai/')
//}

let getAllmetier= ()=>{
return Axios.get('/api/metier')
}

let geclientmetier= ()=>{
return Axios.get('/api/metier/client')
}


let getMetier=(id)=>{
	return Axios.get('/api/metier/'+id)
}



let modifyMetier=(metier)=>{
	return Axios.put('/api/metier/'+metier._id,metier)
}

let deleteMetier=(metier)=>{
	return Axios.delete('/api/metier/'+metier._id,metier)
}
export const metierService = {
	getAllmetier,
	getMetier,
	modifyMetier,
	addMetier,
	addImage,
	deleteMetier,
	geclientmetier,
	

}