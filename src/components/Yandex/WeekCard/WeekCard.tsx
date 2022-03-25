import React from "react";
import cx from 'classnames'
import weekCard from './weekCard.module.scss'

type IPropsWeek = {
    items: any
}

const WeekCard: React.FC<IPropsWeek> = ({ items }) => {


    const getDateFormat = (dataType: any) => {
        const reverseDate = dataType.split('-').join(', ');
        const fullDate = new Date(reverseDate)
        const getDay = fullDate.getDate()
        const getMonth = fullDate.getMonth()
        const dayParams = {
            day: getDay,
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
    checkMonth(getDateFormat(items.date))

    return (
        <div className={cx(
            weekCard['weekCard']
        )}>
            <div className={cx(
                weekCard['weekCard__wrapper-day']
            )}>
                <p className={cx(
                    weekCard['weekCard__wrapper-day_day']
                )}>
                    {getDateFormat(items.date).day}
                </p>
                <p>
                    {checkMonth(getDateFormat(items.date))}
                </p>
            </div>
            <div className={cx(
                weekCard['weekCard__wrapper-icon']
            )}>
                <img
                    className={cx(
                        weekCard['weekCard__wrapper-icon_icon']
                    )}
                    src={`https://yastatic.net/weather/i/icons/funky/dark/${items.parts.day.icon}.svg`} alt="" />
            </div>

        </div>
    )
}

export default WeekCard;