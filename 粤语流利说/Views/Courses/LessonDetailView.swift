import SwiftUI

struct LessonDetailView: View {
    let lesson: Lesson
    @EnvironmentObject var learningVM: LearningViewModel
    @State private var currentDialogueIndex = 0
    @State private var showTranslation = true
    @State private var showJyutping = true
    
    var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                // MARK: - Header
                VStack(spacing: 8) {
                    Text(lesson.title)
                        .font(.title2)
                        .fontWeight(.bold)
                    
                    if !lesson.dialogues.isEmpty {
                        Text("对话 \(currentDialogueIndex + 1)/\(lesson.dialogues.count)")
                            .font(.subheadline)
                            .foregroundColor(.gray)
                    }
                }
                
                // MARK: - Dialogue Cards
                if !lesson.dialogues.isEmpty {
                    VStack(spacing: 12) {
                        let dialogue = lesson.dialogues[currentDialogueIndex]
                        
                        DialogueCard(dialogue: dialogue, showTranslation: $showTranslation, showJyutping: $showJyutping)
                        
                        // Navigation
                        HStack {
                            if currentDialogueIndex > 0 {
                                Button("上一句") {
                                    withAnimation { currentDialogueIndex -= 1 }
                                }
                                .buttonStyle(.bordered)
                            }
                            
                            Spacer()
                            
                            if currentDialogueIndex < lesson.dialogues.count - 1 {
                                Button("下一句") {
                                    withAnimation { currentDialogueIndex += 1 }
                                }
                                .buttonStyle(.borderedProminent)
                                .tint(Color(hex: "FF6B6B"))
                            }
                        }
                    }
                    
                    // Play all button
                    Button(action: {}) {
                        Label("播放全部对话", systemImage: "play.circle.fill")
                            .frame(maxWidth: .infinity)
                            .padding()
                            .background(Color(hex: "FF6B6B"))
                            .foregroundColor(.white)
                            .cornerRadius(12)
                    }
                }
                
                Divider()
                
                // MARK: - Vocabulary
                if !lesson.vocabulary.isEmpty {
                    VStack(alignment: .leading, spacing: 12) {
                        Text("词汇")
                            .font(.title3)
                            .fontWeight(.bold)
                        
                        ForEach(lesson.vocabulary) { vocab in
                            VocabularyCard(vocab: vocab)
                        }
                    }
                }
                
                // MARK: - Grammar Tips
                if !lesson.grammarTips.isEmpty {
                    VStack(alignment: .leading, spacing: 8) {
                        Text("语法提示")
                            .font(.title3)
                            .fontWeight(.bold)
                        
                        ForEach(Array(lesson.grammarTips.enumerated()), id: \.offset) { _, tip in
                            HStack(alignment: .top, spacing: 8) {
                                Image(systemName: "lightbulb.fill")
                                    .foregroundColor(.yellow)
                                    .font(.caption)
                                Text(tip)
                                    .font(.subheadline)
                                    .foregroundColor(.secondary)
                            }
                            .padding()
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .background(Color.yellow.opacity(0.08))
                            .cornerRadius(10)
                        }
                    }
                }
                
                // MARK: - Practice Sentences
                if !lesson.practiceSentences.isEmpty {
                    VStack(alignment: .leading, spacing: 12) {
                        Text("练习句子")
                            .font(.title3)
                            .fontWeight(.bold)
                        
                        ForEach(lesson.practiceSentences) { sentence in
                            HStack {
                                VStack(alignment: .leading, spacing: 4) {
                                    Text(sentence.cantonese)
                                        .font(.headline)
                                    Text(sentence.jyutping)
                                        .font(.caption)
                                        .foregroundColor(.gray)
                                    Text(sentence.chinese)
                                        .font(.subheadline)
                                        .foregroundColor(.secondary)
                                }
                                
                                Spacer()
                                
                                Button(action: {}) {
                                    Image(systemName: "speaker.wave.2.fill")
                                        .foregroundColor(Color(hex: "FF6B6B"))
                                }
                            }
                            .padding()
                            .background(Color(.systemGray6))
                            .cornerRadius(12)
                        }
                    }
                }
            }
            .padding()
        }
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItemGroup(placement: .navigationBarTrailing) {
                Toggle(isOn: $showTranslation) {
                    Image(systemName: "text.bubble")
                }
                .toggleStyle(.button)
                .tint(Color(hex: "FF6B6B"))
                
                Toggle(isOn: $showJyutping) {
                    Image(systemName: "character.phonetic")
                }
                .toggleStyle(.button)
                .tint(Color(hex: "FF6B6B"))
            }
        }
    }
}

struct DialogueCard: View {
    let dialogue: Dialogue
    @Binding var showTranslation: Bool
    @Binding var showJyutping: Bool
    
    var body: some View {
        VStack(spacing: 12) {
            // Speaker
            HStack {
                Circle()
                    .fill(Color(hex: "FF6B6B").opacity(0.15))
                    .frame(width: 32, height: 32)
                    .overlay(
                        Text(String(dialogue.speaker.prefix(1)))
                            .font(.caption)
                            .fontWeight(.bold)
                            .foregroundColor(Color(hex: "FF6B6B"))
                    )
                
                Text(dialogue.speaker)
                    .font(.subheadline)
                    .fontWeight(.medium)
                
                Spacer()
                
                Button(action: {}) {
                    Image(systemName: "speaker.wave.2.fill")
                        .foregroundColor(Color(hex: "FF6B6B"))
                }
            }
            
            // Cantonese
            Text(dialogue.cantonese)
                .font(.title3)
                .fontWeight(.medium)
                .multilineTextAlignment(.center)
            
            // Jyutping
            if showJyutping {
                Text(dialogue.jyutping)
                    .font(.subheadline)
                    .foregroundColor(.gray)
                    .italic()
            }
            
            // Translation
            if showTranslation {
                Divider()
                Text(dialogue.chinese)
                    .font(.body)
                    .foregroundColor(.secondary)
                
                Text(dialogue.english)
                    .font(.caption)
                    .foregroundColor(.gray)
            }
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(16)
    }
}

struct VocabularyCard: View {
    let vocab: VocabularyItem
    
    var body: some View {
        VStack(spacing: 8) {
            HStack {
                Text(vocab.cantonese)
                    .font(.headline)
                    .fontWeight(.bold)
                
                Spacer()
                
                Button(action: {}) {
                    Image(systemName: "speaker.wave.2.fill")
                        .foregroundColor(Color(hex: "FF6B6B"))
                }
            }
            
            HStack {
                Text(vocab.jyutping)
                    .font(.subheadline)
                    .foregroundColor(.gray)
                
                Text("|")
                    .foregroundColor(.gray.opacity(0.3))
                
                Text(vocab.chinese)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
                
                Spacer()
            }
            
            Text("例：\(vocab.exampleSentence)")
                .font(.caption)
                .foregroundColor(.gray)
                .frame(maxWidth: .infinity, alignment: .leading)
        }
        .padding()
        .background(Color(.systemGray6))
        .cornerRadius(12)
    }
}
