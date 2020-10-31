import joke from '../../helpers/data/jokeData';

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

export default { makeJokeCard };
