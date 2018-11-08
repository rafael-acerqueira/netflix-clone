import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyDV05wfg80XAb3qP__QERN2PS5yrkHbS6A',
  authDomain: 'reactflix-d9f9a.firebaseapp.com',
  databaseURL: 'https://reactflix-d9f9a.firebaseio.com',
  projectId: 'reactflix-d9f9a',
  storageBucket: 'reactflix-d9f9a.appspot.com',
  messagingSenderId: '753611586102'
})

const db = firebase.database()

export { db }
