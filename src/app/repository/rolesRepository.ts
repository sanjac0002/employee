import { getConnection, Repository } from "typeorm";
import { roles } from "../entities/roles";

export class rolesRepository extends Repository<roles> {
    Repository: any;
    public async createRoles( rolesDetails: roles){
        const rolesConnection = getConnection().getRepository(roles);
        return rolesConnection.save(rolesDetails);
    }

    public async updateRoleDetails(roles_id: string, rolesDetails: any) {
        const roleRepo = getConnection().getRepository(roles);
        const updateRoles = await roleRepo.update({ role_id: roles_id, deletedAt: null }, {
            role_name: rolesDetails.role_name ? rolesDetails.role_name : undefined
        });
        return updateRoles;
    }

    public async getAllRoles() {
        const rolesRepo = getConnection().getRepository(roles);
        return rolesRepo.findAndCount();
    }
    public async softDeleteRoleById(id: string) {
        const roleRepo = getConnection().getRepository(roles);
        return roleRepo.softDelete({
            role_id:id
        });
    }
}

