export class AbstractGraphQLElements {
  constructor(typeDefs, resolvers) {
    this._availabilityTypeDefs = typeDefs;
    this._availabilityResolvers = resolvers;
  }

  getElements() {
    return [this._availabilityTypeDefs, this._availabilityResolvers];
  }
}
