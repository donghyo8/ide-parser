const fs = require('fs');


// token callback to read
function getFileContent(srcPath, callback) { 
    fs.readFile(srcPath, 'utf8', function (err, data) {
        if (err) throw err;
        callback(data);
        console.log("\n"+ '================== File Callback Complete ==================' + "\n");
        }
    );
}

// token Write
function saveFile(savPath , data) { 
    fs.writeFile (savPath, data, function(err) {
        if (err) throw err;
        console.log("\n"+ '================== File Write Complete ==================' + "\n");
    });
}

module.exports =  {
    getFileContent,
    saveFile
}