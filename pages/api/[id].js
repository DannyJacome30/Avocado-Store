import { IncomingMessage, ServerResponse } from 'http'
import DB from '../../database/db'


const AvocadoById = async (request = IncomingMessage, response = ServerResponse ) => {
  const db = new DB();
  const id = request.query.id;
  const entry = await db.getById(id);

  response.status(200).json(entry);
}

export default AvocadoById;
