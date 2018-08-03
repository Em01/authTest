import { Navigation } from 'react-native-navigation'
import AuthScreen from './Screens/AuthScreen'
import CreateAnAccount from './Screens/CreateAnAccount'

Navigation.registerComponent('Client.AuthScreen', () => AuthScreen);
Navigation.registerComponent('Client.CreateAnAccount', () => CreateAnAccount);

Navigation.startSingleScreenApp({
    screen: {
        screen: "Client.AuthScreen"
    }
});