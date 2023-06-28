import { Availability } from './availability.model';
import { BrewStyle } from './brew-style.model';
import { Glass } from './glass.model';
import { Srm } from './srm.model';

interface Labels {
  icon: string;
  medium: string;
  large: string;
}

export interface Beer {
  id: string;
  name: string;

  glass?: Glass;
  brewStyle?: BrewStyle;
  availability?: Availability;
  srm?: Srm;

  labels: Labels;

  abv?: number;
  ibu?: number;
  originalGravity?: number;

  isOrganic: boolean;
  isRetired: boolean;
}

export interface BeerOverviewItem {
  id: string;
  name: string;
  abv: number;
  brewStyle: string;
  imageSource: string;
}

export interface BeerDetail {
  name: string;
  description?: string;
  glass?: {
    name: string;
  };
  brewStyle?: {
    name: string;
    ibuMin?: number;
    ibuMax?: number;
    abvMin?: number;
    abvMax?: number;
    srmMin?: number;
    srmMax?: number;
    ogMinx?: number;
    ogMax?: number;
    fgMin?: number;
    fgMax?: number;
    category: {
      name: string;
    };
  };
  availability?: {
    name: string;
    description: string;
  };
  labels: {
    icon: string;
    medium: string;
    large: string;
  };
  abv?: number;
  ibu?: number;
  originalGravity?: number;
  isOrganic: boolean;
  isRetired: boolean;
}
