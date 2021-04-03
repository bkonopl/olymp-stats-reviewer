import axios from 'axios'

import { config } from '../config'

import { IParticipantAPI, ParticipantAPI } from './participant'

type ICreateClient = IParticipantAPI

export const createClient = (): ICreateClient => {
  const client = axios.create({ baseURL: config.BASE_URL })
  return {
    ...ParticipantAPI(client),
  }
}
