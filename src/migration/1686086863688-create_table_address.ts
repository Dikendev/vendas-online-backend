import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddress1686086863688 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
