const routes = require('./routes');
const UsersHandler = require('./handler');

const usersPlugin = {
  name: 'users',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const usersHandler = new UsersHandler(service, validator);
    server.route(routes(usersHandler));
  },
};

module.exports = usersPlugin;
