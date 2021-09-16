import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';

import io from 'socket.io-client';

const App = () => {
  useEffect(() => {
    io('http://192.168.8.233:3000');
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>Chat app</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
