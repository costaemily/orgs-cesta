import React from "react";
import { CostumText } from "../../../components/CostumText";
import { Image, StyleSheet, View } from "react-native";

export function Items({ title, list }) {
  return (
    <>
      <CostumText style={styles.title}>{title}</CostumText>
      {list.map(({ name, image }) => {
        return (
          <View key={name} style={styles.item}>
            <Image source={image} style={styles.imageItem} />
            <CostumText style={styles.textItem}>{name}</CostumText>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
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
