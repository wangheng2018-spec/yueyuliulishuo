# 粤语流利说 - 一键推送到 GitHub
# 运行方法：右键 → 用 PowerShell 运行

$repo = "https://github.com/wangheng2018-spec/yueyuliulishuo.git"
$dir = "C:\Users\46791\Documents\粤语流利说"

Write-Host "📦 准备推送 粤语流利说 到 GitHub..." -ForegroundColor Cyan
Write-Host "仓库: $repo" -ForegroundColor Cyan
Write-Host ""

Set-Location $dir

# 删除旧 .git
if (Test-Path ".git") {
    Write-Host "🗑️  删除旧的 .git..." -ForegroundColor Yellow
    Remove-Item -Force -Recurse ".git" -ErrorAction SilentlyContinue
    if (Test-Path ".git") {
        Write-Host "❌ 无法删除 .git，请关闭其他程序后重试" -ForegroundColor Red
        pause
        exit
    }
}

# 初始化
Write-Host "🔧 初始化 Git 仓库..." -ForegroundColor Green
git init

Write-Host "📄 添加文件..." -ForegroundColor Green
git add --all

Write-Host "💾 创建提交..." -ForegroundColor Green
git commit -m "🎉 init: 粤语流利说

- iOS Swift 原生 (21文件)
- Expo React Native (15文件)  
- Web PWA (6文件)
- GitHub Actions CI/CD (3流水线)
- VIP支付 + AI陪练 + 十大课程"

# 推送
Write-Host "☁️  推送到 GitHub..." -ForegroundColor Green
git remote add origin $repo
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "✅ 推送成功！" -ForegroundColor Green
Write-Host ""
Write-Host "⏳ GitHub Actions 将自动触发："
Write-Host "  🌐 Web PWA → $(([uri]$repo).Scheme + '://' + ([uri]$repo).Host + '/' + 'wangheng2018-spec/yueyuliulishuo/')"
Write-Host "  📱 Expo → EAS Build 云编译 IPA/APK"
Write-Host "  🍎 Swift → macOS Runner Xcode 编译"
Write-Host ""
Write-Host "📱 iPhone 访问 Pages 网址后用 Safari 添加到主屏幕即可"
pause
