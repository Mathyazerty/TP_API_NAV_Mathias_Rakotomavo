import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import lycees from "./data/lycees-donnees-generales-v1.json";

interface Lycee {
  code_uai: string;
  mail: string;
  nom_etablissement: string;
  academie: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderColor: "#333",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  email: {
    fontSize: 13,
    color: "#0066cc",
    marginTop: 8,
  },
});

export default function Mail() {
  const [data, setData] = useState<Lycee[]>([]);

  useEffect(() => {
    const filtered = (lycees as Lycee[]).filter(
      l => l.academie === "Versailles" && l.mail
    );
    setData(filtered);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mails Versailles ({data.length})</Text>
      {data.map(item => (
        <View style={styles.card}>
          <Text style={styles.text}>{item.nom_etablissement}</Text>
          <Text style={styles.email}>{item.mail}</Text>
        </View>
      ))}
    </ScrollView>
  );
}