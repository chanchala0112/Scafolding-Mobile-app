import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import WorkerDashboard from './screens/WorkerDashboard';
import SupervisorDashboard from './screens/SupervisorDashboard';
import InspectionScreen from './screens/InspectionScreen';
import ReportScreen from './screens/ReportScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Worker" component={WorkerDashboard} />
        <Stack.Screen name="Supervisor" component={SupervisorDashboard} />
        <Stack.Screen name="Inspection" component={InspectionScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}