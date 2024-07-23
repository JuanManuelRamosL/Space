import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CapsuleCard = ({ capsule }) => {
  return (
    <View key={capsule.capsule_serial} style={styles.card}>
      <Text style={styles.header}>
        Capsule Serial: {capsule.capsule_serial}
      </Text>
      <Text style={styles.header}>Capsule ID: {capsule.capsule_id}</Text>
      <Text style={styles.header}>Status: {capsule.status}</Text>
      <Text style={styles.header}>
        Original Launch:{" "}
        {capsule.original_launch
          ? new Date(capsule.original_launch).toLocaleDateString()
          : "N/A"}
      </Text>
      <Text style={styles.header}>Type: {capsule.type}</Text>
      <Text style={styles.header}>Landings: {capsule.landings}</Text>
      <Text style={styles.header}>Reuse Count: {capsule.reuse_count}</Text>
      <Text style={styles.header}>
        Details: {capsule.details || "No details available"}
      </Text>
      {capsule.missions.length > 0 && (
        <View style={styles.missions}>
          <Text style={styles.missionsTitle}>Missions:</Text>
          {capsule.missions.map((mission, index) => (
            <Text style={styles.header} key={index}>
              - {mission.name} (Flight {mission.flight})
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    color: "#FFF",
    marginBottom: 8,
  },
  missions: {
    marginTop: 8,
  },
  missionsTitle: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default CapsuleCard;
