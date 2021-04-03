import { Box, Flex, Spinner } from '@chakra-ui/react'
import { ResponsiveLine } from '@nivo/line'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { createClient } from 'src/api'
import { ModuleLayout } from 'src/layouts'
import { IParticipant } from 'src/types'

import { IProfileRouteParams } from './types'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    id: 'japan',
    color: 'hsl(322, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 40,
      },
      {
        x: 'helicopter',
        y: 240,
      },
      {
        x: 'boat',
        y: 51,
      },
      {
        x: 'train',
        y: 94,
      },
      {
        x: 'subway',
        y: 63,
      },
      {
        x: 'bus',
        y: 109,
      },
      {
        x: 'car',
        y: 50,
      },
      {
        x: 'moto',
        y: 159,
      },
      {
        x: 'bicycle',
        y: 58,
      },
      {
        x: 'horse',
        y: 103,
      },
      {
        x: 'skateboard',
        y: 91,
      },
      {
        x: 'others',
        y: 20,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(249, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 174,
      },
      {
        x: 'helicopter',
        y: 288,
      },
      {
        x: 'boat',
        y: 251,
      },
      {
        x: 'train',
        y: 61,
      },
      {
        x: 'subway',
        y: 232,
      },
      {
        x: 'bus',
        y: 282,
      },
      {
        x: 'car',
        y: 94,
      },
      {
        x: 'moto',
        y: 225,
      },
      {
        x: 'bicycle',
        y: 257,
      },
      {
        x: 'horse',
        y: 298,
      },
      {
        x: 'skateboard',
        y: 120,
      },
      {
        x: 'others',
        y: 117,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(307, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 148,
      },
      {
        x: 'helicopter',
        y: 35,
      },
      {
        x: 'boat',
        y: 208,
      },
      {
        x: 'train',
        y: 9,
      },
      {
        x: 'subway',
        y: 195,
      },
      {
        x: 'bus',
        y: 11,
      },
      {
        x: 'car',
        y: 278,
      },
      {
        x: 'moto',
        y: 93,
      },
      {
        x: 'bicycle',
        y: 9,
      },
      {
        x: 'horse',
        y: 206,
      },
      {
        x: 'skateboard',
        y: 188,
      },
      {
        x: 'others',
        y: 298,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(162, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 291,
      },
      {
        x: 'helicopter',
        y: 78,
      },
      {
        x: 'boat',
        y: 52,
      },
      {
        x: 'train',
        y: 134,
      },
      {
        x: 'subway',
        y: 103,
      },
      {
        x: 'bus',
        y: 292,
      },
      {
        x: 'car',
        y: 155,
      },
      {
        x: 'moto',
        y: 179,
      },
      {
        x: 'bicycle',
        y: 31,
      },
      {
        x: 'horse',
        y: 119,
      },
      {
        x: 'skateboard',
        y: 267,
      },
      {
        x: 'others',
        y: 220,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(36, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 155,
      },
      {
        x: 'helicopter',
        y: 1,
      },
      {
        x: 'boat',
        y: 232,
      },
      {
        x: 'train',
        y: 115,
      },
      {
        x: 'subway',
        y: 102,
      },
      {
        x: 'bus',
        y: 159,
      },
      {
        x: 'car',
        y: 220,
      },
      {
        x: 'moto',
        y: 245,
      },
      {
        x: 'bicycle',
        y: 132,
      },
      {
        x: 'horse',
        y: 123,
      },
      {
        x: 'skateboard',
        y: 244,
      },
      {
        x: 'others',
        y: 218,
      },
    ],
  },
]

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const MyResponsiveLine = ({ data /* see data tab */ }) => (
  <ResponsiveLine
    useMesh
    areaBaselineValue={50}
    axisBottom={{
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Date',
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Rating',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    axisRight={null}
    axisTop={null}
    curve="cardinal"
    data={data}
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
    theme={{
      textColor: 'white',
    }}
    xScale={{ type: 'point' }}
    yFormat=" >-.2f"
    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
  />
)

export const Profile: React.FC = () => {
  const { id } = useParams<IProfileRouteParams>()
  const [participant, setParticipant] = useState<IParticipant | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const client = createClient()
    void client.getParticipantById(+id).then((data) => {
      setParticipant(data)
      setLoading(false)
    })
  }, [setParticipant, setLoading, id])

  if (loading)
    return (
      <ModuleLayout>
        <Flex alignItems="center" justifyContent="center" mt="300px" width="100%">
          <Spinner height="100px" width="100px" />
        </Flex>
      </ModuleLayout>
    )

  if (!participant) return null

  return (
    <ModuleLayout>
      <Box>{participant.name}</Box>
      <Box height="500px" width="100%">
        <MyResponsiveLine data={data} />
      </Box>
    </ModuleLayout>
  )
}
