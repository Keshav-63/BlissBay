import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./db/connectDB.js";
import tenantRoutes from "./routes/tenant.route.js";
import maintenanceRoutes from "./routes/maintenance.route.js";
import securityRoutes from "./routes/security.route.js"; 
import eventsRoutes from "./routes/events.route.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;
const __dirname = path.resolve();

connectDB();

app.use(
  cors({
    origin: "https://bliss-bayvercel.vercel.app",
  })
);
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/tenants", tenantRoutes); 
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/security", securityRoutes);
app.use("/api/events", eventsRoutes);

app.use(express.static(path.join(__dirname, "frontend", "dist"))); // Serve static frontend files

// Handle frontend routing (SPA support)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
