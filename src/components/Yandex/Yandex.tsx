import React, { useState, useEffect } from 'react';
import cx from 'classnames'
import axios from 'axios'

import YandexSelect from './YandexSelect/YandexSelect'
import yandex from './yandex.module.scss'


const Yandex: React.FC = () => {

    const [loadStatus, setLoadStatus] = useState<boolean>(false)

    const [nameCountry, setNameCountry] = useState<any>('Please country')
    const [nameLocality, setNameLocality] = useState<any>('Please locality')
    const [nameProvince, setNameProvince] = useState<any>('Please Load')
    const [iconWeather, setIconWeather] = useState<string>('')

    const [pointLat, setPointLat] = useState<string | number>('52.2138')
    const [pointLon, setPointLon] = useState<string | number>('24.3564')
    
    const [temp, setTemp] = useState<any>('Load temp')



    const API_KEY = process.env.REACT_APP_API_KEY;




    const getWether = (lat: string | number, lon: string | number) => {
        setLoadStatus(false)
        const url = `/v2/forecast?lat=${lat}&lon=${lon}`
        axios
            .get(url, {
                headers: {
                    'X-Yandex-API-Key': `${API_KEY}`,
                }
            })
            .then((res) => {
                console.log(res)
                const dataObj = res.data
                setNameCountry(dataObj.geo_object.country.name)
                setNameLocality(dataObj.geo_object.locality.name)
                setNameProvince(dataObj.geo_object.province.name)
                setIconWeather(dataObj.fact.icon)
                setTemp(dataObj.fact.temp)
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
            yandex['yandex'],
        )}>
            <YandexSelect setPointLat={setPointLat} setPointLon={setPointLon} getWether={getWether} />
            {loadStatus ?
                (<div className="">
                    <p>Страна: {nameCountry}</p>
                    <p>Область: {nameProvince}</p>
                    <p>Город: {nameLocality}</p>
                    <p>Температура: {temp}</p>
                    <img src={`https://yastatic.net/weather/i/icons/funky/dark/${iconWeather}.svg`} alt="" />
                </div>) :
                (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}
export default Yandex;
