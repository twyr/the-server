// eslint-disable-next-line node/no-unpublished-import
import { assert } from 'chai';

describe('The Server Test Cases', function () {
	it('Global Snooze for 400ms', async function () {
		const startTime = Date.now();

		// eslint-disable-next-line no-undef
		await snooze(400);

		const endTime = Date.now();

		const snoozeTime = endTime - startTime;
		assert.approximately(snoozeTime, 400, 5, `snoozed for ${snoozeTime}ms`);
	});
});
