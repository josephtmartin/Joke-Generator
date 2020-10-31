# Joke Generator
This is an app that generates a random joke from an API

## Motivation
This was an inclass challenge to test our skills and knowledge on how to get data from an API

## Deploy Link
[Link](jokegenerator9000.netlify.app)

## Code Snippet
```
const getJokeObject = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const makeJokeCard = () => {
  $('#app').html('<button type="button" id="getJoke" class="btn btn-outline-dark btn-large">Get a Joke</button>');

  $('#getJoke').on('click', () => {
    $('#joke').html('');
    joke.getJokeObject().then((response) => {
      console.warn(response);
      $('#joke').html(`<div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <p class="card-text">${response.setup}</p>
          <a href="#" id="punchline" class="btn btn-primary">Click for Punchline</a>
          <div id="punchlineDiv"></div>
        </div>
      </div>`);
      $('#punchline').on('click', () => {
        $('#punchlineDiv').append(`<h4 class="m-md">${response.punchline}</h4>`);
      });
    });
  });
};
```
## Screenshot
![screenshot](https://i.postimg.cc/KjN00Y5T/joke-generator.png)
