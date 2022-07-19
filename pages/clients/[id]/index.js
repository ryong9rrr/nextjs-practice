import { useRouter } from 'next/router'
import React from 'react'

const ClientProjectsPage = () => {
  const router = useRouter()

  console.log(router)

  // Link 태그를 사용하지 않고 네비게이팅
  const loadProjectHandler = () => {
    // replace를 사용하여 이전 url을 대체해서 라우팅 하거나
    //router.push(`/clients/${router.query.id}/projecta`)

    // 객체 형태로 사용할 수도 있다.
    router.push({
      pathname: '/clients/[id]/[clientProjectId]',
      query: { id: `${router.query.id}`, clientProjectId: 'projecta' },
    })
  }

  return (
    <div>
      <h1>{router.query.id}의 프로젝트</h1>
      <button onClick={loadProjectHandler}>이 버튼을 누르면 프로젝트 페이지로 이동해요.</button>
    </div>
  )
}

export default ClientProjectsPage
