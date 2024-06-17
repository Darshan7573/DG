import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://darshu7375:mYpVJo2tiJcQkJEp@cluster0.02cidyh.mongodb.net/DataGuru').then(() => console.log("DB connected"))
}