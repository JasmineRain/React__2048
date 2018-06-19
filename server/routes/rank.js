var express = require('express');
var router = express.Router();

const initState = {
    status:"success",
    data:[
        { genre: 'User1', sold: 27500, income: 2300 },
        { genre: 'User2', sold: 26000, income: 667 },
        { genre: 'User3', sold: 25000, income: 982 },
        { genre: 'User4', sold: 24000, income: 5271 },
        { genre: 'User5', sold: 23000, income: 3710 }
    ]
};

const readRank = () => {
    // let fso = new ActiveXObject("Scripting.FileSystemObject");
    // let f =fso.OpenTextFile("../rank.json",1);
    // let s ="";
    // while (!f.AtEndOfStream)
    //     s += f.ReadLine();
    // f.Close();
    // console.log(s);
    // return s;
    let reader = new FileReader();
    reader.readAsText("../rank.json","utf-8");
    let s =reader.result;
    console.log(s);
};

router.get('/', function(req, res, next) {
    //readRank();
    res.end(JSON.stringify(initState));
});

module.exports = router;