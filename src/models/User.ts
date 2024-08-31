import { model, models, Schema } from "mongoose";

interface IUser extends Document {
  email: string;
  name: string;
  img?: string;
  authType: "OAuth" | "Password";
  isAdmin: boolean;
  password?: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    authType: {
      type: String,
      enum: ["OAuth", "Password"],
      required: [true, "Auth Type is required"],
    },
    password: {
      type: String,
      required: function () {
        return this.authType === "Password";
      },
    },
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", userSchema);
export default User;
