import ast
import json

# --------- places -------------------------
# read simplejson to json
with open('simplejson/places.simplejson') as f:
    data = f.readlines()
    for i in range(len(data)):
        data[i] = ast.literal_eval(data[i])
        # print(data[i])
        print(json.dumps(data[i]))
# write to json file
with open('simplejson/places.json', 'w') as f:
    json.dump(data, f, sort_keys=True, indent=4 * ' ')

# --------- reviews -------------------------
with open('simplejson/reviews.simplejson') as f:
    data = f.readlines()
    for i in range(len(data)):
        data[i] = ast.literal_eval(data[i])
        # print(data[i])
        print(json.dumps(data[i]))
with open('simplejson/reviews.json', 'w') as f:
    json.dump(data, f, sort_keys=True, indent=4 * ' ')

# --------- users -------------------------
with open('simplejson/users.simplejson') as f:
    data = f.readlines()
    for i in range(len(data)):
        data[i] = ast.literal_eval(data[i])
        # print(data[i])
        print(json.dumps(data[i]))
with open('simplejson/users.json', 'w') as f:
    json.dump(data, f, sort_keys=True, indent=4 * ' ')