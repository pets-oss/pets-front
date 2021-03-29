export const GenerateUUID = (): string => Date.now().toString(36) + Math.random().toString(36).substr(2);
