// Type definitions for merge2 1.1.0
// Project: https://github.com/teambition/merge2
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Chigozirim C. <https://github.com/smac89>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import {DuplexOptions} from 'stream';

type StreamType = NodeJS.ReadableStream | IMerge2Stream;

interface Merge2Stream extends NodeJS.ReadWriteStream {
    /**
     * @brief      Add more streams to an existing merged stream
     *
     * @param      args  streams to add
     *
     * @return     The merged stream
     */
    add(...args: (StreamType | Array<StreamType>)[]): Merge2Stream;
}

/**
 * @brief      This function takes an arbitrary number of streams, but the duplexoption
 *             has to be the last parameter of the function.
 * @param      args  The arguments
 * @return     A merged duplex stream
 */
declare function IMerge2 (...args: (StreamType | Array<StreamType> | DuplexOptions)[]): Merge2Stream;

declare namespace IMerge2 {}

export = IMerge2;
