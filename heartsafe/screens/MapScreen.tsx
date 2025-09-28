import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  const [daeData, setDaeData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://data.data.gouv.fr/api/explore/v2.1/catalog/datasets/geodae-base-nationale-des-defibrillateurs/records?limit=50")
      .then(res => res.json())
      .then(data => {
        setDaeData(data.results || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur API DAE :", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.8566,
          longitude: 2.3522,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {daeData.map((point, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: point.geo_point_2d.lat,
              longitude: point.geo_point_2d.lon,
            }}
            title={point.nom || "DAE"}
            description={point.adresse || "Adresse non disponible"}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
