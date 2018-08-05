const graphql = require('graphql');
const CryptoCurrency = require('../models/cryptoCurrency');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const CryptoCurrencyType = new GraphQLObjectType({
  name: 'CryptoCurrency',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    amount: { type: GraphQLFloat }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    cryptoCurrency: {
      type: CryptoCurrencyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return CryptoCurrency.findById(args.id)
      }
    },
    cryptoCurrencies: {
      type: new GraphQLList(CryptoCurrencyType),
      resolve(parent, args) {
        return CryptoCurrency.find({})
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCryptoCurrency: {
      type: CryptoCurrencyType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        amount: {
          type: new GraphQLNonNull(GraphQLFloat)
        }
      },
      resolve(parent, args) {
        let cryptoCurrency = new CryptoCurrency({
          name: args.name,
          amount: args.amount
        });
        return cryptoCurrency.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})