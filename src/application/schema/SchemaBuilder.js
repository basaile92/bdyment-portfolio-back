import { GraphQLElements } from "../elements/GraphQLElements.js";

export class SchemaBuilder {
  constructor (
    graphQLElementsList
  ) {
    this._graphQLElements = graphQLElementsList;
  }

  build () {
    return {
      typeDefs: this._graphQLElements.map(element => element.typeDefs),
      resolvers: this._graphQLElements.map(element => element.resolvers)
    };
  }
}
