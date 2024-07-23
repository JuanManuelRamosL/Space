import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import DragonCard from "./DragonCard";
import AppBar from "./appBar";
import CircleLogos from "./logos";

const Dragons = () => {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDragons = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/dragons"
        );
        setDragons(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDragons();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <AppBar />
      <Text style={styles.title}>SpaceX Dragons</Text>
      {dragons.map((dragon) => (
        <DragonCard key={dragon.id} dragon={dragon} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#FFF",
  },
  loadingText: {
    color: "#FFF",
  },
  errorText: {
    color: "red",
  },
});

export default Dragons;
