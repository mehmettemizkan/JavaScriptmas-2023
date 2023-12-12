const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
 **/
const normalSortedArray = [];
xmasGifts.slice().sort((a, b) => a.localeCompare(b)).forEach(item => normalSortedArray.push(item));
console.log('A-Z: ', normalSortedArray)
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

const reverseSortedArray = [];
xmasGifts.slice().sort((a, b) => b.localeCompare(a)).forEach(item => reverseSortedArray.push(item));
console.log('Z-A: ', reverseSortedArray)
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]