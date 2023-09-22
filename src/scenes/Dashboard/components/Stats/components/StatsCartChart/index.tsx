'use client'

import { FC } from "react";
import { Pie } from '@ant-design/plots';
import { Divider, Progress } from "antd";

type Props = {
  data: {
    percent: number
  }
  width?: number | string
  height?: number | string
}

const StatsCartChart: FC<Props> = ({ data, width, height }) => {
  const dataConfig = [
    {
      type: '1',
      value: data.percent,
    },
    {
      type: '2',
      value: 100 - data.percent,
    },
  ];

  const config = {
    appendPadding: 10,
    data: dataConfig,
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

  return (
    <div className="w-1/4 flex flex-col items-center gap-1">
      <Progress size={[90, 90]} type="dashboard" percent={data.percent} />

      <div className="flex items-center">
        <p>PG-13</p>
        <Divider className="!h-full" type="vertical" />
        <p>R</p>
      </div>
    </div>
  )

  // return <Pie style={{ width: width, height: height }} {...config} />;
}

export default StatsCartChart;
