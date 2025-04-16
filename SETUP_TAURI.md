# Tauri开发环境设置指南 (Windows)

本文档提供了设置Tauri开发环境和构建桌面应用的详细指南。

## 项目状态

✅ **已成功集成**: 本项目已成功集成Tauri，可以作为桌面应用运行和构建。

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

构建完成后，您可以在`src-tauri/target/release/bundle/msi/`目录找到Windows安装包。

## 5. 网络问题和代理设置

如果您在构建过程中遇到网络问题（特别是下载WiX工具包时），可以设置HTTP代理：

```powershell
# PowerShell中设置代理
$env:HTTP_PROXY="http://代理服务器地址:端口"
$env:HTTPS_PROXY="http://代理服务器地址:端口"

# 然后再次运行构建命令
npm run tauri:build
```

## 6. 应用配置

Tauri应用的主要配置位于`src-tauri/tauri.conf.json`文件中，您可以在此修改：

- 窗口大小和属性
- 应用权限
- 应用标识符
- 安装包信息

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

4. 如果需要调试Tauri应用，可以在开发模式下按F12打开DevTools。 