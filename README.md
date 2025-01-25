<h1 align="center" style="font-size: 100px; font-family: 'Arial';"><strong> Team: Space Ciphers </strong></h1>

---

## Contents:

- [Introduction](#introduction)
- [Challenge: PACE in the Classroom](#challenge-pace-in-the-classroom)
  - [Challenge Overview](#challenge-overview)
  - [Summary](#summary)
- [Impact](#impact)
- [Challenge Faced and Solutions](#challenge-faced-and-solutions)
- [Tools We Use](#tools-we-use)
- [Features](#features)
- [Installation and Setup](#installation-and-setup)
- [Application](#application)
  - [Home Page](#home-page)
  - [Explore Page](#explore-page)
  - [Lessons Page](#lessons-page)
  - [Maps Page](#maps-page)
  - [Community Page](#community-page)
- [Schematics](#schematics)
  - [Flowchart 1: Application Architecture](#flowchart-1-application-architecture)
  - [Flowchart 2: backend Request handling](#flowchart-2-backend-request-handling)
- [Team](#team)
  - [Members](#members)
  - [Mentors](#mentors)
  - [Special Thanks](#special-thanks)

---

## Introduction

This project bridges the gap between NASA’s PACE mission satellite data and educational resources. We aim to make oceanic and atmospheric data accessible and engaging for students of all age groups. Through interactive tools and lessons, we foster curiosity and encourage a deeper understanding of ocean literacy.

---

## Challenge: PACE In The Classroom

We are participating in the **Pace in the Classroom** challenge, which focuses on transforming complex data from NASA’s PACE satellite into engaging and digestible educational content for students worldwide.

### Challenge Overview

The **Plankton, Aerosol, Cloud, ocean Ecosystem (PACE) satellite** was launched on **February 8, 2024**, and has been gathering critical data about Earth’s oceans and atmosphere. This data, made publicly available by NASA, is often too technical for students and non-experts to grasp.

Our goal is to bridge this gap by developing engaging, kid-friendly educational materials that turn PACE’s scientific data into lessons for classrooms worldwide, promoting ocean literacy and inspiring curiosity.

### Summary

NASA’s PACE satellite collects essential data on Earth’s atmosphere and oceans, helping scientists understand phytoplankton and ocean-atmosphere interactions. However, the complexity of this data presents a barrier for students. 

Our project aims to convert this intricate data into interactive, engaging content that teachers can integrate into their curriculums, improving ocean literacy and inspiring the next generation to explore Earth sciences.

---

## Impact

With our interactive, easy-to-use tools, we aim to:

- **Increase ocean literacy** among students globally.
- **Inspire curiosity** about Earth sciences and climate change.
- **Empower students** to explore real-time satellite data in a fun and approachable way.

---

## Challenge Faced and Solutions

- **Challenge**: Making NASA’s complex PACE data accessible for younger audiences.
  - **Solution**: Simplified visualizations and tailored lesson materials to make the data engaging.

- **Challenge**: Managing large datasets with limited cloud storage.
  - **Solution**: Down-sampled the data to reduce size.

- **Challenge**: Slow rendering times when displaying the Earth globe data.
  - **Solution**: Added caching to speed up rendering.

- **Challenge**: Stack size exceeded error during data rendering.
  - **Solution**: Implemented data range limits based on metadata to prevent overflow errors.

---

## Tools We Use

- **Frontend**: React + Vite, Three.js, Node.js
- **Backend**: Python-Flask
- **Database/Cloud Storage**: MongoDB Atlas
- **Data Source**: [PACE Ocean Data API](https://oceandata.sci.gsfc.nasa.gov/api/file_search/)
- **AI Tools**: ChatGPT, Leonardo AI
- **Hosting**: Vercel (Frontend), GCP (Backend)
- **Domain**: Porkbun.com

---

## Features

- **Interactive 3D Globe Visualization** using Three.js
- Educational **videos** explaining how PACE collects data.
- Detailed exploration of PACE’s **scientific instruments**.
- **Kid-friendly lessons** and engaging materials.
- Easy-to-navigate **data visualizations**.
- **Simulations** for understanding marine life and atmosphere interactions.

---

## Installation and Setup

- *Clone the Repository:* 

```bash
git clone [repository link]
```

- *Backend:* 

```bash
cd path_to_folder\Hackathon-Team-Cipher\my-app\backend
```

```bash
pip install flask pymongo flask_cors
```

```bash
python .\app.py
```
 
- *Frontend:* 

```bash
cd path_to_folder\Hackathon-Team-Cipher\my-app\frontend\pace-in-the-classroom
```

```bash
npm install
```

```bash
npm run dev
```

---

## Application

### Home Page:

- Interaction with a 3D Earth globe: The Home Page serves as the interactive centerpiece of the project, allowing users to engage with a fully rotatable 3D globe. This immersive feature gives users the ability to explore different parts of the Earth, observe various regions of the ocean and atmosphere, and develop a visual connection to the data. The globe displays real-time environmental information, introducing users to global ecosystems, and providing a contextual understanding of the Earth’s climate systems. This page also sets the stage for deeper learning in subsequent sections.

  ![Home](https://github.com/user-attachments/assets/2bea5b05-9d3c-4f30-b107-16a3d6fc80b7)

  ![Home Page (3)](https://github.com/user-attachments/assets/f0198700-5575-4e7a-a408-f732bdcc732f)

### Explore Page:

- Learn about PACE’s instruments: On the Explore Page, users can delve into the science behind the instruments aboard NASA's PACE satellite. Detailed explanations of the Ocean Color Instrument (OCI), SPEXone polarimeter, and HARP2 polarimeter are paired with interactive visuals. This page is designed to make complex satellite instruments more approachable, explaining how they collect crucial data on ocean color, aerosol properties, and atmospheric particles. Each instrument plays a key role in monitoring Earth's climate, and this page provides a digestible, student-friendly introduction to their functions.
  - Interactive instrument learning: By clicking on the icons or images of the instruments, users are presented with animated descriptions, showing how each one operates in space and collects data. This hands-on experience helps users, particularly students, visualize what these sophisticated devices do in the context of Earth sciences.
    
  ![Explore Page](https://github.com/user-attachments/assets/df82cf2d-3585-43a4-8401-f6d79e24b797)

### Lessons Page:

- Explore lessons on PACE and Earth systems: The Lessons Page is a cornerstone of the educational aspect of this project. It offers structured, interactive lessons for students of various age groups. These lessons cover topics like the science behind PACE’s mission, how its instruments work, and the importance of studying Earth’s oceans and atmosphere. By engaging students with visual explanations, videos, and quizzes, this page encourages active learning and makes complex scientific concepts more accessible.
  
  - Learning modules: Each lesson module is carefully crafted to provide a mix of theory and interactive activities. Students can explore how phytoplankton impacts ocean health, or how aerosols affect the atmosphere, by interacting with on-screen simulations and images. This makes it easier to understand how the data PACE gathers translates into real-world impacts on the environment.
    
  - Self-paced quizzes: After each lesson, students are encouraged to take quizzes to test their understanding. This reinforces learning and makes it more engaging for young minds.

  ![Lessons Page](https://github.com/user-attachments/assets/990a2d3b-73f8-48c3-82e3-f404717aa329)

  ![Lesson1 Page (1)](https://github.com/user-attachments/assets/0d70d257-a0cc-4b2f-9afb-d13992c5617a)

  ![Lesson3](https://github.com/user-attachments/assets/d249484b-0f0d-4119-9c7b-59f812289e8c)

  ![Lesson3 Page](https://github.com/user-attachments/assets/38e20309-395b-4e0c-a4b9-4f68857219a5)

### Maps Page:

- Visualize global data on Chlorophyll, Carbon, and Sea Surface Temperature: The Maps Page offers two distinct visualization tools to help users understand critical environmental data gathered by NASA's PACE satellite. It includes an interactive 3D Earth globe for spatial exploration and Graph Visualization for detailed temporal data analysis.

  - 3D Earth Globe: Users can interact with a fully rotatable 3D globe that displays real-time data for Chlorophyll concentrations, Carbon levels, and Sea Surface Temperature (SST). The 3D view allows users to explore global patterns and observe how ocean and atmospheric conditions vary across different regions of the planet. This visualization helps students and teachers connect large-scale environmental processes with specific geographic locations.
    
  - Graph Visualization: In addition to the 3D globe, the Maps Page also features a Graph Visualization tool that plots the mean values of environmental data, such as Chlorophyll and Carbon concentrations and Sea Surface temperature, over a 30-day period. The graphs display key trends and fluctuations in these metrics, helping users understand how environmental factors change over time. This feature allows students and educators to analyze temporal trends in ocean and atmospheric data.

  - Data insights: The combination of the 3D Earth globe and Graph Visualization offers users a comprehensive understanding of how PACE data translates into real-world impacts. While the 3D globe provides a global overview of Earth's climate and ecosystems, the graphs give a time-based perspective, enabling deeper insights into trends and variations over monthly periods.
    
  ![Globe](https://github.com/user-attachments/assets/febbcfed-cf88-43e0-a88e-5b6e2124a725)

  ![Graph](https://github.com/user-attachments/assets/4b724d43-281e-4fe2-af3b-693e38e98361)

### Community Page:

- Collaborative learning and idea sharing: The Community Page is designed to foster interaction between learners, educators, and contributors from around the world. It encourages the sharing of ideas, feedback, and projects based on the PACE data and learning materials. Users can upload their own projects, post questions, and engage in discussions with others working on similar topics, creating a sense of community and collaborative learning.
 
  - Global participation: The Community Page encourages participation from different parts of the world, making it a global platform for sharing knowledge about ocean literacy and environmental science.

  ![Community Page](https://github.com/user-attachments/assets/37bf811c-2685-4c3f-a2c4-873105f5e801)

---

## Schematics

### Flowchart 1: Application Architecture

This flowchart represents the architecture of an application with a focus on the interaction between the frontend, backend, and database.

1. **Application (Frontend)**
   - The application frontend is built using React and Vite, deployed on Vercel.
   - It handles user interactions and makes API requests to the backend.

2. **React + Vite Project on Vercel (Frontend)**
   - The frontend framework handles user inputs and sends API requests to the backend to process user interactions like authentication, data fetching, and saving.

3. **MongoDB (Database)**
   - MongoDB is used for database operations. It handles data retrieval, update, and delete operations in response to requests from the backend.

4. **User Interactions (Frontend)**
   - The user interacts with the frontend, which triggers authentication or data-related operations.
   - These operations are handled by API requests sent to the backend, which communicates with the database.

5. **Python Flask Project on GCP (Backend)**
   - The backend is a Python Flask project hosted on Google Cloud Platform (GCP).
   - It handles the API requests from the frontend, processes the data, and communicates with the MongoDB database to complete the requested operations.

6. **Flow of Data**
   - Data flows between the frontend, backend, and database through API requests.
   - The frontend initiates requests, the backend processes them, and the database responds with the necessary data. The backend sends the processed data back to the frontend for user display.

   ![Flow_Chart](https://github.com/user-attachments/assets/749a942d-cbee-4d24-9420-52cd9b31b545)

### Flowchart 2: Backend Request Handling

This flowchart outlines how backend requests are handled from user interactions to database queries and error handling.

1. **User Inputs and Interactions**
   - Users interact with the frontend by inputting data or making requests.

2. **API Requests to Backend**
   - The frontend sends API requests to the backend for processing.

3. **Handling Incoming Requests on Flask**
   - The Flask backend receives incoming requests and processes them accordingly.

4. **Database Operations**
   - The backend sends a query to the database to retrieve or update data based on the user request.

5. **Database**
   - The database processes the query and sends the requested data back to the backend.

6. **Backend Processing**
   - The backend processes the data and prepares it for sending back to the frontend.

7. **Flow of Data Between Frontend and Backend**
   - The data flows back to the frontend from the backend.

8. **Error Handling and Feedback Loops**
   - Any errors that occur during data processing are handled by the backend, and feedback is provided to the frontend.

9. **Displays on the Frontend**
   - The processed data is displayed on the frontend for the user to interact with. 

   ![Flowchart](https://github.com/user-attachments/assets/9efcb99a-8bef-4840-8c4a-f9c8fc59a8a3)

---

## Team

### Members:

- **Devanshu Mangal** - Frontend and Backend.
- **Ronit Rathod** - Backend, Database and Video Editor.
- **Dhairya Prajapati** - Frontend.
- **Manan Tarsariya** - Backend and Literature Survey.
- **Jit Prajapati** - Website Deployment.
- **Jainex Pumbhadiya** - Website Deployment.

We are student of 2nd Year, Computer Engineering Department, SCET, Surat.

### Mentors:

- **Mr. Nishant Painter** - CEO and Founder, Shivantra.
- **Prof. (Dr.) Bintu Kadhiwala** - Assistant Professor, Computer Engineering Department, SCET, Surat.

### Special Thanks:

- Special thanks to **Prof. Dhatri Pandya** (Assistant Professor, Computer Engineering Department, SCET, Surat) for her guidance. 
- Thanks to **NASA** for access to PACE satellite data.

---
