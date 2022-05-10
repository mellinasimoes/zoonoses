import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOwners1652183088247 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name:"owners",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type: "varchar",
                    },
                    {
                        name:"cpf",
                        type: "varchar",
                    },
                    {
                        name:"rg",
                        type: "varchar",
                    },
                    {
                        name: "birth_date",
                        type: "timestamp",
                    },   
                    {
                        name: "address",
                        type: "varchar",
                    },   
                    {
                        name: "city",
                        type: "varchar",
                    },   
                    {
                        name: "phone_number",
                        type: "varchar",
                    },    
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("owners");
    }
}
