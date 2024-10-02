import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {

  const initialPosts = [
    { id: 1, user: 'John Doe', content: 'Just completed a great workout! Feeling amazing.', likes: 56, liked: false },
    { id: 2, user: 'Jane Smith', content: 'Exploring new ways to improve productivity.', likes: 34, liked: false },
    { id: 3, user: 'Mike Johnson', content: 'Loving the new React Native update!', likes: 112, liked: false },
  ];

  const [posts, setPosts] = React.useState(initialPosts);

  const handleLiked = (id) => {
    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      });
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6200EE" />

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

      {/* Posts */}
      <ScrollView style={styles.postsContainer}>
        {posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <Text style={styles.postContent}>{post.content}</Text>
            <View style={styles.postFooter}>
              <Avatar.Image size={32} source={{ uri: 'https://i.pravatar.cc/150?img=' + post.id }} />
              <Text style={styles.postUser}>{post.user}</Text>
              <View style={styles.likesShareContainer}>
                <View style={styles.likesContainer}>
                  <FontAwesome
                    name={post.liked ? 'heart' : 'heart-o'}
                    size={20}
                    color={post.liked ? '#FF0000' : '#000'}
                    onPress={() => handleLiked(post.id)}
                  />
                  <Text style={styles.likesText}>{post.likes}</Text>
                </View>

                {/* Add a share button here */}
                <AntDesign name="sharealt" size={20} color="black" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
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
  postsContainer: {
    paddingHorizontal: 20,
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postUser: {
    fontSize: 14,
    marginLeft: 10,
  },
  likesShareContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  likesText: {
    marginLeft: 5,
  },
});
