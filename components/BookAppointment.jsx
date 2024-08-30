import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Stylists } from '../assets/dummy';
import StylistCard from './StylistCard';
import DatePicker from '../pages/DatePicker';
import TimeSlotPicker from '../pages/TimeSlotPicker';

const BookAppointment = ({ route }) => {
    const navigation = useNavigation();

    // console.log(route.params.details);
    const [isSelected,setIsSelected] = useState(null);

    const handleIsSelected=(item)=>{
        setIsSelected(item);
        
    }

    return (
        <SafeAreaView style={styles.background}>
            <View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-between",
                    paddingLeft: 20,
                    paddingTop: 20,
                    paddingRight: 20
                }}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }} style={{
                        padding: 10,
                        backgroundColor: "#0D0D12",
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <AntDesign color="white" name="arrowleft" size={24} />
                    </TouchableOpacity>
                    <Text style={{
                        fontWeight: '600',
                        fontSize: 18,
                        color: "white"
                    }}>Book Appointment</Text>
                    <TouchableOpacity style={{

                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Feather color="white" name="more-vertical" size={24} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView >
            <View style={{
                padding:10
            }}>
                <Text style={{
                    fontSize:15,
                    fontWeight:"600",
                    color:"#D8D8E3",
                    marginBottom:10
                }}>Stylist</Text>

                <FlatList 
                    data={Stylists}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>{
                        return(
                            <StylistCard isSelected={isSelected} handleIsSelected={handleIsSelected} item={item}/>
                        )
                    }}
                />
            </View>


            <View style={{
                padding:10,
                marginTop:20
            }}>
                <Text style={{
                    fontSize:15,
                    fontWeight:"600",
                    color:"#D8D8E3",
                    marginBottom:10
                }}>Date</Text>

                <DatePicker />
            </View>

            <View style={{
                padding:10,
                marginTop:20
            }}>
                <Text style={{
                    fontSize:15,
                    fontWeight:"600",
                    color:"#D8D8E3",
                    marginBottom:10
                }}>Select Hours</Text>

                <TimeSlotPicker />
            </View>
            </ScrollView>
            <View style={{
                padding:10,
                marginTop:10
            }}>
                <TouchableOpacity onPress={()=>{
                    // navigation.navigate("BookAppointment",{details})
                }} style={{
                    backgroundColor:"#FFA810",
                    padding:8,
                    borderRadius:12,
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    height:52
                }}>
                    <Text style={{
                        fontWeight:"600",
                        fontSize:16,
                        color:"#FFFFFF"
                    }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default BookAppointment

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0D0D12",
        height: "100%",
        width: "100%",
        flex: 1
    }
})