import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { StyledText } from "../../../components/StyledText";

import HeaderImage from "../../../../assets/topo.png";

const widthScreen = Dimensions.get("screen").width;

export function Header({ title }) {
  return (
    <>
      <Image source={HeaderImage} style={styles.header} />
      <StyledText style={styles.title}>{title}</StyledText>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: (578 / 768) * widthScreen,
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 20,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    paddingTop: 16,
  },
});
