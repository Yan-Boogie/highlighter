import type { Path, Point, Range } from '.';

/**
 * The `Location` interface is a union of the ways to refer to a specific
 * location in a Highlighter document: paths, points or ranges.
 *
 * Methods will often accept a `Location` instead of requiring only a `Path`,
 * `Point` or `Range`. This eliminates the need for developers to manage
 * converting between the different interfaces in their own code base.
 */

export type Location = Path | Point | Range;
