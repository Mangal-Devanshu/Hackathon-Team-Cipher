from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}) 


# MongoDB connection
uri = "mongodb+srv://manan:Rathod%40pace01@manan0.hskga.mongodb.net/chlorophyll_data?retryWrites=true&w=majority"
client = MongoClient(uri)
db = client['APRIL_DownSample']

# Collections
collections = {
    'chl': db['Chlorophyll_6'],
    'carbon': db['Carbon_6'],
    'sst': db['SST_6']
}

# In-memory cache to avoid fetching the same data multiple times
cache = {}

# Function to fetch paginated data based on lat/lon ranges and chunk size
def get_paginated_data(start_lat, start_lon, lat_chunk_size, lon_chunk_size, dataset):
    try:
        cache_key = f"{dataset}_{start_lat}_{start_lon}_{lat_chunk_size}_{lon_chunk_size}"
        if cache_key in cache:
            return cache[cache_key]

        # Select the appropriate collection based on dataset
        collection = collections.get(dataset)
        if collection is None:
            return None

        # Fetch documents from MongoDB that match the latitude and longitude ranges
        documents = list(collection.find({
            'latitude': {'$gte': start_lat, '$lt': start_lat + lat_chunk_size},
            'longitude': {'$gte': start_lon, '$lt': start_lon + lon_chunk_size}
        }))

        # Prepare data for the response
        if not documents:
            return None

        # Extract data from the MongoDB documents
        latitudes = []
        longitudes = []
        data_values = []

        for document in documents:
            latitudes.append(document['latitude'])
            longitudes.append(document['longitude'])
            data_values.append(
                document.get('chlorophyll_a') or
                document.get('carbon_phyto') or
                document.get('sst')
            )

        data = {
            'latitudes': latitudes,
            'longitudes': longitudes,
            'data_values': data_values
        }

        # Cache the result for future requests
        cache[cache_key] = data
        return data
    except Exception as e:
        print(f"Unexpected error: {e}")
        return None

@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        # Get pagination parameters from request query
        start_lat = float(request.args.get('start_lat', 0))
        start_lon = float(request.args.get('start_lon', 0))
        lat_chunk_size = float(request.args.get('lat_chunk_size', 10))
        lon_chunk_size = float(request.args.get('lon_chunk_size', 10))
        dataset = request.args.get('dataset', 'chl')  # Default to 'chl'

        # Get paginated data
        data = get_paginated_data(start_lat, start_lon, lat_chunk_size, lon_chunk_size, dataset)

        if data:
            return jsonify(data)
        else:
            return jsonify({'message': 'No data found for this range'}), 404
    except ValueError:
        return jsonify({'message': 'Invalid parameters'}), 400


uri_Commit = "mongodb+srv://devanshumangalco23d2:devanshu1.@cluster0.pcklg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Connect to MongoDB
client2 = MongoClient(uri_Commit)
db_commit = client2['CommitmentCards']  # Database name
collection_commit = db_commit['Cards']  # Collection name
collection_groups = db_commit['Groups']  # Groups collection

@app.route('/groups/search', methods=['GET'])
def search_groups():
    try:
        query = request.args.get('name', '')
        print("Search query received:", query)  # Log the query for debugging
        if not query:
            return jsonify({"error": "No search query provided"}), 400
        
        # Search groups by name (case-insensitive)
        groups = list(collection_groups.find({"name": {"$regex": query, "$options": "i"}}))
        for group in groups:
            group['_id'] = str(group['_id'])  # Convert ObjectId to string
        print("Groups found:", groups)  # Log found groups
        return jsonify(groups), 200
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500
    
@app.route('/groups', methods=['GET'])
def get_groups():
    try:
        groups = list(collection_groups.find())  # Fetch all groups from the collection
        for group in groups:
            group['_id'] = str(group['_id'])  # Convert ObjectId to string
        return jsonify(groups), 200  # Return the groups in JSON format
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500



@app.route('/groups', methods=['POST'])
def create_group():
    try:
        group_data = request.json
        group_name = group_data.get("name")
        privacy = group_data.get("privacy")
        password = group_data.get("password")

        # Validate input
        if not group_name or not privacy:
            return jsonify({"error": "Group name and privacy are required"}), 400

        # Check if the group name is unique
        existing_group = collection_groups.find_one({"name": group_name})
        if existing_group:
            return jsonify({"error": "Group name must be unique"}), 400

        # Insert the new group
        new_group = {
            "name": group_name,
            "privacy": privacy,
            "password": password if privacy == 'private' else None  # Only store password if privacy is private
        }
        insert_result = collection_groups.insert_one(new_group)
        inserted_group = collection_groups.find_one({"_id": insert_result.inserted_id})
        inserted_group['_id'] = str(inserted_group['_id'])  # Convert ObjectId to string

        return jsonify(inserted_group), 201
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/groups/<group_id>/verify-password', methods=['POST'])
def verify_group_password(group_id):
    try:
        password = request.json.get('password')
        group = collection_groups.find_one({"_id": ObjectId(group_id)})
        if group['privacy'] == 'private' and group['password'] == password:
            return jsonify({"success": True}), 200
        else:
            return jsonify({"success": False}), 403
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/groups/<group_id>/commitments', methods=['POST'])
def add_commitment_to_group(group_id):
    try:
        group = collection_groups.find_one({"_id": ObjectId(group_id)}) 
        if group['privacy'] == 'private':
            password = request.json.get('password')
            if password != group['password']:
                return jsonify({"error": "Invalid password"}), 403

        # Proceed with commitment creation
        new_commitment = {
            "title": request.json.get('title'),
            "description": request.json.get('description'),
            "group_id": group_id,
        }
        insert_result = collection_commit.insert_one(new_commitment)
        inserted_commitment = collection_commit.find_one({"_id": insert_result.inserted_id})
        inserted_commitment['_id'] = str(inserted_commitment['_id'])
        return jsonify(inserted_commitment), 201
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500
    
@app.route('/groups/<group_id>/commitments', methods=['GET'])
def get_commitments_for_group(group_id):
    try:
        # Fetch commitments for the specified group_id
        commitments = list(collection_commit.find({"group_id": group_id}))
        for commitment in commitments:
            commitment['_id'] = str(commitment['_id'])  # Convert ObjectId to string
        return jsonify(commitments), 200
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500
    

@app.route('/commitments', methods=['GET'])
def get_commitments():
    print("GET /commitments called")  # Log when this endpoint is hit
    commitments = list(collection_commit.find())
    for commitment in commitments:
        commitment['_id'] = str(commitment['_id'])  # Convert ObjectId to string
    return jsonify(commitments)

@app.route('/commitments', methods=['POST'])
def add_commitment():
    try:
        new_commitment = request.json
        
        # Validate incoming data
        if not new_commitment or not isinstance(new_commitment, dict):
            return jsonify({"error": "Invalid input data"}), 400
        
        title = new_commitment.get("title")
        description = new_commitment.get("description")

        if not title or not isinstance(title, str) or not description or not isinstance(description, str):
            return jsonify({"error": "Title and description must be non-empty strings"}), 400
        
        # Insert new commitment into the database
        insert_result = collection_commit.insert_one(new_commitment)
        
        # Fetch the inserted document
        inserted_commitment = collection_commit.find_one({"_id": insert_result.inserted_id})
        
        # Convert ObjectId to string
        inserted_commitment['_id'] = str(inserted_commitment['_id'])
        
        return jsonify(inserted_commitment), 201
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)