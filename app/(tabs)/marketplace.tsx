import React, { useState } from "react";
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

export default function MarketplaceScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"pour-vous" | "categories">("pour-vous");

  const products = [
    {
      id: 1,
      category: "BEAUTY-CARE",
      title: "Ameer Al Oudh",
      original: "5,600 FCFA",
      discount: "3,000 FCFA",
      seller: "Par Siga Sylla",
        
    },
    {
      id: 2,
      category: "FASHION-CLOTHING",
      title: "Lacoste Coton",
      original: "7,200 FCFA",
      discount: "6,000 FCFA",
      seller: "Par Mor Sene",
        image:"lacoste coton.jpg",
    },
    {
      id: 3,
      category: "BEAUTY-CARE",
      title: "Disque Visage",
      original: "10,600 FCFA",
      discount: "8,900 FCFA",
      seller: "Par Fatou Diop",
        image:"disque visage.jpg",
    },
    {
      id: 4,
      category: "FASHION-CLOTHING",
      title: "Robe Bleu Ciel",
      original: "8,000 FCFA",
      discount: "5,000 FCFA",
      seller: "Par Awa Ndiaye",
      image:"robe bleu ciel.jpg",
    },
    {
      id: 5,
      category: "FASHION-CLOTHING",
      title: "Robes Batik",
      original: "9,500 FCFA",
      discount: "7,500 FCFA",
      seller: "Par Mame Coumba",
      image:"robes batik.jpg",
    },
    {
      id: 6,
      category: "BEAUTY-CARE",
      title: "Huile Argan",
      original: "12,000 FCFA",
      discount: "9,800 FCFA",
      seller: "Par Khady Fall",
      image:"huile argan.jpg",
    },
    {
      id: 7,
      category: "FOOD-DRINK",
      title: "Café Touba",
      original: "2,500 FCFA",
      discount: "2,000 FCFA",
      seller: "Par Ibrahima",
        image:"cafe touba.jpg",
    },
    {
      id: 8,
      category: "TECH",
      title: "Écouteurs Bluetooth",
      original: "15,000 FCFA",
      discount: "12,500 FCFA",
      seller: "Par TechStore",
        image:"ecouteurs bluetooth.jpg",
    },
    {
      id: 9,
      category: "HOME",
      title: "Tasse Artisanale",
      original: "4,000 FCFA",
      discount: "3,200 FCFA",
      seller: "Par Art & Co",
        
    },
    {
      id: 10,
      category: "FASHION",
      title: "Sac Cuir Dakar",
      original: "18,000 FCFA",
      discount: "14,000 FCFA",
      seller: "Par Aminata Shop",
      image:"sac cuir dakar.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

            <TouchableOpacity
              style={styles.iconBtn}
              onPress={() => router.push("/settings")}
            >
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "pour-vous" ? styles.tabActive : styles.tabInactive,
            ]}
            onPress={() => setActiveTab("pour-vous")}
          >
            <Text
              style={
                activeTab === "pour-vous" ? styles.tabTextActive : styles.tabTextInactive
              }
            >
              Pour vous
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "categories" ? styles.tabActive : styles.tabInactive,
            ]}
            onPress={() => setActiveTab("categories")}
          >
            <Text
              style={
                activeTab === "categories"
                  ? styles.tabTextActive
                  : styles.tabTextInactive
              }
            >
              Catégories
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons name="search" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Section Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sélection du Jour</Text>
          <View style={styles.hotBadge}>
            <Text style={styles.hotText}>Hot</Text>
          </View>
        </View>

        {/* Product Grid */}
        <View style={styles.productGrid}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <View style={styles.productInfo}>
                <Text style={styles.productCategory}>{product.category}</Text>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.originalPrice}>{product.original}</Text>
                <Text style={styles.discountedPrice}>{product.discount}</Text>
                <Text style={styles.seller}>{product.seller}</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.callBtn}>
                  <Ionicons name="call" size={16} color="#0A6D92" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.whatsappBtn}>
                  <Ionicons name="logo-whatsapp" size={16} color="#25D366" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: "#0A6D92",
  },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoText: { color: "#fff", fontSize: 20, fontWeight: "600", marginLeft: 8 },
  headerRight: { flexDirection: "row", alignItems: "center" },
  bonusBtn: {
    backgroundColor: "#FF9800",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 16,
  },
  bonusText: { color: "#fff", fontSize: 14, fontWeight: "600" },
  iconBtn: { marginLeft: 12 },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f8f9fa",
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    marginHorizontal: 4,
  },
  tabActive: { backgroundColor: "#0A6D92" },
  tabInactive: { backgroundColor: "#e0e0e0" },
  tabTextActive: { color: "#fff", fontWeight: "600" },
  tabTextInactive: { color: "#666" },
  searchBtn: { marginLeft: 12, padding: 10 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  sectionTitle: { fontSize: 18, fontWeight: "600", color: "#333" },
  hotBadge: {
    backgroundColor: "#FF5722",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  hotText: { color: "#fff", fontSize: 12, fontWeight: "600" },
  productGrid: { paddingHorizontal: 16, paddingTop: 12 },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  productInfo: { padding: 12 },
  productCategory: { fontSize: 12, color: "#0A6D92", fontWeight: "600", marginBottom: 4 },
  productTitle: { fontSize: 15, fontWeight: "600", color: "#333", marginBottom: 4 },
  originalPrice: { fontSize: 13, color: "#999", textDecorationLine: "line-through" },
  discountedPrice: { fontSize: 16, fontWeight: "600", color: "#4CAF50" },
  seller: { fontSize: 12, color: "#666", marginTop: 4 },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  callBtn: { backgroundColor: "#E3F2FD", padding: 8, borderRadius: 20, marginLeft: 8 },
  whatsappBtn: { backgroundColor: "#E8F5E9", padding: 8, borderRadius: 20, marginLeft: 8 },
});