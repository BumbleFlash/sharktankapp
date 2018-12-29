let mysql = require('mysql');
let con = mysql.createPool({
    connectionLimit: 10,
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
    console.log(season);
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
    if (season !== "No Filter")
        s+= "season= '"+season+"' and ";
    if (episode !== "No Filter")
        s+="episode='"+episode+"' and ";
    if (investor !== "No Filter")
        s+=investor+"= '1' and ";
    if (amount !== "No Filter")
        s+="amount='"+amount+"' and ";
    if (gender !== "No Filter")
        s+="gender ='"+gender+"' and ";
    s = s.slice(0,-5);
    s+=";";
    console.log(s);
    return s;




}

exports.getDistinctSeasons = function (req, res) {
    var sql = "Select distinct season from sharktankdata;";
    con.query(sql, function (err, rows, fields) {
        if (err)
            throw err;
        else {
            res.json(rows);
        }
    })
}

exports.getDistinctEpisodes = function (req, res) {
    var sql = "Select distinct episode from sharktankdata;";
    con.query(sql, function (err, rows, fields) {
        if (err)
            throw err;
        else {
            res.json(rows);
        }
    })
}

exports.getDistinctAmount = function (req, res) {
    var sql = "Select distinct amount from sharktankdata;";
    con.query(sql, function (err, rows, fields) {
        if (err)
            throw err;
        else {
            res.json(rows);
        }
    })
}


