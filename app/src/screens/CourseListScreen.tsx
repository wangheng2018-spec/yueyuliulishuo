import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { allCourses } from "../data/courses";
import { useApp } from "../services/AppContext";
import { CourseCategories, CategoryDisplayNames, CategoryIcons, CourseCategory } from "../models/types";

export default function CourseListScreen({ route, navigation }: any) {
  const { isVip } = useApp();
  const initCat = route?.params?.category || null;
  const [selectedCat, setSelectedCat] = useState<CourseCategory | null>(initCat);
  const filtered = selectedCat ? allCourses.filter(c => c.category === selectedCat) : allCourses;

  return (
    <View style={{ flex:1, backgroundColor:"#fff" }}>
      {/* Category chips */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingVertical:8 }}>
        <View style={{ flexDirection:"row", paddingHorizontal:12 }}>
          <Chip label="全部" selected={!selectedCat} onPress={() => setSelectedCat(null)} />
          {CourseCategories.map(cat => (
            <Chip key={cat} label={CategoryDisplayNames[cat]} selected={selectedCat === cat}
              onPress={() => setSelectedCat(cat)} />
          ))}
        </View>
      </ScrollView>

      <ScrollView style={{ paddingHorizontal:16 }}>
        {filtered.map(course => (
          <TouchableOpacity key={course.id} style={styles.card}
            onPress={() => navigation.navigate("CourseDetail", { course })}>
            <View style={[styles.iconBox, { backgroundColor: course.colorHex + "22" }]}>
              <Text style={{fontSize:28}}>{course.iconName}</Text>
            </View>
            <View style={{ flex:1, marginLeft:12 }}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                <Text style={{fontSize:16, fontWeight:"bold"}}>{course.title}</Text>
                {course.isPremium && !isVip && <Text style={{marginLeft:6, fontSize:10, color:"#FFA500", fontWeight:"bold"}}>🔒</Text>}
              </View>
              <Text style={{color:"#999", fontSize:12, marginTop:2}} numberOfLines={1}>{course.description}</Text>
              <View style={{flexDirection:"row", marginTop:6}}>
                <Text style={{fontSize:10, color:course.colorHex, backgroundColor:course.colorHex+"22", paddingHorizontal:6, paddingVertical:2, borderRadius:4}}>
                  {course.difficulty === "beginner" ? "入门" : course.difficulty === "intermediate" ? "中级" : "高级"}
                </Text>
                <Text style={{fontSize:10, color:"#999", marginLeft:8}}>{course.lessons.length} 课</Text>
              </View>
            </View>
            <Text style={{color:"#ccc"}}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

function Chip({ label, selected, onPress }: { label: string; selected: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}
      style={{ paddingHorizontal:14, paddingVertical:6, borderRadius:16, marginHorizontal:4,
        backgroundColor: selected ? "#FF6B6B" : "#f0f0f0" }}>
      <Text style={{ fontSize:13, fontWeight: selected ? "600" : "400", color: selected ? "#fff" : "#333" }}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection:"row", alignItems:"center", backgroundColor:"#f8f8f8", borderRadius:14, padding:14, marginBottom:12 },
  iconBox: { width:60, height:60, borderRadius:12, justifyContent:"center", alignItems:"center" },
});
