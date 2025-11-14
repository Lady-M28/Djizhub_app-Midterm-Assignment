import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TransfersScreen() {
  const [fromNumber, setFromNumber] = useState("");
  const [toNumber, setToNumber] = useState("");
  const [amountReceived, setAmountReceived] = useState("");
  const [amountSent, setAmountSent] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ width: 40 }} />
        <Text style={styles.headerTitle}>Transferts</Text>
        <TouchableOpacity style={styles.historyBtn}>
          <Text style={styles.historyText}>Historique</Text>
          <Ionicons name="chevron-forward" size={18} color="#0A6D92" />
        </TouchableOpacity>
      </View>

      {/* Transfer Cards */}
      <View style={styles.transferContainer}>
        {/* DE – Wave */}
        <View style={styles.fromCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabel}>De</Text>
            <View style={styles.logoContainer}>
              <Ionicons name="water" size={28} color="#fff" />
              <Text style={styles.operator}>Wave</Text>
              <Ionicons name="chevron-down" size={16} color="#fff" />
            </View>
          </View>

          <View style={styles.phoneRow}>
            <Ionicons name="call-outline" size={20} color="#666" />
            <TextInput
              style={styles.phoneInput}
              placeholder="Numéro de téléphone"
              value={fromNumber}
              onChangeText={setFromNumber}
              keyboardType="phone-pad"
            />
          </View>
          <Text style={styles.invalidText}>Numéro invalide</Text>
        </View>

        {/* Arrow */}
        <View style={styles.arrowCircle}>
          <Ionicons name="arrow-down" size={24} color="#0A6D92" />
        </View>

        {/* VERS – Orange Money */}
        <View style={styles.toCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardLabelDark}>Vers</Text>
            <View style={styles.logoContainer}>
              <Ionicons name="wallet" size={28} color="#fff" />
              <Text style={styles.operatorDark}>OM</Text>
              <Ionicons name="chevron-down" size={16} color="#fff" />
            </View>
          </View>

          <View style={styles.phoneRow}>
            <Ionicons name="call-outline" size={20} color="#aaa" />
            <TextInput
              style={styles.phoneInputDark}
              placeholder="Numéro de téléphone"
              value={toNumber}
              onChangeText={setToNumber}
              keyboardType="phone-pad"
            />
          </View>
          <Text style={styles.invalidTextDark}>Numéro invalide</Text>
        </View>
      </View>

      {/* Amount Inputs */}
      <View style={styles.amountSection}>
        <View style={styles.amountRow}>
          <Text style={styles.amountLabel}>Montant Reçu (minimum 500F CFA)</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0"
            value={amountReceived}
            onChangeText={setAmountReceived}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.amountRow}>
          <Text style={styles.amountLabel}>Montant Envoyé</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0"
            value={amountSent}
            onChangeText={setAmountSent}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendText}>Envoyer</Text>
      </TouchableOpacity>
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
    backgroundColor: "#0A6D92",
    paddingBottom: 16,
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "600" },
  historyBtn: { flexDirection: "row", alignItems: "center" },
  historyText: { color: "#0A6D92", fontWeight: "600", marginRight: 4 },

  transferContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
  },

  /* DE Card (Wave) */
  fromCard: {
    backgroundColor: "#00C2FF",
    borderRadius: 16,
    padding: 16,
    width: "100%",
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  cardLabel: { color: "#fff", fontSize: 18, fontWeight: "600" },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  operator: { color: "#fff", fontWeight: "600", marginHorizontal: 6 },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
  },
  phoneInput: { flex: 1, marginLeft: 10, fontSize: 16, color: "#333" },
  invalidText: { color: "#fff", fontSize: 13, fontStyle: "italic" },

  /* Arrow */
  arrowCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: -6,
    zIndex: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  /* VERS Card (OM) */
  toCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: 16,
    padding: 16,
    width: "100%",
    marginTop: 12,
  },
  cardLabelDark: { color: "#fff", fontSize: 18, fontWeight: "600" },
  operatorDark: { color: "#fff", fontWeight: "600", marginHorizontal: 6 },
  phoneInputDark: { flex: 1, marginLeft: 10, fontSize: 16, color: "#ddd" },
  invalidTextDark: { color: "#ff6b6b", fontSize: 13, fontStyle: "italic" },

  amountSection: { paddingHorizontal: 20, marginTop: 32 },
  amountRow: { marginBottom: 20 },
  amountLabel: { fontSize: 15, color: "#333", marginBottom: 8 },
  amountInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontSize: 18,
    paddingVertical: 8,
    color: "#333",
  },

  sendButton: {
    marginHorizontal: 20,
    marginTop: 32,
    backgroundColor: "#fff",
    borderColor: "#0A6D92",
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },
  sendText: { color: "#0A6D92", fontWeight: "600", fontSize: 16 },
});