import { Text, View, Button, StyleSheet, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

const styles = StyleSheet.create({										
  button: {
    backgroundColor: "purple", 
    padding: 10, 
    borderRadius: 5, 
    width: 200, 
    alignItems: "center", 
    marginBottom: 10,
    
  },
  Text: {color: "white",
  textAlign: "center",
  }

});

export default function Index() {
  const router = useRouter();
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <Text style={{ fontSize: 24, marginBottom: 20, fontWeight: "bold" }}>TP – Routage et API</Text>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Page d'accueil</Text>

      <Pressable  style={styles.button} onPress={() => router.push("/creteil")}>
        <Text style={styles.Text}>Lycées de Creteil</Text>
      </Pressable>
      <Pressable  style={styles.button} onPress={() => router.push("/privee")}>
        <Text style={styles.Text}>Lycées privés Paris</Text>
      </Pressable>
      <Pressable  style={styles.button} onPress={() => router.push("/nombre")}>
        <Text style={styles.Text}>Nombre de types de lycées</Text>
      </Pressable>
      <Pressable  style={styles.button} onPress={() => router.push("/mail")}>
        <Text style={styles.Text}>Mails de l'académie de Versaille</Text>
      </Pressable>
      
      <Pressable  style={styles.button} onPress={() => router.push("/academie")}>
        <Text style={styles.Text}>Lycées de l'académie de Paris</Text>
      </Pressable>
    </View>
  );

  

}


