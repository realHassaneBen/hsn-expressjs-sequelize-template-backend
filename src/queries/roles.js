import { Role } from "../models/index.js";

export const findAllRolesQuery = async (include = []) => {
    const roles = await Role.findAll({ include: [...include] });
    return roles;
};

export const findByPkRoleQuery = (id) => {
    const role = Role.findByPk(id);
    return role;
};
export const findOneRoleQuery = (where) => {
    const role = Role.findOne({ where });
    return role;
};

export const createRoleQuery = async (role) => {
    const { title, description, price, UserId, RoleId, CategoryId } = role;

    const createdRole = await Role.create({
        title,
        description,
        price,
        UserId,
        RoleId,
        CategoryId,
    });
    await createdRole.setUser(UserId);
    await createdRole.setRole(RoleId);
    return createdRole;
};

export const updateRoleQuery = async (id, role) => {
    await Role.update(role, { where: { ...id } });
};

export const deleteRoleQuery = async (id) => {
    await Role.destroy({
        where: id,
    });
};
