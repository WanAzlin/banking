import { StyleSheet, Image, Pressable} from 'react-native';
import { Link,  } from 'expo-router';

import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.circle}
      source={require("../../assets/images/av1.png")} /> 
      <Text style={styles.title}>Total Savings</Text>
      <View style ={{flexDirection: "row"}}> 
      <Text style={styles.cSaving}>MYR</Text>
      <Text style={styles.tSaving}>250.00</Text>
      </View>
      <View style ={{flexDirection: "row"}}>
      <View style={styles.box1}>
      <Image style={styles.icon}
      source={require("../../assets/images/party.png")} /> 
      <Text style={styles.paratext1}>Party Savings</Text> 
      <Text style={styles.text1}>Happy New Year Party </Text> 
      <View style={styles.container1}>     
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title1}>Create Now </Text>
                )}
              </Pressable>
 </Link>
 </View>
      </View>
      <View style={styles.box1}>
      <Image style={styles.icon}
      source={require("../../assets/images/goodbye.png")} /> 
      <Text style={styles.paratext1}>Farewell Savings</Text> 
      <Text style={styles.text1}>Bye Bye Sarah </Text> 
      <View style={styles.container1}>     
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title1}>Create Now </Text>
                )}
              </Pressable>
 </Link>
 </View>
      </View>
      </View>
      <View style ={{flexDirection: "row"}}>
      <View style={styles.box1}>
      <Image style={styles.icon}
      source={require("../../assets/images/goal-2.png")} /> 
      <Text style={styles.paratext1}>Purchase Target</Text> 
      <Text style={styles.text1}>Buy New Macbook </Text> 
      <View style={styles.container1}>     
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title1}>Create Now </Text>
                )}
              </Pressable>
 </Link>
 </View>
      </View>
      <View style={styles.box1}>
      <Image style={styles.icon}
      source={require("../../assets/images/congratulation.png")} /> 
      <Text style={styles.paratext1}>College Fund</Text> 
      <Text style={styles.text1}>Failed semester </Text> 
      <View style={styles.container1}>     
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title1}>Create Now </Text>
                )}
              </Pressable>
 </Link>
 </View>
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
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 20,

  },
  icon: {
    width: 50,
    height: 50, 
    marginLeft: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 20,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
   
    marginBottom: 5,
  },
  tSaving: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 25,
    paddingTop: 30,
  },
  cSaving: {
    fontSize: 15,
    marginLeft: 25,
    paddingTop: 45,
    color: '#837F7F',
    fontWeight: 'bold',
  },
  box1: {
    marginLeft: 20,
    marginRight: 3,
    borderColor:'#000000',
    backgroundColor: "#434343",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  paratext1: {
    fontWeight: 'bold',
    color:"#EFEFEF",
    
    fontSize:18,
  },
  text1: {
    
    marginTop: 10,
    fontSize:10,
    
  },
  container1: {
    margin: 5,
    borderRadius: 10,
    borderColor:'#D609E7',
    borderWidth: 2,
    backgroundColor: '#D609E7',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});
