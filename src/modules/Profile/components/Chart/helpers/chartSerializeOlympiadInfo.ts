import { Serie } from '@nivo/line'
import { IParticipant } from 'src/types'

export const chartSerializeOlympiadInfo = (data: IParticipant['olympiads']): Serie[] => {
  const toXY = data.map(({ name, rate }) => {
    return {
      x: `${name}`,
      y: rate,
    }
  })
  return [
    {
      id: 'Olympiad Perfomance',
      color: 'hsl(324, 70%, 50%)',
      data: toXY,
    },
  ]
}
