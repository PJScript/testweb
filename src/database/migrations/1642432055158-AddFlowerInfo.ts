import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFlowerInfo1642432055158 implements MigrationInterface {
    name = 'AddFlowerInfo1642432055158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`FlowerInfo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`mbtiCode\` varchar(254) NOT NULL, \`name\` varchar(255) NOT NULL, \`listDescDesc\` varchar(255) NOT NULL, \`desc\` varchar(255) NOT NULL, \`imgUrl\` varchar(255) NOT NULL, \`nickName\` varchar(255) NOT NULL, \`flowerName\` varchar(255) NOT NULL, \`engName\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_ac246cf2397cfab070aea0569a\` (\`mbtiCode\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`firstName\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`firstName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`lastName\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`lastName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`lastName\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`lastName\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`firstName\``);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`firstName\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_ac246cf2397cfab070aea0569a\` ON \`FlowerInfo\``);
        await queryRunner.query(`DROP TABLE \`FlowerInfo\``);
    }
}
