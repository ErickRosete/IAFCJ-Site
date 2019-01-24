const bcrypt = require("bcryptjs");
const User = require("../../models/user");
const { transformUser } = require("./merge");
const jwt = require("jsonwebtoken");

module.exports = {
  users: async () => {
    try {
      const users = await User.find();
      return users.map(user => {
        return transformUser(user);
      });
    } catch (err) {
      throw err;
    }
  },

  login: async args => {
    const user = await User.findOne({ email: args.userInput.email });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isEqual = await bcrypt.compare(args.userInput.password, user.password);
    if (!isEqual) {
      throw new Error("Invalid Credentials");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "asecretkeynotknownbyanyone",
      { expiresIn: "2h" }
    );
    return {
      userId: user.id,
      token: token,
      tokenExpiration: 2
    };
  },

  createUser: async args => {
    try {
      const userInDB = await User.findOne({ email: args.userInput.email });
      if (userInDB) {
        throw new Error("User Already Exists");
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const user = User({
        email: args.userInput.email,
        password: hashedPassword
      });
      const result = await user.save();
      return transformUser(result);
    } catch (err) {
      throw err;
    }
  }
};
