# Steps to reproduce

`yarn develop`

http://localhost:8000/\_\_\_graphql

use the following query

```
{
  allDatoCmsLocalizedString(
    locale: "en",
    sort: {fields: key}
  ) {
    nodes {
      key
      value
    }
  }
}
```

Server crashes with following error in terminal:

```
 ERROR

Cannot read property 'localeState' of undefined



  TypeError: Cannot read property 'localeState' of undefined

  - index.js:42 getI18n
    [test-dato]/[gatsby-source-datocms]/hooks/sourceNodes/createTypes/item/index.js:42:38

  - index.js:126 resolver
    [test-dato]/[gatsby-source-datocms]/hooks/sourceNodes/createTypes/item/index.js:126:24

  - resolvers.ts:711 Object.resolve
    [test-dato]/[gatsby]/src/schema/resolvers.ts:711:20

  - node-model.js:862 resolveField
    [test-dato]/[gatsby]/src/schema/node-model.js:862:19

  - node-model.js:783 resolveRecursive
    [test-dato]/[gatsby]/src/schema/node-model.js:783:28

  - node-model.js:483 LocalNodeModel._doResolvePrepareNodesQueue
    [test-dato]/[gatsby]/src/schema/node-model.js:483:38

  - node-model.js:443
    [test-dato]/[gatsby]/src/schema/node-model.js:443:22

  - task_queues.js:77 processTicksAndRejections
    internal/process/task_queues.js:77:11



error Command failed with exit code 1.
```
