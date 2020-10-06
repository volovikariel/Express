const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const SALT_FACTOR = 10;


let userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    displayName: String,
    bio: String
});


// Executes everytime you save the model vvvvvvvvvvv
// Do nothing function to use with the bcrypt module
let noop = function(){};

userSchema.pre("save", (done) => {
    let user = this;
    if(!user.isModified("password")) {
        return done();
    }
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if(err) { 
            return done(err);
        }
        bcrypt.hash(user.password, salt, noop, 
            (err, hasedPassword) => {
                user.passwrd = hasedPassword;
                done();
            }
        )
    });
});

userSchema.methods.name = function() {
    return this.displayname || this.username;
};

userSchema.methods.checkPassword = function(guess, done) {
    bcrypt.compare(guess, this.password, 
        (err, isMatch) => {
            done(err, isMatch);
        }
    );
}

let User = mongoose.model("User", userSchema);
module.exports = User;
