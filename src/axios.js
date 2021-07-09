import axios from "axios";

const instance = axios.create({
    baseURL:"https://tinderbacked.herokuapp.com/",
});

export default instance;