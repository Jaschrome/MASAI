const userProfile = {
    name: "Alice",
    age: 28,
    details: function() {
        return `${this.name} is ${this.age} years old.`;
    },
    updateAge(newAge) {
        if (typeof newAge !== 'number' || !Number.isInteger(newAge) || newAge <= 0) {
            console.log("Invalid age. Age must be a positive integer.");
            return;
        }
        this.age = newAge;
        console.log("Age updated successfully.");
        console.log(this.details());
    }
};

userProfile.updateAge(30);
console.log(userProfile.details());

// Additional test cases
userProfile.updateAge(-5); // Should log "Invalid age."
userProfile.updateAge(0);  // Should log "Invalid age."
userProfile.updateAge(35.5); // Should log "Invalid age."
userProfile.updateAge("forty"); // Should log "Invalid age."
console.log(userProfile.details()); // Should still be 30 from the last valid update
