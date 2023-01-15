import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Pressable, FlatList, Button, ScrollView} from 'react-native';


const Qwirkle = ({navigation}) =>{

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

    const [counter, setCounter] = useState(1);
    const increase = () => {
        setCounter((currentCounter) => currentCounter +1);
        console.log(counter);
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.winkelkar} source={require('../assets/images/shopping-cart.png')}/>
            <View style={styles.kar}>
            <Text title="Winkelwagen" onPress={() => navigation.navigate("Winkelwagen")} />
            </View>
        <View style={styles.plek}>
        <Text style={styles.title}>Qwirkle</Text>
      <Image style={styles.img} source={require('../assets/images/Qwirkle.jpg')}/>
      <View style={styles.details}>
        </View>
      </View>
      <View>
        <Text style={styles.what}>Beschrijving</Text>
        <Text style={styles.description}>Volgende reis neem je Qwirkle gewoon met je mee. Deze reiseditie heeft kleinere tegeltjes dan het basisspel, zo past het zelfs op je campingtafel! Geen spelbord nodig, gewoon tegeltjes aanleggen en punten scoren!
        Leg tegels met verschillende symbolen of kleuren tegen elkaar aan en scoor punten. Leg je een Qwirkle (6 in een rij) dan levert je dat 6 bonuspunten op. Wie scoort de meeste punten?
        </Text>
      </View>
      <View>
        <Text style={styles.price}>€15.95</Text>
      </View>
      <View style={styles.nummer}>
        <Button style="button" title="Toevoegen aan winkelkar" onPress={increase}/>
        <StatusBar style="auto" />
        </View>
        <View style={styles.click}>  
           <Button title="Ga terug" color={'#fca311'} onPress={() => navigation.navigate("Games for you")}/>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create ({
    click: {
        height: 100,
        width: 150,
        textAlign: 'center',
        marginLeft: 130,
        marginTop: -50,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 30,
        paddingBottom: 35,
        textAlign: 'center',
    },
    img: {
        paddingLeft: 400,
        height: 450,
        width: '50%',
    },
    what: {
        paddingTop: 40,
        paddingBottom: 25,
        fontSize: 20,
        fontWeight: '500',
        paddingLeft: 20,
    },
    description: {
        paddingLeft: 20,
        paddingRight: 30,
    },
    price: {
        paddingLeft: 310,
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
    },
    winkelkar:{
        width: 30,
        height: 30,
        marginLeft: 350,
        marginTop: 20,
    },
    nummer: {
        height: 150,
        width: 150,
        textAlign: 'center',
        marginLeft: 130,
        paddingTop: 7,
        marginTop: 30,
    },
    kar: {
        marginLeft: 330,
        marginRight: 10,
        paddingBottom: 5,
    },
});

export default Qwirkle