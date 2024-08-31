import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/Ionicons';
import SalonProfileNavigator from '../utils/SalonProfileNavigator';

const SaloonProfile = ({ route }) => {

    const [details, setDetails] = useState(route.params.details);

    const navigation = useNavigation();

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
                    }}>Salon Profile</Text>
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
                        justifyContent: 'space-between'
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
                            {/* <TouchableOpacity onPress={() => {
                                navigation.navigate("SaloonProfile", { details })
                            }}>
                                <Text style={{
                                    color: "#FEBA43",
                                    fontWeight: '500',
                                    fontSize: 12
                                }}>View Profile</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </View>
                            

            {/* showing the tabs */}
            <View style={{
                flex:1,
            }}>
                <SalonProfileNavigator />
            </View>


        </SafeAreaView>
    )
}

export default SaloonProfile

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0D0D12",
        height: "100%",
        width: "100%",
        flex: 1
    }
})