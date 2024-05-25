const createResource = (req, res) => {
  return res.json({
    message: 'Creating resource'
  });
};

const getResource = (req, res) => {
  return res.json({
    message: 'GET ALL Resource'
  });
};

const getResourceById = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      message: 'Id parameter required'
    });
  }
  return res.json({
    message: `GET Resource ${id}`,
  });
};

const updateResourceById = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      message: 'Id parameter required'
    });
  }
  return res.json({
    message: `Updating Resource ${id}`
  });
};

const deleteResourceById = (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      message: 'Id parameter required'
    });
  }
  return res.json({
    message: `Deleting Resource ${id}`
  });
};

module.exports = {
  createResource,
  getResource,
  getResourceById,
  updateResourceById,
  deleteResourceById
};
