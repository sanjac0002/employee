import {MigrationInterface, QueryRunner} from "typeorm";

export class addressTable1649332837688 implements MigrationInterface {
    name = 'addressTable1649332837688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street_name" character varying, "city" character varying NOT NULL, "state" character varying, "zip" integer NOT NULL, "employee_details_id" uuid, CONSTRAINT "UQ_44e36a64ebd336dc0a85770e367" UNIQUE ("city"), CONSTRAINT "REL_36db2361c1257c53a35e8f2677" UNIQUE ("employee_details_id"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_36db2361c1257c53a35e8f26777" FOREIGN KEY ("employee_details_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_36db2361c1257c53a35e8f26777"`);
        await queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
