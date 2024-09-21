import gridfs
from pymongo import MongoClient
import io
uri = r"mongodb+srv://devanshu:Rathod%40pace01@cluster0.lvq61.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# Connect to MongoDB
client = MongoClient(uri)
db = client['earthDataDB']
collection =db.collection['paceOCI_downsampled']

# Load and store the NetCDF file from the provided path in GridFS
with open('Data/PACE_OCI.20240301_20240331.L3m.MO.CHL.V2_0.chlor_a.0p1deg.NRT.nc', 'rb') as file:
    file_id = fs.put(file, filename='PACE_OCI.nc')

print(f"NetCDF file stored in GridFS with file_id: {file_id}")
