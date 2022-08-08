import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import BusSvg from "../../assets/bus-img.png";
import { SvgUri } from "react-native-svg";
const Login = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, backgroundColor: "#00ADFF" }}></View>
            <View style={{ flex: 1 }}>
                <Image source={BusSvg} style={styles.busImg} />
            </View>
            <View style={{ flex: 1, backgroundColor: "#576C82" }}>
                <View style={styles.buttonContainer}>
                    <Pressable
                        title="Get Started"
                        className="flex items-center h-12 rounded-3xl justify-center bg-background-blue text-white w-full active:bg-sky-500 active:transition duration-150 ease-in-out"
                    >
                        <Text
                            className="text-white text-lg font-semibold tracking-wide"
                            style={{ fontFamily: "Poppins_600SemiBold" }}
                        >
                            Get Started
                        </Text>
                    </Pressable>
                    <Pressable
                        title="Get Started"
                        className="flex flex-row justify-center items-center h-12 rounded-3xl border border-white w-full active:bg-slate-500 active:transition duration-150 ease-in-out"
                    >
                        <SvgUri
                            width="20"
                            height="20"
                            uri="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                        />
                        <Text
                            className="text-white text-lg font-semibold tracking-wide"
                            style={{ fontFamily: "Poppins_600SemiBold" }}
                        >
                            {"  "}
                            Student Account
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    busImg: {
        width: "100%",
        height: "100%",
    },
    buttonContainer: {
        flex: 1,
        margin: "10%",
        marginTop: "20%",
        justifyContent: "space-around",
    },
});
