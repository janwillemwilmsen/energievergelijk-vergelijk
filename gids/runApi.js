// RUN node runApi om Bedrijgds.json te updaten

const {google} = require ('googleapis');
const keys = require('../keys.json');
const fs = require('fs');
 

const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key, 
    [
        'https://www.googleapis.com/auth/spreadsheets.readonly'
    ]
);

client.authorize(function(err, tokens){

    if(err){
        console.log(err);
        return;
    }
    else {
        console.log('Connected');
        gsrun(client);
    }

});



async function gsrun(cl){

    const gsapi = google.sheets({version:'v4', auth: cl});
    const opt = {

        spreadsheetId: '1aAgYhlLQZl6J9szl-vpwELLpKZWCg46vNtANVv9LsIo',
        majorDimension: 'rows',
        range: 'bedrijfsGids!A6:AA16'

    }


   let data = await gsapi.spreadsheets.values.get(opt);
    // console.log(data.data.values);

    const rows = data.data.values

    // format retrieved data
    if (rows.length) {
        var rowHead = rows.shift()
        const formatedUsers = rows.map((row) => {
            return rowHead.reduce( (obj, key, i) => { 
              obj[key] = row[i]
              return obj
            }, {})
        })
        console.log(formatedUsers);
        fs.promises.writeFile(`google-api-output.json`,JSON.stringify(formatedUsers));
     }





    // const rows = data.data.values;
    // rows.map((row) => {
    //     console.log(`${row[0]}, ${row[1]} , ${row[2]}  , ${row[3]}   , ${row[4]}    , ${row[5]}                     `);
    // });


// let dataArray=data.data.values;
// let valueNew=dataArray.map(function(r){
// r.push(r[0]+`-`+r[1]);
// return r;
// });
// console.log(valueNew);



    // let beschrijvingen = data.data.values;

}