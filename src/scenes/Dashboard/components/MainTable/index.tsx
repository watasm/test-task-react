'use client'

import { default as AntTable } from "antd/es/table";
import { ColumnsType } from "antd/es/table";

type DataType = {
  key: string;
  title: string;
  mpa: string;
  release: string;
  open: string;
  bor: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'MPA',
    dataIndex: 'mpa',
    key: 'mpa',
    render: (text) => <p className="w-fit px-1 rounded-md bg-blue-300">{text}</p>
  },
  {
    title: 'Release',
    dataIndex: 'release',
    key: 'release',
  },
  {
    title: 'Open',
    dataIndex: 'open',
    key: 'open',
  },
  {
    title: 'BOR',
    dataIndex: 'bor',
    key: 'bor',
  },
  // {
  //   title: 'Tags',
  //   key: 'tags',
  //   dataIndex: 'tags',
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
];

const MainTable = () => {
  const data: DataType[] = [
    {
      key: '1',
      title: 'Title 1',
      mpa: 'PG',
      release: '10/4',
      open: '12$',
      bor: '124$',
    },
    {
      key: '2',
      title: 'Title 2',
      mpa: 'PG',
      release: '10/4',
      open: '12$',
      bor: '124$',
    },
    {
      key: '3',
      title: 'Title 4',
      mpa: 'PG',
      release: '10/4',
      open: '12$',
      bor: '124$',
    }
  ]


  return (
    <div>
      <AntTable columns={columns} dataSource={data} />
    </div>
  )
}

export default MainTable;