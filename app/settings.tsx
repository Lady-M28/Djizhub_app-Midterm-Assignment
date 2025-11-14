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
import { useRouter, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function SettingsScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  // Hide tab bar
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" },
    });
    return () => navigation.getParent()?.setOptions({ tabBarStyle: undefined });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="#000" />
          </TouchableOpacity>
          <Text style={styles.title}>Réglages</Text>
          <View style={{ width: 28 }} />
        </View>

        {/* Profile */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={36} color="#999" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Monika Ngomez</Text>
            <Text style={styles.email}>monikangomez@gmail.com</Text>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editText}>Modifier le profil</Text>
              <Ionicons name="chevron-forward" size={16} color="#0A6D92" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Général */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="settings-outline" size={20} color="#666" />
            <Text style={styles.sectionTitle}>Général</Text>
          </View>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#E3F2FD" }]}>
                <Ionicons name="person-outline" size={20} color="#0A6D92" />
              </View>
              <Text style={styles.itemText}>Mon profil</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#E8F5E9" }]}>
                <Ionicons name="share-social-outline" size={20} color="#4CAF50" />
              </View>
              <Text style={styles.itemText}>Inviter un ami à partager</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Support */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="headset-outline" size={20} color="#666" />
            <Text style={styles.sectionTitle}>Support</Text>
          </View>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#E1F5FE" }]}>
                <Ionicons name="call-outline" size={20} color="#029BE5" />
              </View>
              <Text style={styles.itemText}>Contacter le service client</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#F3E5F5" }]}>
                <Ionicons name="globe-outline" size={20} color="#9C27B0" />
              </View>
              <Text style={styles.itemText}>Visiter le site</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#FFEBEE" }]}>
                <Ionicons name="play-circle-outline" size={20} color="#F44336" />
              </View>
              <Text style={styles.itemText}>Vidéos de formation</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={[styles.iconCircle, { backgroundColor: "#FFF3E0" }]}>
                <Ionicons name="help-circle-outline" size={20} color="#FF9800" />
              </View>
              <Text style={styles.itemText}>FAQs</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Compte */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="person-circle-outline" size={20} color="#666" />
            <Text style={styles.sectionTitle}>Compte</Text>
          </View>
          <TouchableOpacity style={styles.item}>
            <Text style={styles.deleteText}>Suppression de compte</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: { fontSize: 20, fontWeight: "600", color: "#000" },

  profileCard: {
    flexDirection: "row",
    backgroundColor: "#0A6D92",
    margin: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  profileInfo: { flex: 1 },
  name: { color: "#fff", fontSize: 18, fontWeight: "600" },
  email: { color: "#ddd", fontSize: 14, marginVertical: 4 },
  editBtn: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  editText: { color: "#0A6D92", fontSize: 13, fontWeight: "600" },

  section: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionTitle: { marginLeft: 8, fontSize: 16, fontWeight: "600", color: "#333" },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  itemText: { fontSize: 15, color: "#333" },
  deleteText: { fontSize: 15, color: "#D32F2F", flex: 1 },
});