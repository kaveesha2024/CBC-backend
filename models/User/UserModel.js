import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    salt: {
      type: String,
      required: true,
      default: 'yhdjkdyiosbustgsikwnisydbssiutgdjsusgdj'
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    isBlocked: {
        type: Boolean,
        required: true,
        default: false,
    },
    phoneNumber: {
        type: String,
    },
    profileImage: {
        type: String,
        required: true,
        default: 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg',
    },
    addressBook: [
        {
            name: {
                type: String,
                required: true,
            },
            phoneNumber: {
                required: true,
                type: 'string',
            },
            province: {
                required: true,
                type: 'string',
            },
            city: {
                required: true,
                type: 'string',
            },
            postalCode: String,
            homeOrOffice: String,
        },
    ],
}, { timestamps: true });
const UserModel = mongoose.model('Users', userSchema);
export default UserModel;