import React, { useState, useEffect } from 'react';
import cx from 'classnames'
import { IPropsInfoBlockDay } from '../../../types/type'
import DropsSvg from '../../../assets/svg/drops.svg'
import BarometrSvg from '../../../assets/svg/barometer.svg'
import WindSvg from '../../../assets/svg/wind.svg'
import WindGustSvg from '../../../assets/svg/wind-gust.svg'
import WindDirSvg from '../../../assets/svg/wind-dir.svg'
import WaterTempSvg from '../../../assets/svg/temp-water.svg'

import infoBlockDay from './infoBlockDay.module.scss'
import PartInfo from './PartInfo/PartInfo'
import CityInfo from './CityInfo/CityInfo'
import Graphic from './Graphic/Graphic'

const InfoBlockDay: React.FC<IPropsInfoBlockDay> = ({
    loadStatus,
    dataWhether,
    objGeo,
    objFact
}) => {

    const checkStatusWind = (key: string) => {

        switch (key) {
            case "nw":
                return 'северо-западное';
            case "n":
                return 'северное'

            case "ne":
                return 'северо-восточное';

            case "e":
                return 'восточное';

            case "se":
                return 'юго-восточное';

            case "s":
                return 'южное';

            case "sw":
                return 'юго-западное';

            case "w":
                return 'западное';

            case "с":
                return 'штиль';

            default:
                return '';
        }
    }

    const checkStatusWeather = (key: number) => {

        switch (key) {
            case 0:
                return 'ясно';
            case 0.25:
                return 'малооблачно'

            case 0.5:
                return 'облачно с прояснениями';

            case 0.75:
                return 'облачно с редкими прояснениями';

            case 1:
                return 'пасмурно';

            default:
                return '';
        }
    }

    const checkTypePrecipitation = (key: number) => {

        switch (key) {
            case 0:
                return 'без осадков';
            case 1:
                return 'дождь'

            case 2:
                return 'дождь со снегом';

            case 3:
                return 'снег';

            case 4:
                return 'град';

            default:
                return '';
        }
    }

    const checkStrnghtPrecipitation = (statusWheather: number, key: number) => {
        const chekStatus = checkTypePrecipitation(statusWheather);

        switch (key) {
            case 0:
                return 'без осадков';
            case 0.25:
                return `слабый ${chekStatus}`;

            case 0.5:
                return `${chekStatus}`;

            case 0.75:
                return `сильный ${chekStatus}`;

            case 1:
                return `очень сильный ${chekStatus}`;

            default:
                return '';
        }
    }

    return (
        <div className={cx(
            infoBlockDay['info-block'],
        )}>
            {loadStatus?(
                <>
                    <div className={cx(
                        infoBlockDay['info-block__wrapper-info']
                    )}>
                        <p
                            className={cx(
                                infoBlockDay['info-block__wrapper-info_cloudness']
                            )}
                        ><b>СЕЙЧАС:</b> {checkStatusWeather(objFact.cloudness)}
                        </p>
                        <div className={cx(
                            infoBlockDay['info-block__wrapper-info_temp']
                        )}>
                            <img src={`https://yastatic.net/weather/i/icons/funky/dark/${objFact.icon}.svg`} alt="" />
                            <p>
                                {objFact.temp >= 0 ? '+' + objFact.temp : objFact.temp}
                            </p>
                            <span
                                className={cx(
                                    infoBlockDay['info-block__wrapper-info_temp-precipitation']
                                )}
                            >{checkStrnghtPrecipitation(objFact.prec_type, objFact.prec_strength)}</span>
                        </div>
                        <CityInfo
                            country={objGeo.country.name}
                            province={objGeo.province.name}
                            locality={objGeo.locality.name}
                        />
                    </div>

                    <div className={cx(
                        infoBlockDay['info-block__wrapper-info']
                    )}>
                        <PartInfo img={DropsSvg} statusWeather={objFact.humidity} unit={'% влажность'} />
                        {objFact.temp_water && 
                            <PartInfo img={WaterTempSvg} statusWeather={objFact.temp_water} unit={'°С воды'} />}
                        <PartInfo img={BarometrSvg} statusWeather={objFact.pressure_mm} unit={'мм рт. ст.'} />
                        <PartInfo img={WindSvg} statusWeather={objFact.wind_speed} unit={'м.с.'} />
                        <PartInfo img={WindGustSvg} statusWeather={objFact.wind_gust} unit={'м.с. порывы ветра'} />
                        <PartInfo img={WindDirSvg} statusWeather={checkStatusWind(objFact.wind_dir)} unit={'направление'} />
                    </div>
                    <Graphic dataWhether={dataWhether}/>
                </>
            ):(
                    <div className={cx(
                        infoBlockDay['info-block_wrapper-load'],
                    )}>
                        <p>Loading...</p>
                    </div>
            )}
            


           


        </div>
    )
}
export default InfoBlockDay;
