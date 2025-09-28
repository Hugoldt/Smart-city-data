import { View, Text, Pressable, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

function AppButton({
  title,
  onPress,
  variant = 'primary',
}: {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}) {
  const bg =
    variant === 'primary' ? '#2563eb' :
    variant === 'secondary' ? '#111827' :
    'transparent';

  const textColor = variant === 'ghost' ? '#111827' : '#fff';
  const borderColor = variant === 'ghost' ? '#e5e7eb' : 'transparent';

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#ffffff20' }}
      style={({ pressed }) => ({
        width: '80%',
        maxWidth: 320,
        alignSelf: 'center',
        paddingVertical: 14,
        borderRadius: 14,
        backgroundColor: pressed
          ? (variant === 'primary' ? '#1d4ed8' : variant === 'secondary' ? '#0b1220' : '#f3f4f6')
          : bg,
        borderWidth: 1,
        borderColor,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: variant === 'ghost' ? 0 : 0.12,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: variant === 'ghost' ? 0 : 3,
      })}
    >
      <Text style={{ color: textColor, fontWeight: '700', letterSpacing: 0.3 }}>{title}</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
const nav = useNavigation<any>(); 

  return (
    <View style={{ flex: 1, backgroundColor: '#f8fafc', padding: 24 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: '800', color: '#0f172a', textAlign: 'center' }}>
          HeartSafe
        </Text>

        <View style={{ marginTop: 28, gap: 12, width: '100%', alignItems: 'center' }}>
        <AppButton title="Voir la carte" onPress={() => nav.navigate('Map')} />
        <AppButton title="Signaler un problème" variant="secondary" onPress={() => nav.navigate('Report')} />
        <AppButton title="À propos" variant="ghost" onPress={() => nav.navigate('Help')} />
        </View>
      </View>

      <View style={{ marginTop: 16, alignItems: 'center', paddingBottom: Platform.OS === 'ios' ? 8 : 12 }}>
        <Text style={{ color: '#64748b', textAlign: 'center', marginBottom: 6 }}>
          Localisez les défibrillateurs à Paris et consultez leurs infos.
        </Text>
        <Text style={{ fontSize: 12, color: '#94a3b8' }}>
          Données publiques — Ville de Paris
        </Text>
      </View>
    </View>
  );
}
