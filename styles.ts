import { StyleSheet } from "react-native";
import { darkContent, isAndroid, lightContent } from "./src/constants/themes";

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: isAndroid ? lightContent.background : darkContent.primary,
    },
    keyboardAvoidingView: {
      flex: 1,
    },
  });

export default styles