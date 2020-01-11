import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalksById = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((result) => {
      const allWalksObj = result.data;
      const walks = [];
      if (allWalksObj != null) {
        Object.keys(allWalksObj).forEach((walkId) => {
          const newWalk = allWalksObj[walkId];
          newWalk.id = walkId;
          walks.push(newWalk);
        });
      }
      resolve(walks);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleWalk = (walkId) => axios.get(`${baseUrl}/walks/${walkId}.json`);

const deleteWalk = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const saveWalk = (newWalk) => axios.post(`${baseUrl}/walks.json`, newWalk);

export default {
  getWalksById,
  getSingleWalk,
  deleteWalk,
  saveWalk,
};