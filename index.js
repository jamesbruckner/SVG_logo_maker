const fs = require('fs');
const inquirer = require('inquirer');

function makeSVG(logoShape, logoColor, logoType, textColor) {
    let shape

    if (logoShape === `Circle`) {
        shape = `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${logoColor}" />`
    }

    else if (logoShape === `Square`) {
        shape = `<rect x="50" height="200" width="200" fill="${this.color}" />`
    }

    else if (logoShape === `Triangle`) {
        shape = `<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill="${logoColor}" />`
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape}
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${textColor}">${logoType}</text>
    </svg>`;
}

function writeToFile(logoType, logoRender) {
    fs.writeFile('logo.svg', logoRender, () => {
        console.log('SVG Logo Generated')
    });
}

function init() {
    const questions = [
        {
            type: 'input',
            name: 'logoType',
            message: 'choose logo text color',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'choose text for you logo',
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'Choose which shape you would like your logo to be:',
            choices: ["Circle", "Square", "Triangle"],
        },
        {
            type: 'input',
            name: 'logoColor',
            message: 'Set logo shape color by entering a color keyword or a hexidecimal number:',
        }
    ];

    inquirer.prompt(questions).then((response) => {
        const { logoColor, logoType, textColor, logoShape } = response;

        const logoRender = makeSVG(logoShape, logoColor, textColor, logoType);
        writeToFile(logoType, logoRender);

    });
}

init();