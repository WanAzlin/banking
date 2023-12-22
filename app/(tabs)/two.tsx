import { StyleSheet,Pressable, Image } from 'react-native';
import { Link,  } from 'expo-router';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Save</Text>
      <Text style={styles.title2}>How much do you want to save?</Text>
      <View style={styles.box2}> 
      <Text style={styles.title3}>Name of Saving Plan</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title3}>Enter Amount</Text>
      </View>
      <View style={styles.box2}> 
      <View style ={{flexDirection: "row", backgroundColor: "#434343", }}>
      <Link href="/frame" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Text style={styles.title21}>Daily</Text>
                )}
              </Pressable>
      </Link>
      <Text style={styles.title31}>Monthly</Text>
      <Text style={styles.title4}>Quarterly</Text>
      </View>
      </View>
      <View style ={{flexDirection: "row" }}>
      <Text style={styles.titler1}>Category</Text>
      <Text style={styles.titler2}>Save All</Text>
      </View>
      <View style={styles.box2}> 
      <View style ={{flexDirection: "row", backgroundColor: "#434343", }}>
      <Image style={styles.circle2}
                   source={require("../../assets/images/laptop.png")} /> 
      <Text style={styles.title7}>Electronic</Text>  
      <Image style={styles.circle3}
                   source={require("../../assets/images/check.png")} /> 
     </View>
     <View style ={{flexDirection: "row", backgroundColor: "#434343", }}>
      <Image style={styles.circle4}
                   source={require("../../assets/images/gc.png")} /> 
      <Text style={styles.title8}>School Fees</Text>  
      <Image style={styles.circle8}
                   source={require("../../assets/images/check.png")} /> 
     </View>
     <View style ={{flexDirection: "row", backgroundColor: "#434343", }}>
     <Image style={styles.circle4}
                   source={require("../../assets/images/secret.png")} /> 
      <Text style={styles.title8}>Emergency Fund</Text> 
      <Image style={styles.circle9}
                   source={require("../../assets/images/check.png")} />  
      </View>    
        
      </View>
      <View style={styles.box3}>   
            <Text style={styles.title9}>Continue</Text> 
      
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 15,
  },
  title3: {
    fontSize: 15,
   
    marginLeft: 20,
    paddingBottom: 10,
  },
  title2: {
    fontSize: 38,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 10,
    color: '#1876D1'
  },
  title21: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    color: "#1876D1",
    
  },
  title31: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    
  },
  title4: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
   
  },
  titler1: {
    fontSize: 15,
    
    marginLeft: 20,
    paddingTop: 20,
  },
  titler2: {
    fontSize: 15,
    
    marginLeft: 255,
    paddingTop: 20,
  },
  title7: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
  },
  title8: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 35,
  },
  title9: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 140,
    marginTop: 3,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    marginTop: 10,
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
    marginTop: 15,
  },
  box3: {
    marginLeft: 20,
    marginRight: 3,
    borderColor:'#FFFFFF',
    backgroundColor: '#1876D1',
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderWidth: 2,
  },
  circle2: {
    width: 50,
    height: 50,
    
    marginLeft: 10,

  },
  circle3: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 150,

  },
  circle4: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 10,

  },
  circle8: {
    width: 30,
    height: 30,
    marginTop: 25,
    marginLeft: 133,

  },
  circle9: {
    width: 30,
    height: 30,
    marginTop: 25,
    marginLeft: 95,

  },
});
