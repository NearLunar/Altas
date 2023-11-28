export interface ScannerPort {
    scanIP: (ip: string) => Promise<unknown>;

    scanDomain: (domain: string) => Promise<unknown>;

    scanEmail: (email: string) => Promise<unknown>;
}
