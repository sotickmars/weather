import React from 'react'
import cx from 'classnames'
import cloudnessDay from './cloudnessDay.module.scss'

type IPropsCloudness = {
    obj:any
}

const CloudnessDay: React.FC<IPropsCloudness> = ({obj}) => { 

    return(
        <div
            className={cx(cloudnessDay['cloudness-day__wrapper-cloud'])}
        >
            {
                obj.map((item: any) => {
                    return (

                        <img
                            className={cx(cloudnessDay['cloudness-day__wrapper-cloud_cloud'])}
                            src={`https://yastatic.net/weather/i/icons/funky/dark/${item.icon}.svg`}
                            alt="" />
                    )
                })
            }
        </div>
    )
}
export default CloudnessDay;