import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import moment from 'moment';
import DateCard from '../components/DateCard';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const today = moment(); // Current date

    const generateDates = () => {
        const dates = [];
        let currentDate = today.clone();

        // Loop through each day from today for the next 12 months
        for (let i = 0; i < 365; i++) {
            dates.push({ day: currentDate.date(), month: currentDate.format('MMM').toUpperCase() });
            currentDate.add(1, 'day'); // Move to the next day
        }

        return dates;
    };

    const handleSelectDate = (date) => {
        setSelectedDate(date);
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
           {generateDates().map((date, index) => (
                <DateCard
                    key={index}
                    date={date}
                    selected={selectedDate && selectedDate.day === date.day && selectedDate.month === date.month}
                    onSelect={() => handleSelectDate(date)}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
});

export default DatePicker;
