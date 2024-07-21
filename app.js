const fs = require('fs');

const blockListBaseFolder = `./base/`;

fs.readdirSync(blockListBaseFolder).forEach(file => {
    const filePathInput = `${blockListBaseFolder}${file}`;
    const filePathOutput = `./block-lists/${file}`;
    generateBlockList(filePathInput, filePathOutput);
});

function generateBlockList(filePathInput, filePathOutput) {
    const initialUrls = ['www', 'pt'];
    const finalUrls = ['com', 'com.br'];

    var lineReader = require('readline').createInterface({
        input: fs.createReadStream(filePathInput)
    });

    var blockList = [];
    lineReader.on('line', function (line) {
        finalUrls.forEach(finalUrl => {
            blockList.push([line, finalUrl].join('.'));
        });
        initialUrls.forEach(initialUrl => {
            finalUrls.forEach(finalUrl => {
                blockList.push([initialUrl, line, finalUrl].join('.'));
            });
        });
    });

    lineReader.on('close', function () {
        fs.writeFileSync(filePathOutput, blockList.join('\n'));
    });
}