const { spawn } = require('child_process');

// 创建子进程
const child = spawn('npx', ['@tauri-apps/cli', 'init'], {
  stdio: ['pipe', process.stdout, process.stderr]
});

// 预设回答
const answers = [
  'today-todolist', // 应用名称
  'com.today-todolist.dev', // 窗口标题
  'npm', // 包管理器
  'out', // 构建目录 (Next.js默认是.next，但静态导出时可以是out)
  'npm run build' // 构建命令
];

let currentAnswer = 0;

// 当进程要求输入时
child.stdin.on('data', () => {
  if (currentAnswer < answers.length) {
    child.stdin.write(answers[currentAnswer] + '\n');
    currentAnswer++;
  }
});

// 错误处理
child.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

// 进程结束
child.on('close', (code) => {
  if (code === 0) {
    console.log('Tauri初始化成功!');
  } else {
    console.error(`Tauri初始化失败，退出代码: ${code}`);
  }
}); 