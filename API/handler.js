const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const fs = require("fs");

const userModel = require("./User/UserModel");

const resolvers = {
  Query: {
    getAllEmployees: (_, { filter }) => userModel.getAllEmployees(filter),
    getEmployeeById: (_, { id }) => userModel.getEmployeeById(id),
    getRetireEmployee: () => userModel.getRetireEmployee(),
  },
  Mutation: {
    createNewEmployee: (_, { emp }) => userModel.createNewEmployee(emp),
    deleteEmployeeById: (_, { id }) => userModel.deleteEmployeeById(id),
    updateEmployeeById: (_, { emp }) => userModel.updateEmployeeById(emp),
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./User/userSchema.graphql", "utf-8"),
  resolvers,
});

async function startAPI(app) {
  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: process.env.CORS_STATUS,
  });
}
module.exports = { startAPI, server };
