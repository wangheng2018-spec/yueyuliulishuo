import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { VipPlans } from "../models/types";
import { setVipStatus } from "../services/storage";
import { useApp } from "../services/AppContext";

export default function VIPShopScreen({ navigation }: any) {
  const [selected, setSelected] = useState(1); // monthly default
  const { setVip } = useApp();

  const handlePurchase = async () => {
    const plan = VipPlans[selected];
    const expiry = plan.type === "lifetime"
      ? new Date(Date.now() + 36500*86400000).toISOString()
      : new Date(Date.now() + plan.days*86400000).toISOString();
    await setVipStatus(plan.type, expiry);
    setVip(plan.type);
    navigation.goBack();
  };

  const features = [
    "十大分类课程系统学习",
    "AI陪练男女声自由切换",
    "离线下载随时学习",
    "每日挑战+打卡激励",
    "间隔记忆卡片系统",
    "学习进度深度追踪",
  ];

  return (
    <ScrollView style={{flex:1, backgroundColor:"#fff"}}>
      {/* Header */}
      <View style={{alignItems:"center", paddingVertical:24}}>
        <Text style={{fontSize:60, marginBottom:8}}>👑</Text>
        <Text style={{fontSize:22, fontWeight:"bold"}}>解锁全部粤语课程</Text>
        <Text style={{fontSize:13, color:"#999", textAlign:"center", marginTop:6, paddingHorizontal:20}}>
          包含AI陪练、离线下载、每日挑战等全部功能
        </Text>
      </View>

      {/* Features */}
      <View style={{paddingHorizontal:20}}>
        {features.map((f, i) => (
          <View key={i} style={{flexDirection:"row", alignItems:"center", marginBottom:8}}>
            <Text style={{color:"#FFA500", fontSize:16, marginRight:8}}>✓</Text>
            <Text style={{fontSize:13, color:"#444"}}>{f}</Text>
          </View>
        ))}
      </View>

      {/* Plans */}
      <View style={{padding:20}}>
        {VipPlans.map((plan, i) => (
          <TouchableOpacity key={plan.type} style={[styles.planCard, selected === i && styles.planSelected]}
            onPress={() => setSelected(i)}>
            <View style={{flexDirection:"row", alignItems:"center", flex:1}}>
              <View style={[styles.radio, selected === i && styles.radioSelected]}>
                {selected === i && <View style={styles.radioInner} />}
              </View>
              <View style={{marginLeft:12, flex:1}}>
                <Text style={{fontSize:16, fontWeight:"bold"}}>{plan.display}</Text>
                <Text style={{fontSize:12, color:"#999", marginTop:2}}>{plan.desc}</Text>
              </View>
              <Text style={{fontSize:18, fontWeight:"bold", color:"#FFA500"}}>{plan.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Purchase Btn */}
      <TouchableOpacity style={styles.purchaseBtn} onPress={handlePurchase}>
        <Text style={{color:"#fff", fontSize:18, fontWeight:"bold"}}>立即开通 · {VipPlans[selected].price}</Text>
      </TouchableOpacity>

      <Text style={{fontSize:10, color:"#bbb", textAlign:"center", padding:16}}>
        订阅自动续期，可随时在设置中取消{'\n'}永久会员一次购买终身有效
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  planCard: { flexDirection:"row", alignItems:"center", padding:14, borderRadius:12, marginBottom:10,
    backgroundColor:"#f8f8f8", borderWidth:1, borderColor:"transparent" },
  planSelected: { backgroundColor:"#FFF8E1", borderColor:"#FFA500" },
  radio: { width:22, height:22, borderRadius:11, borderWidth:2, borderColor:"#ccc", justifyContent:"center", alignItems:"center" },
  radioSelected: { borderColor:"#FFA500" },
  radioInner: { width:12, height:12, borderRadius:6, backgroundColor:"#FFA500" },
  purchaseBtn: { backgroundColor:"#FFA500", marginHorizontal:20, paddingVertical:14, borderRadius:14, alignItems:"center" },
});
