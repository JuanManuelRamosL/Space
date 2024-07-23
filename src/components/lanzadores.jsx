import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import axios from "axios";
import AppBar from "./appBar";
import CircleLogos from "./logos";
import Lanzador from "./lanzador";

const Plataforms = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanzadores = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/landpads"
        );
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanzadores();
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
      <Text style={styles.title}>SpaceX Plataforms</Text>
      {data.map((platform) => (
        <Lanzador platform={platform} key={platform.id} />
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

export default Plataforms;
