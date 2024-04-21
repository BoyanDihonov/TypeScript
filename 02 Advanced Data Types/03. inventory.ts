interface Hero {
    name: string;
    level: number;
    items: string[];
}

function createHeroRegister(data: string[]): string {
    const heroes: Hero[] = [];

    for (const entry of data) {
        const [name, levelStr, itemsStr] = entry.split(' / ');
        const level = parseInt(levelStr);
        const items = itemsStr ? itemsStr.split(', ') : [];
        heroes.push({ name, level, items });
    }

    heroes.sort((a, b) => a.level - b.level);

    let output = '';
    for (const hero of heroes) {
        output += `Hero: ${hero.name}\n`;
        output += `level => ${hero.level}\n`;
        output += `Items => ${hero.items.join(', ')}\n\n`;
    }
    return output.trim();
}

createHeroRegister(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
createHeroRegister(['Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']);
