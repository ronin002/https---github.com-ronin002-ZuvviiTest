import {createNativeStackNavigator} from '@react-navigation/native-stack';

const { Screen, Navigator, Group} = createNativeStackNavigator();


import {Home} from '../screens/Home';
import {Search} from '../screens/Search';
import {Add} from '../screens/Add';
import {AlertsApp} from '../screens/AlertsApp';
import {Profile} from '../screens/Profile';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                options={{
                    title:'Start Page',
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor:'green'
                    },
                    headerTintColor:'#FFF'
                }}
                component={Home}
                
            />

 

            <Screen
                name='screenB'
                options={{
                   headerShown:false,
                }}
                component={Search}
            />
        </Navigator>
    )
}