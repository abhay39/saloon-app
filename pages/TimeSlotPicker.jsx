import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TimeSlotCard from '../components/TimeSlotCard';

const TimeSlotPicker = () => {
    const [selectedTime, setSelectedTime] = useState(null);

    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 8; hour <= 22; hour++) {
            const timeString = `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
            slots.push(timeString);
        }
        return slots;
    };

    const handleSelectTime = (time) => {
        setSelectedTime(time);
    };

    const timeSlots = generateTimeSlots();

    return (
        <View style={styles.container}>
            {timeSlots.map((time, index) => {
                if (index % 3 === 0) {
                    return (
                        <View style={styles.row} key={index}>
                            {timeSlots.slice(index, index + 3).map((slot, slotIndex) => (
                                <TimeSlotCard
                                    key={slotIndex}
                                    time={slot}
                                    selected={selectedTime === slot}
                                    onSelect={handleSelectTime}
                                />
                            ))}
                        </View>
                    );
                }
                return null;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});

export default TimeSlotPicker;
