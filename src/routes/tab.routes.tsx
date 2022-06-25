import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialIcons} from '@expo/vector-icons';

const { Screen, Navigator, Group} = createBottomTabNavigator();

import {Home} from '../screens/Home';
import {Search} from '../screens/Search';
import {Add} from '../screens/Add';
import {AlertsApp} from '../screens/AlertsApp';
import {Profile} from '../screens/Profile';

import styled from 'styled-components/native';
import { Container,Image,Title } from './styles';

export function TabRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarActiveTintColor:'#64c4bb',
                tabBarInactiveTintColor:'#FFF',
                headerShown:false,
                tabBarStyle: {
                    backgroundColor: '#141414',
                    borderTopColor: 'transparent'
                  }
            }}

            
        >
            <Screen
                name='Home'
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon: ({color,size})=>(
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                         />
                    )
                }}
                component={Home}
                
            />

 

            <Screen
                name='Search'
                options={{
                    tabBarLabel:'Search',
                    tabBarIcon: ({color,size})=>(
                        <MaterialIcons
                            name="search"
                            color={color}
                            size={size}
                         />
                    )
                }}
                component={Search}
            />

            <Screen
                name='Add'
                options={{
                    tabBarLabel:'Add',
                    tabBarIcon: ({color,size})=>(
                        <MaterialIcons
                            name="add"
                            color={color}
                            size={size}
                         />
                    )
                }}
                component={Add}
            />

            <Screen
                name='AlertsApp'
                options={{
                    tabBarLabel:'AlertsApp',
                    tabBarIcon: ({color,size})=>(
                        <MaterialIcons
                            name="notifications"
                            color={color}
                            size={size}
                         />
                    )
                }}
                component={AlertsApp}
            />

            <Screen
                name='Profile'
                options={{
                    tabBarLabel:'Profile',
                    tabBarIcon: ({color,size})=>(
                        <MaterialIcons
                            name="person"
                            color={color}
                            size={size}
                         />
                    )
                }}
                component={Profile}
            />

        </Navigator>
    )
}