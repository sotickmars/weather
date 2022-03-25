import React from 'react'
import cx from 'classnames'
import infoBlock from './infoBlock.module.scss'

const InfoBlock: React.FC = ({ children }) => {
    return (
        <div className={cx(
            infoBlock['info-block']
        )}>
            <div className={cx(
                infoBlock['info-block__inner']
            )}>
                {children}
            </div>
        </div>
    )
}
export default InfoBlock;