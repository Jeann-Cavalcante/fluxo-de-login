import { StatusBar } from 'expo-status-bar';

import RouterStack from './src/routes/RouterStack';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (

    <AuthProvider> 
      <StatusBar style="auto" />
      <RouterStack />
    </AuthProvider>

  );
}

