import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCity1686086837458 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
