# Get semver from tag action

Gets semver string from a specified tag.

![tests](https://github.com/LykkeBusiness/get-semver-from-tag-action/workflows/tests/badge.svg)

## Inputs

### `tag`

**Required** The tag value.

### `allowNoTag`

**Default**: `false`
When set to `true` while run on branches and invalid semver tags, will return a default version of `0.0.0`

## Outputs

### `prefixed`

The semver string with a 'v' prefix.

### `non-prefixed`

The semver string with no 'v' prefix.

## Example usage

```
name: Get version
id: semver
uses: LykkeBusiness/get-semver-from-tag-action@v1.0.2
with:
    tag: ${{ github.ref }}
```