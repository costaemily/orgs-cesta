import React from "react";
import { StyleSheet, Text } from "react-native";

// O código abaixo é como eu faria para desenvolver este componente
/* export const CostumText = ({ children, style, boldText }) => {
  return <Text style={[style, styles(boldText).styledText]}>{children}</Text>;
};

const styles = (boldText) =>
  StyleSheet.create({
    styledText: {
      fontFamily: boldText ? "MontSerratBold" : "MontSerratRegular",
    },
  }); */

export function CostumText({ children, style }) {
  let defaultStyle = styles.normalStyle;

  if (style?.fontWeight === "bold") {
    defaultStyle = styles.boldStyle;
  }

  return (
    <Text style={[style, styles.normalStyle, defaultStyle]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  normalStyle: {
    fontFamily: "MontSerratRegular",
    fontWeight: "normal",
  },
  boldStyle: {
    fontFamily: "MontSerratBold",
    fontWeight: "normal",
  },
});
