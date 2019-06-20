import axios from 'axios';

export default {
  createCategory: data => {
    console.log("creating a new catgory...");
    console.log(data);
    return axios.post('/api/cardRoutes/createCategory', data);
  }
}