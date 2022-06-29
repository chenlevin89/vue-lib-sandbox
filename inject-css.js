const fs = require('fs');
const path = require('path');
const replace = require("replace");

const dir = path.resolve(__dirname, 'dist/src/components');


fs.readdir(dir, (error, fileNames) => {
    if (error) throw error;

    fileNames.forEach(component => {
      const folder = path.parse(component).name;
    
      fs.readdir(`${dir}/${folder}`, (err,files)=> {
        files.forEach(f => {
            const name = path.parse(f).name;
            const ext = path.parse(f).ext;
            if(ext === '.js'){
                const file = `${dir}/${folder}/${f}`;
                replace({
                    regex: '////',
                    replacement: "",
                    paths: [file],
                    recursive: true,
                    silent: true,
                })
            }
        })
      })

    });
  });