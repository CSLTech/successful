#! /usr/bin/env node
if (process.argv.indexOf("--colors") === -1) {
    require("../success.js");
}
else {
    require("../success-colors.js");
}
