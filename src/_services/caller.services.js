
import axios from 'axios'
import {accountService} from '@/_services'
import router from '@/router'
const Axios = axios.create({
 //baseURL:'http://44.211.80.88:3000',
//baseURL:'http://localhost:3000',

baseURL:'http://192.168.43.245:3000'

})




Axios.interceptors.response.use(

 response => response,
  
  error => {

   if (error.response.status === 401 ) {

   
     router.push('/about');

     



    }
  return Promise.reject(error);  
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