import Axios from './caller.services'



let getgeolocation= () =>{

	
	return  Axios.get('/api/geolocation/')

	}




export const geolocationService = {

      getgeolocation,


	}