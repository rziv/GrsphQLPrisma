const Reader = {
  books: (parent, _, { db }) =>
    db.booksData.filter((b) => b.readerId == parent.id),
};
export { Reader as default };
