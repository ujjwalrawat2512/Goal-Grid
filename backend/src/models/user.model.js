import mongoose,{Schema} from "mongoose"

const userSchema = new Schema({
  username: {
    type : String,
    required : true,
    lowercase : true,
  },
  email : {
    type : String,
    required : true,
    unique : true,
  },
  password : {
    type : String,
    required : true,
  },
  role : {
    type : String,
    enum : ["user","admin"],
    default : "user",
  },
  verified : {
    type : Boolean,
    default: false,
  }
},{
    timestamps:true
})

export const User = new mongoose.model("User",userSchema)