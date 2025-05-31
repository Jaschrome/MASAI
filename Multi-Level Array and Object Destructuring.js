const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getFormattedAddressFromUserInput() {
    return new Promise(resolve => {
        rl.question('Enter person\'s name: ', (name) => {
            rl.question('Enter city: ', (city) => {
                rl.question('Enter street name: ', (streetName) => {
                    const person = {
                        name: name,
                        address: {
                            city: city,
                            street: {
                                name: streetName
                            }
                        }
                    };
                    const {
                        name: extractedName,
                        address: {
                            city: extractedCity,
                            street: { name: extractedStreetName }
                        }
                    } = person;
                    resolve(`${extractedName} lives in ${extractedCity} on ${extractedStreetName}`);
                });
            });
        });
    });
}

async function main() {
    console.log("Enter details for one person:");
    const formattedString = await getFormattedAddressFromUserInput();
    console.log(formattedString);
    rl.close();
}

main();

//node.js with readline
