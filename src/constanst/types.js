export type SingleCarType = {
    "stockNumber": number,
    "manufacturerName": string,
    "modelName": string,
    "color": string,
    "mileage": { "number": number, "unit": string },
    "fuelType": string,
    "pictureUrl": string
};

export type CarsType = { cars: Array<SingleCarType>, totalPageCount: number, count: number };
export type ColorType = { colors: Array<string> }
export type ManufacturersType = { manufacturers: Array<Object> }
export type ActionTypes = { type: String, payload: Object }


//*********** PayLoad *************\\

export type SingleCarPayload = { car: SingleCarType }