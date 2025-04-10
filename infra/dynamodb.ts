export const table = new sst.aws.Dynamo('TrifoliumMainTable', {
  fields: {
    deviceId: 'string',
    timestamp: 'number',
  },
  primaryIndex: {
    hashKey: 'deviceId',
    rangeKey: 'timestamp',
  },
  globalIndexes: {
    deviceIdIndex: {
      hashKey: 'deviceId',
    },
  },
})
