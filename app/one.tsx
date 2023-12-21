import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet ,Image} from 'react-native';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Saving</Text>
      <View style={styles.box2}>
      <View style ={{flexDirection: "row",backgroundColor: "#434343", }}>
      <Image style={styles.icon}
      source={require("../assets/images/party.png")} /> 
      <Text style={styles.title2}>Party Savings</Text>
      
      </View>
      
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
    
  },
  title: {
    fontSize: 18,
    color: "#ECF0F1",
    marginLeft: 25,
    paddingTop:30,
   
  },
  
  box2: {
    marginLeft: 20,
    marginRight: 3,
    borderColor:'#000000',
    backgroundColor: "#434343",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  
  title2: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
    
  },
  icon: {
    width: 40,
    height: 40, 
    marginLeft: 5,
    marginBottom: 10,
  },
});
