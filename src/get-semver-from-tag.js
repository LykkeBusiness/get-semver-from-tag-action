const core = require('@actions/core');
const semver = require('semver');

async function run() {

    try {

        let version = core.getInput('tag').substring(10);

        if (semver.valid(version)) {

            version = semver.clean(version);

            core.setOutput('non-prefixed', version);
            core.setOutput('prefixed', `v${version}`);

        } else {
            core.setFailed('\'tag\' input contains no version');
        }

    } catch (error) {
        core.setFailed(error.message);
    }

}

module.exports = run;