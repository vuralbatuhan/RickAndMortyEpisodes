import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { fetchEpisode, fetchCharacter } from '../api/api';
import CharacterCard from '../components/CharacterCard';

const EpisodeDetail = ({ route, navigation }) => {
    const { episodeId } = route.params;
    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');

    const navigateToFavorites = () => {
        navigation.navigate('FavoriteCharacters');
    };

    useEffect(() => {
        fetchEpisode(episodeId)
            .then(response => {
                setEpisode(response.data);
                const characterPromises = response.data.characters.map(url => 
                    fetchCharacter(url.split('/').pop()).then(res => res.data)
                );
                return Promise.all(characterPromises);
            })
            .then(characterData => setCharacters(characterData))
            .catch(error => console.error(error));
    }, [episodeId]);

    const renderCharacter = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { characterId: item.id })}>
            <CharacterCard character={item} />
        </TouchableOpacity>
    );

    const filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(search.toLowerCase()) ||
        character.status.toLowerCase().includes(search.toLowerCase()) ||
        character.species.toLowerCase().includes(search.toLowerCase())
    );

    if (!episode) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={styles.episodeName}>{episode.name}</Text>
            <Text>{episode.air_date}</Text>
            <Text>{episode.episode}</Text>
            <TextInput
                placeholder="Search Characters"
                value={search}
                onChangeText={setSearch}
                style={styles.searchAll}
            />
            <FlatList
                data={filteredCharacters}
                renderItem={renderCharacter}
                keyExtractor={(item) => item.id.toString()}
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
    episodeName: {
        fontSize: 24, 
        fontWeight: 'bold'
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

export default EpisodeDetail;
