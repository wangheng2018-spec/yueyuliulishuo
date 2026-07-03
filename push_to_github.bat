@echo off
chcp 65001 >nul
cd /d "C:\Users\46791\Documents\粤语流利说"

:: 删除旧 .git（可能被锁）
attrib -R .git /S /D >nul 2>&1
rmdir /S /Q .git >nul 2>&1
if exist .git (
  echo 请关闭其他程序后重试
  pause
  exit /b
)

:: 初始化新仓库
git init
git add --all
git commit -m "🎉 init: 粤语流利说

- iOS Swift 原生 (21文件)
- Expo React Native (15文件)
- Web PWA (6文件)
- GitHub Actions CI/CD (3流水线)
- VIP支付 + AI陪练 + 十大课程"

:: 推送到 GitHub
git remote add origin https://github.com/wangheng2018-spec/yueyuliulishuo.git
git branch -M main
git push -u origin main

echo ✅ 推送成功！GitHub Actions 将自动触发构建
pause
