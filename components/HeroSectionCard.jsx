import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get("window");

const HeroSectionCard = ({ item,totalItems }) => {
  return (
    <TouchableOpacity style={styles.touchable}>
      <LinearGradient colors={["#FFB900", '#FFBB8A']} style={styles.gradient}>
        <View style={{
            display:'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
            
        }}>
            <View style={styles.contentContainer}>
            <Text style={styles.offText}>{item.off}% OFF</Text>
            <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <View>
                <Text style={styles.sideText}>{item.discountPercent}%</Text>
            </View>
        </View>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.dotContainer}>
            {Array.from({ length: totalItems }).map((_, index) => (
              <View
                key={index}
                style={index === item.id-1 ? styles.activeDot : styles.inactiveDot}
              />
            ))}
          </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HeroSectionCard;

const styles = StyleSheet.create({
  touchable: {
    width: width - 40, // Slightly reduced width for padding/margins around the card
    marginBottom: 20,
    borderRadius: 15, // Rounded corners as per the design
    overflow: 'hidden', // Ensures the gradient and content stay within the rounded corners
  },
  gradient: {
    padding: 20,
    paddingLeft: 25, // Extra padding to align the content better
    borderRadius: 15,
   
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  offText: {
    fontSize: 14,
    fontWeight: '400',
    color: "#0D0D12",
    marginBottom: 5,
  },
  nameText: {
    fontWeight: '700', // Increased weight for a bolder look
    fontSize: 22, // Slightly larger font size
    color: "#0D0D12",
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    color: "#0D0D12",
    marginBottom: 15,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 10, // Adjusted to create space between text and dots
  },
  activeDot: {
    width: 25,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000',
    marginHorizontal: 4,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#A67A44',
    marginHorizontal: 4,
  },
  sideText: {
    fontSize: 40,
    color: "#0D0D12",
    fontWeight: '700', // Increased weight for emphasis
  },
});
