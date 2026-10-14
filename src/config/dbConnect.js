import mongoose from "mongoose";

async function connectDatabase() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Banco conectado!");
    return mongoose.connection;
}

export default connectDatabase;