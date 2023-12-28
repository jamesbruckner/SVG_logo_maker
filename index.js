const inquirer = require(inquirer);
const {Circle, Square, Triangle} = require('./library/shapes')

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `svg version='1.1 xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to (3) characters for your logo:',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Set text color by entering a color keyword of a hexidecimal number:',
    },
    {
        type: 'input',
        name: 'shape',
        message: 'Choose which shape you would like your logo to be:',
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Set logo shape color bt entering a color keyword or a hexidecimal number:'
    },
];

function writeToFile(filename, date) {
        console.log('Writing [" + date + ") to file [" + fileName + "]')
    FileSystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("logo.svg Generated!")
    });
}