import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export default function LikedScreen() {

    const likedPosts = [
        { id: 1, user: 'John Doe', content: 'Just completed a great workout! Feeling amazing.', likes: 56 },
        { id: 2, user: 'Jane Smith', content: 'Exploring new ways to improve productivity.', likes: 34 },
        { id: 3, user: 'Mike Johnson', content: 'Loving the new React Native update!', likes: 112 },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liked Posts</Text>

            {/* Scrollable list of liked posts */}
            <ScrollView style={styles.postsContainer}>
                {likedPosts.map((post) => (
                    <View key={post.id} style={styles.postCard}>
                        <Text style={styles.postContent}>{post.content}</Text>
                        <View style={styles.postFooter}>
                            <Avatar.Image size={32} source={{ uri: 'https://i.pravatar.cc/150?img=' + post.id }} />
                            <Text style={styles.postUser}>{post.user}</Text>
                            <View style={styles.likesContainer}>
                                <FontAwesome name="heart" size={20} color="#FF0000" />
                                <Text style={styles.likesText}>{post.likes}</Text>
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
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#6200EE',
        marginBottom: 20,
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
        shadowRadius: 6,
        elevation: 5,
    },
    postContent: {
        fontSize: 16,
        marginBottom: 15,
        color: '#333',
        lineHeight: 22,
    },
    postFooter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postUser: {
        fontSize: 14,
        color: '#555',
        marginLeft: 10,
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    likesText: {
        fontSize: 16,
        marginLeft: 5,
        color: '#FF0000',
    },
});
