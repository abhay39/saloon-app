import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SaloonCard = ({item}) => {
    // console.log(item)
    const navigation=useNavigation();

  return (
    <TouchableOpacity onPress={()=>{
        navigation.push('SingleSaloon', {item})
    }} style={{
        width:"100%",
        borderWidth:2,
        borderColor:'#3F4042',
        borderRadius:20,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:10
    }}>
      <View style={{
            display:'flex',
            flexDirection:'row',

            // justifyContent:'space-between',
            alignItems:'center',
            marginBottom:10,
            marginTop:10,
        }}>
            <View>
                <Image source={{uri:item.saloonImg}} alt='style' height={150} width={150} style={{
                    borderRadius:20,marginRight:10
                }}/>
            </View>
            <View style={{
                width:'100%'
            }}>
                <Text style={{
                    fontSize:16,
                    fontWeight:'500',
                    color:"white",
                    marginBottom:7
                }}>{item.title}</Text>
                <Text style={{
                    fontSize:12,
                    fontWeight:'400',
                    color:"#B7BCC9",
                    marginBottom:7
                }}><Text style={{color:'#FEBA43'}}>OPEN NOW</Text> - {item.openFrom} - {item.openTo}</Text>
                <View style={{display:'flex',
                    flexDirection:'row',
                    alignItems:'center',                    marginBottom:7,}}>
                    <Icon name="location-outline" size={13} color="#FEBA43" />
                    <Text style={{
                        fontSize:12,
                        fontWeight:'400',
                        color:"white",
                    }}> {item.distance} Meter | {item.landMard}</Text>
                </View>
                <Text style={{
                fontSize:12,
                fontWeight:'400',
                color:"white",
                }}> {item.address}</Text>

                <View style={{display:'flex',
                    flexDirection:'row',
                    alignItems:'center',                    marginBottom:7,marginTop:10}}>
                    <Icon name="star" size={13} color="#FEBA43" />
                    <Text style={{
                        fontSize:12,
                        fontWeight:'400',
                        color:"white",
                    }}> {item.ratingAverage} ({item.reviewsCount})</Text>
                </View>
                <View style={styles.lines} />
                <Text style={{
                        fontSize:12,
                        fontWeight:'400',
                        color:"white",
                }}>Service Starting from <Text style={{
                    color:'#FEBA43',
                    fontWeight:'600'
                }}>Rs. {item.minimumPrice}</Text></Text>
            </View>
            
    </View>
    </TouchableOpacity>
  )
}

export default SaloonCard

const styles = StyleSheet.create({
    lines: {
        width:'58%',
        borderWidth:1,
        marginBottom:5,
        borderColor:'#3C3A3A'
      },
})