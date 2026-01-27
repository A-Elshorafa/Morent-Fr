export interface CarTransaction {
    fromDate: string;
    toDate: string;
    rentalPrice: number;
    cardNumber: string;
    cardHolderName: string;
    cardExpiryDate: string;
    promoCode?: string;
    subTotal: string;
    carId: number;
    renterId: number;
    pickupLocationId: number;
    dropOfLocationId: number;
}
