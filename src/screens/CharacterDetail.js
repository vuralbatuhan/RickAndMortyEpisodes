import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from '../api/api';
import { addFavorite, removeFavorite } from '../store/charactersSlice';
import styles from '../styles/CharacterDetailsStyle';

const CharacterDetail = ({ route, navigation }) => {
    const { characterId } = route.params;
    const [character, setCharacter] = useState(null);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.characters.favorites);
    const isFavorite = favorites.some((fav) => fav.id === parseInt(characterId));

    const navigateToFavorites = () => {
        navigation.navigate('FavoriteCharacters');
    };

    useEffect(() => {
        fetchCharacter(characterId)
            .then(response => setCharacter(response.data))
            .catch(error => console.error(error));
    }, [characterId]);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite(character));
        } else if (favorites.length < 10) {
            dispatch(addFavorite(character));
        } else {
            Alert.alert('OOPS', 'You have exceeded the number of favorite character additions. If you want to add another character to your favorites, you must remove a favorite character'), [
                {text: 'OK'}
            ]
        }
    };

    if (!character) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
            <Text>{character.status}</Text>
            <Text>{character.species}</Text>
            <Text>{character.gender}</Text>
            <Text>{character.origin.name}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                    onPress={handleFavoriteToggle}
                />
            </View>
            <View>
                <Pressable style={styles.bottomButton} onPress={navigateToFavorites}>
                    <Text style = {styles.buttonText}>{'GO TO FAVOURITES'}</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default CharacterDetail;
