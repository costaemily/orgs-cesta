import React from "react";
import { StyledText } from "../../../components/StyledText";
import { Image, StyleSheet, View } from "react-native";

export function Item({ item: { name, image } }) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.imageItem} />
      <StyledText style={styles.textItem}>{name}</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imageItem: {
    width: 46,
    height: 46,
  },
  textItem: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646",
  },
});
