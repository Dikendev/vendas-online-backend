import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableState1686086828130 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
