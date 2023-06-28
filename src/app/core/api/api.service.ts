/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type ModelBeerFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  abv?: ModelFloatInput | null;
  ibu?: ModelFloatInput | null;
  originalGravity?: ModelFloatInput | null;
  isOrganic?: ModelBooleanInput | null;
  isRetired?: ModelBooleanInput | null;
  and?: Array<ModelBeerFilterInput | null> | null;
  or?: Array<ModelBeerFilterInput | null> | null;
  not?: ModelBeerFilterInput | null;
  _deleted?: ModelBooleanInput | null;
  beerGlassId?: ModelIDInput | null;
  beerBrewStyleId?: ModelIDInput | null;
  beerAvailabilityId?: ModelIDInput | null;
  beerSrmId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelBeerConnection = {
  __typename: "ModelBeerConnection";
  items: Array<Beer | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Beer = {
  __typename: "Beer";
  id: string;
  name: string;
  description?: string | null;
  glass?: Glass | null;
  brewStyle?: BrewStyle | null;
  availability?: Availability | null;
  srm?: Srm | null;
  labels?: Labels | null;
  abv?: number | null;
  ibu?: number | null;
  originalGravity?: number | null;
  isOrganic?: boolean | null;
  isRetired?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  beerGlassId?: string | null;
  beerBrewStyleId?: string | null;
  beerAvailabilityId?: string | null;
  beerSrmId?: string | null;
};

export type Glass = {
  __typename: "Glass";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type BrewStyle = {
  __typename: "BrewStyle";
  id: string;
  name: string;
  category?: Category | null;
  ibuMin?: number | null;
  ibuMax?: number | null;
  abvMin?: number | null;
  abvMax?: number | null;
  srmMin?: number | null;
  srmMax?: number | null;
  ogMinx?: number | null;
  ogMax?: number | null;
  fgMin?: number | null;
  fgMax?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  categoryBrewStylesId?: string | null;
};

export type Category = {
  __typename: "Category";
  id: string;
  name: string;
  brewStyles?: ModelBrewStyleConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelBrewStyleConnection = {
  __typename: "ModelBrewStyleConnection";
  items: Array<BrewStyle | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type Availability = {
  __typename: "Availability";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Srm = {
  __typename: "Srm";
  id: string;
  name: string;
  hex: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Labels = {
  __typename: "Labels";
  icon: string;
  medium: string;
  large: string;
};

export type ModelGlassFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelGlassFilterInput | null> | null;
  or?: Array<ModelGlassFilterInput | null> | null;
  not?: ModelGlassFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelGlassConnection = {
  __typename: "ModelGlassConnection";
  items: Array<Glass | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelBrewStyleFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  ibuMin?: ModelFloatInput | null;
  ibuMax?: ModelFloatInput | null;
  abvMin?: ModelFloatInput | null;
  abvMax?: ModelFloatInput | null;
  srmMin?: ModelFloatInput | null;
  srmMax?: ModelFloatInput | null;
  ogMinx?: ModelFloatInput | null;
  ogMax?: ModelFloatInput | null;
  fgMin?: ModelFloatInput | null;
  fgMax?: ModelFloatInput | null;
  and?: Array<ModelBrewStyleFilterInput | null> | null;
  or?: Array<ModelBrewStyleFilterInput | null> | null;
  not?: ModelBrewStyleFilterInput | null;
  _deleted?: ModelBooleanInput | null;
  categoryBrewStylesId?: ModelIDInput | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items: Array<Category | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelAvailabilityFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelAvailabilityFilterInput | null> | null;
  or?: Array<ModelAvailabilityFilterInput | null> | null;
  not?: ModelAvailabilityFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelAvailabilityConnection = {
  __typename: "ModelAvailabilityConnection";
  items: Array<Availability | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSrmFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  hex?: ModelStringInput | null;
  and?: Array<ModelSrmFilterInput | null> | null;
  or?: Array<ModelSrmFilterInput | null> | null;
  not?: ModelSrmFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSrmConnection = {
  __typename: "ModelSrmConnection";
  items: Array<Srm | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetBeerOverviewItemsQuery = {
  __typename: "ModelBeerConnection";
  items: Array<{
    __typename: "Beer";
    id: string;
    name: string;
    abv?: number | null;
    brewStyle?: {
      __typename: "BrewStyle";
      name: string;
    } | null;
    labels?: {
      __typename: "Labels";
      large: string;
    } | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetBeerDetailsQuery = {
  __typename: "Beer";
  name: string;
  description?: string | null;
  glass?: {
    __typename: "Glass";
    name: string;
  } | null;
  brewStyle?: {
    __typename: "BrewStyle";
    name: string;
    ibuMin?: number | null;
    ibuMax?: number | null;
    abvMin?: number | null;
    abvMax?: number | null;
    srmMin?: number | null;
    srmMax?: number | null;
    ogMinx?: number | null;
    ogMax?: number | null;
    fgMin?: number | null;
    fgMax?: number | null;
    category?: {
      __typename: "Category";
      name: string;
    } | null;
  } | null;
  availability?: {
    __typename: "Availability";
    name: string;
    description?: string | null;
  } | null;
  labels?: {
    __typename: "Labels";
    icon: string;
    medium: string;
    large: string;
  } | null;
  abv?: number | null;
  ibu?: number | null;
  originalGravity?: number | null;
  isOrganic?: boolean | null;
  isRetired?: boolean | null;
};

export type GetBeerQuery = {
  __typename: "Beer";
  id: string;
  name: string;
  description?: string | null;
  glass?: {
    __typename: "Glass";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  brewStyle?: {
    __typename: "BrewStyle";
    id: string;
    name: string;
    ibuMin?: number | null;
    ibuMax?: number | null;
    abvMin?: number | null;
    abvMax?: number | null;
    srmMin?: number | null;
    srmMax?: number | null;
    ogMinx?: number | null;
    ogMax?: number | null;
    fgMin?: number | null;
    fgMax?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    categoryBrewStylesId?: string | null;
  } | null;
  availability?: {
    __typename: "Availability";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  srm?: {
    __typename: "Srm";
    id: string;
    name: string;
    hex: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  labels?: {
    __typename: "Labels";
    icon: string;
    medium: string;
    large: string;
  } | null;
  abv?: number | null;
  ibu?: number | null;
  originalGravity?: number | null;
  isOrganic?: boolean | null;
  isRetired?: boolean | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  beerGlassId?: string | null;
  beerBrewStyleId?: string | null;
  beerAvailabilityId?: string | null;
  beerSrmId?: string | null;
};

export type ListBeersQuery = {
  __typename: "ModelBeerConnection";
  items: Array<{
    __typename: "Beer";
    id: string;
    name: string;
    description?: string | null;
    abv?: number | null;
    ibu?: number | null;
    originalGravity?: number | null;
    isOrganic?: boolean | null;
    isRetired?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    beerGlassId?: string | null;
    beerBrewStyleId?: string | null;
    beerAvailabilityId?: string | null;
    beerSrmId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncBeersQuery = {
  __typename: "ModelBeerConnection";
  items: Array<{
    __typename: "Beer";
    id: string;
    name: string;
    description?: string | null;
    abv?: number | null;
    ibu?: number | null;
    originalGravity?: number | null;
    isOrganic?: boolean | null;
    isRetired?: boolean | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    beerGlassId?: string | null;
    beerBrewStyleId?: string | null;
    beerAvailabilityId?: string | null;
    beerSrmId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetGlassQuery = {
  __typename: "Glass";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListGlassesQuery = {
  __typename: "ModelGlassConnection";
  items: Array<{
    __typename: "Glass";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncGlassesQuery = {
  __typename: "ModelGlassConnection";
  items: Array<{
    __typename: "Glass";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetBrewStyleQuery = {
  __typename: "BrewStyle";
  id: string;
  name: string;
  category?: {
    __typename: "Category";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
  ibuMin?: number | null;
  ibuMax?: number | null;
  abvMin?: number | null;
  abvMax?: number | null;
  srmMin?: number | null;
  srmMax?: number | null;
  ogMinx?: number | null;
  ogMax?: number | null;
  fgMin?: number | null;
  fgMax?: number | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  categoryBrewStylesId?: string | null;
};

export type ListBrewStylesQuery = {
  __typename: "ModelBrewStyleConnection";
  items: Array<{
    __typename: "BrewStyle";
    id: string;
    name: string;
    ibuMin?: number | null;
    ibuMax?: number | null;
    abvMin?: number | null;
    abvMax?: number | null;
    srmMin?: number | null;
    srmMax?: number | null;
    ogMinx?: number | null;
    ogMax?: number | null;
    fgMin?: number | null;
    fgMax?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    categoryBrewStylesId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncBrewStylesQuery = {
  __typename: "ModelBrewStyleConnection";
  items: Array<{
    __typename: "BrewStyle";
    id: string;
    name: string;
    ibuMin?: number | null;
    ibuMax?: number | null;
    abvMin?: number | null;
    abvMax?: number | null;
    srmMin?: number | null;
    srmMax?: number | null;
    ogMinx?: number | null;
    ogMax?: number | null;
    fgMin?: number | null;
    fgMax?: number | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    categoryBrewStylesId?: string | null;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name: string;
  brewStyles?: {
    __typename: "ModelBrewStyleConnection";
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetAvailabilityQuery = {
  __typename: "Availability";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListAvailabilitiesQuery = {
  __typename: "ModelAvailabilityConnection";
  items: Array<{
    __typename: "Availability";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncAvailabilitiesQuery = {
  __typename: "ModelAvailabilityConnection";
  items: Array<{
    __typename: "Availability";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetSrmQuery = {
  __typename: "Srm";
  id: string;
  name: string;
  hex: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListSrmsQuery = {
  __typename: "ModelSrmConnection";
  items: Array<{
    __typename: "Srm";
    id: string;
    name: string;
    hex: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncSrmsQuery = {
  __typename: "ModelSrmConnection";
  items: Array<{
    __typename: "Srm";
    id: string;
    name: string;
    hex: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async GetBeerOverviewItems(
    filter?: ModelBeerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetBeerOverviewItemsQuery> {
    const statement = `query GetBeerOverviewItems($filter: ModelBeerFilterInput, $limit: Int, $nextToken: String) {
        listBeers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            abv
            brewStyle {
              __typename
              name
            }
            labels {
              __typename
              large
            }
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBeerOverviewItemsQuery>response.data.listBeers;
  }
  async GetBeerDetails(id: string): Promise<GetBeerDetailsQuery> {
    const statement = `query GetBeerDetails($id: ID!) {
        getBeer(id: $id) {
          __typename
          name
          description
          glass {
            __typename
            name
          }
          brewStyle {
            __typename
            name
            ibuMin
            ibuMax
            abvMin
            abvMax
            srmMin
            srmMax
            ogMinx
            ogMax
            fgMin
            fgMax
            category {
              __typename
              name
            }
          }
          availability {
            __typename
            name
            description
          }
          labels {
            __typename
            icon
            medium
            large
          }
          abv
          ibu
          originalGravity
          isOrganic
          isRetired
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBeerDetailsQuery>response.data.getBeer;
  }
  async GetBeer(id: string): Promise<GetBeerQuery> {
    const statement = `query GetBeer($id: ID!) {
        getBeer(id: $id) {
          __typename
          id
          name
          description
          glass {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          brewStyle {
            __typename
            id
            name
            ibuMin
            ibuMax
            abvMin
            abvMax
            srmMin
            srmMax
            ogMinx
            ogMax
            fgMin
            fgMax
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            categoryBrewStylesId
          }
          availability {
            __typename
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          srm {
            __typename
            id
            name
            hex
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          labels {
            __typename
            icon
            medium
            large
          }
          abv
          ibu
          originalGravity
          isOrganic
          isRetired
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          beerGlassId
          beerBrewStyleId
          beerAvailabilityId
          beerSrmId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBeerQuery>response.data.getBeer;
  }
  async ListBeers(
    filter?: ModelBeerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBeersQuery> {
    const statement = `query ListBeers($filter: ModelBeerFilterInput, $limit: Int, $nextToken: String) {
        listBeers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            abv
            ibu
            originalGravity
            isOrganic
            isRetired
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            beerGlassId
            beerBrewStyleId
            beerAvailabilityId
            beerSrmId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBeersQuery>response.data.listBeers;
  }
  async SyncBeers(
    filter?: ModelBeerFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncBeersQuery> {
    const statement = `query SyncBeers($filter: ModelBeerFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncBeers(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            name
            description
            abv
            ibu
            originalGravity
            isOrganic
            isRetired
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            beerGlassId
            beerBrewStyleId
            beerAvailabilityId
            beerSrmId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncBeersQuery>response.data.syncBeers;
  }
  async GetGlass(id: string): Promise<GetGlassQuery> {
    const statement = `query GetGlass($id: ID!) {
        getGlass(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGlassQuery>response.data.getGlass;
  }
  async ListGlasses(
    filter?: ModelGlassFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGlassesQuery> {
    const statement = `query ListGlasses($filter: ModelGlassFilterInput, $limit: Int, $nextToken: String) {
        listGlasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGlassesQuery>response.data.listGlasses;
  }
  async SyncGlasses(
    filter?: ModelGlassFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncGlassesQuery> {
    const statement = `query SyncGlasses($filter: ModelGlassFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncGlasses(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncGlassesQuery>response.data.syncGlasses;
  }
  async GetBrewStyle(id: string): Promise<GetBrewStyleQuery> {
    const statement = `query GetBrewStyle($id: ID!) {
        getBrewStyle(id: $id) {
          __typename
          id
          name
          category {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          ibuMin
          ibuMax
          abvMin
          abvMax
          srmMin
          srmMax
          ogMinx
          ogMax
          fgMin
          fgMax
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryBrewStylesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBrewStyleQuery>response.data.getBrewStyle;
  }
  async ListBrewStyles(
    filter?: ModelBrewStyleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBrewStylesQuery> {
    const statement = `query ListBrewStyles($filter: ModelBrewStyleFilterInput, $limit: Int, $nextToken: String) {
        listBrewStyles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            ibuMin
            ibuMax
            abvMin
            abvMax
            srmMin
            srmMax
            ogMinx
            ogMax
            fgMin
            fgMax
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            categoryBrewStylesId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBrewStylesQuery>response.data.listBrewStyles;
  }
  async SyncBrewStyles(
    filter?: ModelBrewStyleFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncBrewStylesQuery> {
    const statement = `query SyncBrewStyles($filter: ModelBrewStyleFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncBrewStyles(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            name
            ibuMin
            ibuMax
            abvMin
            abvMax
            srmMin
            srmMax
            ogMinx
            ogMax
            fgMin
            fgMax
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            categoryBrewStylesId
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncBrewStylesQuery>response.data.syncBrewStyles;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          brewStyles {
            __typename
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategories(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategoriesQuery> {
    const statement = `query ListCategories($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategoriesQuery>response.data.listCategories;
  }
  async SyncCategories(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncCategoriesQuery> {
    const statement = `query SyncCategories($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncCategories(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncCategoriesQuery>response.data.syncCategories;
  }
  async GetAvailability(id: string): Promise<GetAvailabilityQuery> {
    const statement = `query GetAvailability($id: ID!) {
        getAvailability(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAvailabilityQuery>response.data.getAvailability;
  }
  async ListAvailabilities(
    filter?: ModelAvailabilityFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAvailabilitiesQuery> {
    const statement = `query ListAvailabilities($filter: ModelAvailabilityFilterInput, $limit: Int, $nextToken: String) {
        listAvailabilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAvailabilitiesQuery>response.data.listAvailabilities;
  }
  async SyncAvailabilities(
    filter?: ModelAvailabilityFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncAvailabilitiesQuery> {
    const statement = `query SyncAvailabilities($filter: ModelAvailabilityFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncAvailabilities(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncAvailabilitiesQuery>response.data.syncAvailabilities;
  }
  async GetSrm(id: string): Promise<GetSrmQuery> {
    const statement = `query GetSrm($id: ID!) {
        getSrm(id: $id) {
          __typename
          id
          name
          hex
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSrmQuery>response.data.getSrm;
  }
  async ListSrms(
    filter?: ModelSrmFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSrmsQuery> {
    const statement = `query ListSrms($filter: ModelSrmFilterInput, $limit: Int, $nextToken: String) {
        listSrms(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            hex
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSrmsQuery>response.data.listSrms;
  }
  async SyncSrms(
    filter?: ModelSrmFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSrmsQuery> {
    const statement = `query SyncSrms($filter: ModelSrmFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSrms(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            name
            hex
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncSrmsQuery>response.data.syncSrms;
  }
}
