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

  findCompany: data => {
    console.log("pulling up information for the page");
    console.log(data);
    return axios.post('/api/cardRoutes/findCompany', data);
  },

  findAllCompanies: data => {
    console.log("gathering list for all companies");
    console.log(data);
    return axios.post('/api/cardRoutes/findAllCompanies', data);
  },

  test: () => {
    console.log("something is happening");
    return axios.get('/api/cardRoutes/');
  }
}