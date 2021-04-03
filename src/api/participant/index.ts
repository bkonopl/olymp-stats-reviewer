import { AxiosInstance } from 'axios'
import { IParticipant, IParticipantMeta } from 'src/types'

export interface IParticipantAPI {
  getParticipants: (search: string) => Promise<IParticipantMeta[]>
  getParticipantById: (id: number) => Promise<IParticipant>
}

const mockMeta: IParticipantMeta[] = [
  {
    id: 1,
    name: 'Игорь Макеенко',
  },
  {
    id: 2,
    name: 'Сергей Пискун',
  },
  {
    id: 3,
    name: 'Макс Ерш',
  },
  {
    id: 4,
    name: 'Алексей Борунов',
  },
]

const mockPart: IParticipant = {
  name: 'Игорь Макеенко',
  olympiads: [
    {
      name: 'BELOI 2019',
      rate: 1,
      degree: '3rd diploma',
      place: '49 из 123',
    },
    {
      name: 'BELOI 2020',
      rate: 5,
      degree: '2nd diploma',
      place: '49 из 123',
    },
    {
      name: 'BELOI 2021',
      rate: 20,
      degree: '1st diploma',
      place: '49 из 123',
    },
    {
      name: 'BELOI 2022',
      rate: 15,
      degree: '1st diploma',
      place: '49 из 123',
    },
    {
      name: 'BELOI 2023',
      rate: 4,
      degree: '1st diploma',
      place: '49 из 123',
    },
  ],
}

export const ParticipantAPI = (client: AxiosInstance): IParticipantAPI => {
  return {
    async getParticipants(search: string) {
      return new Promise<IParticipantMeta[]>((resolve) => setTimeout(() => resolve(mockMeta), 500))
    },
    async getParticipantById(id: number) {
      return new Promise<IParticipant>((resolve) => setTimeout(() => resolve(mockPart), 500))
    },
  }
}
