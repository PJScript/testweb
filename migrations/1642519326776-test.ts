import {MigrationInterface, QueryRunner} from "typeorm";

export class test1642519326776 implements MigrationInterface {
    name = 'test1642519326776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`FlowerInfo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`mbtiCode\` varchar(254) NOT NULL, \`listDesc\` varchar(255) NOT NULL, \`desc\` longtext NOT NULL, \`imgUrl\` varchar(255) NOT NULL, \`nickName\` varchar(255) NOT NULL, \`flowerName\` varchar(255) NOT NULL, \`engName\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_ac246cf2397cfab070aea0569a\` (\`mbtiCode\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(254) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_4a257d2c9837248d70640b3e36\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_4a257d2c9837248d70640b3e36\` ON \`User\``);
        await queryRunner.query(`DROP TABLE \`User\``);
        await queryRunner.query(`DROP INDEX \`IDX_ac246cf2397cfab070aea0569a\` ON \`FlowerInfo\``);
        await queryRunner.query(`DROP TABLE \`FlowerInfo\``);
    }

}
