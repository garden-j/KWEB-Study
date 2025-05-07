const fs = require("fs");
const path = require("path");

function dig(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error("error!");
      return;
    }
    for (let i = 0; i < files.length; i++) {
      const filePath = path.join(dir, files[i]);
      fs.stat(filePath, (err, stats) => {
        if (stats.isDirectory()) {
          return dig(filePath);
        }
        if (path.extname(files[i]) == ".js") {
          console.log(path.join(filePath));
        }
      });
    }
  });
}

dig("./test");
