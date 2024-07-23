import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import useStore from "../../store";
import AppBar from "./appBar";
import CircleLogos from "./logos";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data, setData } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DqJYj39DoKjmHTbN7xlqRqwGTTD3sBDRCBtO5c0r"
        );
        setData(response.data);
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
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CircleLogos />
        <AppBar />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Imagen del día</Text>
          <View key={data.date} style={styles.cardContent}>
            <Text style={styles.cardTitle}>{data.title}</Text>
            <Image source={{ uri: data.url }} style={styles.cardImage} />
            <Text style={styles.cardText}>{data.explanation}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#0000",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  card: {
    backgroundColor: "#000000",
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
    textAlign: "center",
  },
  cardContent: {
    alignItems: "center",
  },
  cardImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
});

export default Main;
