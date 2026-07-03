import SwiftUI
import AVFoundation

struct AICompanionView: View {
    @EnvironmentObject var storeManager: StoreManager
    @State private var showVIP = false
    @State private var messages: [ChatMessage] = []
    @State private var inputText = ""
    @State private var selectedVoice: VoiceType = .female
    @State private var isListening = false
    @State private var selectedScenario: ScenarioType = .free
    
    var body: some View {
        NavigationView {
            if !storeManager.isVipActive {
                VStack(spacing: 20) {
                    Image(systemName: "waveform.circle.fill")
                        .font(.system(size: 80))
                        .foregroundColor(.gray)
                    
                    Text("AI粤语陪练")
                        .font(.title2)
                        .fontWeight(.bold)
                    
                    Text("开通VIP即可与AI练习粤语对话\n支持男女声切换、实时语音识别")
                        .font(.subheadline)
                        .foregroundColor(.gray)
                        .multilineTextAlignment(.center)
                    
                    Button("开通VIP · \(StoreProductType.monthly.price)") {
                        showVIP = true
                    }
                    .buttonStyle(.borderedProminent)
                    .tint(Color(hex: "FFD700"))
                    .controlSize(.large)
                }
                .navigationTitle("AI陪练")
                .sheet(isPresented: $showVIP) { VIPShopView() }
            } else {
                VStack(spacing: 0) {
                    // Scenario selection
                    ScrollView(.horizontal, showsIndicators: false) {
                        HStack(spacing: 8) {
                            ForEach(ScenarioType.allCases, id: \.self) { scenario in
                                ScenarioChip(
                                    scenario: scenario,
                                    isSelected: selectedScenario == scenario,
                                    action: { selectedScenario = scenario }
                                )
                            }
                        }
                        .padding(.horizontal)
                        .padding(.vertical, 8)
                    }
                    .background(Color(.systemGray6))
                    
                    // Messages
                    ScrollViewReader { proxy in
                        ScrollView {
                            LazyVStack(spacing: 16) {
                                ForEach(messages) { msg in
                                    ChatBubble(message: msg)
                                }
                                
                                if messages.isEmpty {
                                    WelcomeView(selectedVoice: $selectedVoice, scenario: selectedScenario)
                                }
                            }
                            .padding()
                        }
                        .onChange(of: messages.count) { _ in
                            if let last = messages.last {
                                withAnimation { proxy.scrollTo(last.id, anchor: .bottom) }
                            }
                        }
                    }
                    
                    // Input bar
                    VStack(spacing: 8) {
                        // Voice selector
                        HStack {
                            ForEach(VoiceType.allCases, id: \.self) { voice in
                                Button(action: { selectedVoice = voice }) {
                                    HStack(spacing: 4) {
                                        Image(systemName: voice == .male ? "person.fill" : "person.fill")
                                        Text(voice.displayName)
                                    }
                                    .font(.caption)
                                    .padding(.horizontal, 12)
                                    .padding(.vertical, 6)
                                    .background(selectedVoice == voice ? Color(hex: "FF6B6B") : Color(.systemGray5))
                                    .foregroundColor(selectedVoice == voice ? .white : .primary)
                                    .cornerRadius(16)
                                }
                            }
                            
                            Spacer()
                            
                            Button(action: toggleListening) {
                                Image(systemName: isListening ? "mic.fill" : "mic")
                                    .foregroundColor(isListening ? .red : .gray)
                            }
                        }
                        .padding(.horizontal)
                        
                        HStack(spacing: 8) {
                            TextField("输入粤语或普通话...", text: $inputText)
                                .textFieldStyle(.roundedBorder)
                            
                            Button(action: sendMessage) {
                                Image(systemName: "arrow.up.circle.fill")
                                    .font(.title2)
                                    .foregroundColor(Color(hex: "FF6B6B"))
                            }
                            .disabled(inputText.trimmingCharacters(in: .whitespaces).isEmpty)
                        }
                        .padding(.horizontal)
                        .padding(.bottom, 8)
                    }
                    .background(Color(.systemBackground))
                }
                .navigationTitle("AI陪练")
                .navigationBarTitleDisplayMode(.inline)
                .sheet(isPresented: $showVIP) { VIPShopView() }
            }
        }
    }
    
    private func sendMessage() {
        guard !inputText.trimmingCharacters(in: .whitespaces).isEmpty else { return }
        let userMsg = ChatMessage(content: inputText, isUser: true)
        messages.append(userMsg)
        inputText = ""
        
        // Simulate AI response
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
            let response = generateAIResponse(to: userMsg.content)
            messages.append(response)
        }
    }
    
    private func toggleListening() {
        isListening.toggle()
        if isListening {
            // Request speech recognition permission
            AVAudioSession.sharedInstance().requestRecordPermission { granted in
                DispatchQueue.main.async {
                    if !granted {
                        isListening = false
                    }
                }
            }
        }
    }
    
    private func generateAIResponse(to text: String) -> ChatMessage {
        let responses: [String: String] = [
            "你好": "你好！我係你嘅粵語AI陪練。你想學啲咩呀？\n(你好！我是你的粤语AI陪练。你想学些什么呢？)",
            "早晨": "早晨！今日想練啲咩粵語會話呀？\n(早上好！今天想练些什么粤语会话呢？)",
            "唔該": "唔使客氣！你嘅粵語講得好好㗎！\n(不客气！你的粤语说得很好呢！)",
        ]
        
        for (key, response) in responses {
            if text.contains(key) || key.contains(text) {
                return ChatMessage(content: response, isUser: false, voiceType: selectedVoice)
            }
        }
        
        let scenarios = selectedScenario.dialogues
        let randomResponse = scenarios.randomElement() ?? "幾好！繼續練習啦！\n(很好！继续练习吧！)"
        return ChatMessage(content: randomResponse, isUser: false, voiceType: selectedVoice)
    }
}

struct ChatMessage: Identifiable {
    let id = UUID()
    let content: String
    let isUser: Bool
    let voiceType: VoiceType?
    
    init(content: String, isUser: Bool, voiceType: VoiceType? = nil) {
        self.content = content
        self.isUser = isUser
        self.voiceType = voiceType
    }
}

enum VoiceType: String, CaseIterable {
    case male = "male"
    case female = "female"
    
    var displayName: String {
        switch self {
        case .male: return "男声"
        case .female: return "女声"
        }
    }
}

enum ScenarioType: String, CaseIterable {
    case free = "free"
    case restaurant = "restaurant"
    case shopping = "shopping"
    case travel = "travel"
    case work = "work"
    case phone = "phone"
    case friend = "friend"
    
    var displayName: String {
        switch self {
        case .free: return "自由对话"
        case .restaurant: return "茶餐厅"
        case .shopping: return "购物"
        case .travel: return "旅行"
        case .work: return "职场"
        case .phone: return "电话"
        case .friend: return "朋友聊天"
        }
    }
    
    var dialogues: [String] {
        switch self {
        case .free: return [
            "你好！我係AI陪練，我哋一齊練習粵語啦！\n(你好！我是AI陪练，我们一起练习粤语吧！)",
            "你今日做咗啲咩呀？\n(你今天做了什么呀？)",
            "你鍾意唔鍾意學粵語呀？\n(你喜欢不喜欢学粤语呀？)",
            "加油！你越講越好㗎！\n(加油！你越说越好的！)"
        ]
        case .restaurant: return [
            "你想食啲咩呀？我推薦乾炒牛河！\n(你想吃点什么？我推荐干炒牛河！)",
            "要唔要杯凍奶茶？好好飲㗎！\n(要不要杯冻奶茶？很好喝的！)",
            "呢間茶餐廳嘅蛋撻好出名㗎！\n(这家茶餐厅的蛋挞很有名的！)"
        ]
        case .shopping: return [
            "呢件衫好襯你喎！\n(这件衣服很适合你哦！)",
            "你想買啲咩？我可以俾啲建議你。\n(你想买点什么？我可以给你些建议。)",
            "今日大減價，好抵買㗎！\n(今天大减价，很划算的！)"
        ]
        case .travel: return [
            "去香港旅行一定要試下茶餐廳！\n(去香港旅行一定要试下茶餐厅！)",
            "香港嘅夜景好靚㗎！\n(香港的夜景很美的！)",
            "你識唔識搭地鐵？我可以教你。\n(你会不会搭地铁？我可以教你。)"
        ]
        case .work: return [
            "返工辛唔辛苦呀？\n(上班辛不辛苦呀？)",
            "你嘅工作係做啲咩㗎？\n(你的工作是做什么的？)",
            "開會嗰陣要講粵語，你要練習多啲。\n(开会的时候要说粤语，你要多练习。)"
        ]
        case .phone: return [
            "喂，請問你搵邊位？\n(喂，请问你找哪位？)",
            "唔好意思，打錯電話。\n(不好意思，打错电话了。)",
            "你可唔可以大聲啲？我聽唔清楚。\n(你可不可以大声点？我听不清楚。)"
        ]
        case .friend: return [
            "你聽日得唔得閒？一齊食飯。\n(你明天有空吗？一起吃饭。)",
            "尋日我去咗行街，好開心！\n(昨天我去逛街了，很开心！)",
            "呢排成日落雨，你要帶遮呀。\n(最近老是下雨，你要带伞哦。)"
        ]
        }
    }
}

struct ChatBubble: View {
    let message: ChatMessage
    
    var body: some View {
        HStack(alignment: .bottom, spacing: 8) {
            if !message.isUser {
                Image(systemName: message.voiceType == .male ? "person.circle.fill" : "person.circle.fill")
                    .foregroundColor(message.voiceType == .male ? .blue : .pink)
                    .font(.title2)
            }
            
            VStack(alignment: message.isUser ? .trailing : .leading, spacing: 4) {
                Text(message.content)
                    .font(.subheadline)
                    .padding(12)
                    .background(message.isUser ? Color(hex: "FF6B6B") : Color(.systemGray6))
                    .foregroundColor(message.isUser ? .white : .primary)
                    .cornerRadius(16)
                    .cornerRadius(message.isUser ? 16 : 16, corners: message.isUser ? [.topLeft, .topRight, .bottomLeft] : [.topLeft, .topRight, .bottomRight])
                
                if !message.isUser {
                    Button(action: {}) {
                        Image(systemName: "speaker.wave.2.fill")
                            .font(.caption)
                            .foregroundColor(Color(hex: "FF6B6B"))
                    }
                }
            }
            
            if message.isUser {
                Image(systemName: "person.circle.fill")
                    .foregroundColor(Color(hex: "FF6B6B"))
                    .font(.title2)
            }
        }
        .frame(maxWidth: .infinity, alignment: message.isUser ? .trailing : .leading)
    }
}

struct ScenarioChip: View {
    let scenario: ScenarioType
    let isSelected: Bool
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Text(scenario.displayName)
                .font(.subheadline)
                .fontWeight(isSelected ? .semibold : .regular)
                .padding(.horizontal, 14)
                .padding(.vertical, 6)
                .background(isSelected ? Color(hex: "FF6B6B") : Color(.systemGray5))
                .foregroundColor(isSelected ? .white : .primary)
                .cornerRadius(16)
        }
    }
}

struct WelcomeView: View {
    @Binding var selectedVoice: VoiceType
    let scenario: ScenarioType
    
    var body: some View {
        VStack(spacing: 20) {
            Spacer().frame(height: 40)
            
            Image(systemName: "waveform.circle.fill")
                .font(.system(size: 80))
                .foregroundColor(Color(hex: "FF6B6B").opacity(0.6))
            
            Text("AI粤语陪练")
                .font(.title)
                .fontWeight(.bold)
            
            Text("当前选择：\(scenario.displayName)")
                .font(.subheadline)
                .foregroundColor(.gray)
            
            VStack(alignment: .leading, spacing: 12) {
                FeatureBullet(text: "选择场景开始对话练习")
                FeatureBullet(text: "支持男声 / 女声切换")
                FeatureBullet(text: "可语音输入发音练习")
                FeatureBullet(text: "AI会根据场景智能回应")
            }
            .padding()
            .background(Color(.systemGray6))
            .cornerRadius(12)
            
            Text("在下方输入框开始对话吧！")
                .font(.caption)
                .foregroundColor(.gray)
            
            Spacer()
        }
    }
}

struct FeatureBullet: View {
    let text: String
    
    var body: some View {
        HStack(spacing: 8) {
            Image(systemName: "checkmark.circle.fill")
                .foregroundColor(Color(hex: "FF6B6B"))
                .font(.caption)
            Text(text)
                .font(.subheadline)
        }
    }
}

// Helper for rounded corners
extension View {
    func cornerRadius(_ radius: CGFloat, corners: UIRectCorner) -> some View {
        clipShape(RoundedCorner(radius: radius, corners: corners))
    }
}

struct RoundedCorner: Shape {
    var radius: CGFloat = .infinity
    var corners: UIRectCorner = .allCorners
    
    func path(in rect: CGRect) -> Path {
        let path = UIBezierPath(roundedRect: rect, byRoundingCorners: corners, cornerRadii: CGSize(width: radius, height: radius))
        return Path(path.cgPath)
    }
}
