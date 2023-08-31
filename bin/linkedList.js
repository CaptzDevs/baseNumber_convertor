class List{
    constructor(){
        this.length = 0
        this.nodes = null
        this.prev = null
    }
    
    getByIndex(index){
        let current = this.nodes
        let i  = 0

        while(current){

            if(i === index) {
                return current
            }
            
            current = current.next
            i++
        }  
    }
    
    insertAt(index,val){
        let current = this.nodes
        let i  = 0

        while(current){
            console.log(current.val)
            current = current.next
        }            

    }

    insertFirst(val){
        
        let current = this.nodes

        if(current != null){
            
            let currVal = null
            let nextVal = null
            
            currVal = current.val

            if(current.next){
                nextVal = current.next.val

            }else{

                let newNode = new Node(currVal)
                current.next = newNode
                current  = newNode
                this.length++;
            }

            while(current.next !== null){
                
                current = current.next
                current.val = currVal
                currVal = nextVal
                
                if(current.next){
                    nextVal = current.next.val
                }else{
                    let newNode = new Node(nextVal)
                    current.next = newNode
                    current  = newNode
                    this.length++;
                }
            }
            
            this.nodes.val = val
            
        }else{
            this.push(val)
        }

    }
    
    push(val){
        let current = null

        if(this.length === 0){
            this.nodes = new Node(val)
            this.length++;
            this.prev = this.nodes 

        }else{

            current = this.nodes

            while(current.next !== null){
                current  = current.next
            }

            let newNode = new Node(val,null,this.prev)
            current.next = newNode
            this.prev = newNode
            this.length++;
   
        }
        
    }
 

    print(){
        let current = this.nodes
        let listStr = ''
        while(current !== null){

            listStr += current.val
            listStr += ' -> '
            current = current.next
        }
        listStr += 'null'
        console.log(listStr)
    }

      
    toArray(){
        let current = this.nodes
        let arr = []
        while(current !== null){
            arr.push(current.val)
            current = current.next
        }
        return arr
    }

}

class Node{
    constructor(val,next,prev){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.prev  = (prev===undefined ? null : prev)

    }
}


let list = new List()

inRange(1,5,1,(i)=>{
    list.push(i)
})