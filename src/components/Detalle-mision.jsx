import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const ItemDetail = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Image source={{ uri: item.links.patch.large }} style={styles.patch} />

      <Text style={styles.label}>Flight Number:</Text>
      <Text style={styles.value}>{item.flight_number}</Text>

      <Text style={styles.label}>Launch Date:</Text>
      <Text style={styles.value}>
        {new Date(item.date_utc).toLocaleString()}
      </Text>

      <Text style={styles.label}>Rocket ID:</Text>
      <Text style={styles.value}>{item.rocket}</Text>

      <Text style={styles.label}>Launchpad ID:</Text>
      <Text style={styles.value}>{item.launchpad}</Text>

      <Text style={styles.label}>Details:</Text>
      <Text style={styles.value}>{item.details || "No details available"}</Text>

      <Text style={styles.label}>Webcast:</Text>
      <Text style={styles.value}>{item.links.webcast}</Text>

      <Text style={styles.label}>Wikipedia:</Text>
      <Text style={styles.value}>{item.links.wikipedia}</Text>

      {item.failures.length > 0 && (
        <View>
          <Text style={styles.label}>Failures:</Text>
          {item.failures.map((failure, index) => (
            <View key={index} style={styles.failureContainer}>
              <Text style={styles.failureText}>Time: {failure.time}</Text>
              <Text style={styles.failureText}>Reason: {failure.reason}</Text>
            </View>
          ))}
        </View>
      )}

      <Text style={styles.label}>Success:</Text>
      <Text style={styles.value}>{item.success ? "Yes" : "No"}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#1e1e1e", // Fondo oscuro
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#ffffff", // Texto blanco
  },
  patch: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#ffffff", // Texto blanco
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: "#dcdcdc", // Texto gris claro
  },
  failureContainer: {
    marginTop: 5,
    marginBottom: 10,
  },
  failureText: {
    fontSize: 16,
    color: "#ff4d4d", // Texto rojo claro
  },
});

export default ItemDetail;
