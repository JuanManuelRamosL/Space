import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DragonCard = ({ dragon }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{dragon.name}</Text>
      <Image source={{ uri: dragon.flickr_images[0] }} style={styles.image} />
      <Text style={styles.text}>Type: {dragon.type}</Text>
      <Text style={styles.text}>
        First Flight: {new Date(dragon.first_flight).toLocaleDateString()}
      </Text>
      <Text style={styles.text}>Crew Capacity: {dragon.crew_capacity}</Text>
      <Text style={styles.text}>
        Orbit Duration (years): {dragon.orbit_duration_yr}
      </Text>
      <Text style={styles.text}>Description: {dragon.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  image: {
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    color: "#ffffff",
    marginBottom: 4,
  },
});

export default DragonCard;
