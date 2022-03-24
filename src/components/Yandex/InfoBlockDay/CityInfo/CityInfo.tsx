import React from 'react';
import cx from 'classnames'
import { IPropsCityInfo } from '../../../../types/type'

import cityInfo from './cityInfo.module.scss'

const CityInfo: React.FC<IPropsCityInfo> = ({
    country, province, locality
}) => {


    return (
        <ul className={cx(
            cityInfo['city-info__wrapper-info_city']
        )}>
            <li><p>Страна:</p><p>{country}</p></li>
            <li><p>Область:</p><p>{province}</p></li>
            <li><p>Город:</p><p>{locality}</p></li>
        </ul>
    )
}
export default CityInfo;
