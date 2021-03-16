import { useRouter } from 'next/router'

const ContributionPage = () => {
  const router = useRouter()
  const { id } = router.query
  return <div>{id}</div>
}

export default ContributionPage
