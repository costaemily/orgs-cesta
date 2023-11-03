import React from "react";
import { StyledText } from "../../../components/StyledText";
import { Image, StyleSheet, View } from "react-native";

export function Items({ title, list }) {
  return (
    <>
      <StyledText style={styles.title}>{title}</StyledText>
      {list.map(({ name, image }) => {
        return (
          <View key={name} style={styles.item}>
            <Image source={image} style={styles.imageItem} />
            <StyledText style={styles.textItem}>{name}</StyledText>
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
