import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import lycees from "./data/lycees-donnees-generales-v1.json";

interface Academy {
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
    color: "#333",
  },
});

export default function Academies() {
  const [data, setData] = useState<Academy[]>([]);

  useEffect(() => {
    const academies = (lycees as any[]).reduce<Academy[]>((acc, l) => {
      const academy = l.academie;
      const existing = acc.find(a => a.name === academy);
      if (existing) existing.count++;
      else acc.push({ name: academy, count: 1 });
      return acc;
    }, []);
    setData(academies);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Académies ({data.length})</Text>
      {data.map(item => (
        <View style={styles.card}>
          <Text style={{fontWeight: "bold", fontSize: 16, color: "#333",}}>{item.name}</Text>
          <Text style={styles.text}>Nombre: {item.count}</Text>
        </View>
      ))}
    </ScrollView>
  );
}