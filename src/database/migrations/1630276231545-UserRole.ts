import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRole1630276231545 implements MigrationInterface {
    name = 'UserRole1630276231545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_role" ("permission_id" uuid NOT NULL, "role_id" uuid NOT NULL, CONSTRAINT "PK_f372d6b28708115f5dc7d6cc64c" PRIMARY KEY ("permission_id", "role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_496b9eec633c366ce6a4a9636c" ON "user_role" ("permission_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_32a6fc2fcb019d8e3a8ace0f55" ON "user_role" ("role_id") `);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_496b9eec633c366ce6a4a9636cf" FOREIGN KEY ("permission_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_role" ADD CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_32a6fc2fcb019d8e3a8ace0f55f"`);
        await queryRunner.query(`ALTER TABLE "user_role" DROP CONSTRAINT "FK_496b9eec633c366ce6a4a9636cf"`);
        await queryRunner.query(`DROP INDEX "IDX_32a6fc2fcb019d8e3a8ace0f55"`);
        await queryRunner.query(`DROP INDEX "IDX_496b9eec633c366ce6a4a9636c"`);
        await queryRunner.query(`DROP TABLE "user_role"`);
    }

}
