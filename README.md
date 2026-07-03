# 🗣️ 粤语流利说 - Cantonese Fluent

一款专注于粤语学习的 iOS App，适合中国大陆用户及外国人学习粤语沟通。

## 📱 项目概述

**平台**：iOS 16.0+（仅 iPhone）  
**架构**：SwiftUI + StoreKit + AVFoundation  
**本地化**：简体中文 / English / 粵語  
**离线可用**：✅ 所有内容本地存储，无需联网  

## ✨ 核心功能

### 📚 十大分类课程体系
| 分类 | 课程数 | 难度 | 免费/VIP |
|------|--------|------|----------|
| 发音训练 | 3课 | 零基础 | ✅ 免费 |
| 社交礼仪 | 3课 | 零基础 | ✅ 免费 |
| 生活用语 | 4课 | 零基础 | ✅ 免费 |
| 职场粤语 | 3课 | 中级 | ✅ 免费 |
| 校园粤语 | 2课 | 零基础 | ✅ 免费 |
| 旅行粤语 | 2课 | 零基础 | ✅ 免费 |
| 电话聊天 | 3课 | 中级 | 👑 VIP |
| 香港文化 | 2课 | 中级 | 👑 VIP |
| 俚语俗语 | 2课 | 高级 | 👑 VIP |
| 语法基础 | 3课 | 中级 | 👑 VIP |

### 💳 VIP 订阅系统
- **1元试用**（3天试用）: ¥1.00 - 体验全部课程和AI陪练
- **月度会员**: ¥9.90/月 - 解锁全部内容
- **永久会员**: ¥99.00 - 一次购买，终身免费更新

### 🤖 AI 粤语陪练
- 男声 / 女声自由切换
- 7大场景对话（自由、茶餐厅、购物、旅行、职场、电话、朋友）
- 离线语音合成（AVSpeechSynthesizer）
- 语音输入与发音练习
- 智能场景回应

### 🎯 学习工具
- **间隔记忆卡片**：智能复习系统
- **每日挑战**：保底学习机制
- **学习进度追踪**：XP等级、学习时长、连续打卡
- **多语言界面**：简体中文 / English / 粵語界面切换
- **深色模式**：护眼夜间模式
- **离线下载**：所有课程内容内置，无需网络

## 🏗 项目结构

```
粤语流利说/
├── CantoneseApp.swift          # App 入口
├── Info.plist                  # 应用配置
├── Models/
│   ├── AppState.swift          # 全局状态管理
│   ├── User.swift              # 用户模型
│   ├── Course.swift            # 课程/课文/对话模型
│   ├── LearningProgress.swift  # 学习进度模型
│   └── StoreProduct.swift      # 商品定义
├── Services/
│   ├── ContentService.swift    # 内容服务
│   ├── CourseDataProvider.swift # 课程数据（综合）
│   ├── CourseDataPart2.swift   # 课程数据 Part2
│   └── CourseDataPart3.swift   # 课程数据 Part3
│   └── StoreManager.swift      # 内购管理（StoreKit）
├── ViewModels/
│   └── LearningViewModel.swift # 学习逻辑
├── Views/
│   ├── ContentView.swift       # 主导航(TabView)
│   ├── Home/
│   │   └── HomeView.swift      # 首页
│   ├── Courses/
│   │   ├── CourseListView.swift     # 课程列表
│   │   └── LessonDetailView.swift  # 课文详情
│   ├── AICompanion/
│   │   └── AICompanionView.swift   # AI陪练
│   ├── Profile/
│   │   ├── ProfileView.swift       # 个人中心
│   │   └── VIPShopView.swift       # VIP商店
├── Components/
├── Extensions/
│   └── ColorExtension.swift    # Color Hex扩展
├── Utils/
│   └── Utilities.swift         # 工具类
└── Resources/
    ├── Audio/                  # 音频资源目录
    ├── Data/                   # 数据目录
    └── Localization/           # 本地化
```

## 🚀 如何运行

### 前提条件
- macOS 13.0+ (Ventura)
- Xcode 14.0+
- Apple Developer 账号（用于真机测试和 App Store 发布）

### 步骤
1. **克隆项目**
```bash
git clone <your-repo-url>
cd 粤语流利说
```

2. **在 Xcode 中打开**
```bash
open 粤语流利说.xcodeproj
```

3. **配置签名**
   - 选择项目 Target -> Signing & Capabilities
   - 选择您的 Team（Apple Developer 账号）
   - 修改 Bundle Identifier 为您的唯一标识

4. **选择模拟器或真机**
   - 支持 iOS 16.0+ 的 iPhone
   - 推荐：iPhone 14 Pro / iPhone 15 系列

5. **运行** ⌘R

## 📦 构建配置

- **Deployment Target**: iOS 16.0
- **Swift Version**: Swift 5.7+
- **Frameworks**: 
  - StoreKit.framework (内购)
  - AVFoundation.framework (语音)
  - AVSpeechSynthesis (离线TTS)

## 📊 数据流架构

```
用户操作 → View(SwiftUI) → ViewModel(ObservableObject) 
  → Model(Codable) → UserDefaults(持久化)
  → Services → StoreKit(内购)
```

所有课程数据以纯 Swift 结构体的形式内置于 App 中，无需网络请求，完全离线可用。

## 🛍 内购配置 (App Store Connect)

在 App Store Connect 中创建以下商品：

| Product ID | 类型 | 价格 |
|------------|------|------|
| `com.yueyu.trial` | 消耗型 | ¥1.00 |
| `com.yueyu.monthly` | 自动续期订阅 | ¥9.90 |
| `com.yueyu.lifetime` | 消耗型 | ¥99.00 |

## 🌐 本地化

项目已内置多语言基础框架：
- `zh-Hans` - 简体中文（默认）
- `en` - English
- `yue` - 粵語

## 📋 未来计划

- [ ] 粤语语音识别评估系统
- [ ] 社区问答功能
- [ ] 粤语拼音打字练习
- [ ] 学习小组/排行榜
- [ ] Watch App 配套练习
- [ ] CoreML 离线语音评估模型

## 📄 许可证

本项目仅供学习参考。

---

**Made with ❤️ for Cantonese learners around the world**
