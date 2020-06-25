/*
  eslint-disable no-useless-escape
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { signJWTUser } = require('../utils/jwt');

const {
  Schema,
} = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    minlength: 8,
    maxlength: 36,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    index: true,
    trim: true,
    minlength: 6,
    maxlength: 90,
    validate: {
      validator(val) {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(val);
      },
      message: ({
        value,
      }) => `${value} is not a valid email addresses!`,
    },
  },
  password: {
    type: String,
    required: true,
    // select: false,
    trim: true,
    minlength: 8,
    maxlength: 30,
  },
  mobile: {
    type: String,
    trim: true,
    minlength: 10,
    maxlength: 15,
  },
  dob: {
    type: Date,
  },
  doj: {
    type: String,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    // select: false,
  },
  isVerifiedUser: {
    type: Boolean,
    default: false,
    select: false,
  },
  isArchived: {
    type: Boolean,
    default: false,
    select: false,
  },
}, {
  strict: true,
  timestamps: true,
});

UserSchema.pre('save', async function hashPassword(next) {
  try {
    if (this.isModified('password') || this.isNew) {
      const hashedPassword = await bcrypt.hash(this.password, 12);
      this.password = hashedPassword;
      console.log(hashedPassword);
      return next();
    }
    return true;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

UserSchema.methods.comparePassword = async function comparePassword(password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

UserSchema.methods.createToken = async function createToken() {
  try {
    const payload = {
      id: this._id, // eslint-disable-line no-underscore-dangle
      email: this.email,
      password: this.password,
      isAdmin: this.isAdmin,
    };
    const token = signJWTUser(payload);
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = mongoose.model('User', UserSchema);
