
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

//validation for email and passwords
function validateEmail(email){
  const emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  return emailPattern.test(email);
}
// Controller to handle fetching all users
const getAllUsers = (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]);
  };
  
// Controller to handle fetching a single user by ID
const getUserById = (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}` });
};

const registerUser = async (req,res)=>{
  try {
      const email = req.body.email;
      const name = req.body.name;
      const password = req.body.password;
      console.log(email,password,name);
      if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
      }

      if(!validateEmail(email))
      {
        return res.status(400).json({ message: "not a valid email." });
      }
  
      const checkResult = await User.findOne({email:email});
  
      if (checkResult) {
        res.send("Email already exists. Try logging in.");
      } else {
        //hashing the password and saving it in the database
        bcrypt.hash(password, saltRounds, async (err, hash) => {
          if (err) {
            console.error("Error hashing password:", err);
          } else {
            console.log("Hashed Password:", hash);
            const id = await User.create({
              name : name,
              email : email,
              password: hash
            });
            console.log(`id  -- ${id}`);
            res.send("registered successfully");
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
}

const loginUser = async (req,res)=>{
  try {
    const email = req.body.email;
    const loginpassword = req.body.password;
    console.log(email,loginpassword);
    if ( !email || !loginpassword) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if(!validateEmail(email))
    {
      return res.status(400).json({ message: "not a valid email." });
    }
    const  user = await User.findOne({email: email});
    if (!user)
    {
      return res.status(400).json({ message: "Email not registered yet. Please reigster" });
    }
    else{
      const validCred = await bcrypt.compare(loginpassword, user.password);
      if (!validCred)
      {
        return res.status(400).json({ message: "Wrong password" });
      }
      else{
        return res.status(200).json({ message: "login successful" });
      }
    }
    
    
  }catch(err)
  {
    console.log(err);
  }

}
  
export default { getAllUsers, getUserById, registerUser, loginUser };
