import { AxiosInstance } from 'axios'
import { IParticipant } from 'src/types'

interface IParticipantAPI {
  getParticipants: () => Promise<IParticipant[]>
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
  console.log(client)
  return {
    async getParticipants() {
      return new Promise<IParticipant[]>((resolve) => setTimeout(() => resolve(mockData), 200))
    },
  }
}
