import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useNavigation } from "expo-router";
import { useEffect } from "react";

type CoffreType = "epargne" | "tontine" | "debit" | "business";

export default function CreateCoffreScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: "none" },
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
    };
  }, [navigation]);

  const handleSelect = (type: CoffreType) => {
    alert(`Vous avez choisi : ${type}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#0A6D92" />
        </TouchableOpacity>
        <Text style={styles.title}>Type de Coffre</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.subtitle}>Choisir un type de coffre</Text>

        <CoffreCard
          icon="trending-up"
          title="Épargne"
          desc="Pour des économies sécurisées, avec des dates de retrait prédéfinies."
          onPress={() => handleSelect("epargne")}
        />

        <CoffreCard
          icon="people"
          title="Tontine"
          desc="Pour des économies collaboratives, avec des versements et retraits collectifs."
          onPress={() => handleSelect("tontine")}
        />

        <CoffreCard
          icon="card"
          title="Débit"
          desc="Pour mettre en place des retraits réguliers et automatiques."
          onPress={() => handleSelect("debit")}
        />

        <CoffreCard
          icon="business"
          title="Business"
          desc="Pour automatiser la gestion des paiements de vos clients."
          onPress={() => handleSelect("business")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// Reusable Card Component
function CoffreCard({
  icon,
  title,
  desc,
  onPress,
}: {
  icon: any;
  title: string;
  desc: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardLeft}>
        <View style={styles.iconCircle}>
          <Ionicons name={icon} size={28} color="#0A6D92" />
        </View>
        <View style={styles.texts}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDesc}>{desc}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#0A6D92" />
    </TouchableOpacity>
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
    paddingTop: Platform.OS === "android" ? 12 : 0,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0A6D92",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },

  // Card
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F8FBFD",
    borderColor: "#0A6D92",
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E6F0F7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  texts: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },
  cardDesc: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    lineHeight: 20,
  },
});