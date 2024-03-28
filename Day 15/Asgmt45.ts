function make_Car(manufacturer: string, model: string, ...options: [string, any][]): object {
    // Function body here
    let car: { [key: string]: any } = {
        manufacturer,
        model
    };
    options.forEach(([key, value]) => car[key] = value);
    return car;
};

console.log(make_Car("Toyota", "Corolla", ["sunroof", true]));
console.log(make_Car("Toyota", "Revo", ["Year", 2023]));
