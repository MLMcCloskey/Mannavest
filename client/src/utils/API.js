import axios from 'axios';

export default {
  createCategory: data => {
    console.log("creating a new catgory...");
    console.log(data);
    return axios.post('/api/cardRoutes/createCategory', data);
  },

  addCard: data => {
    console.log("adding card to registry...");
    console.log(data);
    return axios.post('/api/cardRoutes/addCard', data);
  },

  test: () => {
    console.log("something is happening");
    return axios.get('/api/cardRoutes/');
  }
}