import axios, {CanceledError} from "axios";

export default axios.create({baseURL: "https://jsonplaceholder.typicode.com"} // basic QUESTION -- is it better to remove trailing slash and requests start with slash?

// , headers:{'api-key': 'XA2132'}
)


export {CanceledError};