EmpDetails= {
    emp:[
        {firstname:"Mayuri",lastname:"Mulay",Age:23},
        {firstname:"Mayuri1",lastname:'khose',Age:26},
        {firstname:"Mayuri3",lastname:"Khose",Age:35}
    ],
    detailAddress:[
        {city:"Pune" , pincode:401181},
        {city:"Mumabi" , pincode:471181},
        {city:"Alibag" , pincode:481181}
    ]
}
console.log(EmpDetails.emp[1].firstname);
console.log(EmpDetails.detailAddress[1].city);
var d = JSON.stringify(EmpDetails);
console.log("d-->",d);
var p = JSON.parse(d)
console.log(p);