## Simplified methods for NodeJS based on ioredis, preferred to debug redis locally

=====================================================================================

### Get keys
>getKeys(host, port, password, key)

Gets the keys that are present in key. key can be a full length key or prefix of key.

### Get Values
>getKeyValues(host, port, password, key)

Gets the values of key specified in key. Here key is an array containing the keys.

### Add key
>addKey(host, port, password, key, value)

This function caches key and value in redis db.

### Delete key
>deleteKeys(host, port, password, key)

Deletes the keys specified in key, the key may be a full length key or a prefix.

**NOTE: Each method opens and closes the redis connection**
