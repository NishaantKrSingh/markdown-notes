const showdown = require('showdown');
const http = require('http');
const fs = require('fs');
const path = require('path');
const converter = new showdown.Converter();
let modifiedData = ''; // Define modifiedData variable outside of fs.readFile scope
// Read the markdown content
fs.readFile(path.join(__dirname, 'content.md'), 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading markdown content:', err);
    return;
  }
  const html = converter.makeHtml(data);
  // Read the HTML file
  fs.readFile(path.join(__dirname, '/template/index.html'), 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      return;
    }
    // Modify the HTML content
    modifiedData = htmlData.replace('<body>', '<body>' + html);
    // console.log(modifiedData);
    fs.writeFile('output.html', modifiedData, function (err) {
      if (err) throw err;
      console.log('Replaced!');
    });
    
  });
}); 


