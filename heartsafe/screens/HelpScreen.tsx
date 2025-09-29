import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HelpScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: '#f8fafc' }}>
      <Pressable 
        onPress={() => nav.goBack()}
        style={{ 
          backgroundColor: '#e5e7eb', 
          padding: 12, 
          borderRadius: 8, 
          alignSelf: 'flex-start',
          marginBottom: 20 
        }}
      >
        <Text style={{ color: '#374151', fontWeight: '600' }}>← Retour</Text>
      </Pressable>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: '800', color: '#0f172a', textAlign: 'center', marginBottom: 20 }}>
          À propos
        </Text>
        
        <Text style={{ fontSize: 16, color: '#475569', textAlign: 'center', marginBottom: 20, lineHeight: 24 }}>
          HeartSafe affiche les défibrillateurs disponibles à Paris.
        </Text>
        
        <Text style={{ fontSize: 14, color: '#64748b', textAlign: 'center', marginBottom: 30 }}>
          En cas d'urgence, appelez le 112
        </Text>
        
        <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 12, width: '100%' }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#1f2937', marginBottom: 12 }}>
            Que faire en cas d'arrêt cardiaque ?
          </Text>
          
          <Text style={{ fontSize: 14, color: '#4b5563', marginBottom: 8 }}>
            1. Appelez le 112
          </Text>
          <Text style={{ fontSize: 14, color: '#4b5563', marginBottom: 8 }}>
            2. Commencez le massage cardiaque
          </Text>
          <Text style={{ fontSize: 14, color: '#4b5563', marginBottom: 8 }}>
            3. Utilisez le défibrillateur si disponible
          </Text>
          <Text style={{ fontSize: 14, color: '#4b5563' }}>
            4. Suivez les instructions de l'appareil
          </Text>
        </View>
      </View>
    </View>
  );
}
