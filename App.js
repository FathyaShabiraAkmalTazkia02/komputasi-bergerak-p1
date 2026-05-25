import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  SafeAreaView,
} from 'react-native';

const PROFILE = {
  nama: 'Fathya Shabira A.T',
  nim: '105841111923',
  prodi: 'Teknik Informatika',
  motto: 'Calm',
  hobi: ['Makan', 'Makan', 'Tidur'],
  foto: require('./assets/foto.jpeg'),
};

export default function App() {

  // Counter utama
  const [kunjungan, setKunjungan] = useState(0);

  // Bonus counter
  const [kopi, setKopi] = useState(0);
  const [air, setAir] = useState(0);

  // Tanggal Indonesia
  const tanggal = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Alert info
  const showInfo = () => {
    Alert.alert(
      'Tentang Aplikasi',
      `Halo, saya ${PROFILE.nama}\nHari ini: ${tanggal}`
    );
  };

  // Bonus share profile
  const shareProfile = () => {
    Alert.alert(
      'Bagikan Profil',
      `Nama: ${PROFILE.nama}
Prodi: ${PROFILE.prodi}
Hobi: ${PROFILE.hobi.join(', ')}
Motto: ${PROFILE.motto}`
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appTitle}>
            Halo Komputasi Bergerak 👋
          </Text>

          <Text style={styles.subtitle}>
            {tanggal}
          </Text>
        </View>

        {/* Profile Card */}
        <View style={styles.card}>

          <Image
            source={PROFILE.foto}
            style={styles.avatar}
          />

          <Text style={styles.name}>
            {PROFILE.nama}
          </Text>

          <Text style={styles.role}>
            {PROFILE.prodi} · {PROFILE.nim}
          </Text>

          <Text style={styles.motto}>
            {PROFILE.motto}
          </Text>

        </View>

        {/* Hobi */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Hobi
          </Text>

          <View style={styles.chipRow}>
            {PROFILE.hobi.map((h, index) => (
              <View key={index} style={styles.chip}>
                <Text style={styles.chipText}>
                  {h}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Counter */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Counter Kunjungan
          </Text>

          <Text style={styles.counter}>
            {kunjungan} kali ditekan
            {kunjungan >= 5 ? ' 🔥' : ''}
          </Text>

          <Pressable
            style={styles.btn}
            onPress={() => setKunjungan(kunjungan + 1)}
          >
            <Text style={styles.btnText}>
              Tambah Kunjungan
            </Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnSecondary]}
            onPress={() => setKunjungan(0)}
          >
            <Text style={styles.resetText}>
              Reset
            </Text>
          </Pressable>
        </View>

        {/* Bonus Counter */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Aktivitas Harian
          </Text>

          {/* Kopi */}
          <Text style={styles.counter}>
            ☕ {kopi}
            {kopi >= 5 ? ' 🔥' : ''}
          </Text>

          <Pressable
            style={styles.btn}
            onPress={() => setKopi(kopi + 1)}
          >
            <Text style={styles.btnText}>
              Tambah Kopi
            </Text>
          </Pressable>

          {/* Air */}
          <Text style={styles.counter}>
            💧 {air}
            {air >= 5 ? ' 🔥' : ''}
          </Text>

          <Pressable
            style={styles.btn}
            onPress={() => setAir(air + 1)}
          >
            <Text style={styles.btnText}>
              Tambah Air Minum
            </Text>
          </Pressable>
        </View>

        {/* Bagikan */}
        <Pressable
          style={styles.btn}
          onPress={shareProfile}
        >
          <Text style={styles.btnText}>
            Bagikan Profil
          </Text>
        </Pressable>

        {/* Info */}
        <Pressable
          style={styles.btnGhost}
          onPress={showInfo}
        >
          <Text style={styles.ghostText}>
            Tentang aplikasi ini
          </Text>
        </Pressable>

      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f8fafc' },
  scroll: { padding: 16, gap: 16 },
  header: { alignItems: 'center', marginTop: 8 },
  appTitle: { fontSize: 22, fontWeight: 'bold', color: '#0f172a' },
  subtitle: { color: '#64748b', marginTop: 4 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 2,
  },
  avatar: { width: 110, height: 110, borderRadius: 55, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: '700', color: '#0f172a' },
  role: { color: '#64748b', marginTop: 4 },
  motto: { marginTop: 10, fontStyle: 'italic', color: '#334155', textAlign: 'center' },
  section: { backgroundColor: '#fff', borderRadius: 16, padding: 16, gap: 10 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#0f172a' },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { backgroundColor: '#dbeafe', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999 },
  chipText: { color: '#1e40af', fontWeight: '600' },
  counter: { fontSize: 28, fontWeight: '800', color: '#2563eb' },
  btn: { backgroundColor: '#2563eb', padding: 12, borderRadius: 10, alignItems: 'center' },
  btnSecondary: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#2563eb' },
  btnText: { color: '#fff', fontWeight: '600' },
  btnGhost: { padding: 12, alignItems: 'center' },
});
