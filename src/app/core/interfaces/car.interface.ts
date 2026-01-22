export interface Car {
    id: string;
    name: string;
    type: string;
    image: string;
    fuel: string;
    transmission: string;
    people: number;
    price: number;
    oldPrice?: number;
    liked?: boolean;
}
