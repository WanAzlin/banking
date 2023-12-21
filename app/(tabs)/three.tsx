import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable,Image } from 'react-native';
import { Link,  } from 'expo-router';

import { Text, View } from '../../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saving Goals</Text>
      <View style={styles.box2}> 
      <View style ={{flexDirection: "row", backgroundColor: "#434343", }}>
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title2}>All</Text>
                )}
              </Pressable>
      </Link>
      <Text style={styles.title3}>Long Term</Text>
      <Text style={styles.title4}>Short Term</Text>
      </View>
      </View>
      <View style ={{flexDirection: "row" }}>
      <Image style={styles.circle2}
                   source={require("../../assets/images/travel.png")} /> 
       <View style={styles.box1}>             
     <Text style={styles.title5}>Dream vacation to Bali</Text>   
     <Text style={styles.title6}>Lorem ipsum</Text>         
     </View>
     <Image style={styles.circle3}
                   source={require("../../assets/images/next.png")} /> 
      </View>
      <View style ={{flexDirection: "row" }}>
      <Image style={styles.circle21}
                   source={require("../../assets/images/laptop.png")} /> 
       <View style={styles.box1}>             
     <Text style={styles.title7}>Buy Latest Macbook</Text>   
     <Text style={styles.title8}>Lorem ipsum</Text>         
     </View>
     <Image style={styles.circle31}
                   source={require("../../assets/images/next.png")} /> 
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
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop:35,
  },
  box1:{

  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    color: "#1876D1"
  },
  title3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    
  },
  title4: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
   
  },
  title5: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 30,
  },
  title6: {
    fontSize: 15,
    
    marginLeft: 20,
    marginBottom: 50,
  },
  title7: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
  },
  title8: {
    fontSize: 15,
    
    marginLeft: 20,
    marginBottom: 50,
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
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  circle2: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginLeft: 30,

  },
  circle21: {
    width: 50,
    height: 50,
    paddingTop: 20,
    marginLeft: 30,

  },
  circle3: {
    width: 35,
    height: 35,
    marginTop: 35,
    marginLeft: 40,

  },
  circle31: {
    width: 35,
    height: 35,
    paddingTop: 25,
    marginLeft: 55,

  },
});
