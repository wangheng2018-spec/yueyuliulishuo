import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import { useApp } from "../services/AppContext";
import { ChatMessage, ScenarioType, ScenarioDisplayNames } from "../models/types";

const scenarioDialogues: Record<ScenarioType, string[]> = {
  free: ["你好！我係你嘅粵語AI陪練。你想學啲咩呀？","你今日做咗啲咩呀？","加油！你越講越好㗎！"],
  restaurant: ["你想食啲咩呀？我推薦乾炒牛河！","要唔要杯凍奶茶？好好飲㗎！","呢間茶餐廳嘅蛋撻好出名㗎！"],
  shopping: ["呢件衫好襯你喎！","你想買啲咩？我可以俾啲建議你。","今日大減價，好抵買㗎！"],
  travel: ["去香港旅行一定要試下茶餐廳！","香港嘅夜景好靚㗎！","你識唔識搭地鐵？我可以教你。"],
  work: ["返工辛唔辛苦呀？","你嘅工作係做啲咩㗎？","開會嗰陣要講粵語，你要練習多啲。"],
  phone: ["喂，請問你搵邊位？","唔好意思，打錯電話。","你可唔可以大聲啲？我聽唔清楚。"],
  friend: ["你聽日得唔得閒？一齊食飯。","尋日我去咗行街，好開心！","呢排成日落雨，你要帶遮呀。"],
};

const scenarios: ScenarioType[] = ["free","restaurant","shopping","travel","work","phone","friend"];

export default function AIScreen() {
  const { isVip } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [voice, setVoice] = useState<"male"|"female">("female");
  const [scenario, setScenario] = useState<ScenarioType>("free");
  const scrollRef = useRef<ScrollView>(null);

  const speak = (text: string) => {
    Speech.speak(text, { language: "yue-HK", rate: 0.6, pitch: voice === "female" ? 1.3 : 0.8 });
  };

  const sendMsg = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), content: input, isUser: true };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const replies = scenarioDialogues[scenario] || scenarioDialogues.free;
      const reply = replies[Math.floor(Math.random() * replies.length)];
      const aiMsg: ChatMessage = { id: (Date.now()+1).toString(), content: reply, isUser: false, voiceType: voice };
      setMessages(prev => [...prev, aiMsg]);
      speak(reply);
    }, 800);
  };

  if (!isVip) {
    return (
      <View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#fff", padding:20}}>
        <Text style={{fontSize:60, marginBottom:16}}>🎤</Text>
        <Text style={{fontSize:20, fontWeight:"bold", marginBottom:8}}>AI粤语陪练</Text>
        <Text style={{fontSize:13, color:"#999", textAlign:"center", marginBottom:20}}>
          开通VIP即可与AI练习粤语对话{'\n'}支持男女声切换、实时语音
        </Text>
        <TouchableOpacity style={{backgroundColor:"#FFA500", paddingHorizontal:30, paddingVertical:12, borderRadius:12}}>
          <Text style={{color:"#fff", fontWeight:"bold"}}>开通VIP · ¥9.90/月</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex:1, backgroundColor:"#fff"}}>
      {/* Scenario chips */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{backgroundColor:"#f8f8f8", paddingVertical:6}}>
        <View style={{flexDirection:"row", paddingHorizontal:10}}>
          {scenarios.map(s => (
            <TouchableOpacity key={s} onPress={() => setScenario(s)}
              style={{paddingHorizontal:12, paddingVertical:5, borderRadius:14, marginHorizontal:3,
                backgroundColor: scenario === s ? "#FF6B6B" : "#e8e8e8"}}>
              <Text style={{fontSize:12, color: scenario === s ? "#fff" : "#333"}}>{ScenarioDisplayNames[s]}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Messages */}
      <ScrollView ref={scrollRef} style={{flex:1, padding:12}}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd()}>
        {messages.length === 0 && (
          <View style={{alignItems:"center", marginTop:60}}>
            <Text style={{fontSize:60, marginBottom:12}}>🎤</Text>
            <Text style={{fontSize:18, fontWeight:"bold"}}>AI粤语陪练</Text>
            <Text style={{fontSize:13, color:"#999", marginVertical:8, textAlign:"center"}}>
              当前场景：{ScenarioDisplayNames[scenario]}{'\n'}选择场景后开始对话吧！
            </Text>
          </View>
        )}
        {messages.map(m => (
          <View key={m.id} style={{flexDirection:m.isUser ? "row-reverse" : "row", marginBottom:12, alignItems:"flex-end"}}>
            <View style={{maxWidth:"75%", backgroundColor: m.isUser ? "#FF6B6B" : "#f0f0f0",
              borderRadius:12, padding:10,
              borderBottomRightRadius: m.isUser ? 4 : 12,
              borderBottomLeftRadius: m.isUser ? 12 : 4 }}>
              <Text style={{color: m.isUser ? "#fff" : "#333", fontSize:14}}>{m.content}</Text>
            </View>
            {!m.isUser && (
              <TouchableOpacity onPress={() => speak(m.content)} style={{marginLeft:6}}>
                <Text style={{fontSize:16}}>🔊</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Input */}
      <View style={{borderTopWidth:1, borderTopColor:"#eee", padding:12, flexDirection:"row", alignItems:"center"}}>
        <TouchableOpacity onPress={() => setVoice(voice === "female" ? "male" : "female")} style={{marginRight:8}}>
          <Text style={{fontSize:16}}>{voice === "female" ? "👩" : "👨"}</Text>
        </TouchableOpacity>
        <TextInput value={input} onChangeText={setInput} placeholder="输入粤语或普通话..."
          style={{flex:1, borderWidth:1, borderColor:"#ddd", borderRadius:20, paddingHorizontal:14, paddingVertical:8, fontSize:14}} />
        <TouchableOpacity onPress={sendMsg} style={{marginLeft:8, backgroundColor:"#FF6B6B", borderRadius:20, padding:8, width:36, height:36, justifyContent:"center", alignItems:"center"}}>
          <Text style={{color:"#fff", fontSize:16}}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
