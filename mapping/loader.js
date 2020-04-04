//TODO: to create a bat file for ES initiation...

// 1. create very minimal index:
curl -XPUT "localhost:9200/places?pretty" -H "Content-Type: application/json" -d @init.json
// 2. define mapping: (http://jsonviewer.stack.hu/) <-- to view the json structure
curl -XPUT "localhost:9200/places/_mapping" -H "Content-Type: application/json" -d @places_mapping.json

curl -XPUT "localhost:9200/reviews?pretty" -H "Content-Type: application/json" -d @init.json
curl -XPUT "localhost:9200/reviews/_mapping" -H "Content-Type: application/json" -d @reviews_mapping.json

curl -XPUT "localhost:9200/users?pretty" -H "Content-Type: application/json" -d @init.json
curl -XPUT "localhost:9200/users/_mapping" -H "Content-Type: application/json" -d @users_mapping.json

// check all indexes in table form
curl -XGET "http://localhost:9200/_cat/indices?v"
// check all indexes/mappings
curl -XGET "http://localhost:9200/_mapping?pretty"

// test insert data
curl -X POST "localhost:9200/places/_doc/?pretty" -H "Content-Type: application/json" -d @test/places1.json
curl -X POST "localhost:9200/reviews/_doc/?pretty" -H "Content-Type: application/json" -d @test/reviews1.json
curl -X POST "localhost:9200/users/_doc/?pretty" -H "Content-Type: application/json" -d @test/users1.json
//search by placeId
curl -XGET "http://localhost:9200/places/_search?pretty&q=gPlusPlaceId:104699454385822125632"
curl -XGET "http://localhost:9200/reviews/_search?pretty&q=gPlusPlaceId:106994170641063333085"
curl -XGET "http://localhost:9200/users/_search?pretty&q=gPlusUserId:100000122569601043290"

//delete index:
curl -X DELETE "localhost:9200/places"
curl -X DELETE "localhost:9200/reviews"

