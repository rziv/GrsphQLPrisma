const booksData = [
    {
      id: 123,
      title: "Thinking fast an slow",
      author: "khanman",
      genre: "none fiction",
      readerId: 3,
    },
    {
      id: 345,
      title: "Design Patterns",
      author: "GOF",
      genre: "none fiction",
      readerId: 1,
    },
    { id: 678, title: "mobi dick", author: "melvil", genre: "fiction" },
  ];
  
  const readers = [
    { id: 1, name: "Avi", email: "avi@aaa.bbb" },
    { id: 2, name: "Dani", email: "dani@aaa.bbb" },
    { id: 3, name: "Eli", email: "eli@aaa.bbb" },
  ];

  const db = {
      booksData,
      readers
  }

  export {db as default}