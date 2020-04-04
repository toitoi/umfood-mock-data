# umfood-mock-data

Sample dataset from Google Local Reviews (simpleJson in Python)
- https://cseweb.ucsd.edu/~jmcauley/datasets.html 

How to
- Create a repository on GitHub (<your-username>/<your-repo>)
- Create a db.json file
- Visit https://my-json-server.typicode.com/toitoi/umfood-mock-data to access your server
- No registration. Nothing to install.

Get live data from datahub
- https://datahub.io/docs/getting-started/getting-data

# To spin up ES in docker
```
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.6.2
```
```
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.6.2
```
Reference
https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html

To create indices for new schema and mapping, go to mapping folder
```
curl -XPUT "localhost:9200/places?pretty" -H "Content-Type: application/json" -d @init.json
curl -XPUT "localhost:9200/places/_mapping" -H "Content-Type: application/json" -d @places_mapping.json
```
repeat the steps for users and reviews.

# TODO : 
- batch job to init the es
- batch job to load data using Converter.py


