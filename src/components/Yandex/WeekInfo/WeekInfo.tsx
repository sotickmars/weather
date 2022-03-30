import React, { useState } from "react";
import cx from 'classnames'
import sunRiseSvg from '../../../assets/svg/sunrise.svg'
import sunSetSvg from '../../../assets/svg/sunset.svg'
import weekInfo from './weekInfo.module.scss'

type IPropsWeekGraphic = {
    objWeekDay: any
    indexWeek: number
}

const WeekInfo: React.FC<IPropsWeekGraphic> = ({ objWeekDay, indexWeek }) => {

    const dayInWeek = objWeekDay[indexWeek]
    const dayParamsInWeek = dayInWeek.parts.day
    
    

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


    const getDateFormat = (dataType: any) => {
        const reverseDate = dataType.split('-').join(', ');
        const fullDate = new Date(reverseDate)
        const getNumberWeek = fullDate.getDay()

        const fullNameWeek = [
            'Воскресение',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ];

        const dayParams = {
            week: fullNameWeek[getNumberWeek],
        }

        return dayParams
    }

    return (
        <div className={cx(
            weekInfo['week-info']
        )}>
            <div className={cx(
                weekInfo['week-info__wrapper-info']
            )}>

                <div className={cx(
                    weekInfo['week-info__wrapper-info-main']
                )}>
                    <div className={cx(
                        weekInfo['week-info__wrapper-info-main_title']
                    )}>
                        <p className={cx(
                            weekInfo['week-info__wrapper-info-main_title-week']
                        )}>
                            {getDateFormat(dayInWeek.date).week}:
                            <span className={cx(
                                weekInfo['week-info__wrapper-info-main_title-cloud']
                            )}>
                                {checkStatusWeather(dayParamsInWeek.cloudness)}
                            </span>
                        </p>
                    </div>
                    <div className={cx(
                        weekInfo['week-info__wrapper-info-main_icon']
                    )}>
                        <img
                            className={cx(
                                weekInfo['week-info__wrapper-info-main_icon-img']
                            )}
                            src={`https://yastatic.net/weather/i/icons/funky/dark/${dayParamsInWeek.icon}.svg`} alt="" />
                        <p
                            className={cx(
                                weekInfo['week-info__wrapper-info-main_icon-max-temp']
                            )}
                        >
                            {dayParamsInWeek.temp_max > 0 ? ('+' + dayParamsInWeek.temp_max) : dayParamsInWeek.temp_max}°
                        </p>

                        <p
                            className={cx(
                                weekInfo['week-info__wrapper-info-main_icon-min-temp']
                            )}
                        >
                            {dayParamsInWeek.temp_min > 0 ? ('+' + dayParamsInWeek.temp_min) : dayParamsInWeek.temp_min}°
                        </p>
                    </div>
                    <div className={cx(
                        weekInfo['week-info__wrapper-info-main_type-weather']
                    )}>
                        {checkStrnghtPrecipitation(dayParamsInWeek.prec_type, dayParamsInWeek.prec_strength)}
                    </div>
                </div>

                <div className={cx(
                    weekInfo['week-info__wrapper-info-more']
                )}>
                    <div className={cx(
                        weekInfo['week-info__wrapper-info-more_sun-time']
                    )}>
                        <div className={cx(
                            weekInfo['week-info__wrapper-info-more_sun-time-sunrise']
                        )}>
                            <p>{dayInWeek.sunrise}</p>
                            <img src={sunRiseSvg} alt="" />
                        </div>
                        <div className={cx(
                            weekInfo['week-info__wrapper-info-more_sun-time-sunset']
                        )}>
                            <p>{dayInWeek.sunset}</p>
                            <img src={sunSetSvg} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            
            
        </div>
    )
}

export default WeekInfo