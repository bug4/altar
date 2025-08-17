import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../../components/LanguageSelector';

export default function MoreScreen() {
  const { t } = useTranslation();

  const menuItems = [
    {
      id: 'how-it-works',
      title: t('menu.howItWorks'),
      icon: 'information',
      url: 'https://example.com/how-it-works',
    },
    {
      id: 'support',
      title: t('menu.support'),
      icon: 'help-circle',
      url: 'https://example.com/support',
    },
    {
      id: 'legal',
      title: t('menu.legal'),
      icon: 'file-document',
      url: 'https://example.com/legal',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <MaterialCommunityIcons name="account" size={32} color="#6b7280" />
          </View>
          <View style={styles.welcomeText}>
            <Text style={styles.title}>{t('auth.welcome')}</Text>
            <TouchableOpacity>
              <Text style={styles.loginText}>{t('auth.loginSignup')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.hostCard}>
        <View style={styles.hostContent}>
          <Text style={styles.hostTitle}>{t('host.title')}</Text>
          <Text style={styles.hostDescription}>
            {t('host.description')}
          </Text>
          <TouchableOpacity style={styles.learnButton}>
            <Text style={styles.learnButtonText}>{t('host.learnMore')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menu}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.menuItem}>
            <MaterialCommunityIcons name={item.icon} size={24} color="#fff" style={styles.menuIcon} />
            <Text style={styles.menuText}>{item.title}</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#6b7280" />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.version}>Version 25.7.1</Text>
      <LanguageSelector />
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
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#1f2937',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    marginLeft: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginText: {
    fontSize: 16,
    color: '#6366f1',
    marginTop: 4,
  },
  hostCard: {
    margin: 20,
    backgroundColor: '#1f2937',
    borderRadius: 12,
    overflow: 'hidden',
  },
  hostContent: {
    padding: 20,
  },
  hostTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  hostDescription: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 8,
  },
  learnButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 16,
  },
  learnButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menu: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1f2937',
  },
  menuIcon: {
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  version: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
});