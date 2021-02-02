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
     * Get all animals.
     *
     * Examples:
     *
     * animals
     */
    animals?: Maybe<Array<Maybe<Animal>>>;
    /**
     * Get all genders.
     *
     * Examples:
     *
     * genders(language: "lt")
     */
    genders?: Maybe<Array<Maybe<Gender>>>;
    /**
     * Get all statuses.
     *
     * Examples:
     *
     * statuses(language: "lt")
     */
    statuses?: Maybe<Array<Maybe<Status>>>;
    /**
     * Get all breeds.
     *
     * Examples:
     *
     * breeds(species: "2", language: "lt")
     */
    breeds?: Maybe<Array<Maybe<Breed>>>;
    /**
     * Get all species.
     *
     * Examples:
     *
     * species(language: "lt")
     */
    species?: Maybe<Array<Maybe<Species>>>;
    /**
     * Get all colors.
     *
     * Examples:
     *
     * colors(language: "lt")
     */
    colors?: Maybe<Array<Maybe<Gender>>>;
};

export type QueryAnimalArgs = {
    id: Scalars['Int'];
};

export type QueryGendersArgs = {
    language: Scalars['String'];
};

export type QueryStatusesArgs = {
    language: Scalars['String'];
};

export type QueryBreedsArgs = {
    species: Scalars['String'];
    language: Scalars['String'];
};

export type QuerySpeciesArgs = {
    language: Scalars['String'];
};

export type QueryColorsArgs = {
    language: Scalars['String'];
};

export type Mutation = {
    __typename?: 'Mutation';
    _empty?: Maybe<Scalars['String']>;
    /** Created animal */
    createAnimal?: Maybe<Animal>;
    /** Updated animal */
    updateAnimal?: Maybe<Animal>;
};

export type MutationCreateAnimalArgs = {
    input: CreateAnimalInput;
};

export type MutationUpdateAnimalArgs = {
    input: UpdateAnimalInput;
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
    /** Status */
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

export type CreateAnimalInput = {
    /** Animal name */
    name?: Maybe<Scalars['String']>;
    /** Organization id */
    organization: Scalars['Int'];
    /** Status */
    status?: Maybe<Scalars['String']>;
    /** Image URL */
    image_url?: Maybe<Scalars['String']>;
    /** Comments */
    comments?: Maybe<Scalars['String']>;
};

export type UpdateAnimalInput = {
    /** Animal id, for example 2 */
    id: Scalars['Int'];
    /** Animal name */
    name: Scalars['String'];
    /** Organization id */
    organization: Scalars['Int'];
    /** Status */
    status: Scalars['String'];
    /** Image URL */
    image_url: Scalars['String'];
    /** Comments */
    comments: Scalars['String'];
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
    breed?: Maybe<Scalars['String']>;
    /**
     * Animal species by language
     * Examples: species(language: "en") or just species - will return default language ("lt") translation
     */
    species?: Maybe<Scalars['String']>;
    /**
     * Animal gender by language.
     * Examples: gender(language: "en") or just gender - will return default language ("lt") translation
     */
    gender?: Maybe<Scalars['String']>;
    /**
     * Animal color by language
     * Examples: color(language: "en") or just color - will return default language ("lt") translation
     */
    color?: Maybe<Scalars['String']>;
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

/** Animal registration status valid values */
export enum RegistrationStatus {
    Active = 'Active',
    Implanted = 'Implanted',
}

/** Represents an animal registration. */
export type AnimalRegistration = {
    __typename?: 'AnimalRegistration';
    /** Animal id, for example 2 */
    animalId: Scalars['Int'];
    /** Registration number */
    registrationNo: Scalars['String'];
    /** Registration date */
    registrationDate?: Maybe<Scalars['String']>;
    /** Registration status ('Active' or 'Inactive') */
    status?: Maybe<RegistrationStatus>;
};

/** Animal microchip status valid values */
export enum MicrochipStatus {
    Implanted = 'Implanted',
    Removed = 'Removed',
}

/** Represents an animal microchip. */
export type AnimalMicrochip = {
    __typename?: 'AnimalMicrochip';
    /** Animal id, for example 2 */
    animalId: Scalars['Int'];
    /** Microchip id */
    microchipId: Scalars['String'];
    /** Microchip install date */
    installDate?: Maybe<Scalars['String']>;
    /** Microchip status ('Implanted' or 'Removed') */
    status?: Maybe<MicrochipStatus>;
};

/** Represents a gender. */
export type Gender = {
    __typename?: 'Gender';
    /** Gender id */
    id: Scalars['String'];
    /** Gender name */
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

/** Represents a breed. */
export type Species = {
    __typename?: 'Species';
    /** Species id */
    id: Scalars['String'];
    /** Species name */
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
