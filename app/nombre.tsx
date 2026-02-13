import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import lycees from "./data/lycees-donnees-generales-v1.json";

interface Type {
  name: string;
  count: number;
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
    fontWeight: "bold",
    color: "#2b2a2a",
  },
  nbr: {
    fontSize: 14,
    color: "#696868",
    marginTop: 5,
  },
});

export default function Nombre() {
  const [data, setData] = useState<Type[]>([]);

  useEffect(() => {
    const types = (lycees as any[]).reduce<Type[]>((acc, l) => {
      const type = l.nature_uai;
      const existing = acc.find(t => t.name === type);
      if (existing) existing.count++;
      else acc.push({ name: type, count: 1 });
      return acc;
    }, []);
    setData(types);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nombre de chaque type de lycées ({data.length})</Text>
      {data.map(item => (
        <View style={styles.card}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.nbr}>Nombre: {item.count}</Text>
        </View>
      ))}
    </ScrollView>
  );
}