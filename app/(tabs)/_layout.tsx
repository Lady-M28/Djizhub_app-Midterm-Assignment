import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0A6D92",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 4,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          padding: 0,
        },
      }}
    >
      {/* COFFRES */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Coffres",
          tabBarIcon: ({ color }) => (
            <Ionicons name="lock-closed" size={24} color={color} />
          ),
        }}
      />

      {/* TRANSFERTS */}
      <Tabs.Screen
        name="transfers"
        options={{
          title: "Transferts",
          tabBarIcon: ({ color }) => (
            <Ionicons name="repeat" size={24} color={color} />
          ),
        }}
      />

      {/* MARKETPLACE */}
      <Tabs.Screen
        name="marketplace"
        options={{
          title: "Marketplace",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}