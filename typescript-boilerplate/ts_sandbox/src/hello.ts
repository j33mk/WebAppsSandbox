import axios from 'axios'

console.log("hello jamal this is test file");

let getData = async () =>{
    try {
        let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(result);
    } catch (error) {
        console.log(error);        
    }
}
//getData();




