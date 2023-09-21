'use client'

import { SessionProvider } from 'next-auth/react'
import AntdRegistry from '@/lib/Antd/AntdRegistry'
import { ConfigProvider, theme } from 'antd'
import { FC, PropsWithChildren } from 'react'

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SessionProvider>

      <AntdRegistry>
        <ConfigProvider theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            fontFamily: 'inherit'
          }
        }}>
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </SessionProvider>
  )
}

export default Providers;