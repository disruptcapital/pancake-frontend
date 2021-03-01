import { MenuEntry } from '@disruptcapital/wifeswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchangelab.wifeswap.finance',
      },
      {
        label: 'Liquidity',
        href: 'http://exchangelab.wifeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://wifeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://wifeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://wifeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://wifeswap.info/accounts',
      },
    ],
  },
]

export default config
