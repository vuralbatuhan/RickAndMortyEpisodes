import React from 'react';
import { View, Text } from 'react-native';

const EpisodeCard = ({ episode }) => {
    return (
        <View style={{ padding: 16, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{episode.name}</Text>
            <Text>{episode.episode}</Text>
            <Text>{episode.air_date}</Text>
        </View>
    );
};

export default EpisodeCard;
