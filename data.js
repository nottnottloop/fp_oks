const colourSet = require('./model')

let colours = [
{id: 0, colour: 'black'},
{id: 1, colour: 'white'},
{id: 2, colour: 'red'},
{id: 3, colour: 'blue'},
{id: 4, colour: 'green'},
{id: 5, colour: 'yellow'},
{id: 6, colour:'pink'},
{id: 7, colour:'orange'},
{id: 8, colour: 'brown'},
{id: 9, colour: 'gray'},
]
//changed ids to be 0-9 because computers index start at 0. in theory you don't even need ids, because you can just index into the array at what you like without caring about the id

// function randomColour() {
//     const colorId = Math.floor(Math.random(colours) * colours.length())
//     const colourById = new colorId
//     return colourById
// }

module.exports = {
    colours
}

// function findById(id) {
//     try {
//         const colouring = colours.filter((colours) => colours.id === id);
//         const color = new shade(colours);
//         return color;
//     } catch (err) {
//         throw new Error('That colour does not exist!');
//     }
// }
