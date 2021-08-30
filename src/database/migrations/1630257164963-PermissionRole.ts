import {MigrationInterface, QueryRunner} from "typeorm";

export class PermissionRole1630257164963 implements MigrationInterface {
    name = 'PermissionRole1630257164963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "permissions_role" ("role_id" uuid NOT NULL, "permission_id" uuid NOT NULL, CONSTRAINT "PK_a4ece1a239ccc211cdeefdf5996" PRIMARY KEY ("role_id", "permission_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_148c57fc24d613ec170c918b46" ON "permissions_role" ("role_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_98a33544e4df79cc3fe9a6606e" ON "permissions_role" ("permission_id") `);
        await queryRunner.query(`ALTER TABLE "permissions_role" ADD CONSTRAINT "FK_148c57fc24d613ec170c918b466" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "permissions_role" ADD CONSTRAINT "FK_98a33544e4df79cc3fe9a6606ed" FOREIGN KEY ("permission_id") REFERENCES "permission"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "permissions_role" DROP CONSTRAINT "FK_98a33544e4df79cc3fe9a6606ed"`);
        await queryRunner.query(`ALTER TABLE "permissions_role" DROP CONSTRAINT "FK_148c57fc24d613ec170c918b466"`);
        await queryRunner.query(`DROP INDEX "IDX_98a33544e4df79cc3fe9a6606e"`);
        await queryRunner.query(`DROP INDEX "IDX_148c57fc24d613ec170c918b46"`);
        await queryRunner.query(`DROP TABLE "permissions_role"`);
    }

}
