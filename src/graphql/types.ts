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
  installPlace: Scalars['Int'];
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
  Adopted = 'adopted'
}

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

export enum Category {
  General = 'GENERAL',
  Medical = 'MEDICAL'
}

/** Represents a chip company. */
export type ChipCompany = {
  __typename?: 'ChipCompany';
  /** Chip company id */
  id: Scalars['String'];
  /** Chip company value */
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
  installPlace: Scalars['Int'];
  /** Microchip status ('Implanted' or 'Removed') */
  status: MicrochipStatus;
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

/** Represents event */
export type Event = {
  __typename?: 'Event';
  /** Event id */
  id: Scalars['Int'];
  /** Animal id */
  animal: Scalars['Int'];
  /** Event type */
  type?: Maybe<EventType>;
  /** Event expenses */
  expenses?: Maybe<Scalars['Float']>;
  /** Event date */
  dateTime?: Maybe<Scalars['String']>;
  /** Event comments */
  comments?: Maybe<Scalars['String']>;
  /** Event category */
  category?: Maybe<Category>;
};

/** Represents event type */
export type EventType = {
  __typename?: 'EventType';
  /** Event type id */
  id: Scalars['Int'];
  /** Event type */
  type: Scalars['String'];
};

/** Represents events types */
export type Events = {
  __typename?: 'Events';
  /** All events */
  all?: Maybe<Array<Maybe<Event>>>;
  /** All animal events */
  animalAll?: Maybe<Array<Maybe<Event>>>;
  /** All general events */
  general?: Maybe<Array<Maybe<Event>>>;
  /** Animal general events */
  animalGeneral?: Maybe<Array<Maybe<Event>>>;
  /** All medical events */
  medical?: Maybe<Array<Maybe<Event>>>;
  /** Animal medical events */
  animalMedical?: Maybe<Array<Maybe<Event>>>;
  /** All event types */
  types?: Maybe<Array<Maybe<EventType>>>;
};


/** Represents events types */
export type EventsAnimalAllArgs = {
  animalId: Scalars['Int'];
};


/** Represents events types */
export type EventsAnimalGeneralArgs = {
  animalId: Scalars['Int'];
};


/** Represents events types */
export type EventsAnimalMedicalArgs = {
  animalId: Scalars['Int'];
};

/** Represents a former animal owner. */
export type FormerAnimalOwner = {
  __typename?: 'FormerAnimalOwner';
  /** Former animal owner ID, e.g., 1 */
  id: Scalars['Int'];
  /** Former animal owner name */
  name: Scalars['String'];
  /** Former animal owner surname */
  surname?: Maybe<Scalars['String']>;
  /** Former animal owner phone number */
  phone?: Maybe<Scalars['String']>;
};

/** Represents a gender. */
export type Gender = {
  __typename?: 'Gender';
  /** Gender id */
  id: Scalars['String'];
  /** Gender name */
  value: Scalars['String'];
};

export enum MicrochipStatus {
  Implanted = 'Implanted',
  Removed = 'Removed'
}

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
  /** Deleted microchip */
  deleteAnimalMicrochip?: Maybe<AnimalMicrochip>;
  /** Delete animal registration */
  deleteAnimalRegistration?: Maybe<AnimalRegistration>;
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


export type MutationDeleteAnimalMicrochipArgs = {
  animalId: Scalars['Int'];
  microchipId: Scalars['String'];
};


export type MutationDeleteAnimalRegistrationArgs = {
  id: Scalars['Int'];
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
   * Get all animals.
   *
   * Examples:
   *
   * animals
   */
  animals?: Maybe<Array<Maybe<Animal>>>;
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
   * Get all colors.
   *
   * Examples:
   *
   * colors(language: "lt")
   */
  colors?: Maybe<Array<Maybe<Gender>>>;
  /**
   * Get all events and types
   *
   * Example:
   * events(language: "lt")
   */
  events?: Maybe<Array<Maybe<Events>>>;
  /**
   * Get all former animal owners.
   *
   * Examples:
   *
   * formerAnimalOwners
   */
  formerAnimalOwners?: Maybe<Array<Maybe<FormerAnimalOwner>>>;
  /**
   * Get a former animal owner with a specific ID.
   *
   * Examples:
   *
   * formerAnimalOwner(id: 1)
   */
  formerAnimalOwner?: Maybe<FormerAnimalOwner>;
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
  ids?: Maybe<Array<Scalars['Int']>>;
};


export type QueryBreedsArgs = {
  species: Scalars['String'];
  language: Scalars['String'];
};


export type QueryChipCompaniesArgs = {
  language: Scalars['String'];
};


export type QueryColorsArgs = {
  language: Scalars['String'];
};


export type QueryEventsArgs = {
  language: Scalars['String'];
};


export type QueryFormerAnimalOwnerArgs = {
  id: Scalars['Int'];
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
  Inactive = 'Inactive'
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
  installPlace?: Maybe<Scalars['Int']>;
  /** Microchip status ('Implanted' or 'Removed') */
  status?: Maybe<MicrochipStatus>;
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
