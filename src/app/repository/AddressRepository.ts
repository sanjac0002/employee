import { getConnection, Repository } from "typeorm";
import { address } from "../entities/address";

export class AddressRepository extends Repository<address> {
    public async createAddress(addressDetails : address){
        const addressConnection  = getConnection().getRepository(address);
        const saveedDetails = await addressConnection.save(addressDetails);
        return saveedDetails;
    }
    public async getAddressById(id: string) {
        const addressRepo = getConnection().getRepository(address);
        return addressRepo.findOne(id);
    }
}