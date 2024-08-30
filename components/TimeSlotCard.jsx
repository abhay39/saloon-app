import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TimeSlotCard = ({ time, selected, onSelect }) => {
    return (
        <TouchableOpacity 
            style={[styles.card, selected && styles.selectedCard]} 
            onPress={() => onSelect(time)}
        >
            <Text style={[styles.timeText, selected && styles.selectedTimeText]}>
                {time}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#333', 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 5,
    },
    selectedCard: {
        backgroundColor: '#FFB800', 
    },
    timeText: {
        color: '#ccc', 
        fontSize: 16,
    },
    selectedTimeText: {
        color: '#000', 
    },
});

export default TimeSlotCard;
