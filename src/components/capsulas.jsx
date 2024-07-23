import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import AppBar from "./appBar";
import CircleLogos from "./logos";
import CapsuleCard from "./capsule";

const Capsules = () => {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCapsules = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v3/capsules"
        );
        setCapsules(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCapsules();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (capsules.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No capsules available</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <AppBar />
      <Text style={styles.title}>SpaceX Capsules</Text>
      {capsules.map((capsule) => (
        <CapsuleCard key={capsule.capsule_serial} capsule={capsule} />
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
});

export default Capsules;
