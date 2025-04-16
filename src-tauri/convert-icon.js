const fs = require('fs');
const path = require('path');

// 创建icons目录
if (!fs.existsSync(path.join(__dirname, 'icons'))) {
  fs.mkdirSync(path.join(__dirname, 'icons'));
}

// 复制SVG文件到icons目录
fs.copyFileSync(
  path.join(__dirname, 'app-icon.svg'),
  path.join(__dirname, 'icons', 'icon.svg')
);

// 这里只是一个简单的提示，实际上需要将SVG转换为其他格式
console.log('SVG图标已复制到icons目录');
console.log('请手动将SVG转换为以下文件:');
console.log('1. icons/32x32.png');
console.log('2. icons/128x128.png');
console.log('3. icons/128x128@2x.png');
console.log('4. icons/icon.icns (macOS)');
console.log('5. icons/icon.ico (Windows)');
console.log('');
console.log('您可以使用在线转换工具如 https://realfavicongenerator.net/');
console.log('或者使用图像编辑软件如Photoshop, GIMP等'); 