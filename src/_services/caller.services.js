
import axios from 'axios'
import {accountService} from '@/_services'

const Axios = axios.create({
	baseURL:'http://44.211.80.88:3000'
})




Axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      this.$router.push( '/about' )

    }
  })


Axios.interceptors.request.use(request =>{
	
	console.log(request)
	
	let token= accountService.getToken()
	
	if(token) {
		request.headers.Authorization = 'Bearer '+token
}
return request
})
















export default Axios