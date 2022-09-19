let id = 0;

export const obterId =  () : number => {
    // return Math.round((new Date()).getTime() / 1000);
    return id++;
}

export const getDateWithoutTime = (date: Date) : string => {
    return date.toISOString().slice(0, 10);
}

//json-server --watch .\db.json -p 8080