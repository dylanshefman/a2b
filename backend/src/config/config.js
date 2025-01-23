import dotenv from 'dotenv';
dotenv.config();

export const AGENCIES = {
  UM: {
    apiKey: process.env.UM_API_KEY,
    baseURL: 'https://mbus.ltp.umich.edu'
  },
  THERIDE: {
    apiKey: process.env.THERIDE_API_KEY,
    baseURL: 'https://rt.theride.org'
  }
};

console.log("UM API Key:", process.env.UM_API_KEY);
console.log("THERIDE API Key:", process.env.THERIDE_API_KEY);