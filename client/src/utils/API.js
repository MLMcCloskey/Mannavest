import axios from 'axios';

export default {
  createCategory: data => {
    console.log("creating a new catgory...");
    console.log(data);
    return axios.post('/api/cardRoutes/createCategory', data);
  },

  test: () => {
    console.log("something is happening");
    return axios.get('/api/cardRoutes/');
  }
}