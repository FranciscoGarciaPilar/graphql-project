import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const queryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'world'
        }
    }
});

const mySchema = new GraphQLSchema({
    // root query & root mutation definitions
    query: queryType
});

export default mySchema;
