let http = require("http");
let formidable = require("formidable");
let fs = require("fs");

let htmlForm = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File upload</title>
  </head>
  <body>
    <form action="/upload" method='POST' enctype='multipart/form-data'>
        <input type='file' name="file1"> <br>
        <input type='submit' value='Send'>
    </form>
  </body>
</html>

`;

http
  .createServer(function (req, res) {
    if (req.url === "/upload") {
      let form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        console.log(JSON.stringify(files.file1));
        let tempPath = files.file1.path;
        let newPath = "./public" + files.file1.name;
        fs.rename(tempPath, newPath, function (err) {
          if (err) {
            res.write("Error uploading file!");
          } else {
            res.write("File uploaded");
          }
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(htmlForm);
    }
  })
  .listen(8090);
