import Axios from './caller.services'

let addProfcarte=(formData)=>{
	
	return Axios.post('/api/profCarte',formData)

} 


let getAllProfcarte=()=>{
return Axios.get('/api/profCarte')
}

let getProfcarte=(id)=>{
	return Axios.get('/api/profCarte/'+id)
}



let modifyProfcarte=(profCarte)=>{
	return Axios.put('/api/profCarte/'+profCarte._id,profCarte)
}

let deleteProfcarte=(profCarte)=>{
	return Axios.delete('/api/profCarte/'+profCarte._id,profCarte)
}
export const profcarteService = {
	getAllProfcarte,
	getProfcarte,
	modifyProfcarte,
	addProfcarte,
	deleteProfcarte,
	

}