import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CardProps } from "../../types/types";


const Card = (props: CardProps) =>{
    const { data } = props;
    const { title, description } = data;

    const [todo, setTodo] = useState(false)

    return (
       <TouchableOpacity onPress={() => setTodo(!todo) }>
         <View style={styles.container}>
            <Text style={styles.tasks}>{title}</Text>
            <Text style={styles.tasks}>{description}</Text>
            <Text style={styles.tasks}>{!todo ? 'No completado' : 'Completado'}</Text>
        </View>
       </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7654',
        margin: 20,
    },
    tasks: {
        margin: 10
    }
})