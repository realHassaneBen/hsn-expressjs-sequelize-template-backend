import { Resource } from "../models/index.js";

export const findAllResourcesQuery = async (include = []) => {
    const resources = await Resource.findAll({ include: [...include] });
    return resources;
};

export const findByPkResourceQuery = (id) => {
    const resource = Resource.findByPk(id);
    return resource;
};
export const findOneResourceQuery = (id) => {
    const resource = Resource.findOne({ where: id });
    return resource;
};

export const createResourceQuery = async (resource) => {
    const { title, description, price, UserId, ResourceId, CategoryId } =
        resource;

    const createdResource = await Resource.create({
        title,
        description,
        price,
        UserId,
        ResourceId,
        CategoryId,
    });
    await createdResource.setUser(UserId);
    await createdResource.setResource(ResourceId);
    return createdResource;
};

export const updateResourceQuery = async (id, resource) => {
    await Resource.update(resource, { where: { ...id } });
};

export const deleteResourceQuery = async (id) => {
    await Resource.destroy({
        where: id,
    });
};
