class Shape {

    constructor(logoColor, logoType, logoShape) {
        this.logoColor = logoColor;
        this.logoType = logoType;
        this.logoShape = this.logoShape;
    }
    render() {
        return this.logoShape.replace(`${logoColor}`, this.logoColor)
    }
    render() {
        return this.logoShape.replace(`${logoType}`, this.logoType)
    }
}

const logoColor = ``
const logoType = `SVG`

class Circle extends Shape {
   constructor(logoColor) {
       super(logoColor, `${logoType}`, `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${logoColor}" />`);
    }
}

class Square extends Shape {
    constructor() {
       super(logoColor, `${logoType}`, `<rect x="50" height="200" width="200" fill="${this.color}" />`); 
    }
}

class Triangle extends Shape {
    constructor(logoColor) {
        super(logoColor, `${logoType}`, `<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill="${logoColor}" />`);
    }
}



module.exports = { Circle, Square, Triangle }