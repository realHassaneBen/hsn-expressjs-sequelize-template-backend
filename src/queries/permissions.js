import { Permission } from "../models/index.js";

export const findAllPermissionsQuery = async (include = []) => {
    const permissions = await Permission.findAll({ include: [...include] });
    return permissions;
};

export const findByPkPermissionQuery = (id) => {
    const permission = Permission.findByPk(id);
    return permission;
};
export const findOnePermissionQuery = (where) => {
    const permission = Permission.findOne({ where });
    return permission;
};

export const createPermissionQuery = async (permission) => {
    const { title, description, price, UserId, PermissionId, CategoryId } =
        permission;

    const createdPermission = await Permission.create({
        title,
        description,
        price,
        UserId,
        PermissionId,
        CategoryId,
    });
    await createdPermission.setUser(UserId);
    await createdPermission.setPermission(PermissionId);
    return createdPermission;
};

export const updatePermissionQuery = async (id, permission) => {
    await Permission.update(permission, { where: { ...id } });
};

export const deletePermissionQuery = async (id) => {
    await Permission.destroy({
        where: id,
    });
};
