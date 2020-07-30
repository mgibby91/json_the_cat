const request = require('request');

// const breedInput = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
    }


    else if (!data.length) {
      callback('Please enter valid breed', null);
    }

    else {
      callback(null, data[0].description);
    }

  });

};

module.exports = { fetchBreedDescription };






