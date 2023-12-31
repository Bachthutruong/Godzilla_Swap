const lineaTokens = [
  {
    chainId: 59144,
    address: '0x3b2f62d42db19b30588648bf1c184865d4c3b1d6',
    symbol: 'KNC',
    name: 'Kyber Network Crystal v2',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/85a7985a-5597-4146-a1cf-07b9866044d9.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0x176211869ca2b568f2a7d4ee941e073a821ee1ff',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/acf6daf5-5e4f-4b0d-8038-41ea99b4b593.png',
    isWhitelisted: true,
    isStable: true,
  },
  {
    chainId: 59144,
    address: '0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4',
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    decimals: 8,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/e82833f8-6b21-44f1-869b-e7c1a1af2f93.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0xb448ec505c924944ca8b2c55ef05c299ee0781df',
    symbol: 'axlKNC',
    name: 'Axelar Wrapped KNC',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/62350353-4882-4887-90de-6b459fab5cf6.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0x23ee2343b892b1bb63503a4fabc840e0e2c6810f',
    symbol: 'AXL',
    name: 'Axelar',
    decimals: 6,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/94da0e0e-0c6a-4b61-af40-dbb19d6674c4.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0xf3b001d64c656e30a62fbaaca003b1336b4ce12a',
    symbol: 'MAI',
    name: 'Mai Stablecoin',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/33784adb-5f93-49ed-b834-768a73ec3d88.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0x88dfaaabaf06f3a41d2606ea98bc8eda109abebb',
    symbol: 'axlWMAI',
    name: 'Axelar Wrapped WMAI',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/56b4ab0e-f561-416a-ac76-e29d91ce0ed1.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0x7f5373ae26c3e8ffc4c77b7255df7ec1a9af52a6',
    symbol: 'axlUSDT',
    name: 'Axelar Wrapped USDT',
    decimals: 6,
    marketCap: 15824.774,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/a38192ff-8deb-4957-b407-da6ba650d756.png',
    isWhitelisted: true,
    isStable: false,
    domainSeparator: '0xc826431c46d9ffdf92967202b38c3b0a0b665169b64c4381d21f8e4de32f2c71',
  },
  {
    chainId: 59144,
    address: '0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5',
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/be4ccf88-81ca-4c5d-a87c-ba722b19a17b.png',
    isWhitelisted: true,
    isStable: true,
  },
  {
    chainId: 59144,
    address: '0xa219439258ca9da29e9cc4ce5596924745e12b93',
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/c18aaad3-016f-49e1-aff5-93968e4c001d.png',
    isWhitelisted: true,
    isStable: true,
  },
  {
    chainId: 59144,
    address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
    symbol: 'axlUSDC',
    name: 'Axelar Wrapped USDC',
    decimals: 6,
    marketCap: 125189.84477999998,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/490c5441-6af5-4951-a1db-54d39d4ff01f.png',
    isWhitelisted: true,
    isStable: true,
    domainSeparator: '0x2cf46165b05bdd11ae7e0e842c4ce0d6db93ea5c0eb93a1fdfb831a370681a0b',
  },
  {
    chainId: 59144,
    address: '0x0e5f2ee8c29e7ebc14e45da7ff90566d8c407db7',
    symbol: 'HAPI',
    name: 'HAPI',
    decimals: 18,
    marketCap: 20690.82009977257,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/2a5ae219-3a0f-4be6-951d-2d7b3043c2b4.png',
    isWhitelisted: true,
    isStable: false,
    domainSeparator: '0x5c3b327e5be62247ba0c64a29458a7e438804f01f6c70ab444d1652b485eb7cd',
  },
  {
    chainId: 59144,
    address: '0xf5c6825015280cdfd0b56903f9f8b5a2233476f5',
    symbol: 'BNB',
    name: 'Binance Coin',
    decimals: 18,
    marketCap: 157869.04636699997,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/723ef9bc-107b-4755-b7c2-87c0fa0b2b24.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    marketCap: 3053320.811552,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/e7f03c04-eeea-443e-a4d8-c7855db5277d.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0x66627f389ae46d881773b7131139b2411980e09e',
    symbol: 'deUSDC',
    name: 'DeBridge USD Coin',
    decimals: 6,
    marketCap: 53255.85113925467,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/44d6b1c5-c974-4476-8b0e-fbfde81c2a00.png',
    isWhitelisted: true,
    isStable: true,
    domainSeparator: '0x760bc757995bbaaa3abc07b104947e47a78c617803d8c4b49a04cabb2e84ad2a',
  },
  {
    chainId: 59144,
    address: '0x7d43aabc515c356145049227cee54b608342c0ad',
    symbol: 'BUSD',
    name: 'Binance USD',
    decimals: 18,
    marketCap: 2238154.8631100003,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/3597fcd8-a26a-4813-99e5-7ea1b6d685fe.png',
    isWhitelisted: true,
    isStable: true,
  },
  {
    chainId: 59144,
    address: '0x265b25e22bcd7f10a5bd6e6410f10537cc7567e8',
    symbol: 'MATIC',
    name: 'Matic Token',
    decimals: 18,
    marketCap: 193295.4884923,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/4a116471-cc31-4764-97f7-cdd957da4b9f.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0x5471ea8f739dd37e9b81be9c5c77754d8aa953e4',
    symbol: 'AVAX',
    name: 'Avalanche',
    decimals: 18,
    marketCap: 64390.449010000004,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/52459c77-6a4c-4655-9c9f-aafa3a48b9f1.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 59144,
    address: '0x6c6470898882b65e0275723d883a0d877aade43f',
    symbol: 'deUSDT',
    name: 'DeBridge Tether USD',
    decimals: 6,
    marketCap: 17536.347239503928,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/c22978cd-6d27-4440-bd53-883ab50c31c3.png',
    isWhitelisted: true,
    isStable: true,
    domainSeparator: '0x152f6e976e71fc881e3ae0630a312012aa17885edabf01a5dd6b4fbcb1f38091',
  },
]

export default lineaTokens
