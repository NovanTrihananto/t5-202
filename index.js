import express from "express";
import cors from "cors";
import UserRoute from "./routes/Userroute.js";
import db from "./databases/Databases.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// Route utama ("/") untuk menampilkan pesan di browser
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Notes API 🚀</h1><p>Database connected successfully!</p>");
});

// Fungsi untuk mengecek koneksi database dan menjalankan server
async function startServer() {
    try {
        await db.authenticate();
        console.log("✅ Database connected");

        // Sync database (gunakan { alter: true } untuk update tabel tanpa hapus data)
        await db.sync({ alter: true });

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
        console.error(error.stack);
    }
}

startServer();
