import resource from '../models/resource';

const resourceService = {
  async getResources() {
    const resources = await resource.getResources();
    return resources;
  }
};

export default resourceService;
