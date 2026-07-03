import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useApp } from "../services/AppContext";
import { allCourses } from "../data/courses";
import { CourseCategories, CategoryDisplayNames, CategoryIcons, CourseCategory } from "../models/types";

export default function HomeScreen({ navigation }: any) {
  const { progress, isVip } = useApp();
  const totalLessons = allCourses.reduce((s, c) => s + c.lessons.length, 0);
  const completedCount = Object.keys(progress.completedLessons).length;

  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>{isVip ? "VIP会员" : "每日学粤语"}</Text>
        <Text style={styles.bannerSub}>{"每天15分钟，轻松学会粤语沟通"}</Text>
        <View style={styles.streakRow}>
          <Text style={{color:"#fff", fontSize:12}}>🔥 已连续学习 {progress.currentStreak} 天</Text>
        </View>
      </View>

      {/* VIP card */}
      {!isVip && (
        <TouchableOpacity style={styles.vipCard} onPress={() => navigation.navigate("VIPShop")}>
          <Text style={{color:"#fff", fontSize:16, fontWeight:"bold"}}>解锁全部课程 🎉</Text>
          <Text style={{color:"#fff", fontSize:12, marginTop:4}}>1元试用 · 9.9元/月 · 99元永久</Text>
        </TouchableOpacity>
      )}

      {/* Stats */}
      <View style={styles.statsRow}>
        <StatCard icon="📖" value={`${completedCount}`} label="已学" />
        <StatCard icon="⭐" value={`${progress.xpPoints}`} label="经验" />
        <StatCard icon="🔥" value={`${progress.currentStreak}`} label="连续" />
        <StatCard icon="📊" value={`${Math.round(completedCount / Math.max(totalLessons,1) * 100)}%`} label="完成" />
      </View>

      {/* Categories Grid */}
      <Text style={styles.sectionTitle}>课程分类</Text>
      <View style={styles.categoriesGrid}>
        {CourseCategories.slice(0, 8).map((cat) => (
          <TouchableOpacity key={cat} style={styles.catItem}
            onPress={() => navigation.navigate("Courses", { screen:"CourseList", params:{ category:cat } })}>
            <Text style={{fontSize:28}}>{CategoryIcons[cat]}</Text>
            <Text style={styles.catLabel}>{CategoryDisplayNames[cat]}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Daily Challenge */}
      <Text style={styles.sectionTitle}>今日挑战</Text>
      <View style={{ backgroundColor:"#f5f5f5", borderRadius:12, padding:16, marginBottom:20 }}>
        <Text style={{fontWeight:"500"}}>学习15个新词汇</Text>
        <View style={{height:8, backgroundColor:"#e0e0e0", borderRadius:4, marginVertical:8, overflow:"hidden"}}>
          <View style={{width:"60%", height:"100%", backgroundColor:"#FF6B6B", borderRadius:4}} />
        </View>
        <Text style={{color:"#999", fontSize:12}}>已完成 9/15</Text>
      </View>
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={{ flex:1, alignItems:"center", backgroundColor:"#f5f5f5", borderRadius:10, padding:12, marginHorizontal:4 }}>
      <Text style={{fontSize:20}}>{icon}</Text>
      <Text style={{fontSize:16, fontWeight:"bold", marginTop:4}}>{value}</Text>
      <Text style={{fontSize:11, color:"#999"}}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#fff", paddingHorizontal:16 },
  banner: { backgroundColor:"#FF6B6B", borderRadius:16, padding:20, marginTop:16 },
  bannerTitle: { color:"#fff", fontSize:22, fontWeight:"bold" },
  bannerSub: { color:"#fff", fontSize:13, marginTop:4, opacity:0.9 },
  streakRow: { marginTop:8 },
  vipCard: { backgroundColor:"#FFA500", borderRadius:12, padding:16, marginTop:12, alignItems:"center" },
  statsRow: { flexDirection:"row", marginTop:16, marginBottom:8 },
  sectionTitle: { fontSize:18, fontWeight:"bold", marginTop:16, marginBottom:12 },
  categoriesGrid: { flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between" },
  catItem: { width:"23%", alignItems:"center", backgroundColor:"#f5f5f5", borderRadius:12, padding:12, marginBottom:10 },
  catLabel: { fontSize:11, marginTop:6, textAlign:"center" },
});
