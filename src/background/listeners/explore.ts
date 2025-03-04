import { chromeEvent } from '@common/event'
import {
  GET_ADDRESS_RISK_SCORE,
  GET_ADDRESS_LABELS,
  GET_ADDRESS_METHODS,
  GET_ADDRESS_FUND_FLOW,
  GET_NFT_INFO,
  GET_NFT_PRICE,
  GET_ADDRESS_FUNDER_RISK,
  GET_APPROVAL_RISK,
  GET_FORTA_ALERT,
  GET_PRIVATE_VARIABLES,
  QUERY_PRIVATE_VARIABLE,
  GET_TOKEN_MARKETPLACES,
  GET_GPT_TX_EXPLAIN,
  MARK_GPT_TX_EXPLAIN,
  GET_PROXY_CONTRACT_LOG,
  GET_IMPL_LABELS,
  GET_CONSERVATIVE_BLOCK
} from '@common/constants'
import commonApi from '@common/api'

export default function initExploreRequest() {
  chromeEvent.on(GET_ADDRESS_RISK_SCORE, async params => {
    return await commonApi.getAddressRiskScore(params)
  })

  chromeEvent.on(GET_ADDRESS_LABELS, async params => {
    return await commonApi.getAddressLabels(params)
  })

  chromeEvent.on(GET_ADDRESS_METHODS, async params => {
    return await commonApi.getAddressMethods(params)
  })

  chromeEvent.on(GET_ADDRESS_FUND_FLOW, async params => {
    return await commonApi.getAddressFundFlow(params)
  })

  chromeEvent.on(GET_NFT_INFO, async address => {
    return await commonApi.getNFTInfo(address)
  })

  chromeEvent.on(GET_NFT_PRICE, async address => {
    return await commonApi.getNFTPrice(address)
  })
  chromeEvent.on(GET_ADDRESS_FUNDER_RISK, async params => {
    return await commonApi.getAddressFunderRisk(params)
  })
  chromeEvent.on(GET_APPROVAL_RISK, async params => {
    return await commonApi.getApprovalRisk(params)
  })
  chromeEvent.on(GET_FORTA_ALERT, async params => {
    return await commonApi.getFortaAlert(params)
  })
  chromeEvent.on(GET_PRIVATE_VARIABLES, async params => {
    return await commonApi.getPrivateVariables(params)
  })
  chromeEvent.on(QUERY_PRIVATE_VARIABLE, async params => {
    return await commonApi.queryPrivateVariable(params)
  })
  chromeEvent.on(GET_TOKEN_MARKETPLACES, async params => {
    return await commonApi.getTokenMarketplaces(params)
  })
  chromeEvent.on(GET_GPT_TX_EXPLAIN, async params => {
    return await commonApi.getGptTxExplain(params)
  })
  chromeEvent.on(MARK_GPT_TX_EXPLAIN, async params => {
    return await commonApi.markGptTxExplain(params)
  })
  chromeEvent.on(GET_PROXY_CONTRACT_LOG, async params => {
    return await commonApi.getProxyContractLog(params)
  })
  chromeEvent.on(GET_IMPL_LABELS, async params => {
    return await commonApi.getImplLabels(params)
  })
  chromeEvent.on(GET_CONSERVATIVE_BLOCK, async params => {
    return await commonApi.getConservativeBlock(params)
  })
}
