function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`);
};

describe_city("Karachi");// Karachi city and Default country
describe_city("Lahore");// Lahore city and Default country
describe_city("Tokyo", "Japan");// Tokyo city and Custom country