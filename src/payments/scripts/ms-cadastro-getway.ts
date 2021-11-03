const axios = require('axios');
const { sync } = require('rimraf');
const { async } = require('rxjs');

async function IdSearch(id){
  var gets =await axios.get(`http://localhost:3000/users/${id}`)
  return (gets['data']) 
}

module.exports = IdSearch
