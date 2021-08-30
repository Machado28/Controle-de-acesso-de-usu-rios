import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1629648001779 implements MigrationInterface {
      public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                  new Table({
                        name: 'user',
                        columns: [
                              {
                                    name: 'id',
                                    type: 'uuid',
                                    generationStrategy: 'uuid',
                                    default: 'uuid_generate_v4()',
                              },
                              {
                                    name: 'name',
                                    type: 'varchar',
                              },
                              {
                                    name: 'username',
                                    type: 'varchar',
                              },
                              {
                                    name: 'password',
                                    type: 'varchar',
                              },
                              {
                                    name: 'createdAt',
                                    type: 'date',
                                    default: 'now()',
                              },
                              {
                                    name: 'updatedAt',
                                    type: 'date',
                                    default: 'now()',
                              },
                        ],
                  }),
            );
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('user');
      }
}
