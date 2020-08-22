import axios from 'axios'
const baseUrl = '/api/login'

const login = async credentials => {
  console.log('注册的入参', credentials)
  const response = await axios.post(baseUrl, credentials)
  console.log('注册接口的返回res', response)
  return response.data
}

export default { login }