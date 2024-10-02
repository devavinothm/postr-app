import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
    const userData = {
        username: 'John Doe',
        bio: 'Lover of tech, design, and fitness. Sharing my journey one post at a time.',
        profileImage: 'https://i.pravatar.cc/150?img=5',
        followers: 1284,
        following: 325,
        posts: 54,
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>{userData.posts}</Text>
                        <Text style={styles.statLabel}>Posts</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>{userData.followers}</Text>
                        <Text style={styles.statLabel}>Followers</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>{userData.following}</Text>
                        <Text style={styles.statLabel}>Following</Text>
                    </View>
                </View>
            </View>

            <View style={styles.profileInfo}>
                <Text style={styles.username}>{userData.username}</Text>
                <Text style={styles.bio}>{userData.bio}</Text>
            </View>

            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="pencil" size={20} color="white" />
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="photo" size={20} color="white" />
                    <Text style={styles.buttonText}>My Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.settingsButton]}>
                    <Ionicons name="settings" size={20} color="white" />
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#6200EE',
    },
    statsContainer: {
        flexDirection: 'row',
    },
    statBox: {
        alignItems: 'center',
        marginHorizontal: 15,
    },
    statNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6200EE',
    },
    statLabel: {
        fontSize: 14,
        color: '#555',
    },
    profileInfo: {
        alignItems: 'center',
        marginBottom: 30,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    bio: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
    },
    actionButtons: {
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6200EE',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 30,
        shadowColor: '#6200EE',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    settingsButton: {
        backgroundColor: '#4CAF50',
    },
});
