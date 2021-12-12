// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-green)`;
  } else {
      return '';
  }
};

const renderDescription = (title, description, link) => {
  if (link) {
    return `${discription} View the application at [${title}](${link}).`;
  } else {
    return `${description}`;
  }

};

const renderToc = contentsArr => {
  let dataList = '';
  contentsArr.forEach((item)=> {
    if(item.content && item.header === 'Table of Contents') {
      dataList += ` *[${item.header}](#${(item.header).toLowerCase()})`;
    } else if (item.content) {
      dataList += `*[${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})`
    }
  })
  return dataList;
}

const renderInstall = install => {
  if(install) {
    return `To use this project please install the following:\`\`\` ${install} \`\`\``
  } else {
    return '';
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicense(license) {
  if(license) {
    return `This is licensed under ${license} license.`;
  } else {
    return '';
  }
}

const renderBuilt = built => {
  let all = '';

  if(built) {
    built.forEach(item => {
      all += ` *${item}`
    });
    return `${all}`;
  } else {
    return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, github, repository, license} = data;
  let rmContents = '';
  const sectionARR = [
    {
      header: 'License',
      content: renderLicense(license)
    },
    {
      header: 'Installation',
      content: renderInstall(data.install)
    },
    {
      header: 'Use',
      content: createUse(data.use)
    },
    {
      header: 'Built With',
      content: renderBuilt(data['built'])
    },
    {
      header: 'Contact',
      content: createContact(data.contact, repository, github)
    },
    {
      header: 'Test',
      content: createTest(data.test)
    },
    {
      header: 'Contribution',
      content: data.contribution
    },
    {
      header: 'Table of Contents',
      content: renderToc(data.toc)
    },

  ];

  sectionARR.forEach((sectionData) => {
    if(sectionData.content && sectionData.header === 'Table of Contents') {
      readmeData += `### ${sectionData.header}
      ${sectionData.content}`
    } else if (sectionData.content) {
      rmContents += `## ${sectionData.header}
      ${sectionData.content}`;
    }
  })
  
  return `# ${title}
[![Issues](https://img.shields.io/github/issues/${github}/${
  repository
})](https://github.com/${github}/${
  repository
}/issues) [![Issues](https://img.shields.io/github/contributors/${
  github
}/${repo})](https://github.com/${github}/${
  repository
  }/graphs/contributors) ${renderLicenseBadge(license)}
## Description
${renderDescription(title, data.description, data.link)}
## Contents
${renderToc(sectionArr)}
${rmContents}`;

}

module.exports = generateMarkdown;
