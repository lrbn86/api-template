import { Pool } from 'pg';

const db = new Pool({ database: 'resources' });

export default db;
