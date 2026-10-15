const books = [
  {
    title: "i don't know",
    authorName: "Sam",
    releaseYear: 2024,
  },
  {
    title: "What Do i Know?",
    authorName: "Sam",
    releaseYear: 2021,
  },
  {
    title: "The inevitable Void of Absolute Nothingness",
    authorName: "Starboy",
    releaseYear: 2023,
  },
  {
    title: "Feburary The 9th",
    authorName: "Sam",
    releaseYear: 2019,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear === book2.releaseYear) {
    return 0;
  } else {
    return 1;
  }
}

console.log(sortByYear(books[0], books[2]));

const filteredBooks = books.filter((book) => book.releaseYear <= 2022);
// filteredBooks.sort((a, b) => a.releaseYear - b.releaseYear);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);
