import React from "react";
import { TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { StyledText } from "../../../components/StyledText";

export function Details({ title, logoSrc, nameFarm, description, price, buy }) {
  return (
    <>
      <StyledText style={styles.detailsTitle}>{title}</StyledText>
      <View style={styles.detailsFarmContainer}>
        <Image source={logoSrc} style={styles.logoFarm} />
        <StyledText style={styles.detailsNameFarm}>{nameFarm}</StyledText>
      </View>
      <StyledText style={styles.detailsDescription}>{description}</StyledText>
      <StyledText style={styles.detailsPrice}>{price}</StyledText>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => null}>
        <StyledText style={styles.buttonText}>{buy}</StyledText>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  details: {
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  detailsTitle: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  detailsFarmContainer: {
    flexDirection: "row",
    gap: 16,
  },
  logoFarm: {
    width: 32,
    height: 32,
  },
  detailsNameFarm: {
    fontSize: 16,
    lineHeight: 26,
  },
  detailsDescription: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
    textAlign: "justify",
  },
  detailsPrice: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  buttonContainer: {
    paddingVertical: 16,
    backgroundColor: "#2A9F85",
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
