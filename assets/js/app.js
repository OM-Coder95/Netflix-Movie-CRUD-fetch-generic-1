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
const closeBtn = document.getElementById("closeBtn");

const submitBtn = document.getElementById("submitBtn");
const updateBtn = document.getElementById("updateBtn");

const BASE_URL = `https://fetch-movie-1-default-rtdb.firebaseio.com`;

const MOVIE_URL = `${BASE_URL}/movie.json`;

// localState

let state = {
  movieArr: [],
  editId: null,
};

// Functions

// showUpdatedSmallElement

function showUpdatedSmallElement(updateId) {
  let col = document.getElementById(updateId);
  let updatedSmallElement = col.querySelector(".updatedAt");
  updatedSmallElement.classList.remove("d-none");
}
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
  if (!movieModal.classList.contains("active")) {
    updateBtn.classList.add("d-none");
    submitBtn.classList.remove("d-none");
  }
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

  div.id = newMovie.id;

  div.innerHTML = `
  <div class="card movieCard">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4 class="m-0">${newMovie.movieName}</h4>
                                <small class="createdAt">Created At: ${newMovie.createdAt}</small><br>
                                <small class="updatedAt d-none">Updated At: sddjlkdsjlf</small>
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
                        <button onclick="editMovie(this)" class="btn btn-sm text-white net-sec-btn">Edit</button>
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
      <div class="col-md-3 mb-3" id="${movieArr.id}">
              <div class="card movieCard">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4 class="m-0">${movieArr.movieName}</h4>
                                <small class="createdAt">Created At: ${movieArr.createdAt}</small><br>
                                <small class="updatedAt d-none">Updated At: sddjlkdsjlf</small>
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
                        <button onclick="editMovie(this)" class="btn btn-sm text-white net-sec-btn">Edit</button>
                        <button class="btn btn-sm net-pri-btn">Remove</button>
                    </div>
                </div>
            </div>
    `;
  });
  movieContainer.innerHTML = result;
}

// edit

function editMovie(ele) {
  let editId = ele.closest(".col-md-3").id;
  state.editId = editId;

  toggleFormBackdrop();
  let editObj = state.movieArr.find((ele) => ele.id === editId);

  movieName.value = editObj.movieName;
  movieImg.value = editObj.movieImg;
  createdAt.value = editObj.createdAt;
  movieDescripion.value = editObj.movieDescripion;
  movieRating.value = editObj.movieRating;
  movieDate.value = editObj.date;
  movieGenre.value = editObj.genre;

  updateBtn.classList.remove("d-none");
  submitBtn.classList.add("d-none");
}

// update

function onMovieUpdate() {
  let updateId = state.editId;

  showUpdatedSmallElement(updateId);
  let UPDATE_URL = `${BASE_URL}/movie/${updateId}.json`;

  let updatedObj = {
    movieName: movieName.value.trim(),
    movieImg: movieImg.value.trim(),
    createdAt: createdAt.value.trim(),
    updatedAt: new Date().toLocaleString(),
    movieDescripion: movieDescripion.value.trim(),
    movieRating: movieRating.value,
    date: movieDate.value,
    genre: movieGenre.value.trim(),
    id: updateId,
  };

  toggleSpinner();
  makeAPICall(UPDATE_URL, "PATCH", updatedObj)
    .then((res) => {
      cl(res);

      let getIndex = state.movieArr.findIndex((ele) => ele.id === updateId);
      state.movieArr[getIndex] = updatedObj;

      updateUI(res);
      showUpdatedSmallElement(updateId);

      toggleFormBackdrop();
    })
    .catch((err) => {
      snackbar(err.message, "error");
    });
}

// function

function updateUI(res) {
  let div = document.getElementById(res.id);

  div.innerHTML = `
 <div class="card movieCard">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h4 class="m-0">${res.movieName}</h4>
                                <small class="createdAt">Created At: ${res.createdAt}</small><br>
                                <small class="updatedAt d-none">Updated At: ${res.updatedAt}</small>
                            </div>
                            <div class="col-2">
                                <h5 class="m-0"><span class="badge ${setRating(res.movieRating)}">${res.movieRating}</span></h5>
                            </div>
                        </div>
                    </div>
                    <div class="card-body py-0">
                        <figure class="m-0">
                            <img src="${res.movieImg}" alt="${res.movieName}" title="${res.movieName}">
                            <figcaption>
                                <h5>${res.movieName}</h5>
                                <p>${res.movieDescripion}</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button onclick="editMovie(this)" class="btn btn-sm text-white net-sec-btn">Edit</button>
                        <button class="btn btn-sm net-pri-btn">Remove</button>
                    </div>
                </div>
`;
}

movieForm.addEventListener("submit", onMovieAdd);
showModelBtn.addEventListener("click", toggleFormBackdrop);
closeIcon.addEventListener("click", toggleFormBackdrop);
closeBtn.addEventListener("click", toggleFormBackdrop);
backdrop.addEventListener("click", toggleFormBackdrop);

updateBtn.addEventListener("click", onMovieUpdate);
