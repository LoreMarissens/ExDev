import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Button, FlatList, ScrollView} from 'react-native';
import InfoDetail from './InfoDetail';
import Winkelwagen from './Winkelwagen';


const BusTrips = ({navigation}) =>{

    const [trips, setTrips] = useState ([]);

    const getTrips = async () => {
        try {
            const response = await fetch ("https://loremarissens.be/wp-json/wp/v2/posts?categories=4", {

            })
            const json = await response.json();
            setTrips(json);
            console.log(trips);
        } 
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTrips();
    }, []);


    return (
        <View>
            <Text style={styles.hoofdTitel}>Reispellen</Text>
            <Image style={styles.winkelkar} source={require('../assets/images/shopping-cart.png')}/>
            <View style={styles.kar}>
            <Text title="Winkelwagen" onPress={() => navigation.navigate("Winkelwagen")} />
            </View>
            <FlatList data={trips} renderItem={({item}) => (
                
            <View>
                <ScrollView style={styles.container}>
                <View style={styles.product}>
                <Text style={styles.titleEen}>5 Seconden</Text>
                    <Image style={styles.img} styling={{width: 150, height: 150}} source={require('../assets/images/5-seconden.jpg')}/>
                    <Text style={styles.prijs}>€12.95</Text>
                    <View style={styles.details}>
                </View>
                </View>
                </ScrollView>

                <View style={styles.click}>
                <Button title="Bekijk product" color={'#fca311'} onPress={() => navigation.navigate("Info")} />
                </View>

                <ScrollView>
                <View style={styles.product}>
                <Text style={styles.titleTwee}>Uno</Text>
                    <Image style={styles.img} styling={{width: 150, height: 150}} source={require('../assets/images/uno.jpg')}/>
                    <Text style={styles.prijs}>€10.95</Text>
                    <View style={styles.details}>
                </View>
                </View>
                </ScrollView>

                <View style={styles.click}>
                <Button title="Bekijk product" color={'#fca311'} onPress={() => navigation.navigate("Uno")} />
                </View>

                <ScrollView>
                <View style={styles.product}>
                <Text style={styles.titleDrie}>Rummikub</Text>
                    <Image style={styles.img} styling={{width: 150, height: 150}} source={require('../assets/images/rummikub.jpg')}/>
                    <Text style={styles.prijs}>€18.95</Text>
                    <View style={styles.details}>
                </View>
                </View>
                </ScrollView>

                <View style={styles.click}>
                <Button title="Bekijk product" color={'#fca311'} onPress={() => navigation.navigate("Rummikub")} />
                </View>

                <ScrollView>
                <View style={styles.product}>
                <Text style={styles.titleVier}>Qwirkle</Text>
                    <Image style={styles.img} styling={{width: 150, height: 150}} source={require('../assets/images/Qwirkle.jpg')}/>
                    <Text style={styles.prijs}>€15.95</Text>
                    <View style={styles.details}>
                </View>
                </View>
                </ScrollView>

                <View style={styles.click}>
                <Button title="Bekijk product" color={'#fca311'} onPress={() => navigation.navigate("Qwirkle")} />
                </View>
            </View>
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
    },
    hoofdTitel: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 20,
        textAlign: 'center',
        backgroundColor: '#fca311',
        paddingBottom: 20,
    },
      img: {
        paddingLeft: 420,
        width: '100%',
        height: 350,
        marginTop: 50,
    },
    click: {
        height: 100,
        width: 120,
        textAlign: 'center',
        marginLeft: 150,
        paddingTop: 30,
    },
    titleEen: {
        fontSize: 25,
        paddingTop: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleTwee: {
        fontSize: 25,
        paddingTop: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleDrie: {
        fontSize: 25,
        paddingTop: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleVier: {
        fontSize: 25,
        paddingTop: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    prijs: {
        paddingLeft: 320,
        paddingTop: 20,
        fontSize: 17,
        fontWeight: '500',
    },
    winkelkar:{
        width: 30,
        height: 30,
        marginLeft: 350,
        marginTop: 20,
    },
    kar: {
        marginLeft: 330,
        marginRight: 10,
        paddingBottom: 5,
    },
}
);

export default BusTrips;