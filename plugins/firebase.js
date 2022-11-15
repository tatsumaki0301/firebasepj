import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDTkuL-BZKmLUS4FZyTheZeNnBDlKoVBTg",
      authDomain: "fir-pj-50299.firebaseapp.com",
      projectId: "fir-pj-50299",
      storageBucket: "fir-pj-50299.appspot.com",
      messagingSenderId: "61384878856",
      appId: "1:61384878856:web:f7198d7072c46117945abd",
      measurementId: "G-X8T7K60SL0"
    }
  )
}

export default firebase