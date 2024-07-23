import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import axios from "axios";

const Clima = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/insight_weather/?api_key=DqJYj39DoKjmHTbN7xlqRqwGTTD3sBDRCBtO5c0r&feedtype=json&ver=1.0"
        );
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  if (!data || !data.validity_checks) {
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }

  const { validity_checks } = data;
  const latestSol = Object.keys(validity_checks).find(
    (key) => key !== "sol_hours_required" && key !== "sols_checked"
  );
  const latestData = validity_checks[latestSol];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Clima en Marte</Text>
      <Text style={styles.subtitle}>Sol {latestSol}</Text>
      {latestData &&
        Object.entries(latestData).map(([key, value]) => (
          <View key={key} style={styles.card}>
            <Text style={styles.key}>{key}</Text>
            <Text style={styles.value}>
              Valid: {value.valid ? "Yes" : "No"}
            </Text>
            <Text style={styles.value}>
              Horas con datos:{" "}
              {value.sol_hours_with_data
                ? value.sol_hours_with_data.join(", ")
                : "No data"}
            </Text>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  key: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
  },
});

export default Clima;
