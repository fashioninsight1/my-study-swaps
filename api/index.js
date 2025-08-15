// Simple Node.js serverless function for Vercel
const express = require('express');
const path = require('path');

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Catch-all API handler
app.all('/api/*', (req, res) => {
  res.status(503).json({ 
    error: 'Service temporarily unavailable', 
    message: 'Backend is being migrated to production environment'
  });
});

module.exports = app;
