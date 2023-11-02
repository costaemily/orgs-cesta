import { StatusBar, SafeAreaView, View } from "react-native";
import { Cesta } from "./src/telas/Cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontLoaded] = useFonts({
    MontSerratRegular: Montserrat_400Regular,
    MontSerratBold: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
