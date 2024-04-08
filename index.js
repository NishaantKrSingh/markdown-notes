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
  });
});



// fs.writeFileSync('index.html', modifiedData, 'utf-8');




const server = http.createServer((req, res) => {
  // Check if the requested URL is "/"
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(modifiedData);
    // console.log(modifiedData);
    fs.appendFile('output.html', modifiedData, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// fs.writeFileSync('index.html', modifiedData, 'utf-8');
