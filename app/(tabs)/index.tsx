import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Ionicons name="wallet" size={28} color="#fff" />
            <Text style={styles.logoText}>Djizhub</Text>
          </View>

          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.bonusBtn}>
              <Text style={styles.bonusText}>Bonus</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="play-circle-outline" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="star-outline" size={24} color="#fff" />
            </TouchableOpacity>

            {/* GEAR → SETTINGS */}
            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push("/settings")}
            >
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Nouveau coffre */}
          <TouchableOpacity
            style={styles.newCoffreBtn}
            onPress={() => router.push("/create-coffre")}
          >
            <Text style={styles.newCoffreText}>+ Nouveau coffre</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>ou Rejoindre un coffre</Text>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity style={styles.tabInactive}>
              <Text style={styles.tabTextInactive}>En cours</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabActive}>
              <Text style={styles.tabTextActive}>clôturés</Text>
            </TouchableOpacity>
          </View>

          {/* Empty State */}
          <Text style={styles.emptyText}>
            Aucun compte clôturé pour le moment !
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: "#0A6D92",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 8,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  bonusBtn: {
    backgroundColor: "#FF9800",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 16,
  },
  bonusText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  iconBtn: {
    marginLeft: 12,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  newCoffreBtn: {
    backgroundColor: "#0A6D92",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 12,
  },
  newCoffreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  orText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginBottom: 20,
  },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 30,
    padding: 4,
    marginBottom: 32,
  },
  tabActive: {
    flex: 1,
    backgroundColor: "#0A6D92",
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
  },
  tabInactive: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  tabTextInactive: {
    color: "#888",
  },

  emptyText: {
    textAlign: "center",
    color: "#666",
    fontSize: 15,
    fontStyle: "italic",
  },
});