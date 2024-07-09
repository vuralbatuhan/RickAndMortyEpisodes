import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text, TextInput, Pressable } from 'react-native';
import { fetchEpisodes } from '../api/api';
import EpisodeCard from '../components/EpisodeCard';

const EpisodeList = ({ navigation }) => {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');

    const navigateToFavorites = () => {
        navigation.navigate('FavoriteCharacters');
    };
    
    useEffect(() => {
        fetchEpisodes(page)
            .then(response => {
                setEpisodes(response.data.results);
            })
            .catch(error => console.error(error));
    }, [page]);

    const renderEpisode = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('EpisodeDetail', { episodeId: item.id })}>
            <EpisodeCard episode={item} />
        </TouchableOpacity>

    );

    
    const filterEpisodes = episodes.filter(ep => 
        ep.name.toLowerCase().includes(search.toLowerCase()) ||
        ep.episode.toLowerCase().includes(search.toLowerCase()) ||
        ep.air_date.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={styles.view}>
            <TextInput 
                placeholder="Search Episodes"
                value={search}
                onChangeText={setSearch}
                style={styles.searchAll}
            />
            <FlatList
                data={filterEpisodes}
                renderItem={renderEpisode}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={() => setPage(page + 1)}
                onEndReachedThreshold={0.5}
            />
            <View>
                <Pressable style={styles.bottomButton} onPress={navigateToFavorites}>
                    <Text style = {styles.buttonText}>{'GO TO FAVOURITES'}</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        padding: 16
    },
    searchAll: {
        marginBottom: 16, 
        padding: 8, 
        borderColor: '#ccc', 
        borderWidth: 3, 
        borderRadius: 4 
    },
    bottomButton: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default EpisodeList;
