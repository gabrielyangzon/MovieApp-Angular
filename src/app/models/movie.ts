export interface Movie {
    id : number
    title : string
    runtime : string
    year : string
    genres : string[]
    director : string
    actors : string
    plot : string
    posterUrl : string

}


export interface IMdb {
    id :string
    image :{
        height : number,
        id : string,
        url : string,
        width : number,

    },
    
    nextEpisode : string
    numberOfEpisodes : number
    runningTimeMinutes : number
    seriesEndYear : number
    seriesStartYear : number
    title : string
    titleType : string
    year : number

}