from pymongo import MongoClient

# MongoDB connection
uri = "mongodb+srv://devanshu:Rathod%40pace01@cluster0.lvq61.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(uri)
db = client['earthDataDB']

# Collections
collection_carbon = db['paceOCI_carbon_downsampled']
collection_sst = db['paceOCI_sst_downsampled']

# Create indexes for latitude and longitude in carbon and sst collections
collection_carbon.create_index([('latitude', 1), ('longitude', 1)])
collection_sst.create_index([('latitude', 1), ('longitude', 1)])

print("Indexes created successfully!")
