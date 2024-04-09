import { NewDiaryEntry, Visibility, Weather } from "./types";

const parseComment = (commentFromRequest: any): string => {
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const parseDate = (dateFromRequest: any): string => {
    if(!isDate(dateFromRequest) || !isString(dateFromRequest)){
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if(!isString(weatherFromRequest) || isWeather(weatherFromRequest)){
        throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest
}

const isWeather = (weather: any): boolean => {
 return Object.values(Weather).includes(weather)
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest) || isVisibility(visibilityFromRequest)){
        throw new Error('Incorrect or missing visibility')
    }
    return visibilityFromRequest
}
const isVisibility = (visibility: any): boolean => {
    return Object.values(Visibility).includes(visibility)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newDiaryEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }
    return newDiaryEntry
}

export default toNewDiaryEntry