import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";

const AppBar = () => {
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.navigate("Asteroides");
  };
  const handleNavLanzador = () => {
    navigation.navigate("Lanzadores");
  };
  const handleNavClima = () => {
    navigation.navigate("Clima");
  };
  const handleNavCapsule = () => {
    navigation.navigate("Capsulas");
  };
  const handleNavDragons = () => {
    navigation.navigate("Satelites");
  };
  return (
    <View style={styles.appBar}>
      <TouchableOpacity style={styles.appBarButton} onPress={handleNav}>
        <Ionicons name="planet-outline" size={24} color="#ffffff" />
        <Text style={styles.appBarButtonText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appBarButton} onPress={handleNavLanzador}>
        <FontAwesome5 name="space-shuttle" size={24} color="#ffffff" />
        <Text style={styles.appBarButtonText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appBarButton} onPress={handleNavClima}>
        <Ionicons name="cloud-outline" size={24} color="#ffffff" />
        <Text style={styles.appBarButtonText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appBarButton} onPress={handleNavDragons}>
        <FontAwesome5 name="satellite" size={24} color="#ffffff" />
        <Text style={styles.appBarButtonText}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.appBarButton} onPress={handleNavCapsule}>
        <Ionicons name="rocket-outline" size={24} color="#ffffff" />
        <Text style={styles.appBarButtonText}></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 60,

    backgroundColor: "#000000",
  },
  appBarButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 8,
    borderRadius: 30,
    marginHorizontal: 5,
    backgroundColor: "#080808",
  },
  appBarButtonText: {
    color: "#ffffff",
    fontSize: 18,
    marginLeft: 8,
  },
});

export default AppBar;
