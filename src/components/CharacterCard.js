import React from 'react';
import { View, Text, Image } from 'react-native';

const CharacterCard = ({ character }) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            <Image source={{ uri: character.image }} style={{ width: 50, height: 50, marginRight: 16 }} />
            <View>
                <Text style={{ fontSize: 18 }}>{character.name}</Text>
                <Text>{character.status} - {character.species}</Text>
            </View>
        </View>
    );
};

export default CharacterCard;
