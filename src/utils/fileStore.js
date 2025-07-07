const fs = require('fs/promises');
const path = require('path');

const dbPath = path.join(__dirname, '../data/db.json');

async function read() {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}

async function write(data) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2));
}

module.exports = { read, write };
