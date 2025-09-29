import React from 'react';
import { View, Text } from 'react-native';

export default function HelpScreen() {
  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: '#f8fafc', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>À propos</Text>
      <Text style={{ marginTop: 8, color: '#475569', textAlign: 'center' }}>
        HeartSafe affiche les défibrillateurs disponibles à Paris.
      </Text>
    </View>
  );
}
