import { sequelize } from '../config/sequelize'
import '../models'
export const initDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('🔌 Conexão com o banco estabelecida com sucesso.')
 
    await sequelize.sync({ alter: true })
    console.log('📦 Sincronização com o banco finalizada.')
 
  } catch (error) {
    console.error('❌ Erro ao conectar ou acessar tabela:', error)
  }
}
 
export { sequelize }