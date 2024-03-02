export class SchemaBuilder {
  constructor(
    baseGraphQLElements,
    availabilityGraphQLElements,
    certificateGraphQLElements,
    companyGraphQLElements,
    descriptionGraphQLElements,
    helpGraphQLElements,
    hobbiesGraphQLElements,
    languageGraphQLElements,
    missionGraphQLElements,
    projectGraphQLElements,
    skillGraphQLElements,
    studyGraphQLElements,
  ) {
    this._baseGraphQLElements = baseGraphQLElements;
    this._availabilityGraphQLElements = availabilityGraphQLElements;
    this._certificateGraphQLElements = certificateGraphQLElements;
    this._companyGraphQLElements = companyGraphQLElements;
    this._descriptionGraphQLElements = descriptionGraphQLElements;
    this._helpGraphQLElements = helpGraphQLElements;
    this._hobbiesGraphQLElements = hobbiesGraphQLElements;
    this._languageGraphQLElements = languageGraphQLElements;
    this._missionGraphQLElements = missionGraphQLElements;
    this._projectGraphQLElements = projectGraphQLElements;
    this._skillGraphQLElements = skillGraphQLElements;
    this._studyGraphQLElements = studyGraphQLElements;
  }

  buildSchema() {
    const [baseTypeDefs, baseResolvers] = this._baseGraphQLElements.getElements();
    const [descriptionTypeDefs, descriptionResolvers] = this._descriptionGraphQLElements.getElements();
    const [skillsTypeDefs, skillsResolvers] = this._skillGraphQLElements.getElements();
    const [languagesTypeDefs, languagesResolvers] = this._languageGraphQLElements.getElements();
    const [hobbiesTypeDefs, hobbiesResolvers] = this._hobbiesGraphQLElements.getElements();
    const [studiesTypeDefs, studiesResolvers] = this._studyGraphQLElements.getElements();
    const [companiesTypeDefs, companiesResolvers] = this._companyGraphQLElements.getElements();
    const [missionsTypeDefs, missionsResolvers] = this._missionGraphQLElements.getElements();
    const [projectsTypeDefs, projectsResolvers] = this._projectGraphQLElements.getElements();
    const [helpTypeDefs, helpResolvers] = this._helpGraphQLElements.getElements();
    const [availabilityTypeDefs, availabilityResolvers] = this._availabilityGraphQLElements.getElements();
    const [certificatesTypeDefs, certificatesResolvers] = this._certificateGraphQLElements.getElements();

    return {
      typeDefs: [
        baseTypeDefs,
        descriptionTypeDefs,
        skillsTypeDefs,
        languagesTypeDefs,
        hobbiesTypeDefs,
        studiesTypeDefs,
        companiesTypeDefs,
        missionsTypeDefs,
        projectsTypeDefs,
        helpTypeDefs,
        availabilityTypeDefs,
        certificatesTypeDefs,
      ],
      resolvers: [
        baseResolvers,
        descriptionResolvers,
        skillsResolvers,
        languagesResolvers,
        hobbiesResolvers,
        studiesResolvers,
        companiesResolvers,
        missionsResolvers,
        projectsResolvers,
        helpResolvers,
        availabilityResolvers,
        certificatesResolvers,
      ],
    };
  }
}
