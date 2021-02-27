import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@disruptcapital/wifeswap-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  min-height: 376px;
`

const Placeholder = styled.div`
  height: 80px;
  width: 64px;
`

const LollipopBg = styled.div`
  background-image: url(/images/lollipop-bg.svg);
  background-repeat: no-repeat;
  background-position: top right;
  position: absolute;
  top: -240px;
  min-height: 240px;
  right: 15px;
  height: 100%;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    top: -300px;
    min-height: 300px;
  }
`

const Block = styled.div`
  position: relative;
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        {/* <CardImage src="/images/cake.svg" alt="wife logo" width={64} height={64} /> */}
        <Block>
          <Label>{TranslateString(544, 'WIFE to Harvest')}:</Label>
          <CakeHarvestBalance />
        </Block>
        <Block>
          <Label>{TranslateString(546, 'WIFE in Wallet')}:</Label>
          <CakeWalletBalance />
        </Block>
        <Placeholder />
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting WIFE')
                : TranslateString(532, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <Block>
              <LollipopBg />
              <UnlockButton fullWidth />
            </Block>
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
