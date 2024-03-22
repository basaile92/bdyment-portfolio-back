export class GraphQLElements {
  constructor (typeDefs, resolvers) {
    this._typeDefs = typeDefs;
    this._resolvers = resolvers;
  }

  get typeDefs () {
    return this._typeDefs;
  }

  get resolvers () {
    return this._resolvers;
  }
}
