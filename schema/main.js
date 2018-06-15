const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = require('graphql');

const roll = () => Math.floor(6 * Math.random()) + 1;

const queryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'world'
        },
        diceRoll: {
            type: new GraphQLList(GraphQLInt),
            resolve: () => [roll(), roll()]
        }
    }
});

const mySchema = new GraphQLSchema({
    // root query & root mutation definitions
    query: queryType
});

module.exports = mySchema;
