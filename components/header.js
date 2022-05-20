import Head from 'next/head'
import Link from 'next/link';
import {Navbar,Brand} from './styled'

export default function Header() {
    
  return (
    <>
      <Head>
        <title>NextJs Users</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <Link href="/">
            <Brand >NextJs Users</Brand>
        </Link>
    </Navbar >
   </>
  )
}
