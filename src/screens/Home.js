import { StyleSheet, Pressable, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
import RouteContainer from "../components/HomeComponents/RouteContainer";
const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    alignItems: "center",
                    paddingTop: 50,
                    paddingLeft: 30,
                    paddingRight: 30,
                    paddingBottom: 50,
                }}
            >
                <Text
                    className="text-black text-lg font-semibold tracking-wide"
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                >
                    Already on a Bus?
                </Text>
                <Text
                    className="text-black pb-5 text-lg font-semibold tracking-wide text-center"
                    style={{ fontFamily: "Poppins_600SemiBold" }}
                >
                    Share your location and help others track the bus!
                </Text>
                <Pressable
                    title="Get Started"
                    className="flex items-center h-12 rounded justify-center bg-background-blue text-white w-32 active:bg-sky-500 active:transition duration-150 ease-in-out"
                >
                    <Text
                        className="text-white text-lg font-semibold tracking-wide"
                        style={{ fontFamily: "Poppins_600SemiBold" }}
                    >
                        Share Now
                    </Text>
                </Pressable>
            </View>
            <View
                style={{
                    flex: 2,
                    justifyContent: "flex-start",
                }}
            >
                <RouteContainer />
            </View>
        </View>
    );
};

export default Home;
