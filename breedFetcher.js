const request = require('request');

const breedInput = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`, (error, response, body) => {
  if (error) {
    console.log('Request could not be made, please try again.');
    return;
  }

  const data = JSON.parse(body);
  if (!data.length) {
    console.log('Requested breed could not be found!');
    return;
  }
  console.log(data[0].description);
});