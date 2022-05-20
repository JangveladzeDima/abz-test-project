"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseConfiguration = () => ({
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'dikadika007',
    name: 'development-company',
    autoLoadEntities: true,
    synchronize: true,
});
exports.default = () => ({
    db: databaseConfiguration()
});
//# sourceMappingURL=config.js.map