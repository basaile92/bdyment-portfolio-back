export class SchemaBuilder {
  constructor(
    graphQLElementsList
  ) {
    this._graphQLElements = graphQLElementsList;
  }

  _extractTypeDef = ([typeDef, resolver]) => typeDef;
  _extractResolver = ([typeDef, resolver]) => resolver;

  build() {
    return {
      typeDefs: this._graphQLElements.map(this._extractTypeDef),
      resolvers: this._graphQLElements.map(this._extractResolver),
    }
  }
}
