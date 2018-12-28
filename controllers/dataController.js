let mysql = require('mysql');
let con = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b838f23e0ccd2f",
    database: "heroku_ddbccdd8f17ccfa",
    password: "8be589ac"
});

exports.getAllData = function(req,res){
      con.query("Select * from sharktankdata;",function(err,rows,fields){
             if(err)
                 throw err;
              else{
                 res.json(rows);
             }
      });
};

exports.getFilteredData = function(req,res){
      let season = req.body.season;
      let episode = req.body.episode;
      let investor = req.body.investor;
      let amount = req.body.amount;
      let gender = req.body.gender;
      let sql;
      sql = buildQuery(season,episode,amount,investor,gender);



      con.query(sql,function(err,rows,fields){
          if(err)
              throw err;
          else
              res.json(rows);
      });
};
function buildQuery(season,episode,amount,investor,gender){
    let s = "Select * from sharktankdata where ";
    if(season!=="")
        s+= "season= '"+season+"' and ";
    if(episode!=="")
        s+="episode='"+episode+"' and ";
    if(investor!=="")
        s+=investor+"= '1' and ";
    if(amount!=="")
        s+="amount='"+amount+"' and ";
    if(gender!=="")
        s+="gender ='"+gender+"' and ";
    s = s.slice(0,-5);
    s+=";";
    console.log(s);
    return s;




}
