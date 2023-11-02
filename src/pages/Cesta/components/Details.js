import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { CostumText } from "../../../components/CostumText";

export function Details({ title, logoSrc, nameFarm, description, price }) {
  return (
    <>
      <CostumText style={styles.detaislTitle}>{title}</CostumText>
      <View style={styles.detailsFarmContainer}>
        <Image source={logoSrc} style={styles.logoFarm} />
        <CostumText style={styles.detailsNameFarm}>{nameFarm}</CostumText>
      </View>
      <CostumText style={styles.detailsDescription}>{description}</CostumText>
      <CostumText style={styles.detailsPrice}>{price}</CostumText>
    </>
  );
}

const styles = StyleSheet.create({
  details: {
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  detaislTitle: {
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
});
