import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ServicesCard from './ServicesCard';


const SingleSaloon = ({ route }) => {
    // console.log(route.params.item)
    const navigation = useNavigation();

    const [details, setDetails] = useState(route.params.item)

    return (
        <View style={styles.background}>
            <View>
                <ImageBackground
                    source={{ uri: "https://images.squarespace-cdn.com/content/v1/5fd787d32a8a4a2604b22b5d/a1a982a2-8886-4017-a735-3fde5aeab145/msbs-barbershop-perspective-22000.jpg" }}
                    style={{
                        height: 384,
                        width: "100%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,

                    }}
                >
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
                        }}>Details</Text>
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
                </ImageBackground>
            </View>

            <ScrollView style={{
                // marginBottom:20,
                marginTop: -60,
                zIndex: 999
            }}>
                <View style={{

                    backgroundColor: "#0D0D12",
                    borderTopRightRadius: 40,
                    borderTopLeftRadius: 40,

                }}>
                    <View style={{
                        padding: 20
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: "space-between",
                        }}>
                            <Text style={{
                                fontWeight: "600",
                                fontSize: 20,
                                color: "#D8D8E3"
                            }}>{details.title}</Text>
                            <View style={{ backgroundColor: "#2D2D3A", padding: 5, borderRadius: 15, paddingLeft: 10, paddingRight: 10 }}>
                                <Text style={{
                                    fontWeight: '500',
                                    fontSize: 12,
                                    color: "#29EF08"
                                }}>OPEN</Text>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center', marginBottom: 7, marginTop: 10
                        }}>
                            <Icon name="star" size={13} color="#FEBA43" />
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: "white",
                            }}> {details.ratingAverage} <Text style={{ color: "#666D80" }}>({details.reviewsCount} reviews)</Text> </Text>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center', marginBottom: 7,
                            justifyContent:'space-between'
                        }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center', 
                        }}>
                            <Icon name="location-outline" size={13} color="#FEBA43" />
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: "#666D80",
                            }}> {details.address}</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>{
                                navigation.navigate("SaloonProfile",{details})
                            }}>
                                <Text style={{
                                    color:"#FEBA43",
                                    fontWeight:'500',
                                    fontSize:12
                                }}>View Profile</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>

                    <LinearGradient colors={["#1A1B25", '#0D0D12']} style={{
                        padding: 20,
                        paddingLeft: 25,
                        borderRadius: 15,
                    }}>
                        <Text style={{
                            fontWeight: '600',
                            fontSize: 16,
                            color: "#D8D8E3",
                            marginBottom: 5,
                        }}>Select Services</Text>
                        {
                            details.services.map((item, index) => {
                                return (
                                    <ServicesCard key={index} item={item} />
                                )
                            })
                        }
                    </LinearGradient>

                </View>
            </ScrollView>
            <View style={{
                padding:20
            }}> 
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("BookAppointment",{details})
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
                    }}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SingleSaloon

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0D0D12",
        height: "100%",
        width: "100%",
        flex: 1
    }
})