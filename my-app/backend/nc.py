import netCDF4 as nc
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
import cartopy.crs as ccrs

# Load the NetCDF file
file_path = r'Data/PACE_OCI.20240301_20240331.L3m.MO.CHL.V2_0.chlor_a.0p1deg.NRT.nc'
dataset = nc.Dataset(file_path)

# Extract chlor_a data and latitude/longitude
chlor_a_data = dataset.variables['chlor_a'][:]
lat_data = dataset.variables['lat'][:]
lon_data = dataset.variables['lon'][:]

# Extract the palette
palette = dataset.variables['palette'][:]

# Print the palette to verify its values
print("Original Color Palette:", palette)

# Clean and normalize the palette, removing invalid values
# Assuming invalid values are represented as `--` or 0
palette_cleaned = np.where(palette == 0, np.nan, palette)  # Replace zeros with NaN
palette_normalized = palette_cleaned / 255.0  # Normalize RGB values

# Remove NaNs from the palette for proper colormap creation
palette_valid = palette_normalized[~np.isnan(palette_normalized)]

# Create the colormap
cmap = ListedColormap(palette_valid)

# Create a meshgrid for lat/lon
lon, lat = np.meshgrid(lon_data, lat_data)

# Handle NaN values by masking them
chlor_a_data = np.ma.masked_invalid(chlor_a_data)

# Check the chlorophyll data for min and max values
print("Chlorophyll Min:", np.nanmin(chlor_a_data))
print("Chlorophyll Max:", np.nanmax(chlor_a_data))

# Create the plot using Cartopy
fig = plt.figure(figsize=(12, 6))
ax = plt.axes(projection=ccrs.PlateCarree())

# Plot with proper normalization
chlor_map = ax.pcolormesh(lon, lat, chlor_a_data, cmap=cmap, transform=ccrs.PlateCarree(), 
                           shading='auto', vmin=np.nanmin(chlor_a_data), vmax=np.nanmax(chlor_a_data))

# Add coastlines and gridlines
ax.coastlines()
ax.gridlines(draw_labels=True)

# Add colorbar
cbar = plt.colorbar(chlor_map, ax=ax, orientation='vertical', shrink=0.7)
cbar.set_label('Chlorophyll Concentration (mg/m^3)')

# Add title
plt.title('Global Chlorophyll Concentration for March 2024')

# Show the plot
plt.show()

# Close the dataset
dataset.close()
print("Cleaned and Normalized Palette:", palette_valid)
