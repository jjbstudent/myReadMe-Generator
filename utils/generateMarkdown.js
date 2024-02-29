// generateMarkdown function populating the README.md
function generateMarkdown(data) {
  return `
<h1 align="center">${data.projectTitle} 👋</h1>

## Description
🔍 ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
💾 ${data.installation}

## Usage
💻 ${data.usage}

## License

The application uses ${data.license} license. 

## Contributing
👪 ${data.contributing}

## Tests
✏️ ${data.tests}
  `;
}

module.exports = generateMarkdown;