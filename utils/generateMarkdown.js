function TableofContents(data){
  let count = 0;
  var  text = '';
    if (data.Description){
      count++;
      text = text + `- [Description](#description)
      `
    }if(data.Installation){
      count++;
      text = text + `- [Installation](#installation)
      `
    } if(data.Usage){
      count++;
      text = text + `- [Usage](#usage)
      `
    } if (data.License){
      count++;
      text = text + `- [License](#license)
      `
    } if (data.Tests){
      count++;
      text = text + `- [Tests](#tests)
      `
    }if (data.HowtoContribute){
      count++;
      text = text + `- [How to Contribute](#how-to-contribute)
      `
    } if (data.Email || data.Git){
      count++;
      text = text + `- [Questions](#questions)
    `
    }

  if (count>3)
    return text
  else
    return ''
}

function renderLicenseBadge(license) {
  switch (license) {
    case 'edX':
      return '![edX](https://img.shields.io/badge/edX-%2302262B.svg?style=for-the-badge&logo=edX&logoColor=white)'
    case 'Duolingo':
      return '![Duolingo](https://img.shields.io/badge/Duolingo-%234DC730.svg?style=for-the-badge&logo=Duolingo&logoColor=white)'
    case 'Express.js':
      return '![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)'
    case 'jQuery':
      return '![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)'
    case 'Node.js':
      return '![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)'
    case 'none':
    default:
      return '';
  }
  return
}

function sintax(title, cont){
  return `## ${title}

  ${cont}

 `
}

function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.Badge);
  let markdown = `# ${data.Title}

  ${badge}

  `
  const index = TableofContents(data);
  if(index)
    markdown = markdown + sintax('Table of Contents', index)
  if(data.Description)
   markdown = markdown + sintax('Description',data.Description)
  if(data.Installation)
    markdown = markdown + sintax('Installation',data.Installation)
  if(data.Usage)
    markdown = markdown + sintax('Usage', data.Usage)
    if(data.Tests)
    markdown = markdown + sintax('Tests', data.Tests)
  if(data.License){
    if(badge){
      markdown = markdown + sintax('License', badge + `
      ` + data.License);
    }else
      markdown = markdown + sintax('License', data.License)
  }
  if(data.Features)
    markdown = markdown + sintax('Features', data.Features)
  if(data.HowtoContribute)
    markdown = markdown + sintax('How to Contribute', data.HowtoContribute)
  if(data.Email){
    if(data.Git){
      markdown = markdown + sintax('Questions', 
      `[${data.git}](${data.GitLink})` +`
      How to contatact me: `+ data.Email)
    }else
      markdown = markdown + sintax('Questions', 'How to contatact me: '+ data.Email)
  }else if(data.Git)
    markdown = markdown + sintax('Questions', `[${data.Git}](${data.GitLink})`);
  
  return markdown
}


module.exports = generateMarkdown;
