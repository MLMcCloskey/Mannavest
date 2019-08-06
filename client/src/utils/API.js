import axios from 'axios';

export default {
  getRegistry: data => {
    console.log("Loading the registry... for user with id " + data);
    return axios.post('/api/cardRoutes/getRegistry', data);
  },

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