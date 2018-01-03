var sqlite3 = require('sqlite3').verbose();  
// var db = new sqlite3.Database('/tmp/1.db',function() {  
//   db.run("create table test(name varchar(15))",function(){  
//     db.run("insert into test values('hello,world')",function(){  
//       db.all("select * from test",function(err,res){  
//         if(!err)  
//           console.log(JSON.stringify(res));  
//         else  
//           console.log(err);  
//       });  
//     })  
//   });  
// });

// setTimeout(function () {
//   db.run("CREATE TABLE IF NOT EXISTS notes " +
//     "(ts DATETIME, author VARCHAR(255), note TEXT)",
//     function(err){
//       if (err){
//         util.log('FAIL on creating table ' + err);
//         console.log(1)
//       } else {
//         console.log(2);
//       }
//     });
// }, 2000)

var createImMessage2Sql =
    "CREATE TABLE IF NOT EXISTS immessage2"  +
    "("                                      +
    "  id            TEXT PRIMARY KEY,"      +     
    "  msgId         INTEGER DEFAULT NULL,"  +   
    "  msgCate       TEXT NOT NULL,"         +      
    "  msgType       TEXT NOT NULL,"         +      
    "  renderType    INTEGER NOT NULL,"      +     
    "  timeval       INTEGER NOT NULL,"      +     
    "  scode         TEXT NOT NULL,"         +      
    "  sname         TEXT NOT NULL,"         +      
    "  rcode         TEXT DEFAULT NULL,"     +    
    "  gcode         TEXT DEFAULT NULL,"     +    
    "  sessionId     TEXT DEFAULT NULL,"     +         
    "  ua            INTEGER NOT NULL,"      +       
    "  extension     TEXT NOT NULL"          +             
    ")";

var createImMessageIndex =
    "CREATE UNIQUE INDEX IF NOT EXISTS sessionid_idx ON immessage2(id DESC,sessionId);";

var db;
function openDB () {
  // return new Promise(function (resolve, reject){
    db = new sqlite3.Database('/tmp/2.db', async (err) => {
      if (err) {
        // reject(err)
      }
      console.log('db');
      // if(!IsExists) {
        
      // }
      let res = await initDBTable();
      console.log(res)
      // if(table === true) {
      //   resolve(true);
      // } else {
      //   reject(table);
      // }

    });
  // });
  
}

function initDBTable() {
  return new Promise(function (resolve, reject) {
    db.serialize(() => {
    // db.run(createImMessage2Sql)
    //   .run(createImMessageIndex)
      db.run(createImMessage2Sql,function(err, data) {
        if(err) {
          // return err;
          reject(err)
        } else {
          console.log(123)
          resolve(true)
          // return true
        }
      })

      // db.run(createImMessageIndex,function(err) {
      //   if(err) {
      //     return err;
      //   }
      // })
      // return true;
    })
    // .then((res) => {
    //   resolve(res);
    // })
    // .catch((err) => {
    //   reject(err)
    // })
  })
}

openDB()