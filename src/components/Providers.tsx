'use client'

import React from 'react'
import { AzuroSDKProvider, ChainId } from '@azuro-org/sdk'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider, getDefaultWallets, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { polygon, gnosis } from 'viem/chains'

import { BetslipProvider } from '@/context/betslip'


const { wallets } = getDefaultWallets()

const chains = [
  polygon,
  gnosis,
] as const

const wagmiConfig = getDefaultConfig({
  appName: 'Azuro',
  appIcon: 'https://path-to-your-icon.com/icon.png',
  projectId: '4d4b85ffcf08d0ecf5338207ee18beec', // get your own project ID - https://cloud.walletconnect.com/sign-in
  wallets,
  chains,
})

const queryClient = new QueryClient()

type ProvidersProps = {
  children: React.ReactNode
  initialChainId?: string
  initialLiveState?: boolean
}

export function Providers(props: ProvidersProps) {
  const { children, initialChainId, initialLiveState } = props

  const chainId = initialChainId
    ? chains.find(chain => chain.id === +initialChainId) ? +initialChainId as ChainId : polygon.id
    : polygon.id

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <AzuroSDKProvider initialChainId={chainId} initialLiveState={initialLiveState}>
            <BetslipProvider>
              {children}
            </BetslipProvider>
          </AzuroSDKProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
