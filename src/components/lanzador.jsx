import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

const Lanzador = ({ platform }) => {
  const {
    name,
    full_name,
    status,
    type,
    locality,
    region,
    latitude,
    longitude,
    details,
    wikipedia,
    images,
  } = platform;

  return (
    <View style={styles.card}>
      {images && images.large && images.large[0] ? (
        <Image source={{ uri: images.large[0] }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.fullName}>{full_name}</Text>
      <Text style={styles.details}>{details}</Text>
      <Text style={styles.details}>Status: {status}</Text>
      <Text style={styles.details}>Type: {type}</Text>
      <Text style={styles.details}>
        Location: {locality}, {region}
      </Text>
      <Text style={styles.details}>Latitude: {latitude.toFixed(6)}</Text>
      <Text style={styles.details}>Longitude: {longitude.toFixed(6)}</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(wikipedia)}
        style={styles.link}
      >
        <Text style={styles.linkText}>More Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  imagePlaceholder: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    backgroundColor: "#333",
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 4,
  },
  fullName: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 4,
  },
  link: {
    marginTop: 8,
  },
  linkText: {
    color: "#1e90ff",
    textDecorationLine: "underline",
  },
});

export default Lanzador;
