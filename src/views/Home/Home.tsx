import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@disruptcapital/wifeswap-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import WifeStats from 'views/Home/components/WifeStats'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/lolly.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.xl} {
    background-image: url('/images/lolly.svg'), url('/images/lolly-left.svg');
    background-position: left center, right center;
    height: 125px;
    padding-top: 0;
    background-size: auto;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'WifeSwap')}
        </Heading>
        <Text>{TranslateString(578, 'Do you feel married to your bags? Come swap them here!')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <WifeStats />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
