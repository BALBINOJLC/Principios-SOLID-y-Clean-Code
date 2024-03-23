import { HttpClient } from "./03-open-close";



export class TodoService { 

    constructor(private http: HttpClient) {}

    async getTodoItems() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        console.log(data);
        return data;
    }
}


export class PostService {
    constructor(private http: HttpClient) {}
    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        console.log(data);
        return data;
    }
}


export class PhotosService {
    constructor(private http: HttpClient) {}
    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        console.log(data);
        return data;
    }

}