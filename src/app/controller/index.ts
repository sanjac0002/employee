/**
 * Wraps Controllers for easy import from other modules
 */
import { Repository } from "typeorm";
import { Employee } from "../entities/Employee";
import { AddressRepository } from "../repository/AddressRepository";
import { DepartmentRepository } from "../repository/DepartmentRepository";
import { EmployeeRepository } from "../repository/EmployeeRepository";
import { ProjectsRepository } from "../repository/ProjectsRepository";
import { rolesRepository } from "../repository/rolesRepository";
import { AddressService } from "../services/AddressService";
import { DepartmentService } from "../services/DepartmentService";
import { EmployeeService } from "../services/EmployeeService";
//import { rolesService } from "../services/rolesServices";
import { ProjectsService } from "../services/ProjectsService";
import { rolesServices } from "../services/rolesServices";
import AddressController from "./AddressController";
import DepartmentController from "./DepartmentController";
import EmployeeController from "./EmployeeController";
import HealthController from "./HealthController";
import ProjectsController from "./ProjectsController";
import rolesController from "./rolesController";




// const employee = new Employee();
const employeeRepository = new EmployeeRepository();
const employeeService = new EmployeeService(employeeRepository);

const departmentRepository = new DepartmentRepository();
const departmentService = new DepartmentService(departmentRepository);

const projectsRepository = new ProjectsRepository();
const projectsService = new ProjectsService(projectsRepository);

const roleRepository = new rolesRepository();
const roleService = new rolesServices(roleRepository);


const addressRepository = new AddressRepository();
const addressService = new AddressService(addressRepository);


export default [
  new HealthController(),
  new EmployeeController(employeeService),
  new DepartmentController(departmentService),
  new ProjectsController(projectsService),
  new rolesController(roleService),
  new AddressController(addressService)
];
