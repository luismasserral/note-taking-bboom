const UserProvider = require('./../providers/user');
const AuthService = require('./../services/auth');

const login = async (req, res) => {
  try {
    const user = await UserProvider.findByEmail(req.body.email);

    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).send({ error: 'Wrong user or password' });
    }

    const token = AuthService.generateToken({ id: user.id });

    return res.status(200).send({ token });
  } catch (error) {
    return res.status(500).send({ error: 'Server error' });
  }
};

module.exports = {
  login,
};
