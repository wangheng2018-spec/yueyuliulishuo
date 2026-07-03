import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import { Lesson } from "../models/types";
import { markLessonComplete } from "../services/storage";
import { useApp } from "../services/AppContext";

export default function LessonScreen({ route }: any) {
  const lesson: Lesson = route.params.lesson;
  const { refreshProgress } = useApp();
  const [idx, setIdx] = useState(0);
  const [showTrans, setShowTrans] = useState(true);

  const speak = (text: string) => {
    Speech.speak(text, { language: "yue-HK", rate: 0.7 });
  };

  const handleComplete = async () => {
    await markLessonComplete(lesson.id, 0.9);
    await refreshProgress();
  };

  return (
    <ScrollView style={{flex:1, backgroundColor:"#fff", padding:16}}>
      {/* Dialogue */}
      {lesson.dialogues.length > 0 && (
        <View style={styles.card}>
          <View style={{flexDirection:"row", alignItems:"center", marginBottom:8}}>
            <View style={[styles.avatar, {backgroundColor:"#FF6B6B22"}]}>
              <Text style={{color:"#FF6B6B", fontWeight:"bold"}}>{lesson.dialogues[idx].speaker[0]}</Text>
            </View>
            <Text style={{fontSize:14, marginLeft:8, fontWeight:"500"}}>{lesson.dialogues[idx].speaker}</Text>
            <TouchableOpacity style={{marginLeft:"auto"}} onPress={() => speak(lesson.dialogues[idx].cantonese)}>
              <Text style={{fontSize:22}}>🔊</Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize:20, textAlign:"center", marginVertical:12}}>{lesson.dialogues[idx].cantonese}</Text>
          <Text style={{fontSize:13, color:"#999", textAlign:"center", fontStyle:"italic"}}>{lesson.dialogues[idx].jyutping}</Text>
          {showTrans && (
            <>
              <View style={{borderTopWidth:1, borderTopColor:"#eee", marginTop:12, paddingTop:12}} />
              <Text style={{fontSize:14, color:"#666", textAlign:"center"}}>{lesson.dialogues[idx].chinese}</Text>
              <Text style={{fontSize:12, color:"#999", textAlign:"center", marginTop:4}}>{lesson.dialogues[idx].english}</Text>
            </>
          )}
          {/* Nav */}
          <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:16}}>
            <TouchableOpacity disabled={idx===0} onPress={() => setIdx(idx-1)}
              style={[styles.navBtn, {opacity: idx===0 ? 0.3 : 1}]}>
              <Text>上一句</Text>
            </TouchableOpacity>
            <Text style={{color:"#999", fontSize:12, alignSelf:"center"}}>{idx+1}/{lesson.dialogues.length}</Text>
            <TouchableOpacity disabled={idx===lesson.dialogues.length-1} onPress={() => setIdx(idx+1)}
              style={[styles.navBtn, {opacity: idx===lesson.dialogues.length-1 ? 0.3 : 1, backgroundColor:"#FF6B6B"}]}>
              <Text style={{color:"#fff"}}>下一句</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Vocabulary */}
      {lesson.vocabulary.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>词汇</Text>
          {lesson.vocabulary.map(v => (
            <View key={v.id} style={styles.vocabCard}>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{fontSize:16, fontWeight:"bold"}}>{v.cantonese}</Text>
                <TouchableOpacity onPress={() => speak(v.cantonese)}><Text>🔊</Text></TouchableOpacity>
              </View>
              <Text style={{fontSize:13, color:"#999", marginTop:2}}>{v.jyutping} | {v.chinese} ({v.english})</Text>
              <Text style={{fontSize:12, color:"#bbb", marginTop:4}}>例：{v.exampleSentence}</Text>
            </View>
          ))}
        </>
      )}

      {/* Grammar Tips */}
      {lesson.grammarTips.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>语法提示</Text>
          {lesson.grammarTips.map((tip, i) => (
            <View key={i} style={[styles.tipCard]}>
              <Text style={{color:"#FFA500", fontSize:16, marginRight:8}}>💡</Text>
              <Text style={{fontSize:13, color:"#666", flex:1}}>{tip}</Text>
            </View>
          ))}
        </>
      )}

      {/* Practice */}
      {lesson.practiceSentences.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>练习句子</Text>
          {lesson.practiceSentences.map(s => (
            <TouchableOpacity key={s.id} style={styles.practiceCard} onPress={() => speak(s.cantonese)}>
              <View style={{flex:1}}>
                <Text style={{fontSize:16}}>{s.cantonese}</Text>
                <Text style={{fontSize:12, color:"#999", marginTop:2}}>{s.jyutping}</Text>
                <Text style={{fontSize:13, color:"#666", marginTop:2}}>{s.chinese}</Text>
              </View>
              <Text style={{fontSize:20}}>🔊</Text>
            </TouchableOpacity>
          ))}
        </>
      )}

      {/* Complete */}
      <TouchableOpacity style={styles.completeBtn} onPress={handleComplete}>
        <Text style={{color:"#fff", fontWeight:"bold", fontSize:16}}>✓ 标记为已学完</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor:"#f8f8f8", borderRadius:16, padding:16, marginBottom:16 },
  avatar: { width:32, height:32, borderRadius:16, justifyContent:"center", alignItems:"center" },
  navBtn: { paddingHorizontal:16, paddingVertical:8, borderRadius:8, borderWidth:1, borderColor:"#ddd" },
  sectionTitle: { fontSize:18, fontWeight:"bold", marginTop:16, marginBottom:10 },
  vocabCard: { backgroundColor:"#f8f8f8", borderRadius:10, padding:12, marginBottom:8 },
  tipCard: { flexDirection:"row", backgroundColor:"#FFF8E1", borderRadius:10, padding:12, marginBottom:8, alignItems:"center" },
  practiceCard: { flexDirection:"row", backgroundColor:"#f8f8f8", borderRadius:10, padding:14, marginBottom:8, alignItems:"center" },
  completeBtn: { backgroundColor:"#4CAF50", borderRadius:12, padding:16, alignItems:"center", marginTop:20, marginBottom:30 },
});
