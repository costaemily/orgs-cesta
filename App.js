import { StatusBar, SafeAreaView, View } from "react-native";
import { Cesta } from "./src/pages/Cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { cestaMock } from "./src/mocks/cesta";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontSerratRegular: Montserrat_400Regular,
    MontSerratBold: Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...cestaMock} />
    </SafeAreaView>
  );
}
