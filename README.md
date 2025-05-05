# 今日待办

一个简单美观的待办事项桌面应用，使用Next.js、Tailwind CSS和Tauri构建。

## 功能

- 添加、完成和删除待办事项
- 使用本地存储保存数据
- 响应式设计，适配各种屏幕尺寸
- 美观的用户界面
- 自动记住窗口上次关闭时的大小和位置
- 跨平台桌面应用，支持Windows、macOS和Linux

## 技术栈

- Next.js - Web框架
- React - UI库
- TypeScript - 类型安全的JavaScript
- Tailwind CSS - 样式库
- Tauri - 桌面应用框架
- tauri-plugin-window-state - 窗口状态记忆插件
- localStorage - 本地数据存储

## 安装

```bash
# 安装依赖
npm install

# 启动Web开发服务器
npm run dev

# 启动Tauri桌面应用开发服务器
npm run tauri:dev
```

## 构建

### Web应用构建

```bash
# 构建Web生产版本
npm run build

# 运行Web生产版本
npm start
```

### 桌面应用构建

```bash
# 构建Tauri桌面应用
npm run tauri:build
```

构建完成后，可以在以下目录找到安装包：
- Windows: `src-tauri/target/release/bundle/msi/`
- macOS: `src-tauri/target/release/bundle/dmg/`
- Linux: `src-tauri/target/release/bundle/deb/` 或 `src-tauri/target/release/bundle/appimage/`

## 开发说明

此项目使用Tauri和Next.js的混合架构：
- 前端使用Next.js开发
- 桌面功能通过Tauri实现
- 通过Tauri API可以访问本地系统功能
- 使用 `tauri-plugin-window-state` 插件自动保存和恢复窗口状态。

若要了解更多关于Tauri开发环境设置的信息，请参阅[SETUP_TAURI.md](./SETUP_TAURI.md)文件。 