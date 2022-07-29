/**
 * @license MITNFA
 * @version 0.0.1
 * @file Main Entry point of "The Server" by Twy'r
 * @author {@link https://github.com/shadyvd|Vish Desai}
 * @name index.js
 * @copyright &copy; {@link https://twyr.github.io|The Server} 2016-2022
 */

/**
 * Dependencies for this file
 *
 * @ignore
 */

import pleaseUpgradeNode from 'please-upgrade-node';
import { readFile } from 'node:fs/promises';

// Sanity check for node versions
const packageJson = JSON?.parse?.(await readFile?.('./package.json'));
pleaseUpgradeNode?.(
	Object.assign({}, packageJson, {
		engines: {
			node: '>=18.0'
		}
	})
);
