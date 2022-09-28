const bip39 = require('bip39')
var fs = require('fs');
const colors = require('colors');
let counts;


fs.readFile("config.txt", "utf8", 
  async function(error,data) {
    counts = await data.match(/count: (\d+)/)
    console.log('Settings:'.red + ' Count: ' + counts[1].green )
    if (counts != null || counts != undefined) {
      for (let index = 0; index <= counts[1]; index++) {
        let seed = bip39.generateMnemonic()
        fs.appendFile("result.txt", seed + '\n', function(error){
          if(error) throw error; 
          console.log('New seed: '.green + seed)
        });
      }
    }
  }
);


