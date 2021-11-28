export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** Date scalar type is string matching `YYYY-MM-DD` format */
    Date: any;
    /** Email scalar is string maxLength: 255 pattern: /\b[\w.-]+@[\w.-]+.\w{2,4}\b/ */
    Email: any;
    /** Name scalar is string maxLength: 255 */
    Name: any;
    /** Phone scalar is string pattern: /^\+(370|371)\d{8,10}$/ */
    Phone: any;
    /** Surname scalar is string maxLength: 255 */
    Surname: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};

/** Represents an animal. */
export type Animal = {
    __typename?: 'Animal';
    /** Comments */
    comments?: Maybe<Scalars['String']>;
    /** Animal details */
    details?: Maybe<AnimalDetails>;
    /** Animal id, for example 2 */
    id: Scalars['Int'];
    /** Image URL */
    imageUrl?: Maybe<Scalars['String']>;
    /** Flag to determine if the current user has marked the animal as one of her/his favorites */
    isFavorite?: Maybe<Scalars['Boolean']>;
    /** Animal implanted microchip info */
    microchip?: Maybe<AnimalMicrochip>;
    /** Modification time */
    modTime?: Maybe<Scalars['String']>;
    /** Animal name */
    name?: Maybe<Scalars['String']>;
    /** Organization id */
    organization: Scalars['Int'];
    /** Animal active registration info */
    registration?: Maybe<AnimalRegistration>;
    /**
     * Animal status by language.
     * Examples: status(language: "en") or just status - will return default language ("lt") translation
     */
    status?: Maybe<Scalars['String']>;
};

/** Represents an animal. */
export type AnimalStatusArgs = {
    language?: InputMaybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetails = {
    __typename?: 'AnimalDetails';
    /** Animal allergy */
    allergy?: Maybe<Scalars['String']>;
    /** Animal id, for example 2 */
    animalId: Scalars['Int'];
    /** Animal date of birth */
    birthDate?: Maybe<Scalars['String']>;
    /**
     * Animal breed by language.
     * Examples: breed(language: "en") or just breed - will return default language ("lt") translation
     */
    breed?: Maybe<Breed>;
    /**
     * Animal color by language
     * Examples: color(language: "en") or just color - will return default language ("lt") translation
     */
    color?: Maybe<Color>;
    /** Animal food */
    food?: Maybe<Scalars['String']>;
    /**
     * Animal gender by language.
     * Examples: gender(language: "en") or just gender - will return default language ("lt") translation
     */
    gender?: Maybe<Gender>;
    /**
     * Animal species by language
     * Examples: species(language: "en") or just species - will return default language ("lt") translation
     */
    species?: Maybe<Species>;
    /** Animal weight (kg) */
    weight?: Maybe<Scalars['Float']>;
};

/** Represents an animal details. */
export type AnimalDetailsBreedArgs = {
    language?: InputMaybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetailsColorArgs = {
    language?: InputMaybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetailsGenderArgs = {
    language?: InputMaybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetailsSpeciesArgs = {
    language?: InputMaybe<Scalars['String']>;
};

export type AnimalDetailsInput = {
    /** Animal allergy */
    allergy?: InputMaybe<Scalars['String']>;
    /** Animal date of birth (year) */
    birthDate?: InputMaybe<Scalars['Date']>;
    /** Animal breed id (any value from 'breeds' query) */
    breedId?: InputMaybe<Scalars['Int']>;
    /** Animal color (any value from 'colors' query) */
    colorId?: InputMaybe<Scalars['Int']>;
    /** Animal food */
    food?: InputMaybe<Scalars['String']>;
    /** Animal gender (any value from 'genders' query) */
    genderId?: InputMaybe<Scalars['Int']>;
    /** Species breed id (any value from 'species' query) */
    speciesId?: InputMaybe<Scalars['Int']>;
    /** Animal weight (kg) */
    weight?: InputMaybe<Scalars['Int']>;
};

/** An edge in a connection. */
export type AnimalEdge = {
    __typename?: 'AnimalEdge';
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
    /** The item at the end of the edge */
    node?: Maybe<Animal>;
};

/** Represents an animal microchip. */
export type AnimalMicrochip = {
    __typename?: 'AnimalMicrochip';
    /** Animal id, for example 2 */
    animalId: Scalars['Int'];
    /** Chip company code */
    chipCompanyCode: Scalars['Int'];
    /** Microchip install date */
    installDate?: Maybe<Scalars['String']>;
    /** Microchip install place */
    installPlaceId: Scalars['Int'];
    /** Microchip id */
    microchipId: Scalars['String'];
    /**
     * Microchip status ('Implanted' or 'Removed') translation
     * Examples: status(language: "en") or just status - will return default language ("lt") translation
     */
    status?: Maybe<Scalars['String']>;
};

/** Represents an animal microchip. */
export type AnimalMicrochipStatusArgs = {
    language?: InputMaybe<Scalars['String']>;
};

/** Represents a animal owner. */
export type AnimalOwner = {
    __typename?: 'AnimalOwner';
    /** Animal owner ID, e.g., 1 */
    id: Scalars['Int'];
    name: Scalars['Name'];
    phone?: Maybe<Scalars['Phone']>;
    surname?: Maybe<Scalars['Surname']>;
};

/** Represents animal registration */
export type AnimalRegistration = {
    __typename?: 'AnimalRegistration';
    /** Registration date */
    registrationDate?: Maybe<Scalars['Date']>;
    /** Registration number */
    registrationNo: Scalars['String'];
    /**
     * Registration status ('Active' or 'Inactive') translation
     * Examples: status(language: "en") or just status - will return default language ("lt") translation
     */
    status?: Maybe<Scalars['String']>;
};

/** Represents animal registration */
export type AnimalRegistrationStatusArgs = {
    language?: InputMaybe<Scalars['String']>;
};

export type AnimalRegistrationInput = {
    registrationDate?: InputMaybe<Scalars['Date']>;
    /** Registration number (255 characters max) */
    registrationNo: Scalars['String'];
    /** Registration status ('Active' or 'Inactive') */
    status?: InputMaybe<RegistrationStatus>;
};

export enum AnimalStatus {
    Adopted = 'adopted',
    Healthy = 'healthy',
    Sick = 'sick',
    Vaccinated = 'vaccinated',
}

/** A connection to animals. */
export type AnimalsConnection = {
    __typename?: 'AnimalsConnection';
    /** A list of animal edges. */
    edges: Array<AnimalEdge>;
    /** Information for pagination. */
    pageInfo: PageInfo;
};

/** Represents an app user */
export type Author = {
    __typename?: 'Author';
    /** id */
    id: Scalars['String'];
    /** User name */
    name?: Maybe<Scalars['String']>;
    /** User surname */
    surname?: Maybe<Scalars['String']>;
};

/** Represents a breed. */
export type Breed = {
    __typename?: 'Breed';
    /** Breed abbreviation */
    abbreviation: Scalars['String'];
    /** Breed id */
    id: Scalars['Int'];
    /** Breed name */
    value: Scalars['String'];
};

/** Represents a breed with species. */
export type BreedWithSpecies = {
    __typename?: 'BreedWithSpecies';
    /** Breed abbreviation */
    abbreviation: Scalars['String'];
    /** Breed id */
    id: Scalars['Int'];
    /** Species id */
    speciesId: Scalars['Int'];
    /** Species name */
    speciesValue: Scalars['String'];
    /** Breed name */
    value: Scalars['String'];
};

export type CheckIn = Event & {
    __typename?: 'CheckIn';
    animalId: Scalars['Int'];
    author: Author;
    createTime: Scalars['String'];
    dateTime: Scalars['String'];
    details: CheckInDetails;
    group: EventGroup;
    id: Scalars['Int'];
    type: EventType;
};

export type CheckInDetails = EventDetails & {
    __typename?: 'CheckInDetails';
    comments?: Maybe<Scalars['String']>;
    registrationData: AnimalRegistration;
};

export type CheckOut = Event & {
    __typename?: 'CheckOut';
    animalId: Scalars['Int'];
    author: Author;
    createTime: Scalars['String'];
    dateTime: Scalars['String'];
    details: CheckOutDetails;
    group: EventGroup;
    id: Scalars['Int'];
    type: EventType;
};

export type CheckOutDetails = EventDetails & {
    __typename?: 'CheckOutDetails';
    comments?: Maybe<Scalars['String']>;
    /** Will be used similar object as FormerAnimalOwner */
    document?: Maybe<Document>;
    newOwner: Scalars['String'];
    temporary: Scalars['Boolean'];
};

/** Represents a chip company. */
export type ChipCompany = {
    __typename?: 'ChipCompany';
    /** Chip company id */
    id: Scalars['String'];
    /** Chip company value */
    value: Scalars['String'];
};

/** Represents a chip install place. */
export type ChipInstallPlace = {
    __typename?: 'ChipInstallPlace';
    /** Chip install place id */
    id: Scalars['String'];
    /** Chip install place value */
    value: Scalars['String'];
};

/** Represents a color. */
export type Color = {
    __typename?: 'Color';
    /** Color id */
    id: Scalars['Int'];
    /** Species Id */
    speciesId?: Maybe<Scalars['Int']>;
    /** Species Name */
    speciesName?: Maybe<Scalars['String']>;
    /** Color name */
    value: Scalars['String'];
};

export type CreateAnimalInput = {
    /** Comments */
    comments?: InputMaybe<Scalars['String']>;
    /** AnimalDetails */
    details?: InputMaybe<AnimalDetailsInput>;
    /** Image File */
    image?: InputMaybe<Scalars['Upload']>;
    /** AnimalMicrochip */
    microchip?: InputMaybe<CreateAnimalMicrochipInput>;
    /** Animal name (128 characters max) */
    name?: InputMaybe<Scalars['String']>;
    /** AnimalRegistration */
    registration?: InputMaybe<AnimalRegistrationInput>;
    /** Status */
    status?: InputMaybe<AnimalStatus>;
};

export type CreateAnimalMicrochipInput = {
    /** Chip company code */
    chipCompanyCode: Scalars['Int'];
    /** Install date (UTC timestamp) */
    installDate?: InputMaybe<Scalars['String']>;
    /** Install place */
    installPlaceId: Scalars['Int'];
    /** Microchip id (255 characters max) */
    microchipId: Scalars['String'];
    /** Microchip status ('Implanted' or 'Removed') */
    status: MicrochipStatus;
};

export type CreateAnimalOwnerInput = {
    name: Scalars['Name'];
    phone?: InputMaybe<Scalars['Phone']>;
    surname?: InputMaybe<Scalars['Surname']>;
};

export type CreateGiveawayEventInput = {
    /** Animal id, e.g. 2 */
    animalId: Scalars['Int'];
    /** Event date in YYYY-MM-DD format */
    date?: InputMaybe<Scalars['Date']>;
    /** Former owner id */
    formerOwnerId: Scalars['Int'];
    /** Event reason */
    reason?: InputMaybe<Scalars['String']>;
    /** Registration date */
    registrationDate?: InputMaybe<Scalars['Date']>;
    /** Registration no */
    registrationNo?: InputMaybe<Scalars['String']>;
};

export type CreateOrganisationInput = {
    /** City (128 characters max) */
    city?: InputMaybe<Scalars['String']>;
    /** Country (128 characters max) */
    country?: InputMaybe<Scalars['String']>;
    /** Organization name (255 characters max) */
    name: Scalars['Name'];
    /** Phone (64 characters max) */
    phone?: InputMaybe<Scalars['Phone']>;
    /** Street address (255 characters max) */
    streetAddress?: InputMaybe<Scalars['String']>;
};

export type DeleteAnimalInput = {
    /** Animal id, for example 2 */
    id: Scalars['Int'];
};

export type Document = {
    __typename?: 'Document';
    name?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type Event = {
    animalId: Scalars['Int'];
    author: Author;
    createTime: Scalars['String'];
    dateTime: Scalars['String'];
    details: EventDetails;
    group: EventGroup;
    id: Scalars['Int'];
    type: EventType;
};

export type EventDetails = {
    comments?: Maybe<Scalars['String']>;
};

export enum EventGroup {
    General = 'General',
    Medical = 'Medical',
    Registration = 'Registration',
}

export enum EventType {
    CheckIn = 'CheckIn',
    CheckOut = 'CheckOut',
    Died = 'Died',
    GenderElimination = 'GenderElimination',
    Giveaway = 'Giveaway',
    Inspection = 'Inspection',
    LocationChange = 'LocationChange',
    Medication = 'Medication',
    Microchipping = 'Microchipping',
    Prophylaxis = 'Prophylaxis',
    Streetfind = 'Streetfind',
    Surgery = 'Surgery',
    TemporaryCare = 'TemporaryCare',
}

/** Represents a favorite animal. */
export type FavoriteAnimal = {
    __typename?: 'FavoriteAnimal';
    /** Animal id */
    animalId: Scalars['Int'];
    /** Modification time */
    modTime?: Maybe<Scalars['String']>;
    /** User id */
    userId: Scalars['String'];
};

/** Represents a gender. */
export type Gender = {
    __typename?: 'Gender';
    /** Gender id */
    id: Scalars['Int'];
    /** Gender name */
    value: Scalars['String'];
};

export type Giveaway = Event & {
    __typename?: 'Giveaway';
    animalId: Scalars['Int'];
    author: Author;
    createTime: Scalars['String'];
    dateTime: Scalars['String'];
    details: GiveawayDetails;
    group: EventGroup;
    id: Scalars['Int'];
    type: EventType;
};

export type GiveawayDetails = EventDetails & {
    __typename?: 'GiveawayDetails';
    comments?: Maybe<Scalars['String']>;
    formerOwner: AnimalOwner;
    reason?: Maybe<Scalars['String']>;
    registrationDate?: Maybe<Scalars['String']>;
    registrationNo?: Maybe<Scalars['String']>;
};

/** Represents Giveaway event */
export type GiveawayEvent = {
    __typename?: 'GiveawayEvent';
    /** Animal id */
    animalId: Scalars['Int'];
    /** Author */
    author: Author;
    /** Event date */
    date?: Maybe<Scalars['Date']>;
    /** Former owner id */
    formerOwnerId: Scalars['Int'];
    /** Event id */
    id: Scalars['Int'];
    /** Event reason */
    reason?: Maybe<Scalars['String']>;
    /** Registration date */
    registrationDate?: Maybe<Scalars['Date']>;
    /** Registration no */
    registrationNo?: Maybe<Scalars['String']>;
};

export type LocationChange = Event & {
    __typename?: 'LocationChange';
    animalId: Scalars['Int'];
    author: Author;
    createTime: Scalars['String'];
    dateTime: Scalars['String'];
    details: LocationChangeDetails;
    group: EventGroup;
    id: Scalars['Int'];
    type: EventType;
};

export type LocationChangeDetails = EventDetails & {
    __typename?: 'LocationChangeDetails';
    comments?: Maybe<Scalars['String']>;
    location: Scalars['String'];
};

export type Medication = Event & {
    __typename?: 'Medication';
    animalId: Scalars['Int'];
    author: Author;
    createTime: Scalars['String'];
    dateTime: Scalars['String'];
    details: MedicationDetails;
    group: EventGroup;
    id: Scalars['Int'];
    type: EventType;
};

export type MedicationDetails = EventDetails & {
    __typename?: 'MedicationDetails';
    comments?: Maybe<Scalars['String']>;
    expenses?: Maybe<Scalars['Float']>;
    treatment: Scalars['String'];
};

export enum MicrochipStatus {
    Implanted = 'Implanted',
    Removed = 'Removed',
}

export type Microchipping = Event & {
    __typename?: 'Microchipping';
    animalId: Scalars['Int'];
    author: Author;
    createTime: Scalars['String'];
    dateTime: Scalars['String'];
    details: MicrochippingDetails;
    group: EventGroup;
    id: Scalars['Int'];
    type: EventType;
};

export type MicrochippingDetails = EventDetails & {
    __typename?: 'MicrochippingDetails';
    comments?: Maybe<Scalars['String']>;
    microchip: AnimalMicrochip;
};

export type Mutation = {
    __typename?: 'Mutation';
    _empty?: Maybe<Scalars['String']>;
    /** Created animal */
    createAnimal?: Maybe<Animal>;
    createAnimalOwner?: Maybe<AnimalOwner>;
    /** Added animal to favorite animals */
    createFavoriteAnimal?: Maybe<FavoriteAnimal>;
    /** Create Giveaway event */
    createGiveawayEvent?: Maybe<GiveawayEvent>;
    createOrganization?: Maybe<Organization>;
    createStreetfindEvent?: Maybe<StreetfindEvent>;
    createUser?: Maybe<User>;
    /** Deleted animal */
    deleteAnimal?: Maybe<Animal>;
    /** Delete animal details */
    deleteAnimalDetails?: Maybe<AnimalDetails>;
    /** Deleted microchip */
    deleteAnimalMicrochip?: Maybe<AnimalMicrochip>;
    /** Delete animal registration */
    deleteAnimalRegistration?: Maybe<AnimalRegistration>;
    /** Removed animal from favorite animals */
    deleteFavoriteAnimal?: Maybe<FavoriteAnimal>;
    deleteOrganization?: Maybe<Organization>;
    deleteUser?: Maybe<User>;
    /** Updated animal */
    updateAnimal?: Maybe<Animal>;
    updateAnimalOwner?: Maybe<AnimalOwner>;
    /** Update Giveaway event */
    updateGiveawayEvent?: Maybe<GiveawayEvent>;
    updateOrganization?: Maybe<Organization>;
    updateUser?: Maybe<User>;
};

export type MutationCreateAnimalArgs = {
    input: CreateAnimalInput;
};

export type MutationCreateAnimalOwnerArgs = {
    input: CreateAnimalOwnerInput;
};

export type MutationCreateFavoriteAnimalArgs = {
    animalId: Scalars['Int'];
};

export type MutationCreateGiveawayEventArgs = {
    input: CreateGiveawayEventInput;
};

export type MutationCreateOrganizationArgs = {
    input: CreateOrganisationInput;
};

export type MutationCreateStreetfindEventArgs = {
    input: StreetfindEventInput;
};

export type MutationCreateUserArgs = {
    input: UserInput;
};

export type MutationDeleteAnimalArgs = {
    input: DeleteAnimalInput;
};

export type MutationDeleteAnimalDetailsArgs = {
    id: Scalars['Int'];
};

export type MutationDeleteAnimalMicrochipArgs = {
    animalId: Scalars['Int'];
    microchipId: Scalars['String'];
};

export type MutationDeleteAnimalRegistrationArgs = {
    id: Scalars['Int'];
};

export type MutationDeleteFavoriteAnimalArgs = {
    animalId: Scalars['Int'];
};

export type MutationDeleteOrganizationArgs = {
    id: Scalars['Int'];
};

export type MutationDeleteUserArgs = {
    id: Scalars['String'];
};

export type MutationUpdateAnimalArgs = {
    input: UpdateAnimalInput;
};

export type MutationUpdateAnimalOwnerArgs = {
    input: UpdateAnimalOwnerInput;
};

export type MutationUpdateGiveawayEventArgs = {
    input: UpdateGiveawayEventInput;
};

export type MutationUpdateOrganizationArgs = {
    input: UpdateOrganizationInput;
};

export type MutationUpdateUserArgs = {
    input: UserInput;
};

export type Organization = {
    __typename?: 'Organization';
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    deleteTime?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    modTime: Scalars['String'];
    name?: Maybe<Scalars['Name']>;
    phone?: Maybe<Scalars['Phone']>;
    streetAddress?: Maybe<Scalars['String']>;
};

export type OrganizationTask = {
    __typename?: 'OrganizationTask';
    description?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    isDone?: Maybe<Scalars['Boolean']>;
    organization: Scalars['Int'];
    title?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']>;
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']>;
    totalCount: Scalars['Int'];
};

export type Query = {
    __typename?: 'Query';
    _empty?: Maybe<Scalars['String']>;
    /**
     * Lookup an animal.
     *
     * Examples:
     *
     * animal(id: 1)
     */
    animal?: Maybe<Animal>;
    /**
     * Get a animal owner with a specific ID.
     *
     * Examples:
     *
     * animalOwner(id: 1)
     */
    animalOwner?: Maybe<AnimalOwner>;
    /**
     * Get all animal owners.
     *
     * Examples:
     *
     * animalOwners
     */
    animalOwners?: Maybe<Array<Maybe<AnimalOwner>>>;
    /**
     * Get all animals or animals filtered by animal ids, species, gender and breed ids.
     *
     * Examples:
     *
     * animals
     * animals(ids: [1, 2, 3])
     * animals(species: [1, 4], gender: [1, 2], breed: [205, 51])
     * animals(first: 5)
     */
    animals?: Maybe<AnimalsConnection>;
    /**
     * Get all breeds.
     *
     * Examples:
     *
     * breeds(species: "2", language: "lt")
     */
    breeds?: Maybe<Array<Maybe<BreedWithSpecies>>>;
    /**
     * Get all chipCompanies.
     *
     * Examples:
     *
     * chipCompanies(language: "lt")
     */
    chipCompanies?: Maybe<Array<Maybe<ChipCompany>>>;
    /**
     * Get all chipInstallPlaces.
     *
     * Examples:
     *
     * chipInstallPlaces(language: "lt")
     */
    chipInstallPlaces?: Maybe<Array<Maybe<ChipInstallPlace>>>;
    /**
     * Get all colors.
     *
     * Examples:
     *
     * colors(language: "lt")
     */
    colors?: Maybe<Array<Maybe<Color>>>;
    /**
     * Get all events
     *
     * Example:
     * events
     * events(animalId: 1)
     */
    events?: Maybe<Array<Maybe<Event>>>;
    /**
     * Get all favorite animals.
     *
     * Examples:
     *
     * favoriteAnimals
     */
    favoriteAnimals?: Maybe<Array<Maybe<Animal>>>;
    /**
     * Get all genders.
     *
     * Examples:
     *
     * genders(language: "lt")
     */
    genders?: Maybe<Array<Maybe<Gender>>>;
    municipalities?: Maybe<Array<Maybe<Municipality>>>;
    /**
     * Lookup an organization.
     *
     * Examples:
     *
     * organization(id: 1)
     */
    organization?: Maybe<Organization>;
    organizationTask?: Maybe<OrganizationTask>;
    organizationTasks?: Maybe<Array<Maybe<OrganizationTask>>>;
    /**
     * Get all organizations.
     *
     * Examples:
     *
     * organizations
     */
    organizations?: Maybe<Array<Maybe<Organization>>>;
    registration?: Maybe<AnimalRegistration>;
    /**
     * Get all species.
     *
     * Examples:
     *
     * species(language: "lt")
     */
    species?: Maybe<Array<Maybe<Species>>>;
    /**
     * Get all statuses.
     *
     * Examples:
     *
     * statuses(language: "lt")
     */
    statuses?: Maybe<Array<Maybe<Status>>>;
    streetfindEvents?: Maybe<Array<Maybe<StreetfindEvent>>>;
    /**
     * Lookup an user.
     *
     * Examples:
     *
     * user(id: 1)
     */
    user?: Maybe<User>;
    /**
     * Get all users.
     *
     * Examples:
     *
     * users
     */
    users?: Maybe<Array<Maybe<User>>>;
};

export type QueryAnimalArgs = {
    id: Scalars['Int'];
};

export type QueryAnimalOwnerArgs = {
    id: Scalars['Int'];
};

export type QueryAnimalsArgs = {
    after?: InputMaybe<Scalars['String']>;
    before?: InputMaybe<Scalars['String']>;
    breed?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    first?: InputMaybe<Scalars['Int']>;
    gender?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    isFavoriteOnly?: InputMaybe<Scalars['Boolean']>;
    last?: InputMaybe<Scalars['Int']>;
    species?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type QueryBreedsArgs = {
    language: Scalars['String'];
    species?: InputMaybe<Scalars['String']>;
};

export type QueryChipCompaniesArgs = {
    language: Scalars['String'];
};

export type QueryChipInstallPlacesArgs = {
    language: Scalars['String'];
};

export type QueryColorsArgs = {
    language: Scalars['String'];
    speciesId?: InputMaybe<Scalars['Int']>;
};

export type QueryEventsArgs = {
    animalId?: InputMaybe<Scalars['Int']>;
    groups?: InputMaybe<Array<InputMaybe<EventGroup>>>;
};

export type QueryGendersArgs = {
    language: Scalars['String'];
};

export type QueryOrganizationArgs = {
    id: Scalars['Int'];
};

export type QueryOrganizationTaskArgs = {
    id?: InputMaybe<Scalars['Int']>;
};

export type QueryRegistrationArgs = {
    id: Scalars['Int'];
};

export type QuerySpeciesArgs = {
    language: Scalars['String'];
};

export type QueryStatusesArgs = {
    language: Scalars['String'];
};

export type QueryUserArgs = {
    id: Scalars['String'];
};

export enum RegistrationStatus {
    Active = 'Active',
    Inactive = 'Inactive',
}

/** Represents an user role. */
export type Role = {
    __typename?: 'Role';
    organizationId: Scalars['Int'];
    roleType?: Maybe<Scalars['String']>;
};

/** Represents a breed. */
export type Species = {
    __typename?: 'Species';
    /** Species id */
    id: Scalars['Int'];
    /** Species name */
    value: Scalars['String'];
};

/** Represents a status. */
export type Status = {
    __typename?: 'Status';
    /** Status id */
    id: Scalars['String'];
    /** Status name */
    value: Scalars['String'];
};

export type Streetfind = Event & {
    __typename?: 'Streetfind';
    animalId: Scalars['Int'];
    author: Author;
    createTime: Scalars['String'];
    dateTime: Scalars['String'];
    details: StreetfindDetails;
    group: EventGroup;
    id: Scalars['Int'];
    type: EventType;
};

export type StreetfindDetails = EventDetails & {
    __typename?: 'StreetfindDetails';
    comments?: Maybe<Scalars['String']>;
    houseNo?: Maybe<Scalars['String']>;
    municipalityId: Scalars['Int'];
    registrationDate?: Maybe<Scalars['String']>;
    registrationNo?: Maybe<Scalars['String']>;
    street?: Maybe<Scalars['String']>;
};

export type StreetfindEvent = {
    __typename?: 'StreetfindEvent';
    animalId: Scalars['Int'];
    author: Author;
    comments?: Maybe<Scalars['String']>;
    date?: Maybe<Scalars['Date']>;
    houseNo?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    municipalityId: Scalars['Int'];
    street: Scalars['String'];
};

export type StreetfindEventInput = {
    animalId: Scalars['Int'];
    comments?: InputMaybe<Scalars['String']>;
    date?: InputMaybe<Scalars['Date']>;
    /** Max 8 characters */
    houseNo?: InputMaybe<Scalars['String']>;
    /** Any id from municipalities query */
    municipalityId: Scalars['Int'];
    /** Max 255 characters */
    street: Scalars['String'];
};

export type Subscription = {
    __typename?: 'Subscription';
    organizationCreated?: Maybe<Organization>;
};

export type UpdateAnimalInput = {
    /** Comments */
    comments?: InputMaybe<Scalars['String']>;
    /** AnimalDetails */
    details?: InputMaybe<AnimalDetailsInput>;
    /** Animal id, for example 2 */
    id: Scalars['Int'];
    /** Image File */
    image?: InputMaybe<Scalars['Upload']>;
    /** AnimalMicrochip */
    microchip?: InputMaybe<UpdateAnimalMicrochipInput>;
    /** Animal name (128 characters max) */
    name?: InputMaybe<Scalars['String']>;
    /** AnimalRegistration */
    registration?: InputMaybe<AnimalRegistrationInput>;
    /** Status */
    status?: InputMaybe<AnimalStatus>;
};

export type UpdateAnimalMicrochipInput = {
    /** Chip company code (255 characters max, any id from query chipCompanies) */
    chipCompanyCode?: InputMaybe<Scalars['Int']>;
    /** Install date */
    installDate?: InputMaybe<Scalars['Date']>;
    /** Install place (any id from query chipInstallPlaces) */
    installPlaceId?: InputMaybe<Scalars['Int']>;
    /** Microchip status ('Implanted' or 'Removed') */
    status?: InputMaybe<MicrochipStatus>;
};

export type UpdateAnimalOwnerInput = {
    /** Animal owner ID, e.g., 1 */
    id: Scalars['Int'];
    name?: InputMaybe<Scalars['Name']>;
    phone?: InputMaybe<Scalars['Phone']>;
    surname?: InputMaybe<Scalars['Surname']>;
};

export type UpdateGiveawayEventInput = {
    /** Animal id, e.g. 2 */
    animalId?: InputMaybe<Scalars['Int']>;
    /** Event date in YYYY-MM-DD format */
    date?: InputMaybe<Scalars['Date']>;
    /** Former owner id */
    formerOwnerId?: InputMaybe<Scalars['Int']>;
    /** Event id */
    id: Scalars['Int'];
    /** Event reason */
    reason?: InputMaybe<Scalars['String']>;
    /** Registration date */
    registrationDate?: InputMaybe<Scalars['Date']>;
    /** Registration no */
    registrationNo?: InputMaybe<Scalars['String']>;
};

export type UpdateOrganizationInput = {
    /** City (128 characters max) */
    city?: InputMaybe<Scalars['String']>;
    /** Country (128 characters max) */
    country?: InputMaybe<Scalars['String']>;
    id: Scalars['Int'];
    name?: InputMaybe<Scalars['Name']>;
    phone?: InputMaybe<Scalars['Phone']>;
    /** Street address (255 characters max) */
    streetAddress?: InputMaybe<Scalars['String']>;
};

/** Represents an user. */
export type User = {
    __typename?: 'User';
    email: Scalars['String'];
    id: Scalars['String'];
    modTime?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['Name']>;
    roles?: Maybe<Array<Maybe<Role>>>;
    surname?: Maybe<Scalars['Surname']>;
    username: Scalars['String'];
};

export type UserInput = {
    /** User valid email (255 characters max) */
    email?: InputMaybe<Scalars['Email']>;
    /** User id  (255 characters max) */
    id: Scalars['String'];
    name?: InputMaybe<Scalars['Name']>;
    surname?: InputMaybe<Scalars['Surname']>;
    /** User username (128 characters max) */
    username?: InputMaybe<Scalars['String']>;
};

export type Municipality = {
    __typename?: 'municipality';
    id: Scalars['Int'];
    name: Scalars['String'];
};
