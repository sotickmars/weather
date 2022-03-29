import React, { useState, useRef } from "react";
import cx from 'classnames'
import weekCard from './weekCard.module.scss'

type IPropsWeek = {
    objWeek: any
    changeStatusHandler: (indArr: number, arr: any) => void
}

const WeekCard: React.FC<IPropsWeek> = ({ objWeek, changeStatusHandler }) => {

    const getDateFormat = (dataType: any) => {

        const reverseDate = dataType.split('-').join(', ');
        const fullDate = new Date(reverseDate)
        const getDay = fullDate.getDate()
        const getMonth = fullDate.getMonth()
        const getNumberWeek = fullDate.getDay()

        const nameWeek = [
            'Вс',
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб'
        ];

        const dayParams = {
            day: getDay,
            week: nameWeek[getNumberWeek],
            month: getMonth,
        }
        return dayParams
    }

    const checkMonth = (obj: any) => {

        switch (obj.month + 1) {
            case 1:
                return 'Января';

            case 2:
                return 'Февраля';

            case 3:
                return 'Марта';

            case 4:
                return 'Апреля';

            case 5:
                return 'Мая';

            case 6:
                return 'Июня';

            case 7:
                return 'Июля';

            case 8:
                return 'Августа';

            case 9:
                return 'Сентября';

            case 10:
                return 'Октября';

            case 11:
                return 'Ноября';

            case 12:
                return 'Декабря';

            default:
                return "";
        }
    }

    return (
        <div className={cx(
            weekCard['week-card-section']
        )}>

            {
                objWeek.length && objWeek.map((item: any, indexObj: number) => {
                    if (item) {
                        return (
                            <div
                                key={item.date_ts}
                                onClick={() => changeStatusHandler(indexObj, objWeek)}
                                className={cx(
                                    weekCard['week-card'], {
                                    [weekCard['week-card-checked']]: item?.statusCheck
                                }
                                )}>
                                <div className={cx(
                                    weekCard['week-card__wrapper-day']
                                )}>
                                    <p className={cx(
                                        weekCard['week-card__wrapper-day_name-week']
                                    )}>
                                        {getDateFormat(item.date).week}
                                    </p>
                                    <p className={cx(
                                        weekCard['week-card__wrapper-day_day']
                                    )}>
                                        {getDateFormat(item.date).day} {checkMonth(getDateFormat(item.date))}
                                    </p>
                                </div>
                                <div className={cx(
                                    weekCard['week-card__wrapper-icon']
                                )}>
                                    <img
                                        className={cx(
                                            weekCard['week-card__wrapper-icon_icon']
                                        )}
                                        src={`https://yastatic.net/weather/i/icons/funky/dark/${item.parts.day.icon}.svg`} alt="" />
                                </div>
                                <div className={cx(
                                    weekCard['week-card__wrapper-temp']
                                )}>
                                    <p className={cx(
                                        weekCard['week-card__wrapper-temp_max']
                                    )}>
                                        {
                                            item.parts.day.temp_max > 0 ? ('+' + item.parts.day.temp_max) : item.parts.day.temp_max
                                        }°
                                    </p>
                                    <p className={cx(
                                        weekCard['week-card__wrapper-temp_min']
                                    )}>
                                        {
                                            item.parts.day.temp_min > 0 ? ('+' + item.parts.day.temp_min) : item.parts.day.temp_min
                                        }°
                                    </p>
                                </div>
                            </div>
                        )
                    }
                })
            }


        </div>
    )
}

export default WeekCard;