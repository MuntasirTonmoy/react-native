import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import icedCoffeeImage from "@/assets/images/iced-coffee.png";
import { Link } from "expo-router";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link style={styles.link} href="/explore" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 4,
    marginHorizontal: "auto",
  },
  button: {
    height: 60,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    paddingBlock: 1,
    paddingInline: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 2,
  },
});
