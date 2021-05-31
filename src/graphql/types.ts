export type Maybe<T> = T | null;
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
    /** Animal id, for example 2 */
    id: Scalars['Int'];
    /** Animal name */
    name?: Maybe<Scalars['String']>;
    /** Organization id */
    organization: Scalars['Int'];
    /**
     * Animal status by language.
     * Examples: status(language: "en") or just status - will return default language ("lt") translation
     */
    status?: Maybe<Scalars['String']>;
    /** Image URL */
    imageUrl?: Maybe<Scalars['String']>;
    /** Comments */
    comments?: Maybe<Scalars['String']>;
    /** Modification time */
    modTime?: Maybe<Scalars['String']>;
    /** Animal active registration info */
    registration?: Maybe<AnimalRegistration>;
    /** Animal implanted microchip info */
    microchip?: Maybe<AnimalMicrochip>;
    /** Animal details */
    details?: Maybe<AnimalDetails>;
};

/** Represents an animal. */
export type AnimalStatusArgs = {
    language?: Maybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetails = {
    __typename?: 'AnimalDetails';
    /** Animal id, for example 2 */
    animalId: Scalars['Int'];
    /**
     * Animal breed by language.
     * Examples: breed(language: "en") or just breed - will return default language ("lt") translation
     */
    breed?: Maybe<Breed>;
    /**
     * Animal species by language
     * Examples: species(language: "en") or just species - will return default language ("lt") translation
     */
    species?: Maybe<Species>;
    /**
     * Animal gender by language.
     * Examples: gender(language: "en") or just gender - will return default language ("lt") translation
     */
    gender?: Maybe<Gender>;
    /**
     * Animal color by language
     * Examples: color(language: "en") or just color - will return default language ("lt") translation
     */
    color?: Maybe<Color>;
    /** Animal date of birth */
    birthDate?: Maybe<Scalars['String']>;
    /** Animal weight (kg) */
    weight?: Maybe<Scalars['Float']>;
    /** Animal allergy */
    allergy?: Maybe<Scalars['String']>;
    /** Animal food */
    food?: Maybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetailsBreedArgs = {
    language?: Maybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetailsSpeciesArgs = {
    language?: Maybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetailsGenderArgs = {
    language?: Maybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetailsColorArgs = {
    language?: Maybe<Scalars['String']>;
};

export type AnimalDetailsInput = {
    /** Animal breed id (any value from 'breeds' query) */
    breedId?: Maybe<Scalars['Int']>;
    /** Animal gender (any value from 'genders' query) */
    genderId?: Maybe<Scalars['Int']>;
    /** Animal color (any value from 'colors' query) */
    colorId?: Maybe<Scalars['Int']>;
    /** Animal date of birth (year) */
    birthDate?: Maybe<Scalars['String']>;
    /** Animal weight (kg) */
    weight?: Maybe<Scalars['Int']>;
    /** Animal allergy */
    allergy?: Maybe<Scalars['String']>;
    /** Animal food */
    food?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type AnimalEdge = {
    __typename?: 'AnimalEdge';
    /** The item at the end of the edge */
    node?: Maybe<Animal>;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};

/** Represents an animal microchip. */
export type AnimalMicrochip = {
    __typename?: 'AnimalMicrochip';
    /** Animal id, for example 2 */
    animalId: Scalars['Int'];
    /** Microchip id */
    microchipId: Scalars['String'];
    /** Chip company code */
    chipCompanyCode: Scalars['Int'];
    /** Microchip install date */
    installDate?: Maybe<Scalars['String']>;
    /** Microchip install place */
    installPlaceId: Scalars['Int'];
    /**
     * Microchip status ('Implanted' or 'Removed') translation
     * Examples: status(language: "en") or just status - will return default language ("lt") translation
     */
    status?: Maybe<Scalars['String']>;
};

/** Represents an animal microchip. */
export type AnimalMicrochipStatusArgs = {
    language?: Maybe<Scalars['String']>;
};

/** Represents a animal owner. */
export type AnimalOwner = {
    __typename?: 'AnimalOwner';
    /** Animal owner ID, e.g., 1 */
    id: Scalars['Int'];
    /** Animal owner name */
    name: Scalars['String'];
    /** Animal owner surname */
    surname?: Maybe<Scalars['String']>;
    /** Animal owner phone number */
    phone?: Maybe<Scalars['String']>;
};

/** Represents animal registration */
export type AnimalRegistration = {
    __typename?: 'AnimalRegistration';
    /** Registration number */
    registrationNo: Scalars['String'];
    /** Registration date */
    registrationDate?: Maybe<Scalars['String']>;
    /**
     * Registration status ('Active' or 'Inactive') translation
     * Examples: status(language: "en") or just status - will return default language ("lt") translation
     */
    status?: Maybe<Scalars['String']>;
};

/** Represents animal registration */
export type AnimalRegistrationStatusArgs = {
    language?: Maybe<Scalars['String']>;
};

export type AnimalRegistrationInput = {
    /** Registration number (255 characters max) */
    registrationNo: Scalars['String'];
    /** Registration date (UTC timestamp) */
    registrationDate?: Maybe<Scalars['String']>;
    /** Registration status ('Active' or 'Inactive') */
    status?: Maybe<RegistrationStatus>;
};

export enum AnimalStatus {
    Healthy = 'healthy',
    Vaccinated = 'vaccinated',
    Sick = 'sick',
    Adopted = 'adopted',
}

/** A connection to animals. */
export type AnimalsConnection = {
    __typename?: 'AnimalsConnection';
    /** Information for pagination. */
    pageInfo: PageInfo;
    /** A list of animal edges. */
    edges?: Maybe<Array<Maybe<AnimalEdge>>>;
};

/** Represents a breed. */
export type Breed = {
    __typename?: 'Breed';
    /** Breed id */
    id: Scalars['Int'];
    /** Breed abbreviation */
    abbreviation: Scalars['String'];
    /** Breed name */
    value: Scalars['String'];
};

export type CheckIn = Event & {
    __typename?: 'CheckIn';
    id: Scalars['Int'];
    animalId: Scalars['Int'];
    group: EventGroup;
    type: EventType;
    dateTime: Scalars['String'];
    createTime: Scalars['String'];
    author: Scalars['String'];
    details: CheckInDetails;
};

export type CheckInDetails = EventDetails & {
    __typename?: 'CheckInDetails';
    registrationData: AnimalRegistration;
    comments?: Maybe<Scalars['String']>;
};

export type CheckOut = Event & {
    __typename?: 'CheckOut';
    id: Scalars['Int'];
    animalId: Scalars['Int'];
    group: EventGroup;
    type: EventType;
    dateTime: Scalars['String'];
    createTime: Scalars['String'];
    author: Scalars['String'];
    details: CheckOutDetails;
};

export type CheckOutDetails = EventDetails & {
    __typename?: 'CheckOutDetails';
    temporary: Scalars['Boolean'];
    newOwner: Scalars['String'];
    /** Will be used similar object as FormerAnimalOwner */
    document?: Maybe<Document>;
    comments?: Maybe<Scalars['String']>;
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
    /** Color name */
    value: Scalars['String'];
};

export type CreateAnimalInput = {
    /** Animal name (128 characters max) */
    name?: Maybe<Scalars['String']>;
    /** Organization id */
    organization: Scalars['Int'];
    /** Status */
    status?: Maybe<AnimalStatus>;
    /** Image File */
    image?: Maybe<Scalars['Upload']>;
    /** Comments */
    comments?: Maybe<Scalars['String']>;
    /** AnimalRegistration */
    registration: AnimalRegistrationInput;
    /** AnimalDetails */
    details?: Maybe<AnimalDetailsInput>;
    /** AnimalMicrochip */
    microchip?: Maybe<CreateAnimalMicrochipInput>;
};

export type CreateAnimalMicrochipInput = {
    /** Microchip id (255 characters max) */
    microchipId: Scalars['String'];
    /** Chip company code */
    chipCompanyCode: Scalars['Int'];
    /** Install date (UTC timestamp) */
    installDate?: Maybe<Scalars['String']>;
    /** Install place */
    installPlaceId: Scalars['Int'];
    /** Microchip status ('Implanted' or 'Removed') */
    status: MicrochipStatus;
};

export type CreateAnimalOwnerInput = {
    /** Animal owner name (255 characters max) */
    name: Scalars['Name'];
    /** Animal owner surname (255 characters max) */
    surname: Scalars['Surname'];
    /** Animal owner phone number (+370XXXXXXXX) */
    phone?: Maybe<Scalars['Phone']>;
};

export type CreateGivenAwayEventInput = {
    /** Former owner id */
    formerOwnerId: Scalars['Int'];
    /** Event date in YYYY-MM-DD format */
    date?: Maybe<Scalars['Date']>;
    /** Animal id, e.g. 2 */
    animalId: Scalars['Int'];
    /** Event reason */
    reason?: Maybe<Scalars['String']>;
    /** Author */
    author: Scalars['String'];
};

export type CreateOrganisationInput = {
    /** Organization name (255 characters max) */
    name: Scalars['String'];
    /** Country (128 characters max) */
    country?: Maybe<Scalars['String']>;
    /** City (128 characters max) */
    city?: Maybe<Scalars['String']>;
    /** Street address (255 characters max) */
    streetAddress?: Maybe<Scalars['String']>;
    /** Phone (64 characters max) */
    phone?: Maybe<Scalars['String']>;
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
    id: Scalars['Int'];
    animalId: Scalars['Int'];
    group: EventGroup;
    type: EventType;
    dateTime: Scalars['String'];
    createTime: Scalars['String'];
    author: Scalars['String'];
    details: EventDetails;
};

export type EventDetails = {
    comments?: Maybe<Scalars['String']>;
};

export enum EventGroup {
    General = 'General',
    Medical = 'Medical',
}

export enum EventType {
    GivenAway = 'GivenAway',
    Found = 'Found',
    CheckIn = 'CheckIn',
    CheckOut = 'CheckOut',
    Died = 'Died',
    TemporaryCare = 'TemporaryCare',
    Microchipping = 'Microchipping',
    LocationChange = 'LocationChange',
    Medication = 'Medication',
    Prophylaxis = 'Prophylaxis',
    Surgery = 'Surgery',
    GenderElimination = 'GenderElimination',
    Inspection = 'Inspection',
}

/** Represents a favorite animal. */
export type FavoriteAnimal = {
    __typename?: 'FavoriteAnimal';
    /** Animal id */
    animalId: Scalars['Int'];
    /** User id */
    userId: Scalars['String'];
    /** Modification time */
    modTime?: Maybe<Scalars['String']>;
};

export type Found = Event & {
    __typename?: 'Found';
    id: Scalars['Int'];
    animalId: Scalars['Int'];
    group: EventGroup;
    type: EventType;
    dateTime: Scalars['String'];
    createTime: Scalars['String'];
    author: Scalars['String'];
    details: FoundDetails;
};

export type FoundDetails = EventDetails & {
    __typename?: 'FoundDetails';
    street?: Maybe<Scalars['String']>;
    houseNo?: Maybe<Scalars['String']>;
    municipalityId: Scalars['Int'];
    comments?: Maybe<Scalars['String']>;
};

export type FoundEvent = {
    __typename?: 'FoundEvent';
    id: Scalars['Int'];
    street: Scalars['String'];
    houseNo?: Maybe<Scalars['String']>;
    municipalityId: Scalars['Int'];
    date?: Maybe<Scalars['Date']>;
    animalId: Scalars['Int'];
    author: Scalars['String'];
    comments?: Maybe<Scalars['String']>;
};

export type FoundEventInput = {
    street: Scalars['String'];
    houseNo?: Maybe<Scalars['String']>;
    municipalityId: Scalars['Int'];
    date?: Maybe<Scalars['Date']>;
    animalId: Scalars['Int'];
    author: Scalars['String'];
    comments?: Maybe<Scalars['String']>;
};

/** Represents a gender. */
export type Gender = {
    __typename?: 'Gender';
    /** Gender id */
    id: Scalars['String'];
    /** Gender name */
    value: Scalars['String'];
};

export type GivenAway = Event & {
    __typename?: 'GivenAway';
    id: Scalars['Int'];
    animalId: Scalars['Int'];
    group: EventGroup;
    type: EventType;
    dateTime: Scalars['String'];
    createTime: Scalars['String'];
    author: Scalars['String'];
    details: GivenAwayDetails;
};

export type GivenAwayDetails = EventDetails & {
    __typename?: 'GivenAwayDetails';
    formerOwner: AnimalOwner;
    reason?: Maybe<Scalars['String']>;
    comments?: Maybe<Scalars['String']>;
};

/** Represents given away animal event */
export type GivenAwayEvent = {
    __typename?: 'GivenAwayEvent';
    /** Event id */
    id: Scalars['Int'];
    /** Former owner id */
    formerOwnerId: Scalars['Int'];
    /** Event date */
    date?: Maybe<Scalars['Date']>;
    /** Animal id */
    animalId: Scalars['Int'];
    /** Event reason */
    reason?: Maybe<Scalars['String']>;
    /** Author */
    author: Scalars['String'];
};

export type LocationChange = Event & {
    __typename?: 'LocationChange';
    id: Scalars['Int'];
    animalId: Scalars['Int'];
    group: EventGroup;
    type: EventType;
    dateTime: Scalars['String'];
    createTime: Scalars['String'];
    author: Scalars['String'];
    details: LocationChangeDetails;
};

export type LocationChangeDetails = EventDetails & {
    __typename?: 'LocationChangeDetails';
    location: Scalars['String'];
    comments?: Maybe<Scalars['String']>;
};

export type Medication = Event & {
    __typename?: 'Medication';
    id: Scalars['Int'];
    animalId: Scalars['Int'];
    group: EventGroup;
    type: EventType;
    dateTime: Scalars['String'];
    createTime: Scalars['String'];
    author: Scalars['String'];
    details: MedicationDetails;
};

export type MedicationDetails = EventDetails & {
    __typename?: 'MedicationDetails';
    treatment: Scalars['String'];
    expenses?: Maybe<Scalars['Float']>;
    comments?: Maybe<Scalars['String']>;
};

export enum MicrochipStatus {
    Implanted = 'Implanted',
    Removed = 'Removed',
}

export type Microchipping = Event & {
    __typename?: 'Microchipping';
    id: Scalars['Int'];
    animalId: Scalars['Int'];
    group: EventGroup;
    type: EventType;
    dateTime: Scalars['String'];
    createTime: Scalars['String'];
    author: Scalars['String'];
    details: MicrochippingDetails;
};

export type MicrochippingDetails = EventDetails & {
    __typename?: 'MicrochippingDetails';
    microchip: AnimalMicrochip;
    comments?: Maybe<Scalars['String']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    /** Created animal */
    createAnimal?: Maybe<Animal>;
    /** Updated animal */
    updateAnimal?: Maybe<Animal>;
    /** Deleted animal */
    deleteAnimal?: Maybe<Animal>;
    /** Delete animal details */
    deleteAnimalDetails?: Maybe<AnimalDetails>;
    createFoundEvent?: Maybe<FoundEvent>;
    /** Deleted microchip */
    deleteAnimalMicrochip?: Maybe<AnimalMicrochip>;
    createAnimalOwner?: Maybe<AnimalOwner>;
    updateAnimalOwner?: Maybe<AnimalOwner>;
    /** Delete animal registration */
    deleteAnimalRegistration?: Maybe<AnimalRegistration>;
    /** Added animal to favorite animals */
    createFavoriteAnimal?: Maybe<FavoriteAnimal>;
    /** Removed animal from favorite animals */
    deleteFavoriteAnimal?: Maybe<FavoriteAnimal>;
    /** Created animal event given away */
    createGivenAwayEvent?: Maybe<GivenAwayEvent>;
    /** Updated animal event given away */
    updateGivenAwayEvent?: Maybe<GivenAwayEvent>;
    _empty?: Maybe<Scalars['String']>;
    /** Created organization */
    createOrganization?: Maybe<Organization>;
    /** Updated organization */
    updateOrganization?: Maybe<Organization>;
    /** Deleted organization */
    deleteOrganization?: Maybe<Organization>;
    /** Created user */
    createUser?: Maybe<User>;
    /** Updated user */
    updateUser?: Maybe<User>;
    /** Deleted user */
    deleteUser?: Maybe<User>;
};

export type MutationCreateAnimalArgs = {
    input: CreateAnimalInput;
};

export type MutationUpdateAnimalArgs = {
    input: UpdateAnimalInput;
};

export type MutationDeleteAnimalArgs = {
    input: DeleteAnimalInput;
};

export type MutationDeleteAnimalDetailsArgs = {
    id: Scalars['Int'];
};

export type MutationCreateFoundEventArgs = {
    input: FoundEventInput;
};

export type MutationDeleteAnimalMicrochipArgs = {
    animalId: Scalars['Int'];
    microchipId: Scalars['String'];
};

export type MutationCreateAnimalOwnerArgs = {
    input: CreateAnimalOwnerInput;
};

export type MutationUpdateAnimalOwnerArgs = {
    input: UpdateAnimalOwnerInput;
};

export type MutationDeleteAnimalRegistrationArgs = {
    id: Scalars['Int'];
};

export type MutationCreateFavoriteAnimalArgs = {
    animalId: Scalars['Int'];
};

export type MutationDeleteFavoriteAnimalArgs = {
    animalId: Scalars['Int'];
};

export type MutationCreateGivenAwayEventArgs = {
    input: CreateGivenAwayEventInput;
};

export type MutationUpdateGivenAwayEventArgs = {
    input: UpdateGivenAwayEventInput;
};

export type MutationCreateOrganizationArgs = {
    input: CreateOrganisationInput;
};

export type MutationUpdateOrganizationArgs = {
    input: UpdateOrganizationInput;
};

export type MutationDeleteOrganizationArgs = {
    id: Scalars['Int'];
};

export type MutationCreateUserArgs = {
    input: UserInput;
};

export type MutationUpdateUserArgs = {
    input: UserInput;
};

export type MutationDeleteUserArgs = {
    id: Scalars['String'];
};

/** Represents an organization. */
export type Organization = {
    __typename?: 'Organization';
    /** Organization id, for example 2 */
    id: Scalars['Int'];
    /** Organization name */
    name?: Maybe<Scalars['String']>;
    /** Country */
    country?: Maybe<Scalars['String']>;
    /** City */
    city?: Maybe<Scalars['String']>;
    /** Comments */
    streetAddress?: Maybe<Scalars['String']>;
    /** Phone */
    phone?: Maybe<Scalars['String']>;
    /** Modification time */
    modTime: Scalars['String'];
    /** Delete time */
    deleteTime?: Maybe<Scalars['String']>;
};

export type OrganizationTask = {
    __typename?: 'OrganizationTask';
    id: Scalars['Int'];
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    organization: Scalars['Int'];
    isDone?: Maybe<Scalars['Boolean']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: 'PageInfo';
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars['String']>;
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
    __typename?: 'Query';
    /**
     * Lookup an animal.
     *
     * Examples:
     *
     * animal(id: 1)
     */
    animal?: Maybe<Animal>;
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
    foundEvents?: Maybe<Array<Maybe<FoundEvent>>>;
    /**
     * Get all animal owners.
     *
     * Examples:
     *
     * animalOwners
     */
    animalOwners?: Maybe<Array<Maybe<AnimalOwner>>>;
    /**
     * Get a animal owner with a specific ID.
     *
     * Examples:
     *
     * animalOwner(id: 1)
     */
    animalOwner?: Maybe<AnimalOwner>;
    /**
     * Get all breeds.
     *
     * Examples:
     *
     * breeds(species: "2", language: "lt")
     */
    breeds?: Maybe<Array<Maybe<Breed>>>;
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
    /**
     * Get all organizations.
     *
     * Examples:
     *
     * organizations
     */
    organizations?: Maybe<Array<Maybe<Organization>>>;
    organizationTasks?: Maybe<Array<Maybe<OrganizationTask>>>;
    organizationTask?: Maybe<OrganizationTask>;
    _empty?: Maybe<Scalars['String']>;
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

export type QueryAnimalsArgs = {
    ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
    species?: Maybe<Array<Maybe<Scalars['Int']>>>;
    gender?: Maybe<Array<Maybe<Scalars['Int']>>>;
    breed?: Maybe<Array<Maybe<Scalars['Int']>>>;
    after?: Maybe<Scalars['String']>;
    first?: Maybe<Scalars['Int']>;
    before?: Maybe<Scalars['String']>;
    last?: Maybe<Scalars['Int']>;
};

export type QueryAnimalOwnerArgs = {
    id: Scalars['Int'];
};

export type QueryBreedsArgs = {
    species: Scalars['String'];
    language: Scalars['String'];
};

export type QueryChipCompaniesArgs = {
    language: Scalars['String'];
};

export type QueryChipInstallPlacesArgs = {
    language: Scalars['String'];
};

export type QueryColorsArgs = {
    language: Scalars['String'];
};

export type QueryEventsArgs = {
    animalId?: Maybe<Scalars['Int']>;
    groups?: Maybe<Array<Maybe<EventGroup>>>;
};

export type QueryGendersArgs = {
    language: Scalars['String'];
};

export type QueryOrganizationArgs = {
    id: Scalars['Int'];
};

export type QueryOrganizationTaskArgs = {
    id?: Maybe<Scalars['Int']>;
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
    /** Organization id */
    organizationId: Scalars['Int'];
    /** User role in organization */
    roleType?: Maybe<Scalars['String']>;
};

/** Represents a breed. */
export type Species = {
    __typename?: 'Species';
    /** Species id */
    id: Scalars['String'];
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

export type Subscription = {
    __typename?: 'Subscription';
    organizationCreated?: Maybe<Organization>;
};

export type UpdateAnimalInput = {
    /** Animal id, for example 2 */
    id: Scalars['Int'];
    /** Animal name (128 characters max) */
    name?: Maybe<Scalars['String']>;
    /** Organization id */
    organization?: Maybe<Scalars['Int']>;
    /** Status */
    status?: Maybe<AnimalStatus>;
    /** Image File */
    image?: Maybe<Scalars['Upload']>;
    /** Comments */
    comments?: Maybe<Scalars['String']>;
    /** AnimalRegistration */
    registration?: Maybe<AnimalRegistrationInput>;
    /** AnimalDetails */
    details?: Maybe<AnimalDetailsInput>;
    /** AnimalMicrochip */
    microchip?: Maybe<UpdateAnimalMicrochipInput>;
};

export type UpdateAnimalMicrochipInput = {
    /** Chip company code (255 characters max) */
    chipCompanyCode?: Maybe<Scalars['Int']>;
    /** Install date */
    installDate?: Maybe<Scalars['String']>;
    /** Install place */
    installPlaceId?: Maybe<Scalars['Int']>;
    /** Microchip status ('Implanted' or 'Removed') */
    status?: Maybe<MicrochipStatus>;
};

export type UpdateAnimalOwnerInput = {
    /** Animal owner ID, e.g., 1 */
    id: Scalars['Int'];
    /** Animal owner name (255 characters max) */
    name?: Maybe<Scalars['Name']>;
    /** Animal owner surname (255 characters max) */
    surname?: Maybe<Scalars['Surname']>;
    /** Animal owner phone number (+370XXXXXXXX) */
    phone?: Maybe<Scalars['Phone']>;
};

export type UpdateGivenAwayEventInput = {
    /** Event id */
    id: Scalars['Int'];
    /** Former owner id */
    formerOwnerId?: Maybe<Scalars['Int']>;
    /** Event date in YYYY-MM-DD format */
    date?: Maybe<Scalars['Date']>;
    /** Animal id, e.g. 2 */
    animalId?: Maybe<Scalars['Int']>;
    /** Event reason */
    reason?: Maybe<Scalars['String']>;
    /** Author */
    author: Scalars['String'];
};

export type UpdateOrganizationInput = {
    /** Organization id, for example 2 */
    id: Scalars['Int'];
    /** Organization name (255 characters max) */
    name?: Maybe<Scalars['String']>;
    /** Country (128 characters max) */
    country?: Maybe<Scalars['String']>;
    /** City (128 characters max) */
    city?: Maybe<Scalars['String']>;
    /** Street address (255 characters max) */
    streetAddress?: Maybe<Scalars['String']>;
    /** Phone (64 characters max) */
    phone?: Maybe<Scalars['String']>;
};

/** Represents an user. */
export type User = {
    __typename?: 'User';
    /** User id, for example 2 */
    id: Scalars['String'];
    /** User username */
    username: Scalars['String'];
    /** User name */
    name?: Maybe<Scalars['String']>;
    /** User surname */
    surname?: Maybe<Scalars['String']>;
    /** User email */
    email?: Maybe<Scalars['String']>;
    /** User roles */
    roles?: Maybe<Array<Maybe<Role>>>;
    /** Modification time */
    modTime?: Maybe<Scalars['String']>;
};

export type UserInput = {
    /** User id  (255 characters max) */
    id: Scalars['String'];
    /** User username (128 characters max) */
    username?: Maybe<Scalars['String']>;
    /** User name (255 characters max) */
    name?: Maybe<Scalars['String']>;
    /** User surname (255 characters max) */
    surname?: Maybe<Scalars['String']>;
    /** User email (255 characters max) */
    email?: Maybe<Scalars['String']>;
};

export type Municipality = {
    __typename?: 'municipality';
    id: Scalars['Int'];
    name: Scalars['String'];
};
