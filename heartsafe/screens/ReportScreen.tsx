import React, { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet, Platform, ToastAndroid, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native'

const TYPES = ["HS","INTROUVABLE","ACCES_FERME","AUTRE"] as const
type ReportType = typeof TYPES[number]

export default function ReportScreen() {
  const [type, setType] = useState<ReportType | null>(null)
  const [comment, setComment] = useState("")
  const nav = useNavigation<any>()
  const notify = (m: string) => Platform.OS === "android" ? ToastAndroid.show(m, ToastAndroid.SHORT) : Alert.alert(m)

  const onSend = () => {
    if (!type) { notify("Choisis un type"); return }
    if (comment.length > 200) { notify("Commentaire trop long"); return }
    notify("Merci !")
  }

  return (
    <View style={s.container}>
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
      
      <Text style={s.title}>Signalement</Text>
      <View style={s.row}>
        {TYPES.map(t => (
          <Pressable key={t} onPress={() => setType(t)} style={[s.chip, type===t && s.chipActive]}>
            <Text style={[s.chipText, type===t && s.chipTextActive]}>{t}</Text>
          </Pressable>
        ))}
      </View>
      <TextInput
        placeholder="Commentaire (optionnel)"
        value={comment}
        onChangeText={setComment}
        maxLength={200}
        multiline
        style={s.input}
      />
      <Pressable onPress={onSend} style={s.btn}>
        <Text style={s.btnText}>Envoyer</Text>
      </Pressable>
    </View>
  )
}

const s = StyleSheet.create({
  container:{flex:1,padding:20,backgroundColor:"#fff",gap:16,justifyContent:"center"},
  title:{fontSize:22,fontWeight:"700",textAlign:"center"},
  row:{flexDirection:"row",flexWrap:"wrap",gap:8,justifyContent:"center"},
  chip:{paddingVertical:10,paddingHorizontal:14,borderRadius:24,borderWidth:1,borderColor:"#d1d5db",backgroundColor:"#fff"},
  chipActive:{backgroundColor:"#2563eb",borderColor:"#2563eb"},
  chipText:{color:"#111827",fontWeight:"600"},
  chipTextActive:{color:"#fff"},
  input:{borderWidth:1,borderColor:"#e5e7eb",borderRadius:12,minHeight:110,padding:12,textAlignVertical:"top"},
  btn:{backgroundColor:"#2563eb",padding:16,borderRadius:12,alignItems:"center"},
  btnText:{color:"#fff",fontWeight:"700",fontSize:16}
})