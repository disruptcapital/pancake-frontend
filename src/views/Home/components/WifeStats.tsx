import React from 'react'
import { Card, CardBody, Heading, Skeleton, Text } from '@disruptcapital/wifeswap-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledWifeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const WifeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0
  const data = useGetStats()
  const tvl = data ? data.total_value_locked_all.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledWifeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Wife Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total WIFE Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total WIFE Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New WIFE/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={25} />
        </Row>
        </CardBody>
        <CardBody>
          <Heading size="lg" mb="24px">
            {TranslateString(762, 'Total Value Locked (TVL)')}
          </Heading>
          {data ? (
            <>
              <Heading size="xl">{`$${tvl}`}</Heading>
              <Text color="textSubtle">{TranslateString(764, 'Across all Farms and Pools')}</Text>
            </>
          ) : (
            <>
              <Skeleton height={66} />
            </>
          )}
        </CardBody>
    </StyledWifeStats>
  )
}

export default WifeStats
