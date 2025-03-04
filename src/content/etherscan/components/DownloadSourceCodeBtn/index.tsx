import { type FC } from 'react'

import type { PostAddressParams } from '@common/api/types'
import { BASE_URL } from '@common/config/uri'
import { IconDownload } from '@common/components'

import Button from '../Button'

const DownloadSourceCodeBtn: FC<PostAddressParams> = ({ chain, address }) => {
  return (
    <Button
      className="me-2"
      href={
        `${BASE_URL}/api/v1/source-code/download/?` +
        new URLSearchParams({ chain, address })
      }
      type="secondary"
      icon={<IconDownload mr={4} color="var(--bs-btn-color)" />}
    >
      Download as Zip
    </Button>
  )
}

export default DownloadSourceCodeBtn
