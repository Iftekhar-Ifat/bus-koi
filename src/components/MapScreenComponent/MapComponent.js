import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

const MapComponent = () => {
    // getting user Location

    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);
                        
    return (
        <View className="flex">
            {location ? 
             <MapView
                className="w-auto h-64"
                mapType="mutedStandard"
                initialRegion={{
                    latitude: Number(`${location.coords.latitude}`),
                    longitude: Number(`${location.coords.longitude}`),
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                <Marker coordinate={{
                    latitude: Number(`${location.coords.latitude}`),
                    longitude: Number(`${location.coords.longitude}`),
 
                }}/>
            </MapView>
            : <Text>Getting Location...</Text>}
        </View>
    );
};

export default MapComponent;

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        width: 100,
        height: 100,
    },
});
