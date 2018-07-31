import { Navigation } from 'react-native-navigation'
import AuthScreen from './screens/AuthScreen'

Navigation.registerComponent('Client.AuthScreen', () => AuthScreen);

Navigation.startSingleScreenApp({
    screen: {
        screen: "Client.AuthScreen"
    }
});
