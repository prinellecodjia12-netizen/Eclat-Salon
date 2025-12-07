import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ success: true, message: "Message sent successfully", data: message });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ success: false, error: "Invalid form data" });
      } else {
        res.status(500).json({ success: false, error: "Internal server error" });
      }
    }
  });

  return httpServer;
}
