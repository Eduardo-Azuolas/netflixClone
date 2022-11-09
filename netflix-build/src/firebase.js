import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBSqnyewzwYtihXaGIaP2tbQHTe-nPThRc",
  authDomain: "netflix-clone-a77af.firebaseapp.com",
  projectId: "netflix-clone-a77af",
  storageBucket: "netflix-clone-a77af.appspot.com",
  messagingSenderId: "1089654760167",
  appId: "1:1089654760167:web:ce6f690f147ca99c83b842"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db