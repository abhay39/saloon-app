import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartingPage from "../pages/StartingPage";
import TabsContainer from "../pages/TabsContainer";
import SingleSaloon from "../components/SingleSaloon";
import BookAppointment from "../components/BookAppointment";
import SaloonProfile from "../pages/SaloonProfile";

const Stack=createNativeStackNavigator();

const StackNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="loader" component={StartingPage} />
            <Stack.Screen name="tabsContainer" component={TabsContainer} />
            <Stack.Screen name="SingleSaloon" component={SingleSaloon} />
            <Stack.Screen name="BookAppointment" component={BookAppointment} />
            <Stack.Screen name="SaloonProfile" component={SaloonProfile} />
        </Stack.Navigator>
    )
}

export default StackNavigator;