const { exec } = require('child_process');
const path = require('path');

// 定义文档的路径
const docPath = path.join(__dirname, 'out', 'index.html');

// 使用默认浏览器打开文档
exec(`open "${docPath}"`, (error) => {
    if (error) {
        console.error('无法打开文档:', error);
    } else {
        console.log('文档已在浏览器中打开');
    }
});