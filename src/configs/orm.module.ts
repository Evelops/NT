import { DynamicModule, Provider } from "@nestjs/common";
import { getDataSourceToken } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import {ORM_ENTITY_REPOSITORY} from "../utils/decorators/orm.entity.decorator";

export class TypeOrmCustomModule {
    public static forCustomRepository<T extends new (...args: any[]) => any>(repositories: T[]): DynamicModule {
        const providers: Provider[] = [];
        for (const repository of repositories) {
            const entity = Reflect.getMetadata(ORM_ENTITY_REPOSITORY, repository);
            if (!entity) {
            continue;
        }
    
        providers.push({
            inject: [getDataSourceToken()],
            provide: repository,
            useFactory: (dataSource: DataSource): typeof repository => {
                const baseRepository = dataSource.getRepository<any>(entity);
                return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
            },
        });
    }
    
    return {
        exports: providers,
        module: TypeOrmCustomModule,
        providers,
    };
}
}