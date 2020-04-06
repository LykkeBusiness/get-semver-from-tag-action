const core = require('@actions/core');
const semver = require('semver');

async function run() {

    try {

        const tagInput = core.getInput('tag');

        let version = tagInput.substring(10);

        if (semver.valid(version)) {

            version = semver.clean(version);

            core.setOutput('non-prefixed', version);
            core.setOutput('prefixed', `v${version}`);

        } else {
            core.setFailed(`\'tag\' input [${tagInput}] contains no version`);
        }

    } catch (error) {
        core.setFailed(error.message);
    }

}

module.exports = run;