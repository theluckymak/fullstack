const fs = require('fs').promises;
const path = require('path');

function getPath(filename) {
    const desktopPath = path.join(process.env.HOME || process.env.USERPROFILE, 'Desktop');
    return path.join(desktopPath, filename);
}

function reverseContent(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8')
            .then((content) => {
                const reversedContent = content.split('\n').reverse().join('\n');
                return fs.writeFile(filePath, reversedContent);
            })
            .then(() => resolve('File content reversed successfully'))
            .catch(reject);
    });
}