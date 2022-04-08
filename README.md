# test-semantic-release
 >Test deployment actions
 - [semantic release](https://github.com/cycjimmy/semantic-release-action)

## Pre-requisites
> In the package json file where the composite action gets implemented
- name needs to be scoped: eg `"name": "@jpbnetley/ui",`
- version in package json needs to be set: ideally: `"version": "0.0.0-dev",`
- `publishConfig.Registry` should only list the registry url, without the org. eg:
  ```
    "publishConfig": {
      "registry": "https://npm.pkg.github.com"
    },

  ```
- repository setting needs to be set: eg
  ```
    "repository": {
      "type": "git",
      "url": "git+https://github.com/jpbnetley/ui.git"
  }
  ```
- `scripts.build`: should build the project
  ```
  `build: babel src -d dist'
  ```

- `scripts.prepublishOnly`: should build the project just before it publishes a release
  ```
  prepublishOnly: npm run build'
  ```

## Partial package json example:
```json
{
  "name": "@jpbnetley/ui",
  "version": "0.0.0-dev",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/jpbnetley/ui.git"
  },
  "scripts": {
    "build": "babel src -d dist",
    "prepublishOnly": "npm run build"
  }
}

```

 ## FAQ:
 - to add a breaking change, add a body containing `BREAKING CHANGE`
  example:  
  `git commit -m 'fix(f1): prints out input var' -m 'BREAKING CHANGE: added f1 input param'`
