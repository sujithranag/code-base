const Redis = require("ioredis");

async function deleteKeys(host, port, password, redisKeyPrefix) {

    const redisInvoker = await getClient(host, port, password)
    try {
        await redisInvoker.keys(redisKeyPrefix).then(function (keys) {
            if (keys.length) {
                console.log('Deleting key/keys: ', keys);
                redisInvoker.del(keys);
            } else {
                console.log('No items to delete');
            }
        })
    } catch (error) {
        console.log('Error occured: ', error);
    } finally {
        redisDisconnect(redisInvoker)
    }
}

async function addKey(host, port, password, redisKey, value) {

    const redisInvoker = await getClient(host, port, password)
    try {
        await redisInvoker.set(redisKey, value, (err, result) => {
            if (err) {
              console.error('Error setting Redis key:', err);
            } else {
              console.log('Redis key set successfully:', result);
            }
        })
    } catch (error) {
        console.log('Error occured: ', error);
    } finally {
        redisDisconnect(redisInvoker)
    }
}

async function getKeys(host, port, password, redisKey) {

    const redisInvoker = await getClient(host, port, password)
    try {
        const result = await redisInvoker.keys(redisKey, (err, result) => {
            if (err) {
              console.error('Error getting Redis key:', err);
            }

            return result;
        })

        return result;
    } catch (error) {
        console.log('Error occured: ', error);
    } finally {
        redisDisconnect(redisInvoker)
    }
}

async function getKeyValues(host, port, password, redisKey) {

    const redisInvoker = await getClient(host, port, password)
    try {
        const result = await redisInvoker.mget(redisKey, (err, result) => {
            if (err) {
              console.error('Error getting Redis key:', err);
            }

            return result;
        })

        return result;
    } catch (error) {
        console.log('Error occured: ', error);
    } finally {
        redisDisconnect(redisInvoker)
    }
}

async function getClient(host, port, password) {

    return new Promise((resolve, reject) => {
        var invoker = ''
        console.log("Redis host url :" + host + ":" + port)
        let options = {
            port: port,
            host: host,
            password: password,
            tls: {},
            connectTimeout: 2000,
            commandTimeout: 500,
            default: true
        }
        invoker = new Redis(options);
        


        invoker.on('connect', () => {
            console.log('Connected to redis cluster');

        });
        invoker.on('ready', () => {
            console.log('Redis connection is ready');
            resolve(invoker)
        });

        invoker.on('error', (err) => {
            console.log('Redis connection is failed : ' + JSON.stringify(err));
            invoker.disconnect()
            reject(err)
        });
    });
}

async function redisDisconnect(redisInvoker) {
    console.log('Disconnecting redis');
    return await redisInvoker.disconnect()
}

module.exports = { deleteKeys, addKey, getKeys, getKeyValues }