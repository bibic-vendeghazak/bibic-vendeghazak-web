import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyB4-Y2_RCdrOouJJxUJkBBXGyj4hNdjDs0",
  authDomain: "bibic-vendeghazak-api.firebaseapp.com",
  databaseURL: "https://bibic-vendeghazak-api.firebaseio.com",
  projectId: "bibic-vendeghazak-api",
  storageBucket: "bibic-vendeghazak-api.appspot.com",
  messagingSenderId: "586582307718"
})

export const DB = firebase.database()
export const ROOMS_REF = DB.ref("rooms")
export const RESERVATIONS_REF = DB.ref("reservations")
export const ROOM_SERVICES_REF = DB.ref("roomServices")
export const CERTS_REF = DB.ref("certificates")