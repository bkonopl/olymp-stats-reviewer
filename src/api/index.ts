import axios from 'axios'

import { config } from '../config'

import { ParticipantAPI } from './participant'

export const createClient = () => {
  const client = axios.create({ baseURL: config.BASE_URL })
  return {
    ...ParticipantAPI(client),
  }
}
