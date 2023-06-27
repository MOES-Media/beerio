import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";



type EagerLabels = {
  readonly icon: string;
  readonly medium: string;
  readonly large: string;
}

type LazyLabels = {
  readonly icon: string;
  readonly medium: string;
  readonly large: string;
}

export declare type Labels = LazyLoading extends LazyLoadingDisabled ? EagerLabels : LazyLabels

export declare const Labels: (new (init: ModelInit<Labels>) => Labels)

type EagerBeer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Beer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly glass?: Glass | null;
  readonly brewStyle?: BrewStyle | null;
  readonly availability?: Availability | null;
  readonly srm?: Srm | null;
  readonly labels?: Labels | null;
  readonly abv?: number | null;
  readonly ibu?: number | null;
  readonly originalGravity?: number | null;
  readonly isOrganic?: boolean | null;
  readonly isRetired?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly beerGlassId?: string | null;
  readonly beerBrewStyleId?: string | null;
  readonly beerAvailabilityId?: string | null;
  readonly beerSrmId?: string | null;
}

type LazyBeer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Beer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly glass: AsyncItem<Glass | undefined>;
  readonly brewStyle: AsyncItem<BrewStyle | undefined>;
  readonly availability: AsyncItem<Availability | undefined>;
  readonly srm: AsyncItem<Srm | undefined>;
  readonly labels?: Labels | null;
  readonly abv?: number | null;
  readonly ibu?: number | null;
  readonly originalGravity?: number | null;
  readonly isOrganic?: boolean | null;
  readonly isRetired?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly beerGlassId?: string | null;
  readonly beerBrewStyleId?: string | null;
  readonly beerAvailabilityId?: string | null;
  readonly beerSrmId?: string | null;
}

export declare type Beer = LazyLoading extends LazyLoadingDisabled ? EagerBeer : LazyBeer

export declare const Beer: (new (init: ModelInit<Beer>) => Beer) & {
  copyOf(source: Beer, mutator: (draft: MutableModel<Beer>) => MutableModel<Beer> | void): Beer;
}

type EagerGlass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Glass, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGlass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Glass, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Glass = LazyLoading extends LazyLoadingDisabled ? EagerGlass : LazyGlass

export declare const Glass: (new (init: ModelInit<Glass>) => Glass) & {
  copyOf(source: Glass, mutator: (draft: MutableModel<Glass>) => MutableModel<Glass> | void): Glass;
}

type EagerBrewStyle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BrewStyle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category?: Category | null;
  readonly ibuMin?: number | null;
  readonly ibuMax?: number | null;
  readonly abvMin?: number | null;
  readonly abvMax?: number | null;
  readonly srmMin?: number | null;
  readonly srmMax?: number | null;
  readonly ogMinx?: number | null;
  readonly ogMax?: number | null;
  readonly fgMin?: number | null;
  readonly fgMax?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryBrewStylesId?: string | null;
}

type LazyBrewStyle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BrewStyle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category: AsyncItem<Category | undefined>;
  readonly ibuMin?: number | null;
  readonly ibuMax?: number | null;
  readonly abvMin?: number | null;
  readonly abvMax?: number | null;
  readonly srmMin?: number | null;
  readonly srmMax?: number | null;
  readonly ogMinx?: number | null;
  readonly ogMax?: number | null;
  readonly fgMin?: number | null;
  readonly fgMax?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryBrewStylesId?: string | null;
}

export declare type BrewStyle = LazyLoading extends LazyLoadingDisabled ? EagerBrewStyle : LazyBrewStyle

export declare const BrewStyle: (new (init: ModelInit<BrewStyle>) => BrewStyle) & {
  copyOf(source: BrewStyle, mutator: (draft: MutableModel<BrewStyle>) => MutableModel<BrewStyle> | void): BrewStyle;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly brewStyles?: (BrewStyle | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly brewStyles: AsyncCollection<BrewStyle>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerAvailability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Availability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAvailability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Availability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Availability = LazyLoading extends LazyLoadingDisabled ? EagerAvailability : LazyAvailability

export declare const Availability: (new (init: ModelInit<Availability>) => Availability) & {
  copyOf(source: Availability, mutator: (draft: MutableModel<Availability>) => MutableModel<Availability> | void): Availability;
}

type EagerSrm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Srm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly hex: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySrm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Srm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly hex: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Srm = LazyLoading extends LazyLoadingDisabled ? EagerSrm : LazySrm

export declare const Srm: (new (init: ModelInit<Srm>) => Srm) & {
  copyOf(source: Srm, mutator: (draft: MutableModel<Srm>) => MutableModel<Srm> | void): Srm;
}