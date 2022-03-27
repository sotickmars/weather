import React, { useState, useRef } from "react";
import cx from 'classnames'
import weekCard from './weekCard.module.scss'

type IPropsWeek = {
    items: any
    index: number
    checkWeekDayIndex:any
    setCheckWeekDayIndex: (value: any) => void
    // setCheckStatusWeekDay: (value: any) => void
}

const WeekCard: React.FC<IPropsWeek> = ({ items, checkWeekDayIndex, setCheckWeekDayIndex, index }) => {
    const [cardStatus, setCardStatus] = useState<boolean>(false)
    // const [cardStatusIndex, setCardStatusIndex] = useState<number>(index)
    const [maxTemp, setMaxTemp] = useState<number>(items.parts.day.temp_max)
    const [minTemp, setMinTemp] = useState<number>(items.parts.day.temp_min)



    const openWeekDay = () => {     
        setCheckWeekDayIndex(index)
    }

    const clickElement = (e: any) => {
        setCardStatus((prev) => !prev)
        openWeekDay()
    }

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
        <div
            onClick={(e) => { clickElement(e) }}
            className={cx(
                weekCard['week-card'],
                {
                    [weekCard['week-card-checked']]: cardStatus ,
                }
            )}>
            <div className={cx(
                weekCard['week-card__wrapper-day']
            )}>
                <p className={cx(
                    weekCard['week-card__wrapper-day_name-week']
                )}>
                    {getDateFormat(items.date).week}
                </p>
                <p className={cx(
                    weekCard['week-card__wrapper-day_day']
                )}>
                    {getDateFormat(items.date).day} {checkMonth(getDateFormat(items.date))}
                </p>
            </div>
            <div className={cx(
                weekCard['week-card__wrapper-icon']
            )}>
                <img
                    className={cx(
                        weekCard['week-card__wrapper-icon_icon']
                    )}
                    src={`https://yastatic.net/weather/i/icons/funky/dark/${items.parts.day.icon}.svg`} alt="" />
            </div>
            <div className={cx(
                weekCard['week-card__wrapper-temp']
            )}>
                <p className={cx(
                    weekCard['week-card__wrapper-temp_max']
                )}>
                    {
                        maxTemp > 0 ? ('+' + maxTemp) : maxTemp
                    }°
                </p>
                <p className={cx(
                    weekCard['week-card__wrapper-temp_min']
                )}>
                    {
                        minTemp > 0 ? ('+' + minTemp) : minTemp
                    }°
                </p>
            </div>
        </div>
    )
}

export default WeekCard;