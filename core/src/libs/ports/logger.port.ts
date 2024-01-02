export interface LoggerPort {
    debug: (message: string, ...meta: unknown[]) => void;
    info: (message: string, ...meta: unknown[]) => void;
    warn: (message: string, ...meta: unknown[]) => void;

    // Error and Fatal are special cases, they can have a stack trace
    error: (message: string, stackTrace?: unknown, ...meta: unknown[]) => void;
    // Fatal is a special case of error, it will exit the process
    fatal: (message: string, stackTrace?: unknown, ...meta: unknown[]) => void;
}

export type LoggerFactory = (context: string) => LoggerPort;

export const DI_LOGGER_PORT = Symbol("LoggerPort");
export const DI_LOGGER_FACTORY = Symbol("LoggerFactory");
