import { Category } from "./category.model";

export interface Product {
    id: number,
    image: string,
    name: string,
    price_offer: string,
    price: string,
    price_lined: string,
    star: number,
    rates_count: number,
    category?: Category,
}