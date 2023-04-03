import React from 'react'

import Layout from './MasonaryLayout'

const Main = () => {
  const imgs = [
    "https://source.unsplash.com/random/?nature&1",
    "https://source.unsplash.com/random/?wild&2",
    "https://source.unsplash.com/random/?wild&3",
    "https://source.unsplash.com/random/?wild&4",
    "https://source.unsplash.com/random/?wild&5",
    "https://source.unsplash.com/random/?wild&6",
    "https://source.unsplash.com/random/?wild&7",
  ]
  return (
    <main>
      Main
      <Layout imgs={imgs}></Layout>
    </main>
  )
}

export default Main
