jest.mock('@actions/core');

const core = require('@actions/core');
const run = require('../src/get-semver-from-tag.js');

describe('Get semver from tag', () => {

    test('Outputs are set', async () => {

        core.getInput = jest
            .fn()
            .mockReturnValueOnce('refs/tags/v1.2.3');

        core.setOutput = jest.fn();

        await run();

        expect(core.setOutput).toHaveBeenNthCalledWith(1, 'non-prefixed', '1.2.3');
        expect(core.setOutput).toHaveBeenNthCalledWith(2, 'prefixed', 'v1.2.3');
    });

    test('Outputs are default', async () => {

        core.getInput = jest
            .fn()
            .mockReturnValueOnce('refs/tags/non-version')
            .mockReturnValueOnce('true');

        core.setOutput = jest.fn();

        await run();

        expect(core.setOutput).toHaveBeenNthCalledWith(1, 'non-prefixed', '0.0.0');
        expect(core.setOutput).toHaveBeenNthCalledWith(2, 'prefixed', 'v0.0.0');
    });

    test('Action fails elegantly', async () => {
        core.getInput = jest
            .fn()
            .mockReturnValueOnce('refs/tags/non-version');

        core.setOutput = jest.fn();
        core.setFailed = jest.fn();

        await run();

        expect(core.setFailed).toHaveBeenCalledWith('\'tag\' input [refs/tags/non-version] contains no version');
        expect(core.setOutput).toHaveBeenCalledTimes(0);
    });

});