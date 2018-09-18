/** @format */
/*
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlgumList from './src/components/albumList';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText='Albums!' />
        <AlgumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);

