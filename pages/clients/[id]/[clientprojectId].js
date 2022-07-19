import { useRouter } from 'next/router'
import React from 'react'

const SelectedClientProjectPage = () => {
  const router = useRouter()

  console.log(router.query)

  return (
    <div>
      <h1>SelectedClientProjectPage</h1>
    </div>
  )
}

export default SelectedClientProjectPage
