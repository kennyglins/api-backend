import { z } from 'zod'

// Esquema de validação das variáveis de ambiente
const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
  GEMINI_API_KEY: z.string(),
})

// Antes de validar, verifica se realmente existem variáveis
if (!(process.env.DATABASE_URL && process.env.GEMINI_API_KEY)) {
  console.warn(
    '⚠️  Variáveis de ambiente ausentes. Railway pode não ter injetado ainda.'
  )
  console.log('DATABASE_URL:', process.env.DATABASE_URL)
  console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY)
}

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('❌ Erro ao validar variáveis de ambiente:')
  console.error(parsed.error.flatten().fieldErrors)
  throw new Error('Falha ao carregar variáveis de ambiente.')
}

export const env = parsed.data
