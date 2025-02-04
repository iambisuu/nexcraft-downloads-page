import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

// Use a connection pool instead of a single client
const pool = new Pool({
  connectionString: process.env.NEON_DB_URL,
  ssl: { rejectUnauthorized: false }, // Required for Neon DB
});

export async function getReleases() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM releases ORDER BY release_date DESC');
    return res.rows;
  } catch (error) {
    console.error('Error fetching releases:', error);
    return [];
  } finally {
    client.release(); // Release the connection back to the pool
  }
}
