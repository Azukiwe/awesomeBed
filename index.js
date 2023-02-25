//IMPORT DATABASE CONNECTION FROM CONFIG FOLDER
let db = require('../awesomeBed/config');
//IMPORT BCRYPT MODULE
let{hash,compare,hashSync} = require('bcrypt');
