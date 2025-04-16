# Tauri开发环境设置指南 (Windows)

为了能够开发和构建Tauri应用，您需要安装以下工具和依赖：

## 1. 安装Rust环境

1. 下载并运行Rust安装程序：https://www.rust-lang.org/tools/install
2. 选择默认安装选项
3. 安装完成后，打开新的终端并验证安装：
   ```
   rustc --version
   cargo --version
   ```

## 2. 安装Windows开发依赖

Tauri需要Microsoft Visual Studio C++ 构建工具和WebView2。请安装：

1. Microsoft Visual C++ 构建工具：
   https://visualstudio.microsoft.com/visual-cpp-build-tools/

   在安装时，确保选择"使用C++的桌面开发"工作负载。

2. WebView2：
   通常Windows 10和Windows 11已经预装了WebView2，如果没有，可以从这里下载安装：
   https://developer.microsoft.com/microsoft-edge/webview2/

## 3. 验证Tauri设置

安装完成后，您可以运行以下命令来验证Tauri环境是否正确设置：

```
npm run tauri info
```

如果一切正常，您应该能看到您的系统信息和Tauri环境状态。

## 4. 开发和构建

- 开发模式：`npm run tauri:dev`
- 构建桌面应用：`npm run tauri:build`

构建完成后，您可以在`src-tauri/target/release`目录找到打包好的应用程序。

## 常见问题

1. 如果遇到Rust相关错误，尝试更新Rust：
   ```
   rustup update
   ```

2. 如果缺少某些Windows SDK组件，可能需要重新运行Visual Studio安装程序并添加相应组件。

3. 确保Node.js和npm是最新版本：
   ```
   node --version
   npm --version
   ``` 