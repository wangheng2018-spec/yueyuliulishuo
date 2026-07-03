# 🚀 CI/CD 自动编译指南

本项目提供 **3 套 GitHub Actions 流水线**，覆盖所有版本。

---

## 📦 项目结构

```
粤语流利说/
├── web/           ← Web PWA (纯前端，直接部署)
├── app/           ← React Native (Expo, 云编译)
├── 粤语流利说/    ← Swift iOS 原生
└── .github/workflows/
    ├── web-deploy.yml    # → GitHub Pages
    ├── expo-build.yml    # → EAS Build (iOS IPA + Android APK)
    └── ios-native.yml    # → Xcode Build (macOS runner)
```

---

## 🚀 方案A：Web PWA → GitHub Pages（推荐快速开始）

**不需要 Mac，不需要开发者账号，完全免费**

### 步骤

1. **创建 GitHub 仓库**
```bash
git init
git add .
git commit -m "init"
git remote add origin https://github.com/你的用户名/粤语流利说.git
git branch -M main
git push -u origin main
```

2. **启用 GitHub Pages**
   - 仓库 → Settings → Pages
   - Source: **GitHub Actions**
   - 推送 `web/` 目录的修改会自动触发

3. **在 iPhone 上安装**
   - Safari 打开 `https://你的用户名.github.io/粤语流利说/`
   - 点底部「分享」→「添加到主屏幕」
   - 图标会出现在桌面，**离线可用**

---

## 🚀 方案B：Expo React Native → EAS Build

**不需要本机 Mac，用 Expo 云服务编译 iOS IPA**

### 前置条件

1. **注册 Expo 账号** https://expo.dev/signup

2. **安装 EAS CLI**
```bash
npm install -g eas-cli
eas login
```

3. **在 Expo 项目目录配置**
```bash
cd app
eas init
eas build:configure
```

4. **获取 EXPO_TOKEN**
   - https://expo.dev/accounts/你的账号/settings/access-tokens
   - 创建 token

5. **设置 GitHub Secrets**
   - 仓库 → Settings → Secrets and variables → Actions
   - 添加 `EXPO_TOKEN`

6. **推送触发自动构建**
```bash
git push origin main
```
   - GitHub Actions 会自动触发 EAS Build
   - iOS 会编译成 `.ipa`（**需要 Apple Developer $99/年 账号**）
   - Android 会编译成 `.apk`

7. **安装到 iPhone**
   - 通过 TestFlight 或 下载 `.ipa` 用 AltStore 侧载

---

## 🚀 方案C：Swift iOS 原生 → macOS Runner

**需要 GitHub Actions macOS runner（按分钟计费）**

### 步骤

1. **修复 Xcode 项目文件**
   - 当前 `.xcodeproj` 为占位文件
   - 需要在 macOS 上用 Xcode 重新生成完整项目文件

2. **推送代码到 GitHub**
   - macOS runner 会自动运行 Xcode 编译

3. **真机签名需要配置**
   - 设置 Apple Developer 证书到 GitHub Secrets
   - 或在 Action 脚本中配置自动签名

---

## 📊 流水线对比

| 方案 | 需要 Mac | 需要 $99 | 离线 | iPhone安装方式 | 难度 |
|------|----------|----------|------|---------------|------|
| 🌐 Web PVA | ❌ | ❌ | ✅ | Safari添加到主屏幕 | ⭐ |
| 📱 Expo RN | ❌ | ✅ (发布) | ✅ | TestFlight/侧载 | ⭐⭐ |
| 🍎 Swift | ✅ (Runner) | ✅ | ✅ | Xcode直接安装 | ⭐⭐⭐ |

---

## ⚡ 快速开始（推荐）

**如果想立刻装上手机用，走方案A（Web PWA）：**

```bash
# 1. 创建 GitHub 仓库并推送
git init
git add .
git commit -m "🎉 粤语流利说 init"
git remote add origin https://github.com/你的用户名/粤语流利说.git
git branch -M main
git push -u origin main

# 2. 在浏览器打开 GitHub 仓库
# Settings → Pages → Source: GitHub Actions

# 3. 推送 web/ 目录修改会自动触发部署
# 部署后访问 https://你的用户名.github.io/粤语流利说/

# 4. iPhone Safari 打开 → 添加到主屏幕
# 搞定！全程不需要任何费用
```
