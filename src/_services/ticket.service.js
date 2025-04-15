import Axios from './caller.services'

let addTicket = (ticket) => {
	return Axios.post('/api/ticket/', ticket)
}

let getAllTickets = () => {
	return Axios.get('/api/ticket/')
}

let getTicket = (id) => {
	return Axios.get('/api/ticket/' + id)
}

let deleteTicket = (ticket) => {
	return Axios.delete('/api/ticket/' + ticket._id, ticket)
}

let modifyTicket = (ticket) => {
	return Axios.put('/api/ticket/' + ticket._id, ticket)
}

export const ticketService = {
	getAllTickets,
	addTicket,
	getTicket,
	deleteTicket,
	modifyTicket
}