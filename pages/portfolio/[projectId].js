import { useRouter } from 'next/router'
import React from 'react'

const PortfolioProjectPage = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  )
}

export default PortfolioProjectPage
