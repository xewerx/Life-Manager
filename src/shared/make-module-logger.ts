import { pino, type Logger as PinoLogger } from "pino/pino";

export type Logger = PinoLogger;

type MakeModuleLoggerProps = {
  module: string;
};

export const makeModuleLogger = (props: MakeModuleLoggerProps): Logger =>
  pino().child({ ...props, _module_: props.module });
