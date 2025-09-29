import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Pressable, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

type Point = { id: string; lat: number; lon: number; title?: string; address?: string };

export default function MapScreen() {
  const [points, setPoints] = useState<Point[]>([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigation<any>();

  useEffect(() => {
    (async () => {
      try {
        const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=defibrillateurs&rows=300';
        const res = await fetch(url);
        const json = await res.json();

        const items: Point[] = (json.records || [])
          .map((rec: any) => {
            const f = rec.fields || {};
            const gp = f.geo_point_2d;
            const lat = Array.isArray(gp) ? Number(gp[0]) : Number(gp?.lat);
            const lon = Array.isArray(gp) ? Number(gp[1]) : Number(gp?.lon);
            if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
            return {
              id: String(rec.recordid ?? Math.random()),
              lat,
              lon,
              title: f.nom_etabl || 'DAE',
              address: f.adr_post || '',
            };
          })
          .filter(Boolean);

        setPoints(items);
      } catch {
        setPoints([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Pressable 
        onPress={() => nav.goBack()}
        style={{ 
          position: 'absolute',
          top: 50,
          left: 20,
          zIndex: 1,
          backgroundColor: '#e5e7eb', 
          padding: 12, 
          borderRadius: 8 
        }}
      >
        <Text style={{ color: '#374151', fontWeight: '600' }}>← Retour</Text>
      </Pressable>
      
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 48.8566,
          longitude: 2.3522,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        }}
      >
        {points.map(p => (
          <Marker
            key={p.id}
            coordinate={{ latitude: p.lat, longitude: p.lon }}
            title={p.title}
            description={p.address}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
