/* global */
// @flow

import type { EdgeCurrencyInfo } from 'edge-core-js'
import type { EthereumSettings } from './ethTypes'

export const imageServerUrl = 'https://developer.airbitz.co/content'

const otherSettings:EthereumSettings = {
  etherscanApiServers: [
    'https://api.etherscan.io'
  ],
  blockcypherApiServers: [
    'https://api.blockcypher.com'
  ],
  superethServers: [
    'https://supereth1.edgesecure.co:8443'
  ],
  iosAllowedTokens: { 'REP': true, 'WINGS': true, 'HUR': true, 'IND': true }
}

const defaultSettings:any = {
  customFeeSettings: ['gasLimit', 'gasPrice'],
  otherSettings
}

export const currencyInfo: EdgeCurrencyInfo = {
  // Basic currency information:
  currencyCode: 'ETH',
  currencyName: 'Ethereum',
  pluginName: 'ethereum',
  walletTypes: [
    'wallet:ethereum'
  ],

  defaultSettings,

  addressExplorer: 'https://etherscan.io/address/%s',
  transactionExplorer: 'https://etherscan.io/tx/%s',

  denominations: [
    // An array of Objects of the possible denominations for this currency
    {
      name: 'ETH',
      multiplier: '1000000000000000000',
      symbol: 'Ξ'
    },
    {
      name: 'mETH',
      multiplier: '1000000000000000',
      symbol: 'mΞ'
    }
  ],
  symbolImage: `${imageServerUrl}/ethereum-logo-64.png`,
  symbolImageDarkMono: `${imageServerUrl}/ethereum-logo-grey-64.png`,
  metaTokens: [
    // Array of objects describing the supported metatokens
    {
      currencyCode: 'REP',
      currencyName: 'Augur',
      denominations: [
        {
          name: 'REP',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6',
      symbolImage: `${imageServerUrl}/augur-logo-64.png`
    },
    {
      currencyCode: 'WINGS',
      currencyName: 'Wings',
      denominations: [
        {
          name: 'WINGS',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0x667088b212ce3d06a1b553a7221E1fD19000d9aF',
      symbolImage: `${imageServerUrl}/wings-logo-color-64.png`
    },
    {
      currencyCode: 'IND',
      currencyName: 'Indorse',
      denominations: [
        {
          name: 'IND',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0xf8e386EDa857484f5a12e4B5DAa9984E06E73705',
      symbolImage: `${imageServerUrl}/ind-logo-64.png`
    },
    {
      currencyCode: 'HUR',
      currencyName: 'Hurify',
      denominations: [
        {
          name: 'HUR',
          multiplier: '1000000000000000000'
        }
      ],
      contractAddress: '0xCDB7eCFd3403Eef3882c65B761ef9B5054890a47',
      symbolImage: `${imageServerUrl}/hur-logo-color-64.png`
    }
  ]
}
