# 환경변수등록
1. 설치경로 : c:\program files\MongoDB\server\4.2\bin
2. 환경변수 편집 : 위의 경로를 추가

# 몽고 데몬 띄우기
~~~bash
mongod --port15000 --dbpath=c:/mongodb/db1
~~~

# 몽고 쉘 띄우기
~~~shell script
mongo --port 15000
~~~

# 데이터베이스 접근
~~~shell script
show dbs
use sample
db.createCollection("users") #collection 생성
~~~

# collection에서 도큐멘트 사용
~~~shell script
# SELECT, INSERT, UPDATE, DELETE
# INSERT
db.users.insertOne({name: "홍길동", grade: 9})
db.users.insertMany([
	{name: "홍길동", grade: 9},
	{name: "홍길순", grade: 9, company: {name: "홍기업", tel: "02-2222-3333"}},
])

# SELECT
# SELECT * FROM users
db.users.find()

#SELECT * FROM users WHERE name = "홍길동"
db.users.find({name: "홍길동"})

# SELECT * FROM users WHERE name="홍길동" AND grade > 8
db.users.find({name:"홍길동", grade: {$gt: 8}})

# UPDATE
## db.collection.updateOne({조건}, {데이터})
db.users.updateOne({
	name: "홍길동"
}, {
	$set: {grade: 5}
});
db.users.updateMany({
	name: "홍길동"
}, {
	$set: {grade: 4}
});

# DELETE
db.users.deleteOne({ name: "홍길동"});
db.users.deleteMany({ name: "홍길동"});
~~~