const inventory = [
  { id: 1, name: "asparagus", type: "vegetables", quantity: 5 },
  { id: 2, name: "bananas", type: "fruit", quantity: 0 },
  { id: 3, name: "goat", type: "meat", quantity: 23 },
  { id: 4, name: "cherries", type: "fruit", quantity: 5 },
  { id: 5, name: "fish", type: "meat", quantity: 22 },
  { id: 6, name: "carrots", type: "vegetables", quantity: 10 },
  { id: 7, name: "apples", type: "fruit", quantity: 15 },
  { id: 8, name: "chicken", type: "meat", quantity: 18 },
  { id: 9, name: "broccoli", type: "vegetables", quantity: 8 },
  { id: 10, name: "potatoes", type: "vegetables", quantity: 12 },
  { id: 11, name: "grapes", type: "fruit", quantity: 30 },
  { id: 12, name: "beef", type: "meat", quantity: 25 },
  { id: 13, name: "spinach", type: "vegetables", quantity: 7 },
  // Add more items as needed
];

const sales = [
  { id: 1, productId: 2, quantity: 3, price: 1.5 },
  { id: 2, productId: 7, quantity: 5, price: 2.0 },
  { id: 3, productId: 11, quantity: 2, price: 3.5 },
  { id: 4, productId: 3, quantity: 1, price: 10.0 },
  { id: 5, productId: 5, quantity: 2, price: 8.0 },
  { id: 6, productId: 9, quantity: 4, price: 1.0 },
  { id: 7, productId: 1, quantity: 2, price: 4.0 },
  { id: 8, productId: 4, quantity: 3, price: 6.0 },
  { id: 9, productId: 6, quantity: 1, price: 2.5 },
  { id: 10, productId: 8, quantity: 2, price: 5.0 },
  // Add more sales entries as needed
];

function sum(arrN = []) {
  return arrN.reduce((prev, curr) => (prev += curr));
}

function inRange(start = 0, end, step = 1, fn) {
  step = Number(step);
  let i = start;
  let arr = [];
  if (step >= end || step == 0) step = 1;

  while (i < end) {
    if (typeof fn === "function") {
      fn(i);
    }
    arr.push(i);
    i += step;
  }
  return arr;
}

class Sql {
  constructor(array = []) {
    this.rawData = array;
    this._length = array.length;

    this.resultArray = array;
  }

  checkData() {
    if (this.rawData.length == 0) {
      return true;
    }
  }

  checkResultLength() {
    if (this.resultArray.length == 0) {
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
      selectedKeys.forEach((selectedKey) => {
        
          selectedKey.map((itemkey) => {
            Object.keys(itemkey).forEach((key) => {
              if (item.hasOwnProperty(key)) {
                if (!result[key]) {
                  result[itemkey[key]] = item[key];
                }
              }
            });
            
            if (item.hasOwnProperty(itemkey)) {
              if (!result[itemkey]) {
                result[itemkey] = item[itemkey];
              }
            }

          });

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
    if (this.checkData() || this.checkResultLength()) {
      //console.error(new Error("Cannot procress data with length 0 in orderBY"))
      return false;
    }

    let orderNumber = {
      ASC: (a, b) => a[attr] - b[attr],
      DESC: (a, b) => b[attr] - a[attr],
    };
    let orderString = {
      ASC: (a, b) => a[attr].localeCompare(b[attr]),
      DESC: (a, b) => b[attr].localeCompare(a[attr]),
    };

    if (typeof this.resultArray[0][attr] === "number") {
      if (order === "ASC") this.resultArray.sort(orderNumber.ASC);
      if (order === "DESC") this.resultArray.sort(orderNumber.DESC);
    }

    if (typeof this.resultArray[0][attr] === "string") {
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

  join(dataset, callback, joinDatasetName = "joined") {
    let result = [];
    this.resultArray.forEach((item) => {
      dataset.forEach((data) => {
        if (callback(item, data)) {
          Object.keys(data).map((key) => {
            data[joinDatasetName + "_" + key] = data[key];
            delete data[key];
          });
          result.push({ ...item, ...data });
        }
      });
    });

    this.resultArray = result;
  }

  leftJoin(dataset, callback, joinDatasetName = "joined") {
    let result = [];
    this.resultArray.forEach((item) => {
      let newData = {};
      dataset.forEach((data) => {
        if (callback(item, data)) {
          Object.keys(data).map((key) => {
            data[joinDatasetName + "_" + key] = data[key];
            delete data[key];
          });
          newData = data;
        }
      });

      result.push({ ...item, ...newData });
    });

    this.resultArray = result;
  }

  //* Data Range Limit--------------------
  limit(limit) {
    this.resultArray = this.resultArray.slice(0, limit);
  }

  between(min, max) {
    this.resultArray = this.resultArray.slice(min, max);
  }
  top(limit) {
    this.resultArray = this.resultArray.slice(0, limit);
  }
  last(limit) {
    this.resultArray = this.resultArray.slice(
      this.resultArray.length - limit,
      this.resultArray.length
    );
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
    obj["sum_" + attr] = sum;
    this.resultArray = obj;
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
    obj["max_" + attr] = max;
    this.resultArray = obj;
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

    let obj = {};
    obj["min_" + attr] = min;
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

    let obj = {};
    obj["avg_" + attr] = avg;
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
//sql_test.where(({ type }) => String(type) );
sql_test.join(
  sales,
  (baseData, joinData) => {
    return baseData.id === joinData.productId;
  },
  "salse"
);

sql_test.orderBy("id", "ASC");

sql_test.select([{ name: "newName" },'type']);
//sql_test.limit(1)

//console.log(sql_test)
//sql_test.groupBy(({ type }) => type);

/* Object.keys(sql_test.resultArray[0]).map((item)=>{
    console.log(new Sql(sql_test.resultArray[0][item]).sum('quantity'))
}) */

console.log(sql_test);
console.log("Data row(s) : " + sql_test.resultArray.length);

/* console.log("sum",sql_test.sum('quantity')) */
//console.log("max",sql_test.max('quantity'))
//console.log("min",sql_test.min('quantity'))

console.log("--------------");
