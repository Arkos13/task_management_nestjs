import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 54321,
    username: 'app',
    password: 'secret',
    database: 'app',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: false,
    migrations: [__dirname + "/../migration/*.ts"],
    cli: {
        migrationsDir: __dirname + "/../migration"
    }
}