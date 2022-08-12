import {
    StyleSheet,
    Pressable,
    Text,
    View,
    ScrollView,
    Image,
} from "react-native";
import routes from "../../../assets/data/route-info.json";
import BusIcon from "../../../assets/icons/bus-icon.png";
const RouteContainer = () => {
    return (
        <ScrollView>
            {routes.map((bus) => (
                <View key={bus.id} className="flex-row py-4 justify-around">
                    <View className="flex w-3/5">
                        <View>
                            <View className="flex flex-row items-centerv justify-between">
                                <Text className="text-black text-xl font-regular tracking-wide">
                                    {bus.route}
                                </Text>

                                <Image
                                    source={BusIcon}
                                    style={{ width: 30, height: 30 }}
                                />
                            </View>
                            <Text className="text-xs text-gray-text">
                                {bus.routepoint}
                            </Text>
                        </View>
                    </View>
                    <View className="flex justify-between">
                        <View className="flex flex-row justify-between items-center">
                            <Text>Current Status</Text>
                            <Text>x</Text>
                        </View>
                        <Pressable
                            title="Get Started"
                            className="flex items-center h-11 rounded justify-center bg-background-blue text-white w-26 active:bg-sky-500 active:transition duration-150 ease-in-out"
                        >
                            <Text
                                className="text-white text-base font-semibold tracking-wide"
                                style={{ fontFamily: "Poppins_400Regular" }}
                            >
                                See Map
                            </Text>
                        </Pressable>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default RouteContainer;
