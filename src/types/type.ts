export type IPropsPosition = {
    setPointLat: any
    setPointLon: any
    getWether: (lat: string | number, lon: string | number) => void
    setGraphicWeek: any
}

export type IPropsInfoBlockDay = {
    loadStatus: boolean
    dataWhether: any
    objGeo: any
    objFact: any
}

export type IPropsPartInfo = {
    img: string
    statusWeather: string
    unit: string
}

export type IPropsCityInfo = {
    country?: string
    province?: string
    locality?: string
}