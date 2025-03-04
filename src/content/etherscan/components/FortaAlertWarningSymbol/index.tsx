import { useEffect, useRef, useMemo, type FC, useState } from 'react'

import styles from './index.module.less'
import { TokenSymbol } from '../../components'

interface Props {
  alertUrl: string
  overlayOffsetX?: number
}

const FortaAlertWarningSymbol: FC<Props> = ({ alertUrl }) => {
  const [offsetX, setOffsetX] = useState(-10)
  const ref = useRef<HTMLDivElement>(null)

  const overlayStyle = useMemo(() => {
    return {
      transform: `translateX(${offsetX}px) translateY(-100%)`,
      '--overlay-offset-x': `${Math.abs(offsetX)}px`
    }
  }, [offsetX])

  useEffect(() => {
    setOffsetX(
      (ref.current?.getBoundingClientRect()?.left ?? 0) < 60 ? -10 : -65
    )
  }, [ref])

  return (
    <div ref={ref} className={styles.tooltip}>
      <span className={styles.reference}>
        <i className="fas fa-exclamation-triangle text-warning me-1" />
      </span>
      <div className={styles.overlay} style={overlayStyle}>
        <div className={styles.overlayInner}>
          <TokenSymbol style={{ marginRight: '6px' }} />
          <span>Forta Alert: This is a suspicious exploit transaction</span>
          <a className="ms-2" href={alertUrl} target="_blank" rel="noreferrer">
            Detail
          </a>
        </div>
      </div>
    </div>
  )
}

export default FortaAlertWarningSymbol
