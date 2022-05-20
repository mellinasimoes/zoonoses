import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class animals1652184763849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "animals",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "owner_id",
            type: "uuid",
          },
          {
            name: "animal_name",
            type: "varchar",
          },
          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "species",
            type: "varchar",
          },
          {
            name: "breed",
            type: "varchar",
          },
          {
            name: "weight_in_kg",
            type: "varchar",
          },
          {
            name: "birth_day_of_month",
            type: "numeric",
          },
          {
            name: "birth_month",
            type: "numeric",
          },
          {
            name: "birth_year",
            type: "numeric",
          },
          {
            name: "neutering",
            type: "varchar",
          },
          {
            name: "death_day_of_month",
            type: "numeric",
          },
          {
            name: "death_month",
            type: "numeric",
          },
          {
            name: "death_year",
            type: "numeric",
          },
          {
            name: "notes",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKOwnerId",
            referencedTableName: "owners",
            referencedColumnNames: ["id"],
            columnNames: ["owner_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("animals");
  }
}
