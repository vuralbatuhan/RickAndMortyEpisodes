import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/store/store';
import EpisodeList from './src/screens/EpisodeList';
import EpisodeDetail from './src/screens/EpisodeDetail';
import CharacterDetail from './src/screens/CharacterDetail';
import FavoriteCharacters from './src/screens/FavoriteCharacters';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="EpisodeList">
                    <Stack.Screen name="EpisodeList" component={EpisodeList} />
                    <Stack.Screen name="EpisodeDetail" component={EpisodeDetail} />
                    <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
                    <Stack.Screen name="FavoriteCharacters" component={FavoriteCharacters} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
