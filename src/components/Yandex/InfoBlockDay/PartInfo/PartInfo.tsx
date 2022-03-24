import React from 'react';
import cx from 'classnames'
import { IPropsPartInfo } from '../../../../types/type'

import partInfo from './partInfo.module.scss'

const PartInfo: React.FC<IPropsPartInfo> = ({
    img,
    statusWeather,
    unit
}) => {


    return (
        <div className={cx(
            partInfo['part-info__wrapper-more_drops']
        )}>
            <img src={img} alt="" />
            <p className={cx(
                partInfo['part-info__wrapper-more_drops-info']
            )}>
                {statusWeather}
                <span className={cx(
                    partInfo['part-info__wrapper-more_drops-info-unit']
                )}>{unit}</span>
            </p>
        </div>
    )
}
export default PartInfo;
