// generateMarkdown function populating the README.md
function generateMarkdown(data) {
  return `
# ${data.projectTitle} 👋

## Description

Breif description of my project:
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
Using NPM inquirer ${data.inquirer}

## Usage
💻 ${data.usage}

## License

The application uses ${data.license} license. 

## Contributing
👪 ${data.contributing}

## Tests
✏️ ${data.tests}

## Questions
💡 ${data.questions}

## Contact
If you would like to conatct me for more information on my project:
📧 ${data.username} : Github Username
📧 ${data.email} : Email address

  `;
}

module.exports = generateMarkdown;