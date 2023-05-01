import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAeJh6MSVmpQA-cctpYHVaijsil2SCRTBY',
  authDomain: 'udemy-vue-firebase-sites-daf09.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-daf09',
  storageBucket: 'udemy-vue-firebase-sites-daf09.appspot.com',
  messagingSenderId: '466046711902',
  appId: '1:466046711902:web:d414ec63f208c865415ccf'
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
