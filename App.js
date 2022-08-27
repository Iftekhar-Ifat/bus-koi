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
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import MapScreen from "./src/screens/MapScreen";

const Stack = createNativeStackNavigator();
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
                {/* <Login /> */}
                {/* <Home /> */}

                {/* <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Login"
                            component={LoginScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer> */}
                <MapScreen />
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
