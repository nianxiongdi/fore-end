


var preorderTraversal = function(root) {


    const result = []
    let cur = root
    let mostRight = null

    while (cur) {
        mostRight = cur.left

        if ( mostRight === null ) {
            cur = cur.right
        }else {
            while (mostRight !== null && mostRight.right !== cur.right) mostRight = mostRight.right
            
            if (mostRight.right === null){
                mostRight.right = cur
                cur = cur.left
            } else if (mostRight.right === cur) {
                mostRight.right = null
                cur = cur.right
            }
        }
    }

}