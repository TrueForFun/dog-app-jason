const BREEDS_URL = `https://dog.ceo/api/breeds/list/all`;
const breedsSelectEl = document.querySelector(`.breeds`);

fetch(BREEDS_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const breeds = Object.keys(data.message);
    const breedsOptions = breeds.map((breed) => {
      const option = document.createElement(`option`);
      option.value = breed;
      option.innerText = breed;

      return option;
    });

    console.log({ breedsOptions });

    breedsSelectEl.append(...breedsOptions);

    // for (let i = 0; i < breeds.length; i++) {
    //   const option = document.createElement(`option`);
    //   option.value = breeds[i];
    //   option.innerText = breeds[i];
    //   breedsSelectEl.appendChild(option);
    // }
  });

breedsSelectEl.addEventListener(`change`, function (event) {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

  getDoggo(url);
});

const img = document.querySelector(`.dog-img`);
const spinner = document.querySelector(`.spinner`);

function getDoggo(url) {
  spinner.classList.add(`show`);
  img.classList.remove(`show`);
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      img.src = data.message;
      spinner.classList.remove(`show`);
      img.classList.add(`show`);
    });
}
