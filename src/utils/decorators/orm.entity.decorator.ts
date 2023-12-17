import { SetMetadata } from "@nestjs/common";

export const ORM_ENTITY_REPOSITORY = 'orm_entity_repository';

export function CustomRepository(entitiy: Function): ClassDecorator {
    return SetMetadata(ORM_ENTITY_REPOSITORY, entitiy);
}