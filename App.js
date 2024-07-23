
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Main from './src/components/main';
import Routes from './routes/routes';


export default function App() {
  return (
    <>
    <StatusBar
    barStyle="light-content" // Cambia el estilo del texto de la barra de estado a blanco
    

  />

<Routes/>  
    </>
    
  );
}

