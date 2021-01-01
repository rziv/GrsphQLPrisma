import uuidv4 from "uuid/v4";
const Mutation = {
  createReader: (parent, args, { db }) => {
    const emailTaken = db.readers.some((r) => r.email == args.data.email);
    if (emailTaken) {
      throw new Error("Email Taken");
    }
    const reader = {
      id: uuidv4(),
      ...args.data,
    };
    db.readers.push(reader);
    return reader;
  },
  deleteReader: (parent, { id: readerId }, { db }) => {
    const readerIndex = db.readers.findIndex((r) => r.id == readerId);
    if (readerIndex === -1) {
      throw new Error("User not found");
    }

    if (db.booksData.some((b) => b.readerId == readerId)) {
      throw new Error("The user still has books");
    }
    const deletedReader = db.readers.splice(readerIndex, 1);
    return deletedReader[0];
  },
  updateBook: (parent, { id: bookId, readerId, action }, { db, pubsub }) => {
    if (!db.readers.some((r) => r.id == readerId)) {
      throw new Error("User Not Found");
    }
    let book = db.booksData.find((b) => b.id == bookId);

    if (book === null) {
      throw new Error("Book Not Found");
    }

    if (book.readerId && book.readerId != readerId) {
      throw new Error("Someone else has this book");
    }

    if (action === "RETURN") {
      book.readerId = null;
    }

    if (action === "LEND") {
      book.readerId = readerId;
    }    
    
    pubsub.publish("updateBook", {bookUpdate: book})
   

    return book;
  },
};
export { Mutation as default };
