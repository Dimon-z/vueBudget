class DataObj {
    currency
    date
    summa
    type
    typeName
    currencyName
    timeStamp
    expenceType
    constructor(summa: number, currency: string, date: string, type: string, typeName: string, currencyName: string, expenceType:string) {
        this.currency = currency;
        this.date = date;
        this.summa = summa;
        this.type = type;
        this.typeName = typeName;
        this.currencyName = currencyName;
        this.timeStamp = Date.now();
        this.expenceType = expenceType;
    }
};

let Data:Array<DataObj> = [];

export {DataObj, Data};