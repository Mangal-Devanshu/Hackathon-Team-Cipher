import React, { useEffect, useRef, useState } from 'react';
import { scaleLog, scaleLinear } from 'd3-scale';
import { interpolateTurbo, interpolateRdBu, interpolateYlGnBu } from 'd3-scale-chromatic';
import * as d3 from 'd3';

function Map2D({ data, dataType }) {
  const svgRef = useRef(null);
  const [cachedImage, setCachedImage] = useState(null); // State to hold the cached image

  // Caching the image outside the state to persist across re-renders
  const imageCache = useRef({});

  // Define valid ranges for different data types
  const validRanges = {
    chl: { min: 0.001, max: 20.0 },
    sst: { min: 0, max: 30 },
    carbon: { min: 0.01, max: 100 },
  };

  // Define color scales based on data type
  const colorScales = {
    chl: scaleLog().domain([validRanges.chl.min, validRanges.chl.max]).range([0, 1]),
    sst: scaleLinear().domain([validRanges.sst.min, validRanges.sst.max]).range([0, 1]),
    carbon: scaleLog().domain([validRanges.carbon.min, validRanges.carbon.max]).range([0, 1]),
  };

  // Define color interpolation functions based on data type
  const colorInterpolations = {
    chl: interpolateTurbo,
    sst: interpolateRdBu,
    carbon: interpolateYlGnBu,
  };

  useEffect(() => {
    // Check if the image is already cached for the current dataType
    if (imageCache.current[dataType]) {
      setCachedImage(imageCache.current[dataType]);
      return; // Skip map rendering if we have a cached image
    }

    if (data && data.latitudes.length > 0) {
      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove(); // Clear the SVG before drawing

      const width = 800;
      const height = 400;

      const projection = d3.geoEquirectangular()
        .scale(120)
        .translate([width / 2, height / 2]);

      const colorScale = colorScales[dataType];
      const colorInterpolation = colorInterpolations[dataType];

      // Map the data to latitudes, longitudes, and chlorophyll/carbon/SST values
      const mappedData = data.data_values.map((value, i) => ({
        lat: data.latitudes[i],
        lon: data.longitudes[i],
        value,
      }));

      // Render each data point as a circle
      mappedData.forEach((point) => {
        const { lat, lon, value } = point;
        const [x, y] = projection([lon, lat]);

        // Ensure the value is a valid number before using Math.min and Math.max
        const safeValue = isNaN(value) ? validRanges[dataType].min : value;
        const scaledValue = Math.max(validRanges[dataType].min, Math.min(safeValue, validRanges[dataType].max));
        const colorValue = colorScale(scaledValue);
        const color = colorInterpolation(colorValue);

        svg.append('circle')
          .attr('cx', x)
          .attr('cy', y)
          .attr('r', 2)
          .style('fill', color);
      });

      // Convert SVG to base64 image and cache it
      const svgElement = svgRef.current;
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const base64Image = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
      imageCache.current[dataType] = base64Image; // Store in cache
      setCachedImage(base64Image); // Update state with the cached image
    }

    // Cleanup D3 elements when component unmounts or rerenders
    return () => {
      d3.select(svgRef.current).selectAll('*').remove();
    };
  }, [data, dataType]);

  return (
    <div>
      {cachedImage ? (
        <img src={cachedImage} alt="Cached 2D map" width="800" height="400" />
      ) : (
        <svg ref={svgRef} width="800" height="400" />
      )}
    </div>
  );
}

export default Map2D;
