import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image} from 'react-native';


import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Dream Vacation to Bali</Text>
      <View style ={{flexDirection: "row" }}>
      <Text style={styles.cSaving}>MYR</Text>
      <Text style={styles.tSaving}>250.00</Text>
      </View>
      <View style={styles.box2}> 
      <Text style={styles.title2}>Almost There..</Text>
      <View style={styles.container1}> 
    <View style={styles.progressBar}></View>
    </View>
    <Text style={styles.title3}>75% Completed</Text>
    </View>
    <View style ={{flexDirection: "row" }}>
    <View style={styles.box2}>
    <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
    <Image style={styles.circle4}
                  source={require("../assets/images/add-4.png")} />
    <Text style={styles.title2}>Top Up</Text>
    </View>
     </View>
    <View style={styles.box2}>
    <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
        <Image style={styles.circle4}
                  source={require("../assets/images/withdrawal.png")} />
        <Text style={styles.title2}>Withdrawal</Text>
        </View>
    </View>
    
    </View>
    <View style={styles.box2}>
    <Text style={styles.title5}>Recent Transactions</Text>
    <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
    <Image style={styles.circle21}
                   source={require("../assets/images/receive-money.png")} />
    <View style={styles.box1}> 
    <Text style={styles.title7}>Initial Deposit</Text>   
     <Text style={styles.title8}>12 Jun 2023</Text>   
    </View>
    <Text style={styles.title9}>+MYR</Text> 
    <Text style={styles.title10}>100</Text> 
    
    </View>
    <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
    <Image style={styles.circle21}
                   source={require("../assets/images/receive-money.png")} />
    
    <View style={styles.box1}> 
    <Text style={styles.title11}>Monthly Deposit</Text>   
     <Text style={styles.title12}>12 July 2023</Text>   
    </View>
    <Text style={styles.title13}>+MYR</Text> 
    <Text style={styles.title14}>150</Text> 
    
    </View>
     </View>
     <View style={styles.box3}>   
            <Text style={styles.title15}>Continue</Text> 
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  box1:{
    backgroundColor: "#434343"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 95,
    paddingTop: 30,
  },
  title2: {
    fontSize: 20,
    marginLeft: 10,
    paddingTop: 5,
    color: '#76D7C4',
    fontWeight: 'bold'
  },
  
  title3: {
    fontSize: 15,
    marginLeft: 10,
    paddingTop: 5,
    color: '#8A8E88',
  },
  title4: {
    fontSize: 18,
    marginLeft: 10,
    paddingTop: 5,
    color: '#76D7C4',
    fontWeight: 'bold'
  },
  title5: {
    fontSize: 18,
    marginLeft: 5,
    paddingTop: 5,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  tSaving: {
    fontSize: 55,
    fontWeight: 'bold',
    marginLeft: 10,
    paddingTop: 30,
    
    color: '#1876D1',
  },
  cSaving: {
    fontSize: 15,
    marginLeft: 95,
    paddingTop: 45,
    color: '#837F7F',
    fontWeight: 'bold',
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
  container1: {
    flex: 1,
    flexDirection: "column", //column direction
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#8A8E88',
    padding: 8,
    borderRadius: 20,
  },
  progressBar: {
    flex: 1,
    flexDirection: "column", //column direction
    marginBottom: 10,
    marginRight: 95,
    paddingTop: 27,
    backgroundColor: '#1876D1',
    paddingHorizontal: 130,
    paddingVertical: 5,
    borderRadius: 20,
  },
  circle3: {
    width: 35,
    height: 35,
    marginTop: 35,
    marginLeft: 40,

  },
  circle4: {
    width: 35,
    height: 35,
    
    marginLeft: 10,

  },
  circle21: {
    width: 40,
    height: 40,
    marginTop: 10,
    marginLeft: 10,

  },
  title7: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  title8: {
    fontSize: 15,
    
    marginLeft: 10,
    marginBottom: 50,
  },
  title9: {
    fontSize: 13,
    marginLeft: 40,
    paddingTop: 22,
  },
  title10: {
    fontSize: 45,
    marginLeft: 5,
    fontWeight: 'bold',
    color: "#48C9B0"
  },
  title11: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  title12: {
    fontSize: 15,
    
    marginLeft: 10,
    marginBottom: 50,
  },
  title13: {
    fontSize: 13,
    marginLeft: 15,
    paddingTop: 18,
  },
  title14: {
    fontSize: 45,
    marginLeft: 5,
    fontWeight: 'bold',
    color: "#48C9B0"
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
  title15: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 140,
    marginTop: 3,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
