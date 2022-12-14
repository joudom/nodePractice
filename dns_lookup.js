// M E D I U M  E X E R C I S E - D N S  L o o k u p
    const dns = require('dns')
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Domain Name: ", function (url) {
        readline.close();
        dns.lookup(url, function (error, address) {
            if (error) {
                console.log(error.message);
                return;
            }
            console.log("IP Address: ", address);
        })
    });