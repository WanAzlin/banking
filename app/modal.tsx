import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Money Receive</Text>
      <Image style={styles.circle1}
                    source={require("../assets/images/av1.png")} /> 
      <Text style={styles.title2}>+ 120</Text>
      <View style={styles.box2}> 
      <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
      <Text style={styles.title3}>Transaction Type:</Text>   
      <Text style={styles.title4}>DuitNow Received</Text>   
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
      <Text style={styles.title3}>Received From:</Text>   
      <Text style={styles.title4}>Wan Nurul Azlin Binti </Text>   
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
      <Text style={styles.title3}>Date | Time</Text>   
      <Text style={styles.title5}>10/12/2023 | 06:58:39</Text>   
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
      <Text style={styles.title3}>Status:</Text>   
      <Text style={styles.title4}>Successful Transaction Saving</Text>   
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
      <Text style={styles.title3}>Transaction No:</Text>   
      <Text style={styles.title4}>232423242JDNJCN</Text>   
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
      <Text style={styles.title3}>Remarks:</Text>   
      <Text style={styles.title6}>Alin Comel </Text>   
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style ={{flexDirection: "row", backgroundColor: "#434343" }}>
      <Text style={styles.title3}>DuitNow Ref:</Text>   
      <Text style={styles.title4}>23231313JSKDNSMAOE </Text>   
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
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 45,
    alignSelf: 'center'
  },
  title2: {
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop: 25,
    alignSelf: 'center',
    color: "#ABEBC6"
  },
  circle1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 25,

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
  title3: {
    fontSize: 15,
    fontWeight: 'bold',
    
  },
  title4: {
    fontSize: 15,
    marginLeft: 100,
    
  },

  title5: {
    fontSize: 15,
    marginLeft: 125,
    
  },
  title6: {
    fontSize: 15,
    marginLeft: 210,
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    marginTop: 20,
  },
});
