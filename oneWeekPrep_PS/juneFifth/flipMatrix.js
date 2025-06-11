const matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]

function flippingMatrix(matrix) {
    // Write your code here
    const size = matrix.length;
    const halfSize = size/2;
    let maxSum=0;
    for(let i =0; i< halfSize;i++){
        for(let j =0; j< halfSize;j++){
            let topLeft = matrix[i][j];
            let topRight = matrix[i][size-j-1];
            let bottomLeft = matrix[size-i-1][j];
            let bottomRight = matrix[size-i-1][size-j-1];
            let highestInQuad = Math.max(topLeft, topRight, bottomLeft, bottomRight);
            maxSum+=highestInQuad;
    }
    }
    console.log(`maxSum - ${maxSum}`)
    return maxSum
}

flippingMatrix(matrix)