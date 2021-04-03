import { AxiosInstance } from 'axios'
import { IParticipant } from 'src/types'

interface IParticipantAPI {
  getParticipants: (search: string) => Promise<IParticipant[]>
}

const mockData: IParticipant[] = [
  {
    id: 1,
    name: 'Игорь Макеенко',
    olympiads: [
      {
        name: 'Республиканская олимпиада по информатике 2019',
        rate: 1,
        degree: 'Диплом третьей степени',
        place: '49 из 123',
      },
    ],
  },
  {
    id: 2,
    name: 'Игорь Макеенко',
    olympiads: [
      {
        name: 'Республиканская олимпиада по информатике 2019',
        rate: 1,
        degree: 'Диплом третьей степени',
        place: '49 из 123',
      },
    ],
  },
  {
    id: 3,
    name: 'Игорь Макеенко',
    olympiads: [
      {
        name: 'Республиканская олимпиада по информатике 2019',
        rate: 1,
        degree: 'Диплом третьей степени',
        place: '49 из 123',
      },
    ],
  },
  {
    id: 4,
    name: 'Игорь Макеенко',
    olympiads: [
      {
        name: 'Республиканская олимпиада по информатике 2019',
        rate: 1,
        degree: 'Диплом третьей степени',
        place: '49 из 123',
      },
    ],
  },
]

export const ParticipantAPI = (client: AxiosInstance): IParticipantAPI => {
  return {
    async getParticipants(search: string) {
      console.log(search)
      return new Promise<IParticipant[]>((resolve) => setTimeout(() => resolve(mockData), 200))
    },
  }
}
