# Get semver from tag action

Gets semver string from a specified tag.

![tests](https://github.com/LykkeBusiness/get-semver-from-tag-action/workflows/tests/badge.svg)

## Inputs

### `tag`

**Required** The tag value.

## Outputs

### `prefixed`

The semver string with a 'v' prefix.

### `non-prefixed`

The semver string with no 'v' prefix.

## Example usage

```
name: Get version
id: semver
uses: LykkeBusiness/get-semver-from-tag-action@v1.0.0
with:
    tag: $GITHUB_REF
```