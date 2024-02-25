export interface HashingServiceInterface {
    hashString: (input: string, salt?: string) => Promise<string>;
    compareHash: (input: string, hash: string) => Promise<boolean>;
    isHashSameType: (hash: string) => Promise<boolean>;
}
