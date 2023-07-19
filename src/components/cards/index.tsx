import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CardProps } from "../../types/types";
import styles from "./styles";


const Card = (props: CardProps) =>{
    const { data } = props;
    const { title, description } = data;

    const [todo, setTodo] = useState(false)

    return (
       <TouchableOpacity onPress={() => setTodo(!todo) }>
         <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.tasks}>{description}</Text>
            <Text style={todo ? styles.completed : styles.notCompleted}>{!todo ? 'No completado' : 'Completado'}</Text>
        </View>
       </TouchableOpacity>
    )
}

export default Card;
