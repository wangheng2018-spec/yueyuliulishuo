import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useApp } from "../services/AppContext";
import { Course } from "../models/types";

export default function CourseDetailScreen({ route, navigation }: any) {
  const course: Course = route.params.course;
  const { isVip } = useApp();

  return (
    <ScrollView style={{flex:1, backgroundColor:"#fff"}}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: course.colorHex }]}>
        <Text style={{fontSize:48}}>{course.iconName}</Text>
        <Text style={{fontSize:22, fontWeight:"bold", color:"#fff", marginTop:8}}>{course.title}</Text>
        <Text style={{fontSize:13, color:"#fff", opacity:0.9, marginTop:4}}>{course.description}</Text>
      </View>

      {/* Lessons */}
      <View style={{padding:16}}>
        <Text style={{fontSize:18, fontWeight:"bold", marginBottom:12}}>课程列表</Text>
        {course.lessons.map((lesson) => {
          const locked = course.isPremium && !isVip;
          return (
            <TouchableOpacity key={lesson.id} style={styles.lessonRow}
              onPress={() => {
                if (locked) return navigation.navigate("VIPShop");
                navigation.navigate("Lesson", { lesson, courseId: course.id });
              }}>
              <View style={[styles.numCircle, { borderColor: course.colorHex }]}>
                {lesson.isCompleted ? (
                  <Text style={{color:"#4CAF50", fontSize:16}}>✓</Text>
                ) : (
                  <Text style={{color:course.colorHex, fontSize:14}}>{lesson.order}</Text>
                )}
              </View>
              <View style={{flex:1, marginLeft:12}}>
                <Text style={{fontSize:14, fontWeight:"500", color: locked ? "#999" : "#333"}}>{lesson.title}</Text>
                {lesson.progress > 0 && (
                  <View style={{height:4, backgroundColor:"#e0e0e0", borderRadius:2, marginTop:4}}>
                    <View style={{width:`${lesson.progress*100}%`, height:"100%", backgroundColor:course.colorHex, borderRadius:2}} />
                  </View>
                )}
              </View>
              {locked ? <Text style={{color:"#FFA500"}}>🔒</Text> : <Text style={{color:course.colorHex}}>▶</Text>}
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { alignItems:"center", paddingVertical:30, paddingHorizontal:20 },
  lessonRow: { flexDirection:"row", alignItems:"center", paddingVertical:12, borderBottomWidth:1, borderBottomColor:"#f0f0f0" },
  numCircle: { width:36, height:36, borderRadius:18, borderWidth:2, justifyContent:"center", alignItems:"center" },
});
