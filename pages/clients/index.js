import Link from 'next/link'
import React from 'react'

const ClientsPage = () => {
  const clients = [
    { id: 'max', name: 'Max' },
    { id: 'manu', name: 'Manu' },
  ]

  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        {/* 1번 방법
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
        */}
        {/* 2번 방법
          {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/clients/[id]',
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
          */}
        {/* 3번 방법: 데브코스 선협님 강의 */}
        {clients.map((client) => (
          <li key={client.id}>
            <Link href="/clients/[id]" as={`/clients/${client.id}`}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ClientsPage
