import { Region } from '../../types';
declare function byName(name: string, limit?: number): Region[];
declare function byCode(code: string, limit?: number): Region[];
export declare const searchRegion: {
    byName: typeof byName;
    byCode: typeof byCode;
};
export {};
