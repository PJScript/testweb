import {MigrationInterface, QueryRunner} from "typeorm";

export class test1642435879440 implements MigrationInterface {
    name = 'test1642435879440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`FlowerInfo\` DROP COLUMN \`name\``);
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
        await queryRunner.query(`ALTER TABLE \`FlowerInfo\` ADD \`name\` varchar(255) NOT NULL`);
    }

}
