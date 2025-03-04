import { debounce } from 'lodash-es'

import '@common/styles/inject.common'
import { store, type OptWebsite } from '@src/store'
import { isAllowed, getChainSimpleName } from '@common/utils'

import {
  genEnhancedLabels,
  genMainAddressLabel,
  genCopyAddressBtn
} from './feat-scripts'

const runScript = debounce(async () => {
  /** get user options */
  const { enhancedLabels, supportWebList, showCopyIcon } = await store.get(
    'options'
  )

  /** check whether the script is allowed to run on the current page  */
  const allowed = isAllowed(supportWebList as OptWebsite[])

  /** get the necessary parameters required by the extension */
  const chain: string | undefined = getChainSimpleName()

  if (!allowed || !chain) return

  /** enhanced labels */
  if (enhancedLabels) {
    genEnhancedLabels(chain)
    genMainAddressLabel(chain)
  }

  /** Show copy icon for addresses */
  if (showCopyIcon) genCopyAddressBtn()
}, 300)

export default runScript
