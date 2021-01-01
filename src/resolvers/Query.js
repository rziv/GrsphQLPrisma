const Query = {
  reader(parent, { id: readerId }, { db }) {
    return db.readers.find((r) => r.id == readerId);
  },
  books(parent, { title }, { db }) {
    return db.booksData.filter(
      (book) => !title || book.title.toLowerCase().includes(title.toLowerCase())
    );
  },
  readers: (_, __, { db }) => db.readers,
};

export { Query as default };
