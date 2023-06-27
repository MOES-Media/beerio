import { Category } from "./category.model";

export interface BrewStyle {
    id: string;
    category: Category;
    ibuMin?: number;
    ibuMax?: number;
    abvMin?: number;
    abvMax?: number;
    srmMin?: number;
    srmMax?: number;
    fgMin?: number;
    fgMax?: number;
}