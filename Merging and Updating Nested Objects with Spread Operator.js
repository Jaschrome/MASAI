const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserProfileAndUpdates() {
    return new Promise(resolve => {
        let profile = {};
        let updates = {};

        rl.question('Enter profile name (e.g., Charlie): ', (name) => {
            profile.name = name;
            rl.question('Enter profile age (e.g., 29): ', (age) => {
                profile.age = parseInt(age);
                rl.question('Enter profile city (e.g., San Francisco): ', (city) => {
                    profile.address = { city: city };
                    rl.question('Enter profile zipcode (e.g., 94101): ', (zipcode) => {
                        profile.address.zipcode = zipcode;

                        rl.question('Enter updated age (e.g., 30): ', (updatedAge) => {
                            updates.age = parseInt(updatedAge);
                            rl.question('Enter updated zipcode (e.g., 94109): ', (updatedZipcode) => {
                                updates.address = { zipcode: updatedZipcode };
                                rl.question('Enter new country (e.g., USA): ', (country) => {
                                    updates.address.country = country;
                                    resolve({ profile, updates });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

async function main() {
    console.log("Please enter details for the profile and updates:");
    const { profile, updates } = await getUserProfileAndUpdates();

    const mergedProfile = {
        ...profile,
        ...updates,
        address: {
            ...profile.address,
            ...updates.address
        }
    };

    console.log("\nMerged Profile:");
    console.log(mergedProfile);

    rl.close();
}

main();

/*
Prerequisites to run this code:
1. Node.js installed on your system.

How to run:
1. Save the code into a file (e.g., 'mergeProfileInput.js').
2. Open your terminal or command prompt.
3. Navigate to the directory where you saved the file.
4. Execute the script using: node mergeProfileInput.js
5. Follow the prompts in your terminal to enter the requested information.
*/
