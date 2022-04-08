import { plainToClass } from "class-transformer";
import { address } from "../entities/address";
import { AddressRepository } from "../repository/AddressRepository";

export class AddressService {
    constructor(
        private addressRepository: AddressRepository
    ) {}
    public async createAddress(addressInput : any){
        const addressData  = plainToClass(address,{
            "streetName": addressInput.streetName,
            "City": addressInput.City,
            "State":addressInput.State,
            "zip":addressInput.zip
        })
        const savedDet = await this.addressRepository.createAddress(addressData);
        return savedDet;
    }
    public async getAddressById(addressId: string) {
        return await this.addressRepository.getAddressById(addressId);
    }
}