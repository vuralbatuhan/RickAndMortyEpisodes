import React from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../store/charactersSlice';
import CharacterCard from '../components/CharacterCard';

const FavoriteCharacters = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.characters.favorites);

    const handleRemove = (character) => {
        Alert.alert(
            'Remove Favorite',
            `Are you sure you want to remove ${character.name}?`,
            [
                { text: 'NO', style: 'cancel' },
                { text: 'YES', onPress: () => dispatch(removeFavorite(character)) },
            ]
        );
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <View>
                        <CharacterCard character={item} />
                        <Button title="Remove" onPress={() => handleRemove(item)} />
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default FavoriteCharacters;
