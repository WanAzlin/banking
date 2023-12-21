import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet ,Image, Pressable} from 'react-native';
import { Text, View } from '../components/Themed';
import { Link,  } from 'expo-router';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style ={{flexDirection: "row",}}>
        
        <Text style={styles.title}>Cancel</Text>
        <Text style={styles.title2}>Add Invitees</Text>
        <Link href="/two2" asChild>
              <Pressable>
                {({ pressed }) => (
                    <Text style={styles.title3}>Done</Text>
                )}
              </Pressable>
 </Link>

       
      </View>
      <View style ={{flexDirection: "row",}}>
        <Text style={styles.title}>To:</Text>
        <Image style={styles.circle2}
                   source={require("../assets/images/add-3.png")} /> 
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      

      
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
    marginLeft: 20,
    paddingTop:30,
   
  },
  title2: {
    fontSize: 18,
    color: "#ECF0F1",
    marginLeft: 90,
    paddingTop:30,
   
  },
  title3: {
    fontSize: 18,
    color: "#ECF0F1",
    marginLeft: 80,
    paddingTop:30,
   
  },
  circle2: {
    width: 33,
    height: 33,
    marginTop: 20,
    marginLeft: 310,

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    marginTop: 20,
  },
  

 
});
