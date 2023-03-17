import Effect from '@/components/effect'
import LightModeBTN from '@/components/LightModeBTN'
import Theme from '@/components/Theme'
import WrapperRedux from '@/components/WrapperRedux'
import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Aidin Rezaei',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <WrapperRedux>
          <LightModeBTN />
          <Effect />
          <Theme>
            {children}
          </Theme>
          <Script src='/script.js' />
        </WrapperRedux>
      </body>
    </html>
  )
}
