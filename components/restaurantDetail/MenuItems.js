import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const foods = [
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
        title: 'Tandoori Chicken',
        description: 'Amazing Indian dish',
        price: '$20.50',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
        title: 'Chilaquiles',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$11.20',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
        title: 'Chicken Salad',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$34.90',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
        title: 'Chicken Salad',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$34.90',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
    },
]

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
})

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
            <View key={index}> 
                <View style={styles.menuItemStyle}>
                    <BouncyCheckbox 
                        iconStyle={{borderColor: "lightgray", borderRadius: 0}} 
                        fillColor='green'
                    />
                    <FoodInfo food={food} />
                    <FoodImage food={food} />
                </View>
            </View>
        ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius:8}}/>
    </View>
)