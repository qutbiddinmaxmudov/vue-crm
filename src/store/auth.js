import Firebase from "firebase/app";
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await Firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw e;
      }
    }
  }
};
