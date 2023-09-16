import Axios from './caller.services'

 let postInfobip= (currentMessage)=>{

       return Axios.post('/api/infobip',currentMessage)
}




export const infobipService = {
	
postInfobip,


}