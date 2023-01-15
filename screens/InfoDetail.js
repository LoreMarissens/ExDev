import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Pressable, FlatList, TouchableWithoutFeedback, Button, ScrollView} from 'react-native';


const InfoDetail = ({navigation}) =>{

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
        <Text style={styles.title}>5 Seconden</Text>
      <Image style={styles.img} source={require('../assets/images/5-seconden.jpg')}/>
      <View style={styles.details}>
        </View>
      </View>
      <View>
        <Text style={styles.what}>Beschrijving</Text>
        <Text style={styles.description}>5 Seconden ziet er eenvoudig uit ... Maar kan je binnen de 5 seconden 3 juiste antwoorden geven? Laat je niet afleiden door de tijdsdruk of de andere spelers anders raak je het noorden kwijt!

        Het zou makkelijk moeten zijn om 3 animatiefilms te noemen, maar kan je dat ook onder druk van de timer die genadeloos 5 seconden wegtikt? Geen tijd om na te denken, zeg dus het eerste wat in je opkomt… met het risico op knotsgekke antwoorden natuurlijk! Slaag je in je opdracht, dan win je de kaart.</Text>
        <View style={[styles.inhoud]}>
        <Text style={{flex:1}}>Inhoud:</Text>
        <Text style={{flex:2}}>• 1 spiraaltimer</Text>
        <Text style={{flex:3}}>• 90 kaarten met 60 junior vragen en 120 vragen voor het hele gezin</Text>
        <Text style={{flex:4}}>• 6 PAS-kaarten</Text>
        <Text style={{flex:5}}>• 6 WISSEL-kaarten</Text>
        <Text style={{flex:6}}>• 1 opbergzakje</Text>
        <Text style={{flex:7}}>• Spelregels</Text>
        </View>
      </View>
      <View>
        <Text style={styles.price}>€12.95</Text>
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
        height: 300,
        width: 300,
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
    inhoud: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 50,
        paddingTop: 20,
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
}
);

export default InfoDetail