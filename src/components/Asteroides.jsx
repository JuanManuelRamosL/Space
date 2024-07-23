import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import useStore from "../../store";

const Asteroides = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { dataAsteroide, setDataAsteroide } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DqJYj39DoKjmHTbN7xlqRqwGTTD3sBDRCBtO5c0r"
        );
        const limitedResults = response.data.near_earth_objects.slice(0, 7);
        setDataAsteroide(limitedResults);
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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error.message}</Text>
        </View>
      </SafeAreaView>
    );
  }

  const navigation = useNavigation();
  const handleNavDetail = (info) => {
    navigation.navigate("detalles", { info });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Asteroides más relevantes</Text>
        {dataAsteroide && dataAsteroide.length > 0 ? (
          <FlatList
            style={styles.lista}
            data={dataAsteroide}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.asteroidContainer}>
                <Text
                  style={styles.asteroidText}
                  onPress={() => handleNavDetail(item)}
                >
                  Nombre: {item.name}
                </Text>
                <Text style={styles.asteroidText}>
                  Magnitud Absoluta: {item.absolute_magnitude_h}
                </Text>
                <Text style={styles.asteroidText}>
                  Peligroso:{" "}
                  {item.is_potentially_hazardous_asteroid ? "Sí" : "No"}
                </Text>
                <Text style={styles.asteroidText}>
                  Diámetro Estimado (km):{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_min} -{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_max}
                </Text>
                {item.close_approach_data.length > 0 && (
                  <View>
                    <Text style={styles.asteroidText}>
                      Próximo Acercamiento:
                    </Text>
                    <Text style={styles.asteroidText}>
                      Fecha:{" "}
                      {item.close_approach_data[0].close_approach_date_full}
                    </Text>
                    <Text style={styles.asteroidText}>
                      Distancia (km):{" "}
                      {item.close_approach_data[0].miss_distance.kilometers}
                    </Text>
                    <Text style={styles.asteroidText}>
                      Velocidad (km/h):{" "}
                      {
                        item.close_approach_data[0].relative_velocity
                          .kilometers_per_hour
                      }
                    </Text>
                  </View>
                )}
                <Button
                  title="Detalles"
                  onPress={() => handleNavDetail(item)}
                  color="#0061c6"
                />
              </View>
            )}
          />
        ) : (
          <Text style={styles.noDataText}>No data available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#FFFFFF",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#FF0000",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    marginVertical: 20,
  },
  asteroidContainer: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    width: "90%",
  },
  asteroidText: {
    color: "#FFFFFF",
    marginBottom: 5,
  },
  lista: {
    width: "100%",
  },
  noDataText: {
    color: "#FFFFFF",
  },
});

export default Asteroides;
