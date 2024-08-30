import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

const reviews = [
  {
    id: '1',
    name: 'Courtney Henry',
    avatar: 'https://images.squarespace-cdn.com/content/v1/5fd787d32a8a4a2604b22b5d/a1a982a2-8886-4017-a735-3fde5aeab145/msbs-barbershop-perspective-22000.jpg',
    rating: 5,
    time: '2 mins ago',
    review: 'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua',
  },
  {
    id: '2',
    name: 'Cameron Williamson',
    avatar: 'https://images.squarespace-cdn.com/content/v1/5fd787d32a8a4a2604b22b5d/a1a982a2-8886-4017-a735-3fde5aeab145/msbs-barbershop-perspective-22000.jpg',
    rating: 4,
    time: '2 mins ago',
    review: 'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco.',
  },
  {
    id: '3',
    name: 'Cameron Williamson',
    avatar: 'https://images.squarespace-cdn.com/content/v1/5fd787d32a8a4a2604b22b5d/a1a982a2-8886-4017-a735-3fde5aeab145/msbs-barbershop-perspective-22000.jpg',
    rating: 4,
    time: '2 mins ago',
    review: 'Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco.',
  },
];

const Review=()=> {
  return (
    <View style={styles.container}>
      {/* Rating Summary */}
      <View style={styles.ratingSummary}>
        <View style={styles.ratingBreakdown}>
          {/* Star breakdown */}
          {[5, 4, 3, 2, 1].map((star) => (
            <View key={star} style={styles.starRow}>
              <Text style={styles.starText}>{star}</Text>
              <View style={styles.starBar} />
            </View>
          ))}
        </View>
        <View style={styles.averageRating}>
          <Text style={styles.ratingNumber}>4.0</Text>
          <Text style={styles.reviewsText}>52 Reviews</Text>
        </View>
      </View>

      {/* Reviews List */}
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.reviewContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.reviewContent}>
              <View style={styles.reviewHeader}>
                <Text style={styles.name}>{item.name}</Text>
                <MaterialIcons name="more-vert" size={24} color="white" />
              </View>
              <View style={styles.ratingAndTime}>
                <View style={styles.ratingStars}>
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <MaterialIcons key={i} name="star" size={18} color="#FFD700" />
                    ))}
                </View>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <Text style={styles.reviewText}>{item.review}</Text>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F14',
    padding: 16,
  },
  ratingSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#1B1B25',
    padding: 16,
    borderRadius: 10,
  },
  ratingBreakdown: {
    flex: 1,
    marginRight: 16,
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  starText: {
    color: '#fff',
    marginRight: 8,
  },
  starBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#4CAF50',
    borderRadius: 2.5,
  },
  averageRating: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  reviewsText: {
    color: '#FFD700',
    fontSize: 16,
  },
  reviewContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#1B1B25',
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  reviewContent: {
    flex: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  ratingAndTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingStars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  time: {
    fontSize: 14,
    color: '#8D8D8D',
  },
  reviewText: {
    marginTop: 8,
    fontSize: 14,
    color: '#C5C5C5',
  },
  separator: {
    height: 1,
    backgroundColor: '#2A2A37',
    marginVertical: 8,
  },
});

export default Review;