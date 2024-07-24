function callStack(){
    let stackArr = []
    
    // Adding Element
    function push(num){
        stackArr.push(num)
    }
    
    function pop(){
        return stackArr.pop()
    }
    
    function peek(){
        return stackArr[stackArr.length - 1]
    }
    
    function size(){
        return stackArr.length
    }
    
    function isEmpty(){
        return stackArr.length === 0
    }
    
    function clear(){
        return stackArr.splice(0, stackArr.length)
    }
    // console.log(stackArr)
    return {
        stackArr, push, pop, peek, size, isEmpty, clear
    }
}

let stack1 = callStack()

// console.log(stack1)
stack1.push(1)
stack1.push(2)
stack1.push(5)
stack1.push(10)

console.log(stack1.pop())

console.log(stack1.peek())

console.log(stack1.size())
console.log(stack1.isEmpty())

stack1.clear()

console.log(stack1.isEmpty())

console.log(stack1)