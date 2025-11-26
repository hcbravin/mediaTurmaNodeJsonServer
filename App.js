import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TelaEstatistica from './src/telas/TelaEstatistica';
import TelaEstudanteForm from './src/telas/TelaEstudanteForm';
import TelaHome from './src/telas/TelaHome';
import TelaSobre from './src/telas/TelaSobre';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={TelaHome} options={{tabBarIcon: ({color, size, focused }) => {
          const iconName = focused ? 'home' : 'home-outline';
          return <Ionicons name={iconName} size={size - 5} color={color} />
        }}} />
        <Tab.Screen name="Novo Aluno" component={TelaEstudanteForm} options={{tabBarIcon: ({color, size, focused }) => {
          const iconName = focused ? 'person-add' : 'person-add-outline';
          return <Ionicons name={iconName} size={size - 5} color={color} />
        }}} />
        <Tab.Screen name="Estatistica" component={TelaEstatistica} options={{tabBarIcon: ({color, size, focused }) => {
          const iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          return <Ionicons name={iconName} size={size - 5} color={color} />
        }}} />
        <Tab.Screen name="Sobre" component={TelaSobre} options={{tabBarIcon: ({color, size, focused }) => {
          const iconName = focused ? 'information-circle' : 'information-circle-outline';
          return <Ionicons name={iconName} size={size - 5} color={color} />
        }}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}