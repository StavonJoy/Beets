import tokenService from '../services/tokenService';
const BASE_URL = '/api/messages/';

export function create(message) {
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

export function reply(reply, messageId) {
    return fetch(`${BASE_URL}${messageId}`, {
        method: "POST",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(reply)
    }, {mode: "cors"})
    .then(res => res.json());
}

export function getOne(message) {
    return fetch(`${BASE_URL}${message._id}`, {mode: "cors"})
    .then(res => res.json())
}

export function update(message) {
    return fetch(`${BASE_URL}${message._id}`, {
        method: "PUT",
        headers: {'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken()},
        body: JSON.stringify(message)
    }, {mode: "cors"})
    .then(res => res.json());
  }