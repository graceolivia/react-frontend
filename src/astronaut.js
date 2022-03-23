function Astronaut(craft, name) {
    this.craft = craft;
    this.name = name;
}

function convertJsonToAstronauts(jsonObject) {
    const peopleArray = jsonObject.people;
    const astronautArray = peopleArray.map(
        (person) => new Astronaut(person.craft, person.name)
    );
    return astronautArray;
}

function sortByAstronautName(astronautArray) {
    return astronautArray.sort(
        (astronaut1, astronaut2) => {
            if (astronaut1.name > astronaut2.name) {
                return 1;
            } else if (astronaut1.name < astronaut2.name) {
                return -1;
            } else {
                return 0;
            }
        }
    )
}

function sortByAstronautCraft(astronautArray) {
    return astronautArray.sort(
        (astronaut1, astronaut2) => {
            if (astronaut1.craft > astronaut2.craft) {
                return 1;
            } else if (astronaut1.craft < astronaut2.craft) {
                return -1;
            } else {
                return 0;
            }
        }
    )
}

export {Astronaut, convertJsonToAstronauts, sortByAstronautName, sortByAstronautCraft};
