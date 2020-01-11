import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDogsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((result) => {
      const allDogsObj = result.data;
      const dogs = [];
      if (allDogsObj != null) {
        Object.keys(allDogsObj).forEach((dogId) => {
          const newDog = allDogsObj[dogId];
          newDog.id = dogId;
          dogs.push(newDog);
        });
      }
      resolve(dogs);
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getDogsByUid,
};
