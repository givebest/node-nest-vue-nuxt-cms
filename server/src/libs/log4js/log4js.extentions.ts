/**
 * @desc we need upgrade skipIdx=7 so nest module wrapping log4js with 3 more call stack (after tsc)
 *       -> log4js.classes.ts/js
 *       -> logger.service.ts/js from @nestjs/common
 *       -> application usage location
 * @see https://github.com/log4js-node/log4js-node/blob/master/lib/logger.js#L10
 **/

const STACK_REG = /at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/;

export const parseNestModuleCallStack = (data, skipIdx = 7) => {
  const stackLines = data.stack.split('\n').slice(skipIdx);
  const lineMatch = STACK_REG.exec(stackLines[0]);
  if (lineMatch && lineMatch.length === 6) {
    return {
      functionName: lineMatch[1],
      fileName: lineMatch[2],
      lineNumber: parseInt(lineMatch[3], 10),
      columnNumber: parseInt(lineMatch[4], 10),
      callStack: stackLines.join('\n')
    };
  }
  return null;
};
