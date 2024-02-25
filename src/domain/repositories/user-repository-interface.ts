import type { BaseRepository } from "@/abstracts/base-repository";
import type { UserEntity } from "@/domain/entities/user-entity";

export interface UserRepositoryInterface extends BaseRepository<UserEntity> {
    getByEmail: (email: string) => Promise<UserEntity | undefined>;
}
