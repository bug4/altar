import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  Platform,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LANGUAGES } from '../src/i18n';

const FLAGS = {
  en: '🇬🇧',
  ro: '🇷🇴',
  ru: '🇷🇺',
};

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const changeLanguage = async (lng: string) => {
    await AsyncStorage.setItem('userLanguage', lng);
    await i18n.changeLanguage(lng);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.button}
        accessibilityLabel="Change language"
        accessibilityRole="button">
        <Text style={styles.flag}>
          {FLAGS[i18n.language as keyof typeof FLAGS]}
        </Text>
        <Text style={styles.buttonText}>
          {LANGUAGES[i18n.language as keyof typeof LANGUAGES]?.nativeName || 'English'}
        </Text>
        <MaterialCommunityIcons name="chevron-up" size={20} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            {Object.entries(LANGUAGES).map(([code, { nativeName }]) => (
              <TouchableOpacity
                key={code}
                style={[
                  styles.languageOption,
                  i18n.language === code && styles.selectedLanguage,
                ]}
                onPress={() => changeLanguage(code)}
                accessibilityRole="radio"
                accessibilityState={{ checked: i18n.language === code }}
                accessibilityLabel={`Select ${nativeName}`}>
                <View style={styles.languageRow}>
                  <Text style={styles.flag}>{FLAGS[code as keyof typeof FLAGS]}</Text>
                  <Text style={[
                    styles.languageText,
                    i18n.language === code && styles.selectedLanguageText,
                  ]}>
                    {nativeName}
                  </Text>
                </View>
                {i18n.language === code && (
                  <MaterialCommunityIcons name="check" size={20} color="#6366f1" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Platform.OS === 'web' ? 80 : 100,
    right: 20,
    zIndex: 1000,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f2937',
    padding: 12,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  flag: {
    fontSize: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#1f2937',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 48 : 16,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
  },
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  selectedLanguage: {
    backgroundColor: '#374151',
  },
  languageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  selectedLanguageText: {
    color: '#6366f1',
    fontWeight: 'bold',
  },
});