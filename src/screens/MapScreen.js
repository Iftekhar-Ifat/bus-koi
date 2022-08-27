import { StyleSheet, Pressable, Text, View } from "react-native";
import MapComponent from "../components/MapScreenComponent/MapComponent";

const MapScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    alignItems: "center",
                    paddingTop: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingBottom: 50,
                }}
            >
                <Text
                    className="text-black py-3 text-lg font-semibold tracking-wide"
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                >
                    Route 2
                </Text>
                <View className="w-full">
                    <MapComponent />
                </View>
            </View>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
