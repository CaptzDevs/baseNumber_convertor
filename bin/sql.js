const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
  { name: "carrots", type: "vegetables", quantity: 10 },
  { name: "apples", type: "fruit", quantity: 15 },
  { name: "chicken", type: "meat", quantity: 18 },
  { name: "broccoli", type: "vegetables", quantity: 8 },
  { name: "potatoes", type: "vegetables", quantity: 12 },
  { name: "grapes", type: "fruit", quantity: 30 },
  { name: "beef", type: "meat", quantity: 25 },
  { name: "spinach", type: "vegetables", quantity: 7 },
  // Add more items as needed
];

var carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Tesla",
  "Hyundai",
  "Kia",
  "Mazda",
  "Subaru",
  "Jeep",
  "Volvo",
  "Lexus",
  "Ferrari",
  "Porsche",
  "Jaguar"
];

function sum(arrN = []) {
  return arrN.reduce((prev, curr) => (prev += curr));
}

function inRange(start = 0,end,step = 1,fn){
    step = Number(step)
    let i = start
    let arr = []
    if(step >= end || step == 0) step = 1;

    while(i < end){
        if(typeof fn === 'function'){
            fn(i)
        }
        arr.push(i)
        i += step

    }
    return arr
}


class Sql {
  constructor(array = []) {
    this.rawData = array;
    this._length = array.length;

    this.resultArray = array;

   
  }

  checkData(){
    if(this.rawData.length == 0){
      return true;
    }
  }

  checkResultLength(){
    if(this.resultArray.length == 0){
      return true;
    }
  }

  updateLength() {}

  select(...selectedKeys) {
    selectedKeys = selectedKeys || [];

    selectedKeys.flat();

    if (selectedKeys.length === 0) {
      return this;
    }

    this.resultArray = this.resultArray.map((item, i) => {
      let result = {};
      selectedKeys.forEach((key) => {
        if (item.hasOwnProperty(key)) {
          if (!result[key]) {
            result[key] = item[key];
          }
        }
      });
      return result;
    });

    return this;
  }

  where(callback) {
    this.resultArray = this.resultArray.filter(
      (item) => callback(item) || callback(item) === 0
    );
    return this;
  }

  orderBy(attr, order) {
    if(this.checkData() || this.checkResultLength()){
      //console.error(new Error("Cannot procress data with length 0 in orderBY"))
      return false
    }

    let orderNumber = {
      ASC : (a, b) => a[attr] - b[attr],
      DESC : (a, b) => b[attr] - a[attr],

    }
    let  orderString = {
      ASC : (a, b) => a[attr].localeCompare(b[attr]),
      DESC : (a, b) => b[attr].localeCompare(a[attr])
    }

    if(typeof this.resultArray[0][attr] === 'number'){

      if (order === "ASC") this.resultArray.sort(orderNumber.ASC);
      if (order === "DESC") this.resultArray.sort(orderNumber.DESC);
    }

    if(typeof this.resultArray[0][attr] === 'string'){

      if (order === "ASC") this.resultArray.sort(orderString.ASC);
      if (order === "DESC") this.resultArray.sort(orderString.DESC);
    }
  }

  groupBy(callback) {
    let result = [];
    let obj = {};

    this.resultArray.map((item, i) => {
      let condition = callback(item);
      let groupData = condition;

      //error handler

      // When condition is undefined
      if (!condition) {
        obj["error"] = `No attribute name ${obj[groupData]} at groupBy `;
        return -1;
      }

      if (!obj[groupData]) {
        obj[groupData] = [];
      }

      obj[groupData] = [...obj[groupData], item];
    });

    result.push(obj);

    this.resultArray = result;
    return this;
  }

  //* Data Range Limit--------------------
  limit(limit) {
    this.resultArray = this.resultArray.slice(0, limit);
  }

  between(min , max) {
    this.resultArray = this.resultArray.slice(min, max);
  }

  top(limit){
    this.resultArray = this.resultArray.slice(0, limit);
  }
  last(limit){
    this.resultArray = this.resultArray.slice(this.resultArray.length-limit, this.resultArray.length);
  }
  //* ------------------- Utilities --------------------

  count() {
    if (!(this.resultArray instanceof Array)) {
      return this.resultArray;
    }

    let count = 0;
    this.resultArray.forEach(() => (count += 1));

    this.resultArray = count;
    return count;
  }

  sum(attr) {
    if (!(this.resultArray instanceof Array)) {
      return this.resultArray;
    }

    let result = [];
    if (this.resultArray.length == 1) {
      let sum = 0;
      Object.keys(sql_test.resultArray[0]).map((item) => {
        let obj = {};
        sum = this.resultArray[0][item].reduce(
          (a, b) => a + Number(b[attr]),
          0
        );
        obj[item] = sum;
        result.push(obj);
      });

      this.resultArray = result;
      return result;
    }

    let sum = 0;
    sum = this.resultArray.reduce((a, b) => a + Number(b[attr]), 0);

    let obj = {};
    obj["sum_"+attr] = sum;
    this.resultArray = ( obj );
    return sum;
  }

  max(attr) {
    if (!(this.resultArray instanceof Array)) {
      return this.resultArray;
    }

    let result = [];
    if (this.resultArray.length == 1) {
      Object.keys(this.resultArray[0]).map((item) => {
        let max = this.resultArray[0][item][0][attr];
        let obj = {};

        this.resultArray[0][item].map((dataItem) => {
          if (max <= dataItem[attr]) {
            max = dataItem[attr];
            obj[item] = max;
          }
        });
        result.push(obj);
      });

      this.resultArray = result;
      return result;
    }

    //* Standard

    let max = +this.resultArray[0][attr];

    this.resultArray.forEach((item) => {
      if (max < +item[attr]) max = item[attr];
    });

    let obj = {};
    obj["max_"+attr] = max;
    this.resultArray = ( obj );
    return max;
  }

  min(attr) {
    if (!(this.resultArray instanceof Array)) {
      return this.resultArray;
    }

    let result = [];
    if (this.resultArray.length == 1) {
      Object.keys(this.resultArray[0]).map((item) => {
        let min = this.resultArray[0][item][0][attr];
        let obj = {};

        this.resultArray[0][item].map((dataItem) => {
          if (min >= dataItem[attr]) {
            min = dataItem[attr];
            obj[item] = min;
          }
        });
        result.push(obj);
      });

      this.resultArray = result;
      return result;
    }

    //* Standard
    let min = +this.resultArray[0][attr];

    this.resultArray.forEach((item) => {
      if (min >= +item[attr]) min = item[attr];
    });

    let obj = {}
    obj["min_"+attr] = min
    this.resultArray = obj;
    return min;
  }

  avg(attr) {
    if (!(this.resultArray instanceof Array)) {
      return this.resultArray;
    }

    let result = [];
    if (this.resultArray.length == 1) {
      Object.keys(this.resultArray[0]).map((key) => {
        let avg = 0;
        let obj = {};
        let sum = new Sql(this.resultArray[0][key]).sum(attr);
        avg = sum / this._length;

        obj[key] = avg;
        result.push(obj);
      });

      this.resultArray = result;
      return result;
    }

    //* Standard
    let avg = 0;
    avg = this.sum(attr) / this._length;

    let obj = {}
    obj["avg_"+attr] = avg
    this.resultArray = obj;
    return avg;
  }

  //* ----------------- Check member ----------------------

  in(attr, ...dataset) {
    dataset = dataset.flat();

    let result = [];
    this.resultArray.map((item) => {
      if (dataset.includes(item[attr])) {
          result.push(item);
      }
    });

    this.resultArray = result;
  }

  notIn(attr, ...dataset) {
    dataset = dataset.flat();

    let result = [];
    this.resultArray.forEach((item) => {
      if (!dataset.includes(item[attr])) {
        result.push(item);
      }
    });

    this.resultArray = result;
  }
}

let sql_test = new Sql(inventory);

sql_test.select();
sql_test.where(({ type }) => String(type) );
sql_test.orderBy("quantity", "ASC");  
//sql_test.limit(1)

//console.log(sql_test)
//sql_test.groupBy(({ type }) => type);

/* Object.keys(sql_test.resultArray[0]).map((item)=>{
    console.log(new Sql(sql_test.resultArray[0][item]).sum('quantity'))
}) */

/* console.log("sum",sql_test.sum('quantity')) */
//console.log("max",sql_test.max('quantity'))
//console.log("min",sql_test.min('quantity'))

console.log("--------------");


/* inRange(0,carBrands.length,1,(i)=>{
  console.log(carBrands[i])
}) */
let word = 'Toyota'
let searchKeyword = 'Toyata'

// create function that can search familair word like soundex



