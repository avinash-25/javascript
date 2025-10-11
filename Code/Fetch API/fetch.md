## 1 Tier architacture

- ui and backend are written in same file.

## 2 tier architecture

- It have 2 part first one is frontend and secodn one is backend(It have database also)

## 3 tier architcture

- it has
   - ui part
   - server
   - database.

### API (Application programming interface)
- Api is nothing just medium between two medium

**REST (Representational State transfer)** - Rule how to communicate between two midumes.

### fetch() will get this two object
1. header
2. body

- in the server have response object
- response have
   1. header (Having metadata)
      - Its an object
      - "content-type"
      - Type of data (json, utf-8, video, audio etc...)
      - length of the content
      - when last modified.
      - cache-control ("mag-age - 60" - it means it will accessible for 1 hour only)

   2. Body (it contains actual data)
      - its an object
      - It contains actual data.
      - data may be Array or Object
      - If we fetch Multiple users data then it will came in the form of Array.
      - If we fetch signle user data then it came in the form of Object.


- If we cant convert the data in json format then it is not readalbe to human.
- If we want promise as return then dont make async function but if we want to proper data then make function async.
- async function always rerurn promise by-default.