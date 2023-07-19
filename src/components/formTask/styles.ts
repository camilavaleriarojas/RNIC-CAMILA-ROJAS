import { StyleSheet } from "react-native";
import { darkContent, isAndroid, lightContent } from "../../constants/themes";


const styles = StyleSheet.create({
    container: {
      paddingBottom: 25,
      paddingTop: 28,
      marginTop: 10,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor: '#fff'
    },
    input: {
      marginBottom: 6,
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#e8e8ed',
      fontSize: 15
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
    },
    button: {
      padding: 10,
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 20,
      textAlign: 'center',
      backgroundColor: isAndroid ? lightContent.neutral : darkContent.secondary,
      color: '#fff',
      fontSize: 20
    },
  });

export default styles