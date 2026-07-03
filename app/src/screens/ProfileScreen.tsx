import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Switch } from "react-native";
import { useApp } from "../services/AppContext";
import { allCourses } from "../data/courses";
import { CourseCategories, CategoryDisplayNames, CategoryIcons, CourseCategory } from "../models/types";

export default function ProfileScreen({ navigation }: any) {
  const { progress, isVip, darkMode, toggleDark, vipType } = useApp();
  const totalLessons = allCourses.reduce((s,c) => s+c.lessons.length, 0);
  const completed = Object.keys(progress.completedLessons).length;

  const formatTime = (s: number) => {
    const h = Math.floor(s/3600), m = Math.floor((s%3600)/60);
    return h > 0 ? `${h}h${m}m` : `${m}分钟`;
  };

  return (
    <ScrollView style={{flex:1, backgroundColor:"#fff"}}>
      {/* Profile */}
      <View style={{alignItems:"center", paddingVertical:24}}>
        <View style={{width:64, height:64, borderRadius:32, backgroundColor:"#FF6B6B", justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:28, color:"#fff", fontWeight:"bold"}}>学</Text>
        </View>
        <Text style={{fontSize:18, fontWeight:"bold", marginTop:8}}>学习者</Text>
        <Text style={{fontSize:12, color:"#999"}}>⭐ Lv.{progress.level} · {progress.xpPoints} XP</Text>
      </View>

      {/* VIP */}
      <TouchableOpacity style={[styles.menuRow, {backgroundColor: isVip ? "#FFF8E1" : "#fff"}]}
        onPress={() => navigation.navigate("VIPShop")}>
        <Text style={{fontSize:20}}>👑</Text>
        <Text style={{marginLeft:10, fontWeight:"500"}}>{isVip ? `VIP会员 (${vipType === "lifetime" ? "永久" : vipType === "monthly" ? "月度" : "试用"})` : "开通VIP会员"}</Text>
      </TouchableOpacity>

      {/* Stats */}
      <Text style={styles.sectionTitle}>学习统计</Text>
      <View style={{paddingHorizontal:16}}>
        <StatRow icon="📖" label="已完成课程" value={`${completed}`} />
        <StatRow icon="⏱️" label="学习时长" value={formatTime(progress.totalStudyTime)} />
        <StatRow icon="🔥" label="连续打卡" value={`${progress.currentStreak} 天`} />
        <StatRow icon="🏆" label="最高纪录" value={`${progress.longestStreak} 天`} />
      </View>

      {/* Category Progress */}
      <Text style={styles.sectionTitle}>分类进度</Text>
      <View style={{paddingHorizontal:16}}>
        {CourseCategories.map(cat => {
          const catCourses = allCourses.filter(c => c.category === cat);
          const catTotal = catCourses.reduce((s,c) => s+c.lessons.length, 0);
          const catDone = catCourses.reduce((s,c) => s+c.lessons.filter(l => progress.completedLessons[l.id]).length, 0);
          return (
            <View key={cat} style={{marginBottom:8}}>
              <View style={{flexDirection:"row", justifyContent:"space-between", marginBottom:4}}>
                <Text style={{fontSize:12}}>{CategoryIcons[cat]} {CategoryDisplayNames[cat]}</Text>
                <Text style={{fontSize:11, color:"#999"}}>{catDone}/{catTotal}</Text>
              </View>
              <View style={{height:6, backgroundColor:"#eee", borderRadius:3, overflow:"hidden"}}>
                <View style={{width:`${catTotal > 0 ? (catDone/catTotal)*100 : 0}%`, height:"100%", backgroundColor:"#FF6B6B", borderRadius:3}} />
              </View>
            </View>
          );
        })}
      </View>

      {/* Settings */}
      <Text style={styles.sectionTitle}>设置</Text>
      <View style={{paddingHorizontal:16}}>
        <View style={styles.menuRow}>
          <Text style={{fontSize:18}}>🌙</Text>
          <Text style={{marginLeft:10, flex:1}}>深色模式</Text>
          <Switch value={darkMode} onValueChange={toggleDark} trackColor={{false:"#ddd", true:"#FF6B6B"}} />
        </View>
        <View style={styles.menuRow}>
          <Text style={{fontSize:18}}>ℹ️</Text>
          <Text style={{marginLeft:10, flex:1}}>版本</Text>
          <Text style={{color:"#999", fontSize:12}}>1.0.0</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function StatRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={{flexDirection:"row", alignItems:"center", paddingVertical:10, borderBottomWidth:1, borderBottomColor:"#f0f0f0"}}>
      <Text style={{fontSize:16, width:28}}>{icon}</Text>
      <Text style={{fontSize:13, flex:1}}>{label}</Text>
      <Text style={{fontSize:13, fontWeight:"600"}}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: { fontSize:16, fontWeight:"bold", marginTop:20, marginBottom:10, paddingHorizontal:16 },
  menuRow: { flexDirection:"row", alignItems:"center", paddingHorizontal:16, paddingVertical:12, borderRadius:10, marginHorizontal:16, marginBottom:6 },
});
