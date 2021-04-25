export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  // Inject to context as $api
  inject('api', api)
}
