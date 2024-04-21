interface TownInfo {
    townName: string;
    townPopulation: number;
}

function createTownRegister(data: string[]): string {
    const towns: TownInfo[] = [];

    for (const town of data) {
        const [townName, townPopulationStr] = town.split(' <-> ');
        const townPopulation = parseInt(townPopulationStr);

        const existingTown = towns.find(t => t.townName === townName);

        if (existingTown) {
            existingTown.townPopulation += townPopulation;
        } else {
            towns.push({ townName, townPopulation });
        }
    }

    let output = '';
    for (const town of towns) {
        output += `${town.townName} : ${town.townPopulation}\n`;
    }

    return output.trim();
}

createTownRegister(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])

createTownRegister(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])