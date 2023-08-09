function renderLicenseBadge(license) {
    const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GNU': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'Eclipse': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    };
    return licenseBadges[license] || '';
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(answers) {
    const licenseBadge = renderLicenseBadge(answers.license);
    return `
    # ${answers.title}
  
    ${licenseBadge}
  
    ## Description
    ${answers.description}
  
    ## Table of Contents 
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [How to Contribute](#how-to-contribute)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${answers.installation}
  
    ## Usage
    ${answers.usage}
  
    ## License
    ${answers.license}
  
    ## How to Contribute
  
    ## Tests
    
    ## Questions
    If you have any questions I can be reached at ${answers.email}.
    Github: ${answers.questions}
  `;
  }
  
  module.exports = generateMarkdown;