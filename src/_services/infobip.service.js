import Axios from './caller.services'

 let postMessage= (currentMessage)=>{

       return Axios.post('/api/info/message',currentMessage)
}

let postCall= (currentCall)=>{

       return Axios.post('/api/info/call',currentCall)
}



export const infobipService = {
	
postMessage,
postCall,


}