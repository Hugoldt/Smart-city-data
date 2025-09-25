import AsyncStorage from "@react-native-async-storage/async-storage"

const KEY = "REPORTS_V1"

export type ReportType = "HS" | "INTROUVABLE" | "ACCES_FERME" | "AUTRE"

export type Report = {
  id: string
  dae_id: string
  lat: number
  lon: number
  type: ReportType
  comment?: string
  created_at: number
}

export async function addReport(r: Report) {
  const all = await listReports()
  all.unshift(r)
  await AsyncStorage.setItem(KEY, JSON.stringify(all))
}

export async function listReports(): Promise<Report[]> {
  const raw = await AsyncStorage.getItem(KEY)
  return raw ? JSON.parse(raw) : []
}

export function uid(p = "rep") {
  return `${p}_${Date.now()}_${Math.random().toString(36).slice(2,8)}`
}