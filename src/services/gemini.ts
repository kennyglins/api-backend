import { GoogleGenerativeAI } from '@google/generative-ai'
import { env } from '../env.ts'

// Inicializa o cliente Gemini com a chave da API
const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY)

/**
 * Gera uma resposta textual baseada em um prompt.
 */
export async function generateAnswer(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const result = await model.generateContent(prompt)
    return result.response.text()
  } catch (error) {
    console.error('❌ Erro ao gerar resposta com Gemini:', error)
    return 'Erro ao gerar resposta com a IA.'
  }
}

/**
 * Gera embeddings (vetores numéricos) a partir de um texto.
 */
export async function generateEmbeddings(input: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'text-embedding-004' })
    const result = await model.embedContent(input)
    return result.embedding.values
  } catch (error) {
    console.error('❌ Erro ao gerar embeddings com Gemini:', error)
    return []
  }
}
