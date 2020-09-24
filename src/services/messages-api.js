import tokenService from '../services/tokenService';
const BASE_URL = '/api/messages/';

export function create(message) {
    console.log('api worked')
    return fetch(BASE_URL, {
        method: "POST",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(message)
    }, { mode: "cors" })
        .then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {mode: "cors"})
    .then(res => res.json())
}

export function deleteOne(id) {
return fetch(`${BASE_URL}${id}`, {
    method: 'DELETE',
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
}, {mode: "cors"})
.then(res => res.json());
}

export function update(reply, messageId) {
    console.log(reply)
    console.log(messageId)
    return fetch(`${BASE_URL}${messageId}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(reply)
    }, {mode: "cors"})
    .then(res => res.json());
}

export function getOne(message) {
    console.log('get one')
    return fetch(`${BASE_URL}${message._id}`, {mode: "cors"})
    .then(res => res.json())
}