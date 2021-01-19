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
     * Lookup an animal details.
     *
     * Examples:
     *
     * animal_details(animal_id: 1)
     */
    animal_details?: Maybe<AnimalDetails>;
    /**
     * Get all animals details.
     *
     * Examples:
     *
     * animals_details
     */
    animals_details?: Maybe<Array<Maybe<AnimalDetails>>>;
    /**
     * Lookup an animal registration info.
     *
     * Examples:
     *
     * animal_registrations(animal_id: 1)
     */
    animal_registrations?: Maybe<Array<Maybe<AnimalRegistration>>>;
    /**
     * Get all animals registrations.
     *
     * Examples:
     *
     * animals_registrations
     */
    animals_registrations?: Maybe<Array<Maybe<AnimalRegistration>>>;
    /**
     * Lookup an animal microchip info.
     *
     * Examples:
     *
     * animal_microchips(animal_id: 1)
     */
    animal_microchips?: Maybe<Array<Maybe<AnimalMicrochip>>>;
    /**
     * Get all animals microchips.
     *
     * Examples:
     *
     * animals_microchips
     */
    animals_microchips?: Maybe<Array<Maybe<AnimalMicrochip>>>;
    /**
     * Get all genders.
     *
     * Examples:
     *
     * genders(language: "lt")
     */
    genders?: Maybe<Array<Maybe<Gender>>>;
};

export type QueryAnimalArgs = {
    id: Scalars['Int'];
};

export type QueryGendersArgs = {
    language: Scalars['String'];
};

/** Represents an animal. */
export type Animal = {
    __typename?: 'Animal';
    /** Animal id, for example 2 */
    id: Scalars['Int'];
    /** Organization id */
    organization: Scalars['String'];
    /** Animal name */
    name?: Maybe<Scalars['String']>;
    /** Animal details */
    details?: Maybe<AnimalDetails>;
    /** Animal active registration info */
    registration?: Maybe<AnimalRegistration>;
    /** Animal implanted microchip info */
    microchip?: Maybe<AnimalMicrochip>;
    /** Status */
    status?: Maybe<Scalars['String']>;
    /** Image URL */
    image_url?: Maybe<Scalars['String']>;
    /** Comments */
    comments?: Maybe<Scalars['String']>;
    /** Modification time */
    mod_time?: Maybe<Scalars['String']>;
};

/** Represents an animal details. */
export type AnimalDetails = {
    __typename?: 'AnimalDetails';
    /** Animal id, for example 2 */
    animal_id: Scalars['Int'];
    /** Breed id */
    breed_id?: Maybe<Scalars['Int']>;
    /** Animal gender */
    gender?: Maybe<Scalars['String']>;
    /** Animal color id */
    color?: Maybe<Scalars['Int']>;
    /** Animal date of birth */
    birth_date?: Maybe<Scalars['String']>;
    /** Animal weight (kg) */
    weight?: Maybe<Scalars['Float']>;
    /** Animal allergy */
    allergy?: Maybe<Scalars['String']>;
    /** Animal food */
    food?: Maybe<Scalars['String']>;
};

/** Represents an animal registration. */
export type AnimalRegistration = {
    __typename?: 'AnimalRegistration';
    /** Animal id, for example 2 */
    animal_id: Scalars['Int'];
    /** Registration number */
    registration_no: Scalars['String'];
    /** Registration date */
    registration_date?: Maybe<Scalars['String']>;
    /** Registration status ('Active' or 'Inactive') */
    status?: Maybe<Scalars['String']>;
};

/** Represents an animal microchip. */
export type AnimalMicrochip = {
    __typename?: 'AnimalMicrochip';
    /** Animal id, for example 2 */
    animal_id: Scalars['Int'];
    /** Microchip id */
    microchip_id: Scalars['String'];
    /** Microchip install date */
    chip_install_date?: Maybe<Scalars['String']>;
    /** Microchip status ('Implanted' or 'Removed') */
    status?: Maybe<Scalars['String']>;
};

/** Represents a gender. */
export type Gender = {
    __typename?: 'Gender';
    /** Gender id */
    id: Scalars['Int'];
    /** Gender name */
    value: Scalars['String'];
};
