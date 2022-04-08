import { plainToClass } from "class-transformer";
import { roles } from "../entities/roles";
import { rolesRepository } from "../repository/rolesRepository";


export class rolesServices {
    constructor(
        private rolesRepository: rolesRepository
    ) {}

    public async createRoles(rolesInput: any){
        const rolesData = plainToClass( roles, {
            role_name: rolesInput.role_name,
            status: true,
            desc: "KeyValue 123"
        });
        const savedDetails = await this.rolesRepository.createRoles(rolesData);
        return savedDetails;
    }

    public async updateRole(roleID: string, roleDetails: any) {
        const updatedroles = await this.rolesRepository.updateRoleDetails(roleID, roleDetails);
        return updatedroles;

        }

    public async getAllRoles() {
            return this.rolesRepository.getAllRoles();
        }

    public async deleteRoles(roleID: string) {
            return this.rolesRepository.softDeleteRoleById(roleID);
            
        }

    

}
