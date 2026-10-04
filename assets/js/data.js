const movieArray = [
  {
    movieName: "Interstellar",
    movieImg: "https://wallpapercave.com/wp/wp1816715.jpg",
    createdAt: "2026-01-12T14:45",
    movieDescripion:
      "A group of astronauts travels through a wormhole in search of a new home for humanity.",
    movieRating: "7",
    date: "2026-01-12",
    genre: "Science Fiction",
  },
  {
    movieName: "Inception",
    movieImg: "https://wallpapercave.com/wp/wp4056410.jpg",
    createdAt: "2026-01-13T10:30",
    movieDescripion:
      "A skilled thief enters people's dreams to steal valuable secrets from their minds.",
    movieRating: "8",
    date: "2026-01-13",
    genre: "Science Fiction",
  },
  {
    movieName: "The Dark Knight",
    movieImg: "https://wallpapercave.com/wp/wp1919348.jpg",
    createdAt: "2026-01-14T16:20",
    movieDescripion:
      "Batman faces a dangerous criminal mastermind who brings chaos to Gotham City.",
    movieRating: "9",
    date: "2026-01-14",
    genre: "Action",
  },
  {
    movieName: "Avatar",
    movieImg: "https://wallpapercave.com/wp/wp2634222.jpg",
    createdAt: "2026-01-15T12:15",
    movieDescripion:
      "A marine discovers the world of Pandora and becomes involved in a conflict over its resources.",
    movieRating: "8",
    date: "2026-01-15",
    genre: "Adventure",
  },
  {
    movieName: "Titanic",
    movieImg: "https://wallpapercave.com/wp/wp1946107.jpg",
    createdAt: "2026-01-16T18:40",
    movieDescripion:
      "Two young people from different social backgrounds fall in love aboard the Titanic.",
    movieRating: "9",
    date: "2026-01-16",
    genre: "Romance",
  },
  {
    movieName: "The Matrix",
    movieImg: "https://wallpapercave.com/wp/wp1917154.jpg",
    createdAt: "2026-01-17T09:50",
    movieDescripion:
      "A computer programmer discovers that reality is a simulated world controlled by machines.",
    movieRating: "8",
    date: "2026-01-17",
    genre: "Science Fiction",
  },
  {
    movieName: "Avengers: Endgame",
    movieImg: "https://wallpapercave.com/wp/wp4056415.jpg",
    createdAt: "2026-01-18T11:25",
    movieDescripion:
      "The Avengers attempt to reverse the destruction caused by Thanos and save the universe.",
    movieRating: "8",
    date: "2026-01-18",
    genre: "Superhero",
  },
  {
    movieName: "Joker",
    movieImg: "https://wallpapercave.com/wp/wp4923984.jpg",
    createdAt: "2026-01-19T15:10",
    movieDescripion:
      "A troubled man slowly transforms into a dangerous criminal after facing rejection from society.",
    movieRating: "8",
    date: "2026-01-19",
    genre: "Drama",
  },
  {
    movieName: "The Shawshank Redemption",
    movieImg: "https://wallpapercave.com/wp/wp2013897.jpg",
    createdAt: "2026-01-20T13:35",
    movieDescripion:
      "A wrongly imprisoned banker builds a friendship and finds hope during his years in prison.",
    movieRating: "9",
    date: "2026-01-20",
    genre: "Drama",
  },
  {
    movieName: "Jurassic Park",
    movieImg: "https://wallpapercave.com/wp/wp1816538.jpg",
    createdAt: "2026-01-21T17:05",
    movieDescripion:
      "Scientists create a dinosaur theme park, but the creatures escape and threaten the visitors.",
    movieRating: "8",
    date: "2026-01-21",
    genre: "Adventure",
  },
  {
    movieName: "The Conjuring",
    movieImg: "https://wallpapercave.com/wp/wp1816662.jpg",
    createdAt: "2026-01-22T20:15",
    movieDescripion:
      "Paranormal investigators help a family experiencing terrifying supernatural events in their home.",
    movieRating: "7",
    date: "2026-01-22",
    genre: "Horror",
  },
  {
    movieName: "Gladiator",
    movieImg: "https://wallpapercave.com/wp/wp1816647.jpg",
    createdAt: "2026-01-23T14:00",
    movieDescripion:
      "A Roman general seeks revenge after losing his family and being forced into slavery.",
    movieRating: "8",
    date: "2026-01-23",
    genre: "Historical",
  },
  {
    movieName: "Forrest Gump",
    movieImg: "https://wallpapercave.com/wp/wp1816685.jpg",
    createdAt: "2026-01-24T10:45",
    movieDescripion:
      "A kind-hearted man experiences important moments in American history while following his own journey.",
    movieRating: "8",
    date: "2026-01-24",
    genre: "Drama",
  },
  {
    movieName: "The Hangover",
    movieImg: "https://wallpapercave.com/wp/wp1816634.jpg",
    createdAt: "2026-01-25T19:30",
    movieDescripion:
      "Three friends wake up after a wild night in Las Vegas and try to find their missing friend.",
    movieRating: "7",
    date: "2026-01-25",
    genre: "Comedy",
  },
  {
    movieName: "John Wick",
    movieImg: "https://wallpapercave.com/wp/wp1816692.jpg",
    createdAt: "2026-01-26T16:50",
    movieDescripion:
      "A retired assassin returns to his violent past after criminals take something precious from him.",
    movieRating: "8",
    date: "2026-01-26",
    genre: "Action",
  },
  {
    movieName: "Finding Nemo",
    movieImg: "https://wallpapercave.com/wp/wp1816655.jpg",
    createdAt: "2026-01-27T12:40",
    movieDescripion:
      "A nervous clownfish travels across the ocean to find his son after he is captured by divers.",
    movieRating: "8",
    date: "2026-01-27",
    genre: "Animation",
  },
  {
    movieName: "The Notebook",
    movieImg: "https://wallpapercave.com/wp/wp1816701.jpg",
    createdAt: "2026-01-28T18:10",
    movieDescripion:
      "An elderly man reads a love story about two young people whose relationship survives many challenges.",
    movieRating: "7",
    date: "2026-01-28",
    genre: "Romance",
  },
  {
    movieName: "A Quiet Place",
    movieImg: "https://wallpapercave.com/wp/wp1816674.jpg",
    createdAt: "2026-01-29T21:00",
    movieDescripion:
      "A family struggles to survive in a world where mysterious creatures attack anything that makes noise.",
    movieRating: "8",
    date: "2026-01-29",
    genre: "Horror",
  },
  {
    movieName: "The Wolf of Wall Street",
    movieImg: "https://wallpapercave.com/wp/wp1816710.jpg",
    createdAt: "2026-01-30T11:15",
    movieDescripion:
      "A stockbroker builds a wealthy lifestyle through aggressive and illegal financial activities.",
    movieRating: "8",
    date: "2026-01-30",
    genre: "Biography",
  },
  {
    movieName: "Spider-Man: No Way Home",
    movieImg: "https://wallpapercave.com/wp/wp1816720.jpg",
    createdAt: "2026-01-31T15:45",
    movieDescripion:
      "Spider-Man faces villains from different universes after a spell causes reality to break apart.",
    movieRating: "8",
    date: "2026-01-31",
    genre: "Superhero",
  },
];
