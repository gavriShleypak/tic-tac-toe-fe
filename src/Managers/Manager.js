import httpClient from '../Utils/HttpClient';
class ApplicationManager {

    constructor() {
        this.HttpClient =  new httpClient(3000, 'http://localhost:8080/postGameDetails');
    };
}

export let applicationManager = new ApplicationManager();