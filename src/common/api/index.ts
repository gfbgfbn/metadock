import request, { type BscResponse } from './request'
import type {
  AddressMethodsReq,
  RiskScore,
  PostAddressParams,
  AddressRiskScoreReq,
  AddressLabel,
  MethodLabel,
  FundFlowRes,
  NFTInfoRes,
  NFTPriceResponse,
  NFTRarityRankReq,
  NFTRarityRankRes,
  NFTRiskRes,
  NFTUserLabelsReq,
  NFTUserLabelsRes,
  AddressFunderRiskRes,
  ComprehensiveSearchReq,
  SearchResultItem,
  ApprovalsRiskReq,
  ApprovalRisk,
  FortaAlertReq,
  FortaAlertRes,
  PostAddressesParams,
  PrivateVariableArgument,
  QueryPrivateVariableReq,
  PrivateVariablesRes,
  PostPrivateVariablesParams,
  TokenMarketplacesRes,
  GptTxExplainRes,
  MarkGptTxExplainReq,
  ProxyContractLog,
  GptTxExplainReq
} from './types'

export default {
  getAddressRiskScore: (params: AddressRiskScoreReq) =>
    request
      .post('api/v1/address-risk-score', { json: params })
      .json<BscResponse<RiskScore[]>>(),
  getAddressLabels: (params: PostAddressesParams) =>
    request
      .post('api/v1/address-label', { json: params })
      .json<BscResponse<AddressLabel[]>>(),
  getAddressMethods: (params: AddressMethodsReq) =>
    request
      .post('api/v1/address-method', { json: params })
      .json<BscResponse<MethodLabel[]>>(),
  getAddressFundFlow: (params: PostAddressParams) =>
    request
      .post('api/v1/fund-flow', {
        json: params
      })
      .json<BscResponse<FundFlowRes>>(),
  getNFTInfo: (address: string) =>
    request
      .post('api/v1/nft-info', {
        json: { address }
      })
      .json<BscResponse<NFTInfoRes>>(),
  getNFTPrice: (address: string) =>
    request
      .post('api/v1/nft-floor-price', {
        json: { address }
      })
      .json<BscResponse<NFTPriceResponse>>(),
  getNFTRarityRank: (params: NFTRarityRankReq) =>
    request
      .post('api/v1/nft-batch-rarity-rank', {
        json: params
      })
      .json<BscResponse<NFTRarityRankRes>>(),
  getNFTRisk: (params: PostAddressParams) =>
    request
      .post('api/v1/nft-risk', { json: params })
      .json<BscResponse<NFTRiskRes>>(),
  getNFTUserLabels: (params: NFTUserLabelsReq) =>
    request
      .post('api/v1/nft-user-label', { json: params })
      .json<BscResponse<NFTUserLabelsRes>>(),
  getAddressFunderRisk: (params: PostAddressParams) =>
    request
      .post('api/v1/address-funder-risk', { json: params })
      .json<BscResponse<AddressFunderRiskRes>>(),
  getComprehensiveSearchResults: (params: ComprehensiveSearchReq) =>
    request
      .post('api/v1/comprehensive-search', { json: params })
      .json<BscResponse<SearchResultItem[]>>(),
  getApprovalRisk: (params: ApprovalsRiskReq) =>
    request
      .post('api/v1/approve-risk', { json: params })
      .json<BscResponse<ApprovalRisk[]>>(),
  getFortaAlert: (params: FortaAlertReq) =>
    request
      .post('api/v1/forta-alert', { json: params })
      .json<BscResponse<FortaAlertRes>>(),
  getPrivateVariables: (params: PostPrivateVariablesParams) =>
    request
      .post('api/v1/private-variable/list', { json: params })
      .json<BscResponse<PrivateVariablesRes>>(),
  queryPrivateVariable: (params: QueryPrivateVariableReq) =>
    request
      .post('api/v1/private-variable/query', { json: params })
      .json<BscResponse<PrivateVariableArgument>>(),
  getTokenMarketplaces: (params: PostAddressParams) =>
    request
      .post('api/v1/token-market/list', { json: params })
      .json<BscResponse<TokenMarketplacesRes>>(),
  getGptTxExplain: (params: GptTxExplainReq) =>
    request
      .post('api/v1/explain/tx', { json: params })
      .json<BscResponse<GptTxExplainRes>>(),
  markGptTxExplain: (params: MarkGptTxExplainReq) =>
    request
      .post('api/v1/gpt-explain/mark', { json: params })
      .json<BscResponse<GptTxExplainRes>>(),
  getProxyContractLog: (params: PostAddressParams) =>
    request
      .post('api/v1/contract/upgrades', { json: params })
      .json<BscResponse<ProxyContractLog[]>>(),
  getImplLabels: (params: PostAddressesParams) =>
    request
      .post('api/v1/address/impl-label', { json: params })
      .json<BscResponse<AddressLabel[]>>(),
  /** The supported blocks by evm.storage may experience delays, so the latest block cannot be obtained. */
  getConservativeBlock: (chain: string) =>
    request.get(`api/v1/${chain}/block`).json<BscResponse<AddressLabel[]>>()
}
