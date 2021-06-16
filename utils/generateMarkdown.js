
function renderLicenseBadge(badge) {
  let link = "";
  if (badge === "GNU Affero General Public License v3.0") {
    let link = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    return link;
  }
  if (badge === "GNU General Public License v3.0") {
    let link = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    return link;
  }
  if (badge === "GNU Lesser General Public License v3.0") {
    let link = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    return link;
  }
  if (badge === "Mozilla Public License 2.0") {
    let link = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    return link;
  }
  if (badge === "Apache License 2.0") {
    let link = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return link;
  }
  if (badge === "MIT License") {
    let link = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return link;
  }
  if (badge === "Boost Software License 1.0") {
    let link = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    return link;
  }
  if (badge === "The Unlicense") {
    let link = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    return link;
  }
  if (badge === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license === "GNU Affero General Public License v3.0") {
    let link = `[More information about the license](https://choosealicense.com/licenses/agpl-3.0/)`;
    return link;
  }
  if (license === "GNU General Public License v3.0") {
    let link = `[More information about the license](https://choosealicense.com/licenses/gpl-3.0/)`;
    return link;
  }
  if (license === "GNU Lesser General Public License v3.0") {
    let link = `[More information about the license](https://choosealicense.com/licenses/lgpl-3.0/)`;
    return link;
  }
  if (license === "Mozilla Public License 2.0") {
    let link = `[More information about the license](https://choosealicense.com/licenses/mpl-2.0/)`;
    return link;
  }
  if (license === "Apache License 2.0") {
    let link = `[More information about the license](https://choosealicense.com/licenses/apache-2.0/)`;
    return link;
  }
  if (license === "MIT License") {
    let link = `[More information about the license](https://choosealicense.com/licenses/mit/)`;
    return link;
  }
  if (license === "Boost Software License 1.0") {
    let link = `[More information about the license](https://choosealicense.com/licenses/bsl-1.0/)`;
    return link;
  }
  if (license === "The Unlicense") {
    let link = `[More information about the license](https://choosealicense.com/licenses/unlicense/)`;
    return link;
  }
  if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else if (license !== "None") {
    let licenseSelection = renderLicenseLink(license);
    return `
## License
  
This application is covered under ${license}<br>${licenseSelection}`;

  }
}

// Create a function to show license in the table of contents
function licenseTable(license) {
  if (license === "None") {
    return "";
  } else if (license !== "None") {
    return `* [License](#license)`;
  }
}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {

   let licenseBadge = renderLicenseBadge(data.license)
   let createLicense = renderLicenseSection(data.license)
   let licenseContent = licenseTable(data.license)

  return `# **${data.title.toUpperCase()}**

  ${licenseBadge}
  ![badmath](https://img.shields.io/github/languages/top/${data.github}/${data.title})
  ![badmath](https://img.shields.io/github/languages/count/${data.github}/${data.title})

  ## Description 
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  ${licenseContent}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 
  
  ## Installation
  ${data.install}
  
  ## Usage 
  ${data.usage}
  
  ${createLicense}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}

  ## Questions
  Please feel free to reach out with any questions via [email](mailto:${data.email}) or [GitHub](https://www.github.com/${data.github})

`;
}

module.exports = generateMarkdown;
