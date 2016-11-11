import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});


app.get('/task2a', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});


app.get('/task2b', (req, res) => {
  var newName = "";
  var arr;

  var fullName = req.query.fullname;
  if (fullName.match(/^[A-Za-zА-Яа-я ]+/i)) {

  arr = fullName.split(" ");

    if (fullName == "" || arr.length > 3) {
      newName = 'Invalid fullname';
    }
    else if (arr.length == 3){
    const fName = arr[0].substring(1, 0) + ".";
    const lName = arr[2];
    const sName = arr[1].substring(1, 0) + ".";
    newName = `${lName} ${fName} ${sName}`;
    }
    else if (arr.length == 2){
    const fName = arr[0].substring(1, 0) + ".";
    const lName = arr[1];
    newName = `${lName} ${fName}`;
    }
    else{
    const lName = arr[0];
    newName = `${lName}`;
    }
  }else{
    newName = 'Invalid fullname';
  }

  res.send(newName);
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
