import {MigrationInterface, QueryRunner} from "typeorm";

export class typefix1642437464824 implements MigrationInterface {
    name = 'typefix1642437464824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`FlowerInfo\` DROP COLUMN \`desc\``);
        await queryRunner.query(`ALTER TABLE \`FlowerInfo\` ADD \`desc\` longtext NOT NULL`);
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
        await queryRunner.query(`ALTER TABLE \`FlowerInfo\` DROP COLUMN \`desc\``);
        await queryRunner.query(`ALTER TABLE \`FlowerInfo\` ADD \`desc\` varchar(255) NOT NULL`);
    }

}
