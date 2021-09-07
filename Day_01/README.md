# Day 1 of Backend module of Devsnest

About Redis and CRUD operations on it.

### What is REDIS ?

REDIS is an open source, in-memory data structure store, used as a database, cache and message broker.

## Methods :-

#### 1. SET

It is used to set value in key in string format.

##### Ex- SET name 'satya' or satya

#### 2. GET

It is used to find value of key.

##### Ex- GET keyName

#### 3. EXISTS

It will check wether key exists or not. If exists then it will return 1 else 0.

##### Ex- EXISTS keyName

#### 4. KEYS *

It will print all keys and not value.

##### Ex- KEYS *

#### 5. FLUSHALL

It will delete all keys and of-course value as well.

##### Ex- FLUSHALL

#### 6. DEL keyName

It will delete a key named keyName.

##### Ex- DEL keyName

#### 7. TTL (Time to Live)

It will return time to expire a key.
If expire time is not setted then it will return -1.

##### Ex- ttl keyName

#### Expire

It will set a time to expire.

##### Ex- expire keyName time(in sec)
