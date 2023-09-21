'use client'

import { default as AntTable } from "antd/es/table";
import { ColumnsType } from "antd/es/table";

type DataType = {
  id: number;
  title: string;
  release: string
  price: number
}

const columns: ColumnsType<DataType> = [
  {
    title: '№',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <p className="">{text}</p>
  },
  {
    title: 'Release',
    dataIndex: 'release',
    key: 'release',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const SixMonthTable = () => {
  const data: DataType[] = [
    {
      id: 1,
      title: 'Title 1',
      release: '4/6',
      price: 124,
    },
    {
      id: 2,
      title: 'Title 2',
      release: '4/6',
      price: 124,
    },
    {
      id: 3,
      title: 'Title 4',
      release: '4/6',
      price: 124,
    },
    {
      id: 1,
      title: 'Title 1',
      release: '4/6',
      price: 124,
    },
    {
      id: 2,
      title: 'Title 2',
      release: '4/6',
      price: 124,
    },
    {
      id: 3,
      title: 'Title 4',
      release: '4/6',
      price: 124,
    },
  ]


  return (
    <div>
      <div className="pt-2 pb-3 flex flex-col items-center">
        <p>6 MONTH FORECAST</p>
      </div>
      <AntTable columns={columns} dataSource={data} />
    </div>
  )
}

export default SixMonthTable;