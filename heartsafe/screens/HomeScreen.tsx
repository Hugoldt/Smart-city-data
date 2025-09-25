import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>Bienvenue sur HeartSafe 💚</Text>
      <Text style={{ textAlign: 'center', opacity: 0.7, marginHorizontal: 20 }}>
        Cette application vous permet de localiser les défibrillateurs autour de vous et de consulter leurs informations.
      </Text>

      <Button title="Voir la carte" onPress={() => nav.navigate('Map')} />
      <Button title="Signaler un problème" onPress={() => nav.navigate('Report')} />
      <Button title="À propos" onPress={() => nav.navigate('Help')} />
    </View>
  );
}
