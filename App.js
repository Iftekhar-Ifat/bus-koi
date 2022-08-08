import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";

export default function App() {
    const [fontsLoaded, error] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
        Poppins_800ExtraBold,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <TailwindProvider>
            <SafeAreaView style={styles.container} className={"bg-inherit"}>
                <Login />
                {/* <Home /> */}
            </SafeAreaView>
        </TailwindProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
