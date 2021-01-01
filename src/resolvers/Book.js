const Book = {
    reader: (parent, _, { db }) =>
      db.readers.find((r) => r.id == parent.readerId),
  };
  
  export { Book as default };
