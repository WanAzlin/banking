import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable } from 'react-native';
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
      <Text style={styles.title2}>Long Term</Text>
      <Text style={styles.title2}>Short Term</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    paddingTop:35,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
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
});
