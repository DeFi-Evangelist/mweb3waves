/// <reference types="data" />
declare type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
export declare type DispatchedActions<T> = Omit<Pick<Exclude<T, 'default'>, FunctionPropertyNames<T>>, 'default'>;
export default function useDispatchedActions<T extends object>(actions: T): Pick<Pick<Exclude<T, "default">, { [K in keyof T]: T[K] extends Function ? K : never; }[keyof T]>, Exclude<{ [K in keyof T]: T[K] extends Function ? K : never; }[keyof T], "default">>;
export {};
