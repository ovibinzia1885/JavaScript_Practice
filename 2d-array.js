let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

matrix[0][0]=10;
matrix[1][2]=20;

for(let row of matrix){
    const rowstring=row.join(" ");
    console.log(rowstring);
}
    