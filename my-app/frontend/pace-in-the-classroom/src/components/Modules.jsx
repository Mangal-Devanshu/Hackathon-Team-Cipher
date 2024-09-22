const sections = [
    {
      section: "Oceans and Atmosphere",
      modules: [
        {
          module: 1,
          title: "Oceans and Climate 🌊",
          keyPoints: [
            "Oceans absorb most of the heat from the atmosphere, making them essential for regulating Earth's climate.",
            "Without healthy oceans, climate change could accelerate, leading to extreme weather events like hurricanes."
          ],
          fact: "Oceans store over 90% of Earth's heat.",
          resource: "https://climate.nasa.gov/news/2915/how-ocean-heat-is-fueling-extreme-weather/",
          image: "/lessons/Oceans_and_Climate_Oceans_absorb.jpg",
          discussion: [
            "Why is ocean temperature crucial for predicting climate change?",
            "What happens if the oceans stop absorbing heat?"
          ]
        },
        {
          module: 2,
          title: "Marine Ecosystems 🐟",
          keyPoints: [
            "Plankton, crucial for the marine food chain, are sensitive to temperature changes and pollution.",
            "PACE monitors plankton health to help preserve marine ecosystems."
          ],
          fact: "Plankton produce about 50% of the oxygen we breathe.",
          resource: "https://earthobservatory.nasa.gov/features/OceanCarbon",
          image: "/lessons/Marine_Ecosystems_Plankton_crucial_for_the_marin.jpg",
          discussion: [
            "How does the health of plankton affect global ecosystems?",
            "What would be the impact on the food chain if plankton populations decline?"
          ]
        },
        {
          module: 3,
          title: "Air Quality 💨",
          keyPoints: [
            "Aerosols, tiny particles in the air, come from pollution, volcanoes, and even sea spray.",
            "PACE helps scientists understand how aerosols affect both air quality and climate."
          ],
          fact: "Aerosols can travel thousands of miles through the atmosphere.",
          resource: "https://climate.nasa.gov/news/2915/how-ocean-heat-is-fueling-extreme-weather/",
          image: "/lessons/Quality_Aerosols_tiny_particles_in_the_air.jpg",
          discussion: [
            "What are the major sources of aerosols, and how do they impact health and climate?"
          ]
        },
        {
          module: 4,
          title: "PACE’s Instruments 🔬",
          keyPoints: [
            "PACE uses three main instruments: OCI (ocean color), SPEXone (aerosols), and HARP2 (cloud imaging).",
            "These instruments help scientists track changes in the atmosphere and oceans."
          ],
          fact: "PACE tracks climate change from space.",
          resource: "https://pace.gsfc.nasa.gov/",
          image: "/lessons/nasa_space_satellite_PACEs_Instruments_PACE.jpg",
          discussion: [
            "What makes satellite instruments like OCI, SPEXone, and HARP2 unique?"
          ]
        }
      ]
    },
    {
      section: "Understanding Light",
      modules: [
        {
          module: 5,
          title: "Shedding Light on PACE 💡",
          keyPoints: [
            "PACE uses hyperspectral imaging, which measures light across a wide range of wavelengths.",
            "This technology allows for detailed analysis of how light interacts with Earth's surface and atmosphere."
          ],
          fact: "Hyperspectral imaging provides more details than previous methods.",
          resource: "https://pace.gsfc.nasa.gov/science.html",
          image: "/lessons/PACE_uses_hyperspectral_imaging_which_measures.jpg",
          discussion: [
            "How does light help scientists understand environmental changes?"
          ]
        },
        {
          module: 6,
          title: "What is Light? 🌟",
          keyPoints: [
            "Light can act as both a particle (photon) and a wave.",
            "Light travels through the vacuum of space at 671 million mph."
          ],
          fact: "Light can travel without a physical medium.",
          resource: "https://science.nasa.gov/ems/02_anatomy",
          image: "/lessons/What_is_Light_Light_can_act_as_both_a_particle_p.jpg",
          discussion: [
            "How does the dual nature of light impact scientific research?"
          ]
        },
        {
          module: 7,
          title: "How is Light Categorized? 🌈",
          keyPoints: [
            "Light is part of the electromagnetic spectrum, with visible light being the part we can see.",
            "Blue light has shorter wavelengths and higher energy, while red light has longer wavelengths and lower energy."
          ],
          fact: "Blue light wavelengths are between 450-490 nanometers.",
          resource: "https://science.nasa.gov/ems/01_intro",
          image: "/lessons/What_is_Light_Light_can_act_as_both_a_particle.jpg",
          discussion: [
            "How do different wavelengths of light provide different data for scientists?"
          ]
        }
      ]
    },
    {
      section: "Light Interactions in the Atmosphere",
      modules: [
        {
          module: 8,
          title: "How Does the Atmosphere Interact with Light? 🌥",
          keyPoints: [
            "As light travels through the atmosphere, its intensity decreases due to attenuation.",
            "Some wavelengths pass through easily, while others are absorbed by atmospheric gases."
          ],
          fact: "Certain wavelengths pass through the atmosphere with minimal disruption, known as atmospheric windows.",
          resource: "https://earthdata.nasa.gov/learn/remote-sensing-terms/atmospheric-window",
          image: "/lessons/How_Does_the_Atmosphere_Interact.jpg",
          discussion: [
            "What role do atmospheric windows play in Earth’s energy balance?"
          ]
        },
        {
          module: 9,
          title: "What's That Stuff in the Atmosphere? 🌫️",
          keyPoints: [
            "Gases like nitrogen, oxygen, and carbon dioxide interact with sunlight, altering its intensity.",
            "Aerosols like sea spray, smoke, and dust also affect how much light reaches Earth’s surface."
          ],
          fact: "Aerosols influence both climate and weather patterns.",
          resource: "https://earthobservatory.nasa.gov/features/Aerosols",
          image: "/lessons/Whats_That_Stuff_in_the_Atmosphere_Gases.jpg",
          discussion: [
            "How do aerosols influence climate change?"
          ]
        },
        {
          module: 10,
          title: "Atmospheric Windows and Radiation 🌞",
          keyPoints: [
            "Atmospheric windows allow certain wavelengths of radiation to pass through the atmosphere with minimal disruption.",
            "These windows are crucial for studying both incoming solar radiation and outgoing infrared radiation (heat)."
          ],
          fact: "Atmospheric windows are essential for understanding the greenhouse effect.",
          resource: "https://climate.nasa.gov/news/2432/the-science-of-earths-atmosphere/",
          image: "/lessons/Windows_and_Radiation_Atmospheric.jpg",
          discussion: [
            "Why are atmospheric windows important for studying the greenhouse effect?"
          ]
        },
        {
          module: 11,
          title: "Why is a Red Sky at Night a Sailor’s Delight? 🌅",
          keyPoints: [
            "The color of the sky is influenced by the scattering of light as it passes through the atmosphere.",
            "At sunrise or sunset, red wavelengths dominate because blue light is scattered out due to the low angle of the Sun."
          ],
          fact: "High pressure systems cause red skies, indicating good weather ahead.",
          resource: "https://www.weather.gov/jetstream/visible_light",
          image: "/lessons/Why_is_a_Red_Sky_at_Night_a_Sailors_Delight_The.jpg",
          discussion: [
            "How can sky color be used to predict weather patterns?"
          ]
        }
      ]
    }
  ];
  
  export default sections;
  