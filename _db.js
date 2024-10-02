let games = [
  {
    id: 1,
    title: "The Witcher 1: Wild Hunt",
    platform: ["PC", "PS4", "Xbox One"],
  },
  {
    id: 2,
    title: "The Witcher 2",
    platform: ["PC", "PS4", "Xbox One"],
  },
  {
    id: 3,
    title: "The Witcher 3",
    platform: ["PC", "PS4", "Xbox One"],
  },
  {
    id: 4,
    title: "The Witcher 4",
    platform: ["PC", "PS4", "Xbox One"],
  },
  {
    id: 5,
    title: "The Witcher 5",
    platform: ["PC", "PS4", "Xbox One"],
  },
  {
    id: 6,
    title: "The Witcher 6",
    platform: ["PC", "PS4", "Xbox One"],
  },
];

let authors = [
  {
    id: 1,
    name: "Andrzej Sapkowski",
    verified: true,
  },
  {
    id: 2,
    name: "yoshi",
    verified: true,
  },
  {
    id: 3,
    name: "peach",
    verified: true,
  },
];

let reviews = [
  {
    id: 1,
    rating: 10,
    content: "This game is great!",
    author_id: "1",
    game_id: "2",
  },
  {
    id: 2,
    rating: 9,
    content: "This game is great!",
    author_id: "2",
    game_id: "1",
  },
  {
    id: 3,
    rating: 10,
    content: "This game is great!",
    author_id: "3",
    game_id: "3",
  },
  {
    id: 4,
    rating: 10,
    content: "This game is great!",
    author_id: "2",
    game_id: "4",
  },
  {
    id: 5,
    rating: 10,
    content: "This game is great!",
    author_id: "2",
    game_id: "5",
  },
  {
    id: 6,
    rating: 10,
    content: "This game is great!",
    author_id: "1",
    game_id: "2",
  },
  {
    id: 7,
    rating: 10,
    content: "This game is great!",
    author_id: "3",
    game_id: "1",
  },
];

export default { games, authors, reviews };
