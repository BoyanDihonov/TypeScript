interface JustTown {
    Town: string;
    Latitude: number;
    Longitude: number;
}

function createLocationObjects(data: string[]): JustTown[] {
    const locations: JustTown[] = [];

    for (const row of data) {
        const [town, latStr, longStr] = row.split(' | ').map(item => item.trim());
        const latitude = parseFloat(latStr).toFixed(2);
        const longitude = parseFloat(longStr).toFixed(2);

        const location: JustTown = {
            Town: town,
            Latitude: parseFloat(latitude),
            Longitude: parseFloat(longitude),
        };
        locations.push(location);
    }

    return locations;
}

createLocationObjects(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])

createLocationObjects(['Plovdiv | 136.45 | 812.575'])