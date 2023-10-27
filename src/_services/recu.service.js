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

let geclientrecu= ()=>{
return Axios.get('/api/recu/client')
}


let getRecu=(id)=>{
	return Axios.get('/api/recu/'+id)
}



let modifyRecu=(recu)=>{
	return Axios.put('/api/recu/'+recu._id,recu)
}

let deleteRecu=(recu)=>{
	return Axios.delete('/api/recu/'+recu._id,recu)
}
export const recuService = {
	getAllrecu,
	getRecu,
	modifyRecu,
	addRecu,
	addImage,
	deleteRecu,
	geclientrecu,
	

}