import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const apiKey  = 'AIzaSyCP6rT_QdW9hn9H2offJ3GRkw8orjyGAA8';

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref({
    token: '',
    email: '',
    userId: '',
    refreshToken: '',
    expiresIn: ''
  })

  const error = ref('')

  const signup = async (payload) => {
    try {
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        ...payload,
        returnSecureToken: true
      });
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn
      }
      console.log(response.data)
    } catch (err){
      switch (err.response.data.error.message) {
        case 'EMAIL_EXISTS':
          error.value = 'Email exists (текст ошибки)'
              break;
        case 'OPERATION_NOT_ALLOWED':
          error.value = 'Operation not allowed (текс ошибки 2'
          break;
        default:
          error.value = 'Error'
          break;
      }
    }
  }
  return { signup, userInfo, error }
})
