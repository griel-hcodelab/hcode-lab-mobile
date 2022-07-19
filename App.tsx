import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingsScreen from "./screens/SettingsScreen";
import "react-native-gesture-handler";

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Settings: undefined;
  Profile: { userId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Search" component={SearchScreen} />
        <RootStack.Screen name="Settings" component={SettingsScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
