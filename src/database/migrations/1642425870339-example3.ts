import {MigrationInterface, QueryRunner} from "typeorm";

export class example31642425870339 implements MigrationInterface {
    name = 'example31642425870339'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`User\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(254) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_4a257d2c9837248d70640b3e36\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_4a257d2c9837248d70640b3e36\` ON \`User\``);
        await queryRunner.query(`DROP TABLE \`User\``);
    }

}
