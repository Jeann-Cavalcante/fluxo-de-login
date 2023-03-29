import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import RouterStack from './src/routes/RouterStack';

export default function App() {
  return (

    <> 
      <StatusBar style="auto" />
      <RouterStack />
    </>

  );
}

