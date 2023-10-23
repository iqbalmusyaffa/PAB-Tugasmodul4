// import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { GluestackUIProvider, Button, ButtonText } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";

// Functional Component with props
const GButton = (props) => {
  return (
    // <TouchableOpacity style={styles.container} onPress={props.onPress}>
    //   <Text style={styles.text}>{props.text}</Text>
    // </TouchableOpacity>
    <GluestackUIProvider config={config}>
      <Button py="$1.5" action="secondary" onPress={props.onPress}>
          <ButtonText fontWeight="$medium">
            {props.text}
          </ButtonText>
      </Button>
    </GluestackUIProvider>
  );
};

// Styles
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#dddddd",
//     padding: 15,
//     alignItems: "center",
//     borderRadius: 30,
//   },
//   text: {
//     fontSize: 16,
//     textTransform: "uppercase",
//     fontWeight: "bold",
//   },
// });

export default GButton;