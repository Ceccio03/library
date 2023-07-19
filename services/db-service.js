class DBService {

    static createPost(newPost) {
        const url = 'https://jsonplaceholder.typicode.com/posts';

        fetch(url, {method: 'post', body: JSON.stringify(newPost)})
        .then(resp => resp.json())
        .then(res => console.log('post', res));
    }

    static readPost(){
        const url = 'https://jsonplaceholder.typicode.com/posts';

        return fetch(url, {method: 'get'})
        .then(resp => resp.json())
        .then(res => console.log(res));
    }

    static readSinglePost(id){
        const tempArray = [];
        for (const object of genericArray) {
            const newBook = new Book(object.title, object.author, new Date(object.dop), object.genre, object.cover, object.id);
            tempArray.push(newBook)
        }

        return tempArray;
    }
}