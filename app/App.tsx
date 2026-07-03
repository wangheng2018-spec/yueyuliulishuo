import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { AppProvider, useApp } from "./src/services/AppContext";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import CourseListScreen from "./src/screens/CourseListScreen";
import CourseDetailScreen from "./src/screens/CourseDetailScreen";
import LessonScreen from "./src/screens/LessonScreen";
import AIScreen from "./src/screens/AIScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import VIPShopScreen from "./src/screens/VIPShopScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#FF6B6B" }, headerTintColor: "#fff" }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: "粤语流利说" }} />
      <Stack.Screen name="VIPShop" component={VIPShopScreen} options={{ title: "成为VIP" }} />
    </Stack.Navigator>
  );
}

function CourseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#FF6B6B" }, headerTintColor: "#fff" }}>
      <Stack.Screen name="CourseList" component={CourseListScreen} options={{ title: "全部课程" }} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: "课程详情" }} />
      <Stack.Screen name="Lesson" component={LessonScreen} options={{ title: "课文" }} />
    </Stack.Navigator>
  );
}

function AIStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#FF6B6B" }, headerTintColor: "#fff" }}>
      <Stack.Screen name="AIMain" component={AIScreen} options={{ title: "AI陪练" }} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "#FF6B6B" }, headerTintColor: "#fff" }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ title: "我的" }} />
      <Stack.Screen name="VIPShop" component={VIPShopScreen} options={{ title: "成为VIP" }} />
    </Stack.Navigator>
  );
}

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  const icons: Record<string, string> = { "首页":"🏠", "课程":"📚", "AI陪练":"🎤", "我的":"👤" };
  return <>{icons[label] || "📱"}</>;
}

export default function App() {
  const scheme = useColorScheme();
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#FF6B6B" }}>
          <Tab.Screen name="Home" component={HomeStack}
            options={{ tabBarLabel:"首页", tabBarIcon:({focused}) => <TabIcon label="首页" focused={focused} /> }} />
          <Tab.Screen name="Courses" component={CourseStack}
            options={{ tabBarLabel:"课程", tabBarIcon:({focused}) => <TabIcon label="课程" focused={focused} /> }} />
          <Tab.Screen name="AI" component={AIStack}
            options={{ tabBarLabel:"AI陪练", tabBarIcon:({focused}) => <TabIcon label="AI陪练" focused={focused} /> }} />
          <Tab.Screen name="Profile" component={ProfileStack}
            options={{ tabBarLabel:"我的", tabBarIcon:({focused}) => <TabIcon label="我的" focused={focused} /> }} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppProvider>
  );
}
