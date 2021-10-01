import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TextInput,
  Text,
} from 'react-native';
import io from 'socket.io-client';
const connectionString = 'http://192.168.8.228:3001';

const ChatScreen = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [resewedMessages, setResewedMessages] = useState([]);
  const socketConnection = useRef(null);

  const createSocketIoConnection = () => {
    socketConnection.current = io(connectionString);
  };
  const receiveMessagesFromServer = () => {
    socketConnection.current.on('message', message => {
      setResewedMessages(prevState => [...prevState, message]);
    });
  };

  useEffect(() => {
    createSocketIoConnection();
    receiveMessagesFromServer();
  }, []);

  const sendMessage = () => {
    socketConnection.current.emit('message', chatMessage);
    setChatMessage('');
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          {resewedMessages.map((singleMessage, id) => {
            return <Text key={id}>{singleMessage}</Text>;
          })}
        </View>
        <View>
          <TextInput
            value={chatMessage}
            onChangeText={inputValue => setChatMessage(inputValue)}
            placeholder="Start typing.."
            onSubmitEditing={sendMessage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatScreen;
