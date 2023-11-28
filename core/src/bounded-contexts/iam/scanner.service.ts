import { multiInject } from "inversify";
import type { ScannerPort } from "../../libs/ports/scanner.port";

export class ScannerService {
    constructor(
        @multiInject("ScannerPort")
        protected readonly scanners: ScannerPort[],
    ) {}
}
