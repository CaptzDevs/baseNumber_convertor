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

class Sql {
  constructor(array = []) {
    this.rawData = array
    this._length = array.length


    this.resultArray = array;
  }

  select(...selectedKeys) {
    selectedKeys = selectedKeys || [];

    selectedKeys.flat()

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
    this.resultArray = this.resultArray.filter((item) => callback(item) || callback(item) == 0);
    return this; 
  }

  orderBy(attr, order) {
    if (order === "ASC") this.resultArray.sort((a, b) => a[attr] - b[attr]);
    if (order === "DESC") this.resultArray.sort((a, b) => b[attr] - a[attr]);
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

  limit(limit){
    this.resultArray = this.resultArray.slice(0,limit);
  }

  //* ---------------------------------------

  sum(attr) {
    if(!(this.resultArray instanceof Array)){
        return this.resultArray
    }

    let sum  = 0;
    sum = this.resultArray.reduce((a, b) => a + Number(b[attr]), 0);
    
    this.resultArray = sum
    return sum;
  }

  count() {
    if(!(this.resultArray instanceof Array)){
        return this.resultArray
    }

    let count  = 0;
    this.resultArray.forEach(() => count += 1);
    
    this.resultArray = count
    return count;
  }

  max(attr) {
    
    if(!(this.resultArray instanceof Array)){
        return this.resultArray
    }

    let max = +this.resultArray[0][attr];

    this.resultArray.forEach((item)=>{
        if(max < +item[attr]) max = item[attr]
    })

    this.resultArray = max

    return max;
  }

  min(attr) {

    if(!(this.resultArray instanceof Array)){
        return this.resultArray
    }

    let min = +this.resultArray[0][attr];

    this.resultArray.forEach((item)=>{
        if(min > +item[attr]) min = item[attr]
    })

    this.resultArray = min

    return min;
  }

  avg(attr) {

    if(!(this.resultArray instanceof Array)){
        return this.resultArray
    }


    let avg = 0
   
    avg = this.sum(attr) / this._length

    this.resultArray = avg

    return avg;
  }

  //* ---------------------------------------

    in(attr, ...dataset){

        dataset = dataset.flat()

        let result = []
        this.resultArray.map(item => {
                if(dataset.includes(item[attr])){
                    result.push(item)
                }
            })

            this.resultArray = result

    }


    notIn(attr, ...dataset){
        dataset = dataset.flat()

        let result = []
        this.resultArray.forEach((item)=>{
                if(!dataset.includes(item[attr])){
                    result.push(item)
                }
        })

        this.resultArray = result

    }


}

let sql_test = new Sql(inventory);

sql_test.select();
sql_test.where(({ quantity }) => quantity );
sql_test.orderBy("quantity", "ASC"); 

//sql_test.groupBy(({ type }) => type)


/* console.log("sum",sql_test.sum('quantity'))
console.log("min",sql_test.min('quantity'))
console.log("max",sql_test.max('quantity'))
console.log("avg",sql_test.avg('quantity')) */


console.log(sql_test);

console.log("--------------");

/* sql_test.array.map((item)=>{
    console.log(item)
}) */
