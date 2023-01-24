import Axios from './caller.services'

let getopenai= ()=>{
      return Axios.post('/api/openai')
}


export const openiaService = {
	
getopenai

}