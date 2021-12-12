// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-green)`;
  } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    return `This is licensed under ${license} license.`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, github, repository, license} = date;
  let rmContents = '';
  const sectionARR = [
    {
      header: 'License',
      content: createLicense(license)
    },
    {
      header: 'Installation',
      content: createInstall(data.install)
    },
    {
      header: 'Use',
      content: createUse(data.use)
    },
    {
      header: 'Built With',
      content: createBuild(data['built'])
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
      content: createToc(data.toc)
    },
    
    
  ]

  
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
