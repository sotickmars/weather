import React, { useState, useEffect, useContext } from 'react';
import cx from 'classnames'
import axios from 'axios'

import YandexSelect from './YandexSelect/YandexSelect'
import InfoBlockDay from './InfoBlockDay/InfoBlockDay'
import InfoBlock from './InfoBlock/InfoBlock'
import WeekCard from './WeekCard/WeekCard'
import WeekInfo from './WeekInfo/WeekInfo'
import WeekGraphic from './WeekGraphic/WeekGraphic';
import yandex from './yandex.module.scss'


const Yandex: React.FC = () => {


    const [loadStatus, setLoadStatus] = useState<boolean>(false)
    const [pointLat, setPointLat] = useState<string | number>('52.2138')
    const [pointLon, setPointLon] = useState<string | number>('24.3564')
    const [dataWhether, setDataWhether] = useState<any>()
    const [objGeo, setObjGeo] = useState<any>()
    const [objFact, setObjFact] = useState<any>()
    const [objWeek, setObjWeek] = useState<any>()
    const [graphicWeek, setGraphicWeek] = useState<any>({
        indWeek: null,
        statusWeek: false
    })

    const API_KEY = process.env.REACT_APP_API_KEY;

    const changeStatusHandler = (indArr: number, arr: any) => {
        const newArr = arr.map((el: any, indEl: number) => {
            if (indEl === indArr) {
                el.statusCheck = !el.statusCheck
                if (el.statusCheck) {
                    setGraphicWeek({
                        indWeek: indEl,
                        statusWeek: true
                    })
                } else {
                    setGraphicWeek({
                        indWeek: null,
                        statusWeek: false
                    })
                }
            }
            else {
                el.statusCheck = false
            }
            return el
        })
        setObjWeek(newArr)

    }

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
                const dataForecastsWithStatus = dataObj.forecasts.map((item: any) => {
                    return { ...item, statusCheck: false }
                })
                setDataWhether(dataObj)
                setObjGeo(dataObj.geo_object)
                setObjFact(dataObj.fact)
                setObjWeek(dataForecastsWithStatus)
                setLoadStatus(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    useEffect(() => {
        getWether(pointLat, pointLon)
    }, [])


    return (
        <div className={cx(
            yandex['yandex'], {

        }
        )}>
            <YandexSelect setPointLat={setPointLat} setPointLon={setPointLon} getWether={getWether} setGraphicWeek={setGraphicWeek} />
            <InfoBlockDay
                loadStatus={loadStatus}
                objGeo={objGeo}
                objFact={objFact}
                dataWhether={dataWhether}
            />
            <InfoBlock>

                {
                    loadStatus ? (
                        <>
                            <WeekCard
                                objWeek={objWeek}
                                changeStatusHandler={changeStatusHandler}
                            />
                            {
                                graphicWeek.statusWeek &&
                                <>
                                    <WeekInfo
                                        indexWeek={graphicWeek.indWeek}
                                        objWeekDay={objWeek}
                                    />
                                    <WeekGraphic 
                                        objWeek={objWeek[graphicWeek.indWeek]}
                                    />
                                </>
                            }
                        </>

                    ) : (
                        <p>
                            Loading...
                        </p>
                    )
                }
            </InfoBlock>

        </div>
    )
}
export default Yandex;
