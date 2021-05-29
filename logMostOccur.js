/**
    Write a function that logs the 5 cities that occur the most in the array below in
    order from the most number of occurrences to least.
*/

const citiesList = [
    "nashville",
    "nashville",
    "LA",
    "nashville",
    "memphis",
    "barcelona",
    "LA",
    "sevilla",
    "madrid",
    "nashville",
    "barcelona",
    "london",
    "berlin",
    "madrid",
    "nashville",
    "london",
    "madrid"
];

const logMostOccurCities = n => {
    const cities = {};
    citiesList.forEach(city => {
        cities[city] = !cities[city] ? 1 : cities[city] += 1
    });
    return Object.keys(cities)
        .map(city => ({name:city,times:cities[city]}))
        .sort((a,b) => b.times-a.times)
        .map(city => city.name)
        .slice(0,n);
}

console.log(logMostOccurCities(process.argv[2]));
