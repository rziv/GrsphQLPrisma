const Subscription = {
  bookUpdate: {
    subscribe(parent, args, { pubsub }) {
      let currentDate = "";      
      return pubsub.asyncIterator("updateBook");
    },
  },
  count: {
    subscribe(parent, args, { pubsub }, info) {
        let count = 0;
        setInterval(function () {
          count++
          pubsub.publish("count", { count: count });
        }, 1000);
        return pubsub.asyncIterator("count");
    },
  },
};

export { Subscription as default };
