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
};

export type QueryAnimalArgs = {
    id: Scalars['Int'];
};

/** Represents an animal. */
export type Animal = {
    __typename?: 'Animal';
    /** Animal id, for example 2 */
    id: Scalars['Int'];
    /** Organization id */
    organization: Scalars['String'];
    /** Registration number */
    registration_no: Scalars['String'];
    /** Registration date */
    registration_date: Scalars['String'];
    /** Status */
    status?: Maybe<Scalars['String']>;
    /** Image URL */
    image_url?: Maybe<Scalars['String']>;
    /** Birth date */
    birth_date?: Maybe<Scalars['String']>;
    /** Name */
    name?: Maybe<Scalars['String']>;
    /** Species */
    species?: Maybe<Scalars['String']>;
    /** Breed */
    breed?: Maybe<Scalars['String']>;
    /** Gender */
    gender?: Maybe<Scalars['String']>;
    /** Color */
    color?: Maybe<Scalars['String']>;
    /** Weight */
    weight?: Maybe<Scalars['Float']>;
    /** Microchip id */
    microchip_id?: Maybe<Scalars['String']>;
    /** Chip install date */
    chip_install_date?: Maybe<Scalars['String']>;
    /** Allergy */
    allergy?: Maybe<Scalars['String']>;
    /** Food */
    food?: Maybe<Scalars['String']>;
    /** Comments */
    comments?: Maybe<Scalars['String']>;
    /** Modification time */
    mod_time?: Maybe<Scalars['String']>;
};
