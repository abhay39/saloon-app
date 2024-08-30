import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { appointments } from '../assets/dummy'
import Fontisto from 'react-native-vector-icons/Fontisto'

const AppointmentCard = () => {
    const [handleToogle,setHandleToogle]=useState(true);

    const handle=()=>{
        setHandleToogle(!handleToogle);
    }
    
  return (
    <View style={{
        backgroundColor:"white",
        padding:10,
        borderRadius:10,
        marginBottom:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
      }}>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
        }}>
            <Text style={{
                fontSize:12,
                fontWeight:'600',
                marginRight:5
            }}>{appointments[0].day}</Text>
            <Text style={{
                fontSize:12,
                fontWeight:'600',
                color:"#FEAF18"
            }}>●{appointments[0].time}</Text>
        </View>
        <View style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }}>
            <Text style={{
                        fontSize:12,
                        fontWeight:'600',
                        marginRight:10
                }}>Remind me</Text>
                <TouchableOpacity onPress={handle}>
                    {
                        handleToogle ? (<Fontisto name="toggle-on" size={20} color="#FEAF18" />) : (<Fontisto name="toggle-off" size={20} color="#FEAF18" />)
                    }
                </TouchableOpacity>
            </View>
      </View>
      <View style={styles.line} />
        <View style={{
            display:'flex',
            flexDirection:'row',
            // justifyContent:'space-between',
            alignItems:'center',
            marginBottom:10,
            marginTop:10
        }}>
            <View>
                <Image source={{uri:appointments[0].typeImg}} alt='style' height={150} width={150} style={{
                    borderRadius:20,marginRight:10
                }}/>
            </View>
            <View>
                <Text style={{
                    fontSize:16,
                    fontWeight:'600',
                    color:"#0D0D12",
                    marginBottom:7
                }}>{appointments[0].title}</Text>
                <Text style={{
                    fontSize:12,
                    fontWeight:'400',
                    color:"#666D80",
                    marginBottom:7
                }}>{appointments[0].address}</Text>
                <View style={{
            display:'flex',
            flexDirection:'row',
            // justifyContent:'space-between',
            alignItems:'center',
            marginBottom:10,
        }}>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'400',
                        color:"#484C57"
                    }}>Stylist:</Text>
                    <Text style={{
                        fontSize:12,
                        fontWeight:'600',
                        color:"#3E3E3E"
                    }}> {appointments[0].stylist}</Text>
                </View>
                
                <Text style={{
                    fontSize:12,
                    fontWeight:'600',
                    color:"#5E636F"
                }}>Services:</Text>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    // justifyContent:'space-between',
                    alignItems:'center',
                    marginBottom:10,
                }}>
                    {
                        appointments[0].Services.map((service, index)=>(
                            <Text style={{
                                fontSize:12,
                                fontWeight:'400',
                                color:"#34353A",
                                marginBottom:7
                            }} key={index}>{service.name}, </Text>
                        ))
                    }
                </View>
            </View>
        </View>

    </View>
  )
}

export default AppointmentCard

const styles = StyleSheet.create({
    line: {
        width: '100%',
        height: 2, 
        backgroundColor: '#ECEFF3', 
      },
})