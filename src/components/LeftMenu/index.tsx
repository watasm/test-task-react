'use client'

import { LeftMenuRoutesTop, LeftMenuRoutesBottom } from "@/constants/leftMenuRoutes";
import { Menu, MenuProps } from "antd";
import { SelectInfo } from "antd/es/calendar/generateCalendar";
import Link from "next/link";

type MenuItem = Required<MenuProps>['items'][number];

const itemsTop: MenuItem[] = LeftMenuRoutesTop.map(item => {

  return {
    key: item.id,
    icon: <item.icon />,
    label: (
      <Link href={item.path}>{item.label}</Link>
    ),
  } as MenuItem;
})

const itemsBottom: MenuItem[] = LeftMenuRoutesBottom.map(item => {

  return {
    key: item.id,
    icon: <item.icon />,
    label: item.label,
  } as MenuItem;
})

const LeftMenu = () => {

  const onSelectMenuItemHandler = (item: any) => {
    console.log(item);
  }

  return (
    <div className="min-w-[250px] max-w-[250px] h-full flex flex-col justify-between">
      <div>
        {/* <div className="w-full h-10 border border-red-500"></div> */}
        <Menu
          className="!border-none"
          defaultSelectedKeys={['1']}
          mode={"vertical"}
          theme={"light"}
          items={itemsTop}
          onSelect={onSelectMenuItemHandler}
        />

      </div>

      <Menu
        className="!border-none"
        mode={"vertical"}
        selectable={false}
        theme={"light"}
        items={itemsBottom} />
    </div>
  )
}

export default LeftMenu;