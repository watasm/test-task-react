'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";
import { Menu, MenuProps } from "antd";

import { LeftMenuRoutesTop, LeftMenuRoutesBottom } from "@/constants/leftMenuRoutes";

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
  const pathname = usePathname()

  if (pathname === '/sign-in') {
    return null;
  }

  const onSelectMenuItemHandler = (item: any) => {
    console.log(item);
  }

  return (
    <div className="sticky top-0 left-0 min-w-[250px] max-w-[250px] h-screen px-2 py-2 flex flex-col justify-between border-r">
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