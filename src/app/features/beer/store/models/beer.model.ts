import { Availability } from "./availability.model";
import { BrewStyle } from "./brew-style.model";
import { Glass } from "./glass.model";
import { Srm } from "./srm.model";

interface Labels {
    icon: string,
    medium: string,
    large: string
}

export interface Beer {
    id: string;
    name: string;

    glass?: Glass;
    brewStyle?: BrewStyle;
    availability?: Availability;
    srm?: Srm;

    labels: Labels
    
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
    brewStyle: string
}