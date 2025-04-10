/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'trifolium',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    }
  },
  async run() {
    const dynamodb = await import('./infra/dynamodb')
    await import('./infra/api')

    return {
      TrifoliumMainTableName: dynamodb.table.name,
    }
  },
})
