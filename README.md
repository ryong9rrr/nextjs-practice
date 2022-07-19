# 유데미 NextJS 섹션 3. 페이지 & 파일 기반 라우팅

페이지 & 파일 기반 라우팅 알아보기

## `<Link>` 을 사용하는 3가지 방법

```jsx
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
```
