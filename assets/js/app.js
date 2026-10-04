const cl = console.log;
// form Controls
const movieForm = document.getElementById("movieForm");
const movieName = document.getElementById("movieName");
const movieImg = document.getElementById("movieImg");
const createdAt = document.getElementById("createdAt");
const movieDescripion = document.getElementById("movieDescripion");
const movieRating = document.getElementById("movieRating");
const movieDate = document.getElementById("date");
const movieGenre = document.getElementById("genre");
const spinner = document.getElementById("spinner");
const movieContainer = document.getElementById("movieContainer");

// movieModal && backdrop

const backdrop = document.getElementById("backdrop");
const movieModal = document.getElementById("movieModal");

// form buttons
const showModelBtn = document.getElementById("showModelBtn");
const closeIcon = document.getElementById("closeIcon");

const submitBtn = document.getElementById("submitBtn");
const closeBtn = document.getElementById("closeBtn");

const BASE_URL = `https://fetch-movie-1-default-rtdb.firebaseio.com`;

const MOVIE_URL = `${BASE_URL}/movie.json`;

// localState

let state = {
  movieArr: [],
  editId: null,
};

// Functions

// nestedToArrObj

function nestedToArrObj(res) {
  for (const key in res) {
    res[key].id = key;
    state.movieArr.push(res[key]);
  }
}

// toggleFromBackdrop

function toggleFormBackdrop() {
  backdrop.classList.toggle("active");
  movieModal.classList.toggle("active");
  movieForm.reset();
}

// setRating

function setRating(rating) {
  if (rating > 7) {
    return "badge-success";
  } else if (rating > 5) {
    return "badge-warning";
  } else {
    return "badge-danger";
  }
}

// spinner

function toggleSpinner() {
  spinner.classList.toggle("d-none");
}

// snackbar

function snackbar(msg, icon) {
  Swal.fire({
    text: msg,
    icon: icon,
    timer: 1800,
  });
}

function makeAPICall(url, methodType, msgBody = null) {
  let body = msgBody ? JSON.stringify(msgBody) : null;
  return fetch(url, {
    method: methodType,
    body: body,
    headers: {
      "Content-Type": "application/json",
      Authorization: "JWT TOKEN",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      snackbar(err.message, "error");
    })
    .finally(() => {
      toggleSpinner();
    });
}
// Create

function onMovieAdd(event) {
  event.preventDefault();

  let newMovie = {
    movieName: movieName.value.trim(),
    movieImg: movieImg.value.trim(),
    createdAt: createdAt.value.trim(),
    updatedAt: new Date(),
    movieDescripion: movieDescripion.value.trim(),
    movieRating: movieRating.value,
    date: movieDate.value,
    genre: movieGenre.value.trim(),
  };

  toggleSpinner();
  makeAPICall(MOVIE_URL, "POST", newMovie)
    .then((res) => {
      cl(res);

      newMovie.id = res.name;

      state.movieArr.push(newMovie);

      createDiv(newMovie);

      toggleFormBackdrop();
    })
    .catch((err) => {
      snackbar(err.message, "error");
    });
}

// createDiv

function createDiv(newMovie) {
  let div = document.createElement("div");

  div.className = `col-md-3 mb-3`;

  div.innerHTML = `
  <div class="card movieCard">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4 class="m-0">${newMovie.movieName}</h4>
                                <small class="updatedAt">sddjlkdsjlf</small>
                            </div>
                            <div class="col-2">
                                <h5 class="m-0"><span class="badge ${setRating(newMovie.movieRating)}">${newMovie.movieRating}</span></h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body py-0">
                        <figure class="m-0">
                            <img src="${newMovie.movieImg}" alt="${newMovie.movieName}" title="${newMovie.movieName}">
                            <figcaption>
                                <h5>${newMovie.movieName}</h5>
                                <p>${newMovie.movieDescripion}</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-sm text-white net-sec-btn">Edit</button>
                        <button class="btn btn-sm net-pri-btn">Remove</button>
                    </div>
                </div>
  `;
  movieContainer.append(div);
}

// Read

function showOnUI() {
  toggleSpinner();
  makeAPICall(MOVIE_URL, "GET")
    .then((res) => {
      cl(res);

      nestedToArrObj(res);

      cl(state.movieArr);

      rendering(state.movieArr);
    })
    .catch((err) => {
      snackbar(err.message, "error");
    });
}

showOnUI();

// rendering

function rendering(arr) {
  let result = "";

  arr.forEach((movieArr) => {
    result += `
      <div class="col-md-3 mb-3">
              <div class="card movieCard">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4 class="m-0">${movieArr.movieName}</h4>
                                <small class="updatedAt">sddjlkdsjlf</small>
                            </div>
                            <div class="col-2">
                                <h5 class="m-0"><span class="badge ${setRating(movieArr.movieRating)}">${movieArr.movieRating}</span></h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body py-0">
                        <figure class="m-0">
                            <img src="${movieArr.movieImg}" alt="${movieArr.movieName}" title="${movieArr.movieName}">
                            <figcaption>
                                <h5>${movieArr.movieName}</h5>
                                <p>${movieArr.movieDescripion}</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-sm text-white net-sec-btn">Edit</button>
                        <button class="btn btn-sm net-pri-btn">Remove</button>
                    </div>
                </div>
            </div>
    `;
  });
  movieContainer.innerHTML = result;
}

movieForm.addEventListener("submit", onMovieAdd);
showModelBtn.addEventListener("click", toggleFormBackdrop);
closeIcon.addEventListener("click", toggleFormBackdrop);
closeBtn.addEventListener("click", toggleFormBackdrop);
backdrop.addEventListener("click", toggleFormBackdrop);
