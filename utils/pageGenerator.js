const fs = require('fs');

const generateLicense = (type) => {
    let color;
    if (type === "MPL") color = "red";
    if (type === "GPL") color = "gray";
    if (type === "Apache") color = "green";
    if (type === "MIT") color = "blue";
    if (type === "CC") color = "yellow";
    if (type === "BSD") color = "purple";
    return (
        `
        <h3>License</h3>
        <img src="https://img.shields.io/badge/license-${type}-${color}" alt="badge-${type}" />
        `
    );
};

const generatePage = ({
    name,
    location,
    bio,
    linkedIn,
    github,
    license,
}) => {
    console.log('Generating Page...');
    const template = (
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AVATAR HTML</title>
        <!-- Minified version -->
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
    </head>
    <body>
        <h1>AVATAR HTML</h1>
        <h2>${name}</h2>
        <img
            src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Blonde&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=Hoodie&clotheColor=PastelBlue&eyeType=Default&eyebrowType=Default&mouthType=Grimace&skinColor=Pale' />
        <h3>${location}</h3>
        <p>${bio}</p>
        <a href="#${linkedIn}">Linkedin</a>
        <a href="https://github.com/${github}">Github</a>
        <h3>${license}</h3>
        ${generateLicense(license)}
    </body>
    
    </html>
    `
    );
    fs.writeFileSync('./output/index.html', template);
    console.log('Template Granted!');
    process.exit();
};

module.exports = {
    generatePage
};