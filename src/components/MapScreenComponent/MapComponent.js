import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Text, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

const MapComponent = () => {
    // getting user Location

    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};

    const coordinates = [
        {latitude: 37.3318456, longitude: -122.0296002},
        {latitude: 37.771707, longitude: -122.4053769}
    ]

    const [location, setLocation] = useState(null);
    const [destinition, setDestinition] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

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
                <Marker coordinate={origin} />
                <Marker coordinate={destination} />
                
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
