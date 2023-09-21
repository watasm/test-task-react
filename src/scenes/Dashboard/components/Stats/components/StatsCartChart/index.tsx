'use client'

import { FC } from "react";
import { Pie } from '@ant-design/plots';

type Props = {
  width?: number | string
  height?: number | string
}

const StatsCartChart: FC<Props> = ({ width, height }) => {
  const data = [
    {
      type: '1',
      value: 27,
    },
    {
      type: '2',
      value: 25,
    },
    {
      type: '3',
      value: 18,
    },
    {
      type: '4',
      value: 15,
    },
    {
      type: '5',
      value: 10,
    },
    {
      type: '6',
      value: 5,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 12,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
      },
    },
  };

  return <Pie style={{ width: width, height: height }} {...config} />;
}

export default StatsCartChart;
