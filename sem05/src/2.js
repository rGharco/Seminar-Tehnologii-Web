const fileSystem = require('node:fs');

const folderName = 'exercise2';

try {
    if (!fileSystem.existsSync(folderName)) {
        fileSystem.mkdirSync(folderName);

        const filePath = `${folderName}/exercise2.js`

        fileSystem.writeFileSync(filePath, '');
        
        fileSystem.rm(folderName,{ recursive: true}, err => {
            if (err) 
                throw err;
        })
    }
}
catch (err) {
    console.log("Err: %s", err);
}