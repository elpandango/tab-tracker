import Api from '@/services/Api';

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'testingmail@gmail.com',
//   password: '123456'
// })
