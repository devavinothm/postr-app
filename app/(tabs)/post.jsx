import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Avatar, IconButton } from 'react-native-paper';

export default function PostScreen() {

  const [postText, setPostText] = useState('');

  const handleSendPost = () => {
    if (postText.trim() === '') {
      alert('Please enter something in the text box.');
      return;
    }
    // Handle post submission here
    alert('Post submitted: ' + postText);
    setPostText('');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Postr</Text>
        <IconButton
          icon="bell-outline"
          color="white"
          style={styles.notificationIcon}
          size={24}
          onPress={() => alert('Notifications')}
        />
      </View>

      <View style={styles.textBoxContent}>
        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.textBox}
            multiline
            placeholder="What's on your mind?"
            placeholderTextColor="#999"
            value={postText}
            onChangeText={setPostText}
          />
        </View>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendPost}>
          <FontAwesome name="send" size={20} color="white" />
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  notificationIcon: {
    backgroundColor: '#ddd',
  },
  textBoxContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textBoxContainer: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    // margin: 10,
  },
  textBox: {
    height: 150,
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#333',
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    shadowColor: '#6200EE',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
