import { Request, Response,NextFunction } from "express";

export function verifyNewUserSchema(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, phoneNumber, ...rest } = req.body;

    const unwantedFields = Object.keys(rest);
    if (unwantedFields.length > 0) {
        throw new Error(`Invalid Body. Unwanted fields: ${unwantedFields.join(', ')}`);
    }
    if (!firstName || !lastName || !phoneNumber) {
        throw new Error("Invalid Body");
    }

    next();
}

export function verifyEditUserSchema(req: Request, res: Response, next: NextFunction) {
    const { id,firstName, lastName, phoneNumber, ...rest } = req.body;

    const unwantedFields = Object.keys(rest);
    if (unwantedFields.length > 0) {
        throw new Error(`Invalid Body. Unwanted fields: ${unwantedFields.join(', ')}`);
    }
    if (!id||!firstName || !lastName || !phoneNumber) {
        throw new Error("Invalid Body");
    }

    next();
}