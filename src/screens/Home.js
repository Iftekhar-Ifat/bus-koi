import { StyleSheet, Text, View } from "react-native";
import { SvgUri } from "react-native-svg";
const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <SvgUri
                width="100"
                height="100"
                uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
            />
            <Text>Ho</Text>
        </View>
    );
};

export default Home;
