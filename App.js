/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Entypo from 'react-native-vector-icons/Entypo';

import EvilIcons from 'react-native-vector-icons/EvilIcons';


const App: () => Node = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text>
        <AntDesign name='customerservice' style={{ color: 'red', fontSize: 50 }}/>
        <AntDesign name='windows' style={{ color: 'red' , fontSize: 50 }}/>

        <Entypo name='behance' style={{color: 'red', fontSize: 50}}/>

        <EvilIcons name='camera' style={{ color: 'red', fontSize: 50 }}/>

      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 200,
    paddingHorizontal: 24,
  }
});

export default App;
