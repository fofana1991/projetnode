import Axios from './caller.services'

let getopenai= (message)=>{
      return Axios.post('/api/openai',message)
}

let createImage= (message)=>{
      return Axios.post('/api/openai/image',message)
}

export const openiaService = {
	
getopenai,
createImage

}