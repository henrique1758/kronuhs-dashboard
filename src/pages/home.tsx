import { Eye, Note, Users } from 'phosphor-react'
import { AnalyticsCard } from '../components/AnalyticsCard'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { AnalyticsBox, HomeContainer } from '../styles/pages/home'

export default function Home() {
  return (
    <DefaultLayout>
      <HomeContainer>
        <AnalyticsBox>
          <AnalyticsCard>
            <Eye size={32} />
            1.880 views
          </AnalyticsCard>

          <AnalyticsCard>
            <Users size={32} />
            550 usuários do blog
          </AnalyticsCard>

          <AnalyticsCard>
            <Note size={32} />
            31 publicações
          </AnalyticsCard>
        </AnalyticsBox>
      </HomeContainer>
    </DefaultLayout>
  )
}