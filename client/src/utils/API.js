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
    console.log(`pulling up information for ${data}`);    
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
  },

  chargeIt: (data) => {
    console.log("using custom processor...")
    return axios.post('/api/cardRoutes/chargeIt', data);
  },


  createCompany: (data) => {
    console.log(data)
    console.log("Creating new company for user with ID " + data.userID);
    return axios.post('/api/cardRoutes/createCompany', data);
  },

  // getServices: data => {
  //   console.log("gathering list of services...");
  //   return axios.post('/api/cardRoutes/getServices', data);
  // },

  // getSupplies: data => {
  //   console.log("gathering list of Supplies...");
  //   return axios.post('/api/cardRoutes/getSupplies', data);
  // },

  // getOther: data => {
  //   console.log("gathering list of Other...");
  //   return axios.post('/api/cardRoutes/getOther', data);
  // },

  updateInfo: data => {
    console.log("Updating company with new info");
    console.log(data);
    return axios.put('/api/cardRoutes/updateInfo', data);
  },

  updateName: data => {
    console.log("Updating company with new name");
    console.log(data);
    return axios.put('/api/cardRoutes/updateName', data);
  }
}