const PROTOCOL = 'https'
const DOMAIN = 'kubejen.com'
const PREFIX = 'api'

const __DEV__ = true

export const getBaseUrl = () => {
  if (__DEV__) {
    return 'https://172.19.0.4:8000'
  }

  return `${PROTOCOL}://${DOMAIN}/${PREFIX}/`
}

export const getSchemaUrl = () => {
  if (__DEV__) {
    return 'http://172.19.0.4:8001/schema/'
  }

  return `${PROTOCOL}://${DOMAIN}/${PREFIX}/schema`
}
