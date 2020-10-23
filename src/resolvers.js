const Result = require("./models/User");

const resolvers = {
  Query: {
    me: async (parent, args, context, info) => {
      return "me";
    },
  },

  // Mutation: {},

  // Subscription: {},
};

module.exports = resolvers;
