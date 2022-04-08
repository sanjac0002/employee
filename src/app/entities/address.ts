import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";

@Entity("address")
export class address extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: true })
    public streetName: string;

    @Column({ nullable: false, unique: true })
    public City: string;

    @Column({ nullable: true })
    public State: string;

    @Column({ nullable: false })
    public zip: number;

    @OneToOne((type) => Employee, (employeeDetails) => employeeDetails)
    @JoinColumn()
    public employeeDetails: Employee;
}