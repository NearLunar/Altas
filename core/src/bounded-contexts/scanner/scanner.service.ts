import { inject, injectable, multiInject } from "inversify";
import type { ScannerPort } from "../../libs/ports/scanner.port";
import * as _ from "../..";

@injectable()
export class ScannerService {
    protected readonly logger;

    constructor(
        @multiInject("ScannerPort")
        protected readonly scanners: ScannerPort[],

        @inject(_.DI_LOGGER_FACTORY)
        loggerFactory: _.LoggerFactory,
    ) {
        this.logger = loggerFactory("service.scanner");
    }

    async scanIP(ip: string): Promise<void> {
        this.logger.info("Scanning...");

        const scanPromises = this.scanners.map((scanner) => {
            this.logger.debug(`Scanning with ${scanner.constructor.name}`);
            return scanner.scanIP(ip);
        });

        await Promise.all(scanPromises);

        this.logger.info("Scanning done.");
    }
}
