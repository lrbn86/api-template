import db from '../db';
import { UUID } from '../types';

const resource = {
  async getResources() {
    const { rows: resources } = await db.query('SELECT * FROM resources');
    return resources;
  },

  async getResourceById(id: UUID) { },

  async updateResourceById(id: UUID) { },

  async deleteResourceById(id: UUID) { },
};

export default resource;
