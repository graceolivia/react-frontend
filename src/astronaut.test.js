import {Astronaut, convertJsonToAstronauts, sortByAstronautName, sortByAstronautCraft} from "./astronaut";

test('convertJsonToAstronauts converts Json to Astronaut objects', () => {
    const jsonString = "{\"people\": [{\"craft\": \"Rocketship\", \"name\": \"David Bowie\"}], \"message\": \"success\", \"number\": 1}"
    const jsonObject = JSON.parse(jsonString);
    const astronautArray = convertJsonToAstronauts(jsonObject);
    const expectedArray = [new Astronaut("Rocketship", "David Bowie")];
    expect(astronautArray).toEqual(expectedArray);
});

test('convertJsonToAstronauts handles when there are no astronauts', () => {
    const jsonString = "{\"people\": [], \"message\": \"success\", \"number\": 0}"
    const jsonObject = JSON.parse(jsonString);
    const astronautArray = convertJsonToAstronauts(jsonObject);
    const expectedArray = [];
    expect(astronautArray).toEqual(expectedArray);
});

test('convertJsonToAstronauts handles when there are multiple astronauts', () => {
    const jsonString = "{\"people\": [{\"craft\": \"Rocketship\", \"name\": \"David Bowie\"}, {\"craft\": \"Spaceship\", \"name\": \"Lance Armstrong\"}], \"message\": \"success\", \"number\": 2}"
    const jsonObject = JSON.parse(jsonString);
    const astronautArray = convertJsonToAstronauts(jsonObject);
    const expectedArray = [new Astronaut("Rocketship", "David Bowie"), new Astronaut("Spaceship", "Lance Armstrong")];
    expect(astronautArray).toEqual(expectedArray);
});

test('sortByAstronautName returns sorted list of Astronauts', () => {
    const astronaut1 = new Astronaut("Spaceship", "Lance Armstrong");
    const astronaut2 = new Astronaut("Rocketship", "David Bowie");
    const astronautArray = [astronaut1, astronaut2];
    const sortedAstronautsArray = sortByAstronautName(astronautArray);
    const expectedArray = [astronaut2, astronaut1];
    expect(sortedAstronautsArray).toEqual(expectedArray);
});

test('sortByAstronautName handles identicalnames', () => {
    const astronaut1 = new Astronaut("Spaceship", "Zip");
    const astronaut2 = new Astronaut("Rocketship", "Zip");
    const astronautArray = [astronaut1, astronaut2];
    const sortedAstronautsArray = sortByAstronautName(astronautArray);
    const expectedArray = [astronaut1, astronaut2];
    expect(sortedAstronautsArray).toEqual(expectedArray);
});

test('sortByAstronautCraft sorts by craft correctly', () => {
    const astronaut1 = new Astronaut("Spaceship", "Zip");
    const astronaut2 = new Astronaut("Rocketship", "Marty");
    const astronautArray = [astronaut1, astronaut2];
    const sortedAstronautsArray = sortByAstronautCraft(astronautArray);
    const expectedArray = [astronaut2, astronaut1];
    expect(sortedAstronautsArray).toEqual(expectedArray);
});

test('sortByAstronautCraft handles identical craft names', () => {
    const astronaut1 = new Astronaut("Spaceship", "Zip");
    const astronaut2 = new Astronaut("Spaceship", "Marty");
    const astronautArray = [astronaut1, astronaut2];
    const sortedAstronautsArray = sortByAstronautCraft(astronautArray);
    const expectedArray = [astronaut1, astronaut2];
    expect(sortedAstronautsArray).toEqual(expectedArray);
});