const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList
} = graphql;

//dummy data

var cryptos = [
  {name: 'Bitcoin', id: '1', amount: 1.2405},
  {name: 'Ethereum', id: '2', amount: 3.45},
  {name: 'XRP', id: '3', amount: 4444039.506}
]

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
        //code to get data from db / other source
        return _.find(cryptos, { id: args.id });
      }
    },
    cryptoCurrencies: {
      type: new GraphQLList(CryptoCurrencyType),
      resolve(parent, args) {
        return cryptos
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})