// controller.js
import data from './data.js';

let users = [...data];

export function getData() {
    return users;
}

export function index() {
    return users;
}

export function store(user) {
    users.push(user);
}

export function destroy(index) {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
    }
}