import React, { useState, useEffect } from 'react';
import cx from 'classnames'
import { IPropsPosition } from '../../../types/type'

import yandexSelect from './yandexSelect.module.scss'

const objCity = [
    {
        id: 1,
        city: 'Кобрин',
        lat: '52.2138',
        lon: '24.3564',
    },
    {
        id: 2,
        city: 'Сморгонь',
        lat: '54.2847',
        lon: '26.2344',
    },
    {
        id: 3,
        city: 'Батуми',
        lat: '41.6423',
        lon: '41.6339',
    },
    {
        id: 4,
        city: 'Новая Зеландия',
        lat: '-36.8485',
        lon: '174.763',
    },
]

const YandexSelect: React.FC<IPropsPosition> = ({ setPointLat, setPointLon, getWether }) => {

    const [selectValue, setSelectValue] = useState<string>('')
    const [statusSelect, setStatusSelect] = useState<boolean>(false)

    const handleSelectValue = (item: any) => {
        setSelectValue(item.city)
        setPointLat(item.lat)
        setPointLon(item.lon)
        getWether(item.lat, item.lon)
    }

    const openSelect = (value: boolean) => {
        setStatusSelect(value)
    }

    return (
        <div className={cx(
            yandexSelect['yandex-select'],
        )}>
            <div className={cx(
                yandexSelect['yandex-select__wrapper'],
            )}>
                <p className={cx(
                    yandexSelect['yandex-select__wrapper_title'],
                )}>Ввыберите город из списка</p>
                <div className={cx(
                    yandexSelect['yandex-select__wrapper-select'],
                )}>
                    <input
                        className={cx(
                            yandexSelect['yandex-select__wrapper-select_input']
                        )}
                        type="text" value={selectValue}
                        onClick={() => openSelect(true)}
                        onBlur={() => setStatusSelect(false)}
                        placeholder={'Список городов'}
                        readOnly />
                    {statusSelect && (
                        <ul
                            className={cx(
                                yandexSelect['yandex-select__wrapper-select_drop']
                            )}
                        >
                            {
                                objCity.map(items => {
                                    return (
                                        <li key={items.id} onMouseDown={() => handleSelectValue(items)}>{items.city}</li>
                                    )
                                })
                            }
                        </ul>
                    )}

                </div>
            </div>
        </div>
    )
}
export default YandexSelect;
