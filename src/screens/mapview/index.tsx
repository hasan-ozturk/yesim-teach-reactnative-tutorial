import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



const MapViewScreen = () => {

    const [active, setactive] = useState(false)
    const [lat, setlat] = useState(40.2215611)
    const [long, setlong] = useState(28.8674798)

    const [lat2, setlat2] = useState(0)
    const [long2, setlong2] = useState(0)

   


    const getLatLong = (e: any) => {

        setlat2(e.nativeEvent.coordinate.latitude)
        setlong2(e.nativeEvent.coordinate.longitude)
        setactive(true)
    }

    useEffect(() => {
        
        Geolocation.getCurrentPosition(info => {
            setlat(info.coords.latitude)
            setlong(info.coords.longitude)
        });
     

    }, [])
    

    return <>
        <View style={styles.container}>
            {/* <MapView
                style={styles.map}
                //specify our coordinates.
                initialRegion={{
                    latitude: 40.2215611,
                    longitude: 28.8674798,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            /> */}

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                 onLongPress={(e) => getLatLong(e)}
            >
                <Marker
                        coordinate={{
                            latitude: lat,
                            longitude: long,
                        }}
                        title="My Marker"
                        description='Some description'
                    />

                {
                    active && <Marker
                        coordinate={{
                            latitude: lat2,
                            longitude: long2,
                        }}
                        title='My Marker'
                        description='Some description'
                    />
                }

                <Marker
                    coordinate={{
                        latitude: 40.2215611,
                        longitude: 28.8674798,
                    }}
                    title='My Marker'
                    description='Some description'
                />

                {/* {
                    active && <Polygon
                        coordinates={[
                            { latitude: lat, longitude: long },
                            { latitude: lat2, longitude: long2 },
                            { latitude: 40.2215611, longitude: 28.8674798 },

                        ]}
                        strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider

                        strokeWidth={6}
                    />
                } */}
            </MapView>
        </View>

    </>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapViewScreen