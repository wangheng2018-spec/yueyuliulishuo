import Foundation

// MARK: - Jyutping Helper
struct JyutpingHelper {
    static func getJyutping(for character: String) -> String {
        // Built-in basic jyutping dictionary for common characters
        let dictionary: [String: String] = [
            "我": "ngo5", "你": "nei5", "他": "taa1", "她": "taa1",
            "好": "hou2", "唔": "m4", "係": "hai6", "嘅": "ge3",
            "嘅": "ge3", "係": "hai6", "喺": "hai2", "咗": "zo2",
            "嚟": "lai4", "去": "heoi3", "食": "sik6", "飲": "jam2",
            "講": "gong2", "聽": "teng1", "睇": "tai2", "寫": "se2",
            "大": "daai6", "小": "siu2", "人": "jan4", "學": "hok6",
            "家": "gaa1", "屋": "uk1", "車": "ce1", "水": "seoi2",
            "火": "fo2", "風": "fung1", "雨": "jyu5", "日": "jat6",
            "月": "jyut6", "星": "sing1", "山": "saan1", "海": "hoi2",
            "花": "faa1", "草": "cou2", "天": "tin1", "地": "dei6",
            "一": "jat1", "二": "ji6", "三": "saam1", "四": "sei3",
            "五": "ng5", "六": "luk6", "七": "cat1", "八": "baat3",
            "九": "gau2", "十": "sap6", "上": "soeng6", "下": "haa6"
        ]
        return dictionary[character] ?? ""
    }
}

// MARK: - Audio Manager
class AudioManager: ObservableObject {
    static let shared = AudioManager()
    
    func speak(_ text: String, voiceType: VoiceType = .female) {
        // Use AVSpeechSynthesizer for offline TTS
        let synthesizer = AVSpeechSynthesizer()
        let utterance = AVSpeechUtterance(string: text)
        utterance.voice = AVSpeechSynthesisVoice(language: "yue-HK")
        utterance.rate = 0.5
        utterance.pitchMultiplier = voiceType == .female ? 1.5 : 0.8
        synthesizer.speak(utterance)
    }
}

// MARK: - Cantonese Number Helper
struct NumberHelper {
    static func toCantonese(_ number: Int) -> String {
        let cantoneseDigits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]
        if number <= 10 {
            return cantoneseDigits[number]
        }
        return String(number)
    }
}

// MARK: - Study Reminder Manager
class ReminderManager {
    static func scheduleDailyReminder(at hour: Int = 20, minute: Int = 0) {
        // In production, use UNUserNotificationCenter for local notifications
        UserDefaults.standard.set(hour, forKey: "reminder_hour")
        UserDefaults.standard.set(minute, forKey: "reminder_minute")
    }
}
