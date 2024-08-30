import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DateCard = ({ date, selected, onSelect }) => {
    return (
        <TouchableOpacity style={[styles.card, selected && styles.selectedCard]} onPress={() => onSelect(date)}>
            <Text style={[styles.dateText, selected && styles.selectedDateText]}>{date.day}</Text>
            <Text style={[styles.monthText, selected && styles.selectedMonthText]}>{date.month}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#333', 
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        margin: 5,
        height:71,
        width:83,
        justifyContent: 'center',
    },
    selectedCard: {
        backgroundColor: '#FFB800',
    },
    dateText: {
        color: '#ccc', 
        fontSize: 26,
        fontWeight: '600',
    },
    selectedDateText: {
        color: '#000', 
    },
    monthText: {
        color: '#999',
        fontSize: 12,
    },
    selectedMonthText: {
        color: '#000', 
    },
});

export default DateCard;
