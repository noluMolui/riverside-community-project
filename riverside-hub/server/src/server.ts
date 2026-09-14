import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { supabase } from './lib/supabaseClient'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// pulls community events from Supabase for the dashboard
app.get('/api/events', async (_req, res) => {
  const { data, error } = await supabase.from('events').select('*')

  if (error) {
    res.status(500).json({ error: error.message })
    return
  }

  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
