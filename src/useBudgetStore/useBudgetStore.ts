import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useBudgetStore = defineStore("data", () => {
  let arrayOfExpences = ref<Array<DataObj>>([]);
  const user = ref();
  function deleteExpenceObj(deletionOption: number) {
    arrayOfExpences.value = arrayOfExpences.value.filter(
      (obj) => !(obj.timeStamp === deletionOption)
    );
  }
  function addExpenceObj(obj: DataObj) {
    arrayOfExpences.value.push(obj);
  }
  
  return { arrayOfExpences, user, deleteExpenceObj, addExpenceObj };
});

class DataObj {
  date;
  summa;
  location;
  currencyName;
  timeStamp;
  expenceType;
  constructor(
    summa: number,
    date: string,
    location: string,
    currencyName: string,
    expenceType: string
  ) {
    this.date = date;
    this.summa = summa;
    this.location = location;
    this.currencyName = currencyName;
    this.timeStamp = Date.now();
    this.expenceType = expenceType;
  }
}

export {DataObj};