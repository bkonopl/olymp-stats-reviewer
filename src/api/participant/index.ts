import { AxiosInstance } from 'axios'
import { IParticipant, IParticipantMeta } from 'src/types'

interface IParticipantAPI {
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
      name: 'Республиканская олимпиада по информатике 2019',
      rate: 1,
      degree: 'Диплом третьей степени',
      place: '49 из 123',
    },
  ],
}

export const ParticipantAPI = (client: AxiosInstance): IParticipantAPI => {
  return {
    async getParticipants(search: string) {
      console.log(search)
      return new Promise<IParticipantMeta[]>((resolve) => setTimeout(() => resolve(mockMeta), 500))
    },
    async getParticipantById(id: number) {
      console.log(id)
      return new Promise<IParticipant>((resolve) => setTimeout(() => resolve(mockPart), 500))
    },
  }
}
