import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Linking,
  Button,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const Despegues = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/launches"
        );
        setLaunches(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={launches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.launchContainer}>
            <Image
              source={{ uri: item.links.patch.small }}
              style={styles.image}
            />
            <Text style={styles.title}>Nombre: {item.name}</Text>
            <Text style={styles.text}>
              Fecha: {new Date(item.date_utc).toLocaleDateString()}
            </Text>
            <Text style={styles.text}>Detalles: {item.details}</Text>
            <Button
              title="Ver en Wikipedia"
              onPress={() => Linking.openURL(item.links.wikipedia)}
              disabled={!item.links.wikipedia}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  launchContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 5,
  },
  loadingText: {
    fontSize: 18,
    color: "#ffffff",
  },
  errorText: {
    fontSize: 18,
    color: "#ff0000",
  },
});

export default Despegues;
