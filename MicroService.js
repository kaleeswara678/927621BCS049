const express = require('express');
const axios = require('axios');
const app = express();

const windowSize =10;
const timeTaken =500;
const api ='http://localhost:9876/numbers/e';


const window=[];
const getNumbers = (numberId)=>{
    try{
        return response.data.number;
    }
    catch(error){
console.error('error in getting numbers...');
    }
}


const average =(number)=>{
    const sum =sum+number;
    return sum/ (numbers.length)
}

const PORT = 9876;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});