
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

//validation for email and passwords
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  // At least 8 characters, one uppercase, one lowercase, one number, one special character
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
}

const registerUser = async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "not a valid email." });
    }
    if (!validatePassword(password)) {
      return res.status(400).json({ message: "not a valid password." });
    }

    const checkResult = await User.findOne({ email: email });

    if (checkResult) {
      return res.status(409).json({ message: "Email already exists. Please try logging in" });
    }
    //hashing the password and saving it in the database
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
      } else {
        console.log("Hashed Password:", hash);
        const id = await User.create({
          name: name,
          email: email,
          password: hash
        });
        console.log(`id  -- ${id}`);
        return res.status(200).json({ message: "Registered successfully." });
      }
    });

  } catch (err) {
    console.log(err);
  }
}

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const loginPassword = req.body.password;

    if (!email || !loginPassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "not a valid email." });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Email not registered yet. Please register" });
    }

    const validCred = await bcrypt.compare(loginPassword, user.password);
    if (!validCred) {
      return res.status(400).json({ message: "Wrong password" });
    }

    return res.status(200).json({ message: "login successful" });

  } catch (err) {
    console.log(err);
  }

}

export default { registerUser, loginUser };
