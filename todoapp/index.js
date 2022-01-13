import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Provider from 'react-redux'
import Store from './Store/Store'

const redux = () =>{
    <Provider store={Store}> 
    <App />
    </Provider>   
}


AppRegistry.registerComponent(appName, () => redux);
