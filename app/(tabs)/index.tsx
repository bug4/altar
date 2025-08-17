import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CARS = [
  {
    id: 1,
    name: 'BMW M4',
    price: '150',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068',
  },
  {
    id: 2,
    name: 'Mercedes AMG GT',
    price: '200',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
  },
  {
    id: 3,
    name: 'Porsche 911',
    price: '250',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Skip the rental counter</Text>
        <Text style={styles.subtitle}>Find the perfect car</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#6b7280" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="City, airport, address, or train station"
          placeholderTextColor="#6b7280"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Cars</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carList}>
            {CARS.map((car) => (
              <TouchableOpacity key={car.id} style={styles.carCard}>
                <Image source={{ uri: car.image }} style={styles.carImage} />
                <View style={styles.carInfo}>
                  <Text style={styles.carName}>{car.name}</Text>
                  <Text style={styles.carPrice}>${car.price}/day</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.exploreSection}>
          <Text style={styles.exploreTitle}>Rent cars for any occasion</Text>
          <Text style={styles.exploreSubtitle}>
            Browse an incredible selection of cars, from the everyday to the extraordinary.
          </Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Explore cars</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#6b7280',
    marginTop: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    margin: 20,
    borderRadius: 12,
    padding: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  carList: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  carCard: {
    width: 280,
    marginRight: 16,
    backgroundColor: '#1f2937',
    borderRadius: 12,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: 180,
  },
  carInfo: {
    padding: 12,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  carPrice: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  exploreSection: {
    backgroundColor: '#1f2937',
    margin: 20,
    padding: 20,
    borderRadius: 12,
  },
  exploreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  exploreSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 20,
  },
  exploreButton: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});