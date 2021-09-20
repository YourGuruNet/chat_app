import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TextInput,
} from 'react-native';
import io from 'socket.io-client';

const ChatScreen = () => {
  const [chatMessage, setChatMessage] = useState('');

  useEffect(() => {
    io('http://192.168.8.233:3000');
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <TextInput
            value={chatMessage}
            onChangeText={inputValue => setChatMessage(inputValue)}
            placeholder="Start typing.."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;
