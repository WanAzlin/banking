import { StyleSheet, Image, Pressable} from 'react-native';
import { Link,  } from 'expo-router';

import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style ={{flexDirection: "row", }}> 
      <Image style={styles.circle}
      source={require("../../assets/images/av2.png")} /> 
      <Text style={styles.title2}>Wan Azlin</Text>
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                   <Image style={styles.circle3}
                   source={require("../../assets/images/plus.png")} /> 
                )}
              </Pressable>
 </Link>
      </View>
      <Text style={styles.title}>Total Savings</Text>
      <View style ={{flexDirection: "row"}}> 
      <Text style={styles.cSaving}>MYR</Text>
      <Text style={styles.tSaving}>250.00</Text>
      </View>
      <View style={styles.box2}>
      <View style ={{flexDirection: "row", backgroundColor: "#434343" }}> 
      <Text style={styles.paratext2}>Collaborated Savings</Text>  
      
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                   <Image style={styles.circle2}
                   source={require("../../assets/images/arrow-right.png")} /> 
                )}
              </Pressable>
 </Link>

      </View>
      <View style ={{flexDirection: "row", backgroundColor: "#434343", paddingTop: 8 }}> 
      <Image style={styles.circle1}
      source={require("../../assets/images/av1.png")} /> 
      <Image style={styles.circle1}
      source={require("../../assets/images/av2.png")} /> 
      <Image style={styles.circle1}
      source={require("../../assets/images/av3.png")} />
      </View>
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
  circle2: {
    width: 30,
    height: 30,
    borderRadius: 80,
    marginLeft: 130,

  },
  circle1: {
    width: 40,
    height: 40,
    borderRadius: 50,
   

  },
  circle3: {
    width: 40,
    height: 40,
    marginTop: 30,
    marginLeft: 160,
   

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
    paddingTop: 15,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 40,
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
    paddingTop: 20,
  },
  cSaving: {
    fontSize: 15,
    marginLeft: 25,
    paddingTop: 35,
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
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  paratext1: {
    fontWeight: 'bold',
    color:"#EFEFEF",
    
    fontSize:18,
  },
  paratext2: {
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
    borderColor:'#42A5F5',
    borderWidth: 2,
    backgroundColor: '#1876D1',
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  
});
