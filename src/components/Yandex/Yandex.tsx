import React, { useState, useEffect } from 'react';
import cx from 'classnames'
import axios from 'axios'

import YandexSelect from './YandexSelect/YandexSelect'
import InfoBlockDay from './InfoBlockDay/InfoBlockDay'
import yandex from './yandex.module.scss'


const Yandex: React.FC = () => {
    const [loadStatus, setLoadStatus] = useState<boolean>(false)
    const [pointLat, setPointLat] = useState<string | number>('52.2138')
    const [pointLon, setPointLon] = useState<string | number>('24.3564')
    const [dataWhether, setDataWhether] = useState<any>()
    const [objGeo, setObjGeo] = useState<any>()
    const [objFact, setObjFact] = useState<any>()
    const API_KEY = process.env.REACT_APP_API_KEY;

    const getWether = (lat: string | number, lon: string | number) => {
        setLoadStatus(false)
        const url = `/v2/forecast?lat=${lat}&lon=${lon}&[limit=2]`
        axios
            .get(url, {
                headers: {
                    'X-Yandex-API-Key': `${API_KEY}`,
                }
            })
            .then((res) => {
                console.log(res)
                const dataObj = res.data
                setDataWhether(dataObj)
                setObjGeo(dataObj.geo_object)
                setObjFact(dataObj.fact)
                setLoadStatus(true)
            })
            .catch((err) => {
                console.log(err)
            })

        // const data = await axios.get(url, {
        //         headers: {
        //             'X-Yandex-API-Key': `${API_KEY}`,
        //         }
        //     })
        //     console.log(data);

    }

    useEffect(() => {
        getWether(pointLat, pointLon)
    }, [])

    return (
        <div className={cx(
            yandex['yandex'],{

            }
        )}>
            <YandexSelect setPointLat={setPointLat} setPointLon={setPointLon} getWether={getWether} />
            <InfoBlockDay
                loadStatus={loadStatus}
                objGeo={objGeo}
                objFact={objFact}
                dataWhether={dataWhether}
            />


        </div>
    )
}
export default Yandex;
