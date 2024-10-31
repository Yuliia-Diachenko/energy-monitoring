import createHttpError from 'http-errors';
import { ROLES } from '../constants/index.js';


export const checkRoles =
  (...roles) =>
  async (req, res, next) => {
    const { user } = req;
    if (!user) {
      next(createHttpError(401));
      return;
    }

    const { role } = user;
    if (roles.includes(ROLES.ADMIN) && role === ROLES.ADMIN) {
      next();
      return;
    }

    if (roles.includes(ROLES.USER) && role === ROLES.USER)
        { if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE')
            { next(createHttpError(403));
                 return;
                } next();
                 return;
                }
        next(createHttpError(403));
  };

