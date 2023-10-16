// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (data.Badge) {
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


// TODO: Create a function to generate markdown for README
function sintax(title, text){
  return `## ${title}

  ${text}

 `
}


function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.Badge);
  let markdown = `# ${data.Title}

  ${badge}

  `

  
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
    markdown = markdown + sintax('Questions', `[${data.git}](${data.GitLink})`);
  
  return markdown
}


module.exports = generateMarkdown;
