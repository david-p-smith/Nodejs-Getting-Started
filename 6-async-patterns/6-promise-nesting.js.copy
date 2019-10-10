const fs = require('fs').promises;

async function main() {
    const data = await fs.readFile(__filename);
    await fs.writeFile(__filename + '.copy', data);
    //more awaits
}

main();
console.log('TEST');