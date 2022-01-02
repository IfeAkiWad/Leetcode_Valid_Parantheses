/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

let log = console.log
let s = "(][}{]"

    let pairBrkts = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    let arr = s.toString().split("") // ['(', ']', '[', '}', '{', ']']

    let stk = []
    let anuthaStk = []
    for(let i = 0; i<arr.length; i++){
        let br = arr[i]
        if(pairBrkts[br]){
            stk.push(br)
            log(stk, "stack city")
        }
        ///just for fun////
        else if(!pairBrkts[br]){
            anuthaStk.push(br)
            log(anuthaStk, "another one!")
        }
        //////////////////
        else{
            let chkBr = stk.pop()
            if(pairBrkts[chkBr] != br){
                
                log("false")
            }
        }
        if(stk.length > 0){
            return false
        }
    }


