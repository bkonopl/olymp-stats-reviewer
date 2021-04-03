import { PointMouseHandler, ResponsiveLine } from '@nivo/line'
import React from 'react'
import { useCatchModal } from 'src/providers'
import { IParticipant } from 'src/types'

import { chartSerializeOlympiadInfo } from './helpers'

interface Props {
  data: IParticipant['olympiads']
}

export const Chart: React.FC<Props> = ({ data }) => {
  const { showItems } = useCatchModal()

  const handlePointClick: PointMouseHandler = ({ index }) => {
    const olympiad = data[index]
    const items = [
      { key: 'Olympiad:', value: olympiad.name },
      { key: 'Place:', value: olympiad.place },
      { key: 'Result:', value: olympiad.degree },
      { key: 'Conditional Rate', value: String(olympiad.rate) },
    ]

    if (olympiad.date) items.push({ key: 'Date', value: olympiad.date })

    showItems(items)
  }

  return (
    <ResponsiveLine
      useMesh
      areaBaselineValue={50}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 0,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Conditional Rating',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      axisRight={null}
      axisTop={null}
      curve="cardinal"
      data={chartSerializeOlympiadInfo(data)}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      lineWidth={3}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      pointBorderColor={{ from: 'serieColor' }}
      pointBorderWidth={2}
      pointColor={{ from: 'color', modifiers: [] }}
      pointLabelYOffset={0}
      pointSize={10}
      theme={{ textColor: 'white' }}
      xScale={{ type: 'point' }}
      yFormat=" >-.2f"
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      onClick={handlePointClick}
    />
  )
}
