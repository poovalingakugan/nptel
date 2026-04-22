export const questionsByDepartment = {
  "sensors-and-actuators": {},
  "industry-4-0-and-industrial-iot": {},
  "blockchain-and-its-applications": {}
};

// Sensors and Actuators - Week 1 questions
questionsByDepartment["sensors-and-actuators"][1] = [
  {
    id: 1,
    question: "Evaluate whether the below statement is true or false: \"A sensor acquires a physical parameter and converts it into a signal suitable for processing (e.g. optical, mechanical, electrical etc.)\"",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 2,
    question: "VOC stands for",
    options: ["Volumetric Organic components", "Volatile Organism Component", "Volatile Organic Compound", "Volatile Organs Compounds"],
    answer: 2
  },
  {
    id: 3,
    question: "Which among the following sensors are used to detect VOCs exhaled from breath?",
    options: ["Ultrasonic sensors", "Gas sensors", "Infrared sensors", "Light Sensors"],
    answer: 1
  },
  {
    id: 4,
    question: "What is the fundamental formula used to determine the resistance (R) of a material based on its physical dimensions and material property?",
    options: ["R=V/I (Ohm's Law)", "R=I/V", "R=ρ×L/A (Resistivity × Length / Area)"],
    answer: 2
  },
  {
    id: 5,
    question: "Why is a cleanroom environment essential during the fabrication of semiconductor based sensors?",
    options: ["To reduce the temperature during fabrication", "To prevent contamination by impurities", "To control the rotation of the seed holder", "To carry out thermal oxidation"],
    answer: 1
  },
  {
    id: 6,
    question: "Interdigitated electrodes (IDEs) can be used to measure the change in the impedance values of different materials placed on them.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 7,
    question: "Field Emission Scanning Electron Microscopy (FESEM) can be used to observe the change in the ____________ of cancerous tissue compared to normal tissue.",
    options: ["Temperature", "Morphology", "Conductivity", "Volume"],
    answer: 1
  },
  {
    id: 8,
    question: "MEMS is the acronym for ___________",
    options: ["Micro Electro Material Systems", "Micro Electro Mechanical Systems", "Micro Electric Machining Systems", "Micro Electric Monitoring Systems"],
    answer: 1
  },
  {
    id: 9,
    question: "Which of the following can be measured using a Piezo-electric transducer?",
    options: ["Velocity", "Displacement", "Force", "Sound"],
    answer: 2
  },
  {
    id: 10,
    question: "Which of the following stimulus is best suitable for the quantities such as \"refractive index, reflectivity, absorption\" with regards to sensors?",
    options: ["Acoustic", "Magnetic", "Optical", "Both a and c"],
    answer: 2
  }
];

// Sensors and Actuators - Week 2 questions
questionsByDepartment["sensors-and-actuators"][2] = [
  {
    id: 11,
    question: "Evaluate whether the following statement is true or false: \"The four basic components of MEMS are microelectronics, microsensors, microactuators and microstructures.\"",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 12,
    question: "The role of 'microsensors' in a MEMS device is to constantly do what?",
    options: ["Process data", "Activate an external device", "Gather data from the environment", "Build structures onto the chip"],
    answer: 2
  },
  {
    id: 13,
    question: "Consider the following two statements: S1: Transducer is one type of sensor. S2: Sensitivity of a sensor is the change in output for a change in input. Which option is correct for the given statements?",
    options: ["Both S1 and S2 are correct", "S1 is correct, but S2 is incorrect", "S1 is incorrect, but S2 is correct", "Both S1 and S2 are incorrect"],
    answer: 2
  },
  {
    id: 14,
    question: "Which of the following is an example of a technique used in chemical deposition?",
    options: ["Sputtering", "Evaporation", "Thermal evaporation", "Atomic Layer Deposition (ALD)"],
    answer: 3
  },
  {
    id: 15,
    question: "Which of the following is a physical vapour deposition technique?",
    options: ["E-beam evaporation", "Sputtering", "Thermal evaporation", "All of the above"],
    answer: 3
  },
  {
    id: 16,
    question: "In the photolithography process, after UV exposure, which statement correctly describes positive and negative photoresists?",
    options: ["In positive photoresist, exposed regions become stronger and in negative photoresist, exposed regions become weaker", "In positive photoresist, exposed regions become weaker and in negative photoresist, exposed regions become stronger", "In both photoresists, exposed regions become stronger", "In both photoresists, exposed regions become weaker"],
    answer: 1
  },
  {
    id: 17,
    question: "In a class 10000 cleanroom, what is the primary purpose of HEPA filters and positive pressure?",
    options: ["HEPA filters remove chemicals and positive pressure lowers temperature", "HEPA filters reduce particulate count and positive pressure prevents unfiltered air from entering", "HEPA filters increase humidity and positive pressure increases air flow", "HEPA filters add oxygen and positive pressure reduces particulate count"],
    answer: 1
  },
  {
    id: 18,
    question: "What is the purpose of an autoclave when working with bacteria or cells?",
    options: ["To measure impedance values", "To avoid unnecessary vibration", "To kill bacteria or cells before discarding biological waste", "To remove dissolved solvents in photoresist"],
    answer: 2
  },
  {
    id: 19,
    question: "Evaluate whether the below statement is true or false: \"Inverted microscopes are generally used for observing cells and organisms in culture, in petri dishes, flasks or microplates.\"",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 20,
    question: "Cleanrooms are the primary facility required for all fabrication processes. They are classified based on different standards. One such classification is the FED STD 209E standard. As per this standard, what do you mean by class 1000 cleanroom?",
    options: ["Not more than 1000 particles of 0.5 μm size per cubic foot of air", "Not more than 100 particles of 0.5 μm size per cubic foot of air", "Not more than 100 particles of 0.5 nm size per cubic foot of air", "Not more than 1000 particles of 0.5 nm size per cubic foot of air"],
    answer: 0
  }
];

// Sensors and Actuators - Week 3 questions
questionsByDepartment["sensors-and-actuators"][3] = [
  {
    id: 21,
    question: "Evaluate whether the following statement is true or false: \"Deep reactive ion etching enables very high aspect ratio etches to be performed into the silicon substrates.\"",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 22,
    question: "Which among the following materials can be used to fabricate microheaters?",
    options: ["Diamond", "Silicon dioxide", "Nichrome", "Glass"],
    answer: 2
  },
  {
    id: 23,
    question: "Complete the following: \"In _______ wet etching, the etch rate is dependent on crystallographic orientation of the substrate.\"",
    options: ["Isotropic", "Anisotropic", "Anisotropic and Isotropic", "None of the above"],
    answer: 1
  },
  {
    id: 24,
    question: "What does the LCR meter measure?",
    options: ["Temperature", "RPM", "Voltage", "Impedance values in various experiments"],
    answer: 3
  },
  {
    id: 25,
    question: "What technique is used to form the diaphragm in the fabrication process?",
    options: ["Thermal oxidation", "Micromachining", "Physical Vapor Deposition (PVD)", "Spin coating"],
    answer: 1
  },
  {
    id: 26,
    question: "In Surface Micromachining, what is the layer that is removed to allow movement of the structural layer called?",
    options: ["Structural layer", "Metal layer", "Sacrificial layer", "Substrate layer"],
    answer: 2
  },
  {
    id: 27,
    question: "For etching hundreds or even thousands of microns into a silicon substrate, which process is typically used to achieve smoother walls compared to wet etching?",
    options: ["Wet etching", "Reactive Ion Etching (RIE)", "Deep RIE (DRIE)", "Thermal oxidation"],
    answer: 2
  },
  {
    id: 28,
    question: "In the context of drug screening using interdigitated electrodes with cancer cells/spheroids and Matrigel, what outcome indicates that a drug is effective, and which measurement is used to confirm this?",
    options: ["Cells survive, causing an increase in impedance", "Cells die (lysing), causing a decrease in conductivity", "Cells die (lysing), causing an increase in conductivity and a decrease in impedance", "Cells survive, causing a decrease in impedance"],
    answer: 2
  },
  {
    id: 29,
    question: "What kind of light is used to sterilize the work environment of a biosafety?",
    options: ["White light", "LED light", "UV light", "Incandescent light"],
    answer: 2
  },
  {
    id: 30,
    question: "Evaluate whether the following statement is true or false: The micromanipulator is a system used to precisely manipulate an indenter onto tissue by applying a force, with the manipulation occurring in micron steps or micron dimensions.",
    options: ["True", "False"],
    answer: 0
  }
];

// Sensors and Actuators - Week 4 questions
questionsByDepartment["sensors-and-actuators"][4] = [
  {
    id: 31,
    question: "PDMS stands for:",
    options: ["Polydimethyl Silicon", "Polydimethylsiloxane", "Polydimethyl Silicone", "Polydimethyl Silicate"],
    answer: 1
  },
  {
    id: 32,
    question: "In PDMS moulding, the silicone elastomer and the curing agent are typically mixed in a ratio of:",
    options: ["1:10", "5:1", "10:1", "20:1"],
    answer: 2
  },
  {
    id: 33,
    question: "What is the main advantage of a peristaltic pump over a syringe pump for long-duration drug delivery experiments (e.g., 48 hours)?",
    options: ["Peristaltic pumps are more accurate.", "Syringe pumps cannot handle microfluidic applications.", "Peristaltic pumps can be used in a continuous closed-loop system, unlike syringe pumps which require refilling.", "Peristaltic pumps use lower voltage motors."],
    answer: 2
  },
  {
    id: 34,
    question: "Which of the following statements regarding DC motor control is/are true? i) The L298N motor driver can control only one DC motor at a time. ii) A DC motor will rotate in the opposite direction if the polarity of the applied potential across its terminals is reversed.",
    options: ["Only i", "Only ii", "Both i and ii", "Neither i nor ii"],
    answer: 1
  },
  {
    id: 35,
    question: "The Serial Monitor function in the Arduino IDE is used to:",
    options: ["Program the Arduino board.", "Control the speed of a motor.", "Display data that Arduino sends to the PC.", "Upload the code to the Arduino board."],
    answer: 2
  },
  {
    id: 36,
    question: "During the fabrication of interdigitated electrodes, which material is deposited before the deposition of a thick layer of gold for strong adhesion of gold to the substrate?",
    options: ["Nickel", "Platinum", "Chrome", "Silver"],
    answer: 2
  },
  {
    id: 37,
    question: "Evaluate whether the below statement is true or false: \"Matrigel act as intracellular matrix for the cells.\"",
    options: ["True", "False"],
    answer: 1
  },
  {
    id: 38,
    question: "Arduino is usually programmed using an IDE. What does IDE stand for in this context?",
    options: ["Integrated Design Environment", "Integrated Development Environment", "Integrated Development Electronics"],
    answer: 1
  },
  {
    id: 39,
    question: "What is the optimum temperature and duration for curing the PDMS mould as demonstrated during the lab session?",
    options: ["70 degree centigrade for 1 hour", "80 degree centigrade for 2 hours", "70 degree centigrade for 2 hours", "60 degree centigrade for 1 hour"],
    answer: 2
  },
  {
    id: 40,
    question: "MEMS-based sensors can be used for",
    options: ["Pacemaker applications", "Implanted coronary pressure measurements", "Blood Glucose level monitoring", "All of the above"],
    answer: 3
  }
];

// Sensors and Actuators - Week 5 questions
questionsByDepartment["sensors-and-actuators"][5] = [
  {
    id: 41,
    question: "What is the angle between the primary and secondary flat of <111> n-type silicon wafer?",
    options: ["0°", "90°", "180°", "45°"],
    answer: 3
  },
  {
    id: 42,
    question: "Considering COMSOL Multiphysics simulation, what should be the flow of the modelling I. Make geometry II. Post process results III. Add materials IV. Choose type of study V. Apply physics conditions",
    options: ["I, III, V, II, IV", "I, III, V, IV, II", "I, III, II, V, IV", "III, I, V, II, IV"],
    answer: 1
  },
  {
    id: 43,
    question: "Silicon dioxide can be used as",
    options: ["Field oxide", "Masking oxide", "Gate oxide", "All of the above"],
    answer: 3
  },
  {
    id: 44,
    question: "Which of the following was responsible for converting linearly polarized light to circularly polarized light in an ellipsometer?",
    options: ["Analyzer", "Polarizer", "Detector", "Quarter wave plate"],
    answer: 3
  },
  {
    id: 45,
    question: "Which principle is used in the working of an MQ gas sensor?",
    options: ["Optical absorption of gas", "Change in electrical resistance of metal oxide due to gas reaction", "Change in mass of the sensor", "Piezoelectric effect"],
    answer: 1
  },
  {
    id: 46,
    question: "Complete the following statement as discussed in lecture based on COMSOL Multiphysics: \"Shape memory alloy is a type of _______ material.\"",
    options: ["Ferromagnetic", "Ferroelastic", "Ferroelectric", "Ferromechanic"],
    answer: 1
  },
  {
    id: 47,
    question: "The thickness of the deposited film in thermal evaporation is usually monitored using:",
    options: ["Thermocouple", "Quartz crystal microbalance", "pH meter", "Spectrophotometer"],
    answer: 1
  },
  {
    id: 48,
    question: "Evaluate whether the following statement is True or False. \"Surface profilometer can be used to quantify surface roughness\"",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 49,
    question: "Choose the correct statements with regards to thermal oxidation I. Room temperature silicon in air creates very thin layer of \"native oxide\". II. Dry oxidation is used for creating thicker oxide layers. III. Wet oxidation is faster than dry oxidation.",
    options: ["I and II", "I and III", "II and III", "III only"],
    answer: 1
  },
  {
    id: 50,
    question: "Evaluate whether the following statement is True or False. \"The orientation of different crystal planes in the basic unit cell can be described by using miller indices\"",
    options: ["True", "False"],
    answer: 0
  }
];

// Sensors and Actuators - Week 6 questions
questionsByDepartment["sensors-and-actuators"][6] = [
  {
    id: 51,
    question: "Why is an additional signal conditioning circuit required between the temperature sensor and the ADC?",
    options: ["Signal conditioning circuit will improve sensitivity of Op amp.", "Signal conditioning circuit will improve the power consumption.", "Signal conditioning circuit will improve resolution (each level height)", "Signal conditioning circuit will reduce hardware."],
    answer: 2
  },
  {
    id: 52,
    question: "Processes related to photolithography are mentioned below. Choose the proper order in which they will be performed: I. Soft bake II. Photoresist coating III. Wafer Cleaning IV. Primer coating V. Exposure VI. Alignment VII. Development VIII. Hard bake",
    options: ["III - I - IV - II - V - VI - VII - VIII", "III - IV - II - I - VI - V - VII - VIII", "IV - I - II - VI - V - III - VII - VIII", "III - IV - I - II - V - VI - VII - VIII"],
    answer: 1
  },
  {
    id: 53,
    question: "What is the primary reason for using HMDS before photoresist coating?",
    options: ["Increase UV absorption", "Remove oxide layer", "Improve photoresist adhesion", "Harden the photoresist"],
    answer: 2
  },
  {
    id: 54,
    question: "A positive photoresist is exposed through a bright-field mask and developed. Which region will finally contain photoresist?",
    options: ["Mask transparent regions", "Mask opaque regions", "Entire wafer", "Only alignment marks"],
    answer: 1
  },
  {
    id: 55,
    question: "Evaluate whether the below statement is true or false: \"Simulations performed using COMSOL before sensor fabrication allows exploration of different designs and saves on product development cost and time.\"",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 56,
    question: "What is the process of pulling up a 2D geometry into the required dimension to create a 3D geometry called?",
    options: ["Sweeping", "Extrusion", "Meshing", "Building all objects"],
    answer: 1
  },
  {
    id: 57,
    question: "HEPA filter stands for:",
    options: ["High-Efficiency Particulate Air filter", "High Efficient Pressure Assembly filter", "Highly Efficient Particulate Assembly filter", "None of these"],
    answer: 0
  },
  {
    id: 58,
    question: "Which of the following materials is commonly used to etch silicon dioxide (SiO2)?",
    options: ["Potassium iodide (KI)", "Hydrofluoric acid (HF)", "Acetone", "Isopropyl alcohol (IPA)"],
    answer: 1
  },
  {
    id: 59,
    question: "Which configuration requires two op-amp stages to produce a positive amplified output?",
    options: ["Non-inverting only", "Differential", "Inverting", "Voltage follower"],
    answer: 2
  },
  {
    id: 60,
    question: "UV light in a biosafety cabinet is mainly used to:",
    options: ["Improve visibility of samples", "Sterilize the working area by inactivating microorganisms", "Control humidity inside the cabinet", "Increase airflow velocity"],
    answer: 1
  }
];

// Sensors and Actuators - Week 7 questions
questionsByDepartment["sensors-and-actuators"][7] = [
  {
    id: 61,
    question: "For E-beam evaporation, there are two scenarios: i. Base pressure = 1e^-6 mbar, and ii. Base pressure = 1e^-4 mbar. Which of the following is correct about the mean free path of i) compared to ii)?",
    options: ["Mean free path i) > Mean free path ii)", "Mean free path i) < Mean free path ii)", "Mean free path i) = Mean free path ii)", "None of the above"],
    answer: 0
  },
  {
    id: 62,
    question: "Thin film deposition by thermal evaporation is one of the common physical vapor deposition (PVD) techniques. Which of the following statements does not hold true for thermal evaporation?",
    options: ["Before evaporation, the chamber is evacuated to remove the gas particles.", "Materials with high melting points are difficult to be deposited.", "Evacuation of the chamber helps to increase the mean free path of evaporated particles.", "Inert gas is supplied in a controlled manner to get higher throughput."],
    answer: 3
  },
  {
    id: 63,
    question: "Which of the following sputtering techniques gives better yield?",
    options: ["DC sputtering", "RF sputtering", "Magnetron sputtering", "Reactive sputtering"],
    answer: 2
  },
  {
    id: 64,
    question: "Why is argon gas preferred for generating plasma in sputtering technique?",
    options: ["Argon is lighter", "Argon is chemically inert and does not react with the target material", "Argon increases the melting point of the target", "Argon reduces the vacuum level inside the chamber"],
    answer: 1
  },
  {
    id: 65,
    question: "In PDMS-based microfluidic chip fabrication, the silicon mould is primarily used to:",
    options: ["Act as the sensing material", "Provide mechanical support to PDMS", "Transfer channel patterns into PDMS", "Improve electrical conductivity"],
    answer: 2
  },
  {
    id: 66,
    question: "Oxygen plasma facilitates bonding between PDMS and glass primarily by activating their surfaces through the formation of reactive functional groups.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 67,
    question: "In an IR sensor module, the transparent LED usually acts as the:",
    options: ["Receiver", "Comparator", "Transmitter", "Indicator"],
    answer: 2
  },
  {
    id: 68,
    question: "Which of the following statements about plasma cleaning is false?",
    options: ["Plasma cleaning is the process of removing all organic matter from the surface of an object through the use of ionized gas.", "Usually, oxygen or argon are used for performing the cleaning inside the chamber.", "It is performed in a vacuum chamber.", "None of the above."],
    answer: 3
  },
  {
    id: 69,
    question: "Which of the following statements is/are true with respect to IR-based distance sensors? S1: The sensor has the highest sensitivity when the target surface is a perfect black body. S2: The sensor has the least sensitivity when the target surface has more absorbance than reflectance.",
    options: ["S1 only", "S2 only", "Both S1 and S2", "Neither S1 nor S2"],
    answer: 0
  },
  {
    id: 70,
    question: "Consider the following statements with respect to the multi-channel peristaltic pump discussed in the course: S1: All four channels in the multichannel peristaltic pump can circulate or flow liquid at different flow rates. S2: The minimum flow rate possible in the channels is in the range of μL/min. Which of the above statements is/are correct?",
    options: ["S1 only", "S2 only", "Both S1 and S2 are correct", "Neither S1 nor S2 are correct"],
    answer: 2
  }
];

// Sensors and Actuators - Week 8 questions
questionsByDepartment["sensors-and-actuators"][8] = [
  {
    id: 71,
    question: "What is the primary function of a photomask in photolithography?",
    options: ["To deposit metal layers", "To measure wafer thickness", "To transfer a patterned design onto a wafer", "To polish the wafer surface"],
    answer: 2
  },
  {
    id: 72,
    question: "A defect such as a chrome spot on a photomask can lead to:",
    options: ["Improved resolution", "Increased wafer thickness", "Reduced UV exposure time", "Failure or malfunction of fabricated devices"],
    answer: 3
  },
  {
    id: 73,
    question: "Front-to-back alignment is primarily required when:",
    options: ["Coating thick photoresist", "Cleaning wafers", "Aligning backside features with front-side structures", "Increasing UV intensity"],
    answer: 2
  },
  {
    id: 74,
    question: "During lithography exposure, why is UV light handling important?",
    options: ["It increases wafer temperature permanently", "It strengthens silicon bonds", "It transfers the mask pattern to the photoresist", "It removes metal layers"],
    answer: 2
  },
  {
    id: 75,
    question: "Shape Memory Alloys (SMAs) exhibit memory due to:",
    options: ["Electrical conductivity", "Magnetic properties", "Temperature-induced phase transformation", "Optical transparency"],
    answer: 2
  },
  {
    id: 76,
    question: "Training an SMA typically involves:",
    options: ["Mechanical polishing", "Cooling without heating", "Magnetic alignment", "Heating to a high temperature and rapid cooling"],
    answer: 3
  },
  {
    id: 77,
    question: "The two primary phases of an SMA are:",
    options: ["Solid and liquid", "Elastic and plastic", "Conductive and resistive", "Austenite and martensite"],
    answer: 3
  },
  {
    id: 78,
    question: "In robotic applications, SMA wires are often compared to:",
    options: ["Electric motors", "Springs only", "Sensors", "Artificial muscles or tendons"],
    answer: 3
  },
  {
    id: 79,
    question: "One major advantage of nitinol-based SMA over conventional actuators is:",
    options: ["Higher noise generation", "Increased bulkiness", "Lower mechanical strength", "Lightweight and compact actuation capability"],
    answer: 3
  },
  {
    id: 80,
    question: "Joule heating in SMA actuators occurs when:",
    options: ["Mechanical stress is removed", "The alloy is immersed in water", "Electric current passes through the wire", "The alloy is exposed to light"],
    answer: 2
  }
];

// Sensors and Actuators - Week 9 questions
questionsByDepartment["sensors-and-actuators"][9] = [
  {
    id: 81,
    question: "What is the study of individual cells for cancer screening called?",
    options: ["Histology", "Cytology", "Immunohistochemistry", "Microtomy"],
    answer: 1
  },
  {
    id: 82,
    question: "When a screening report identifies \"atypical\" cells, what is the next diagnostic stage?",
    options: ["Photolithography", "Surface cleaning", "Histology (study of tissues)", "Ultrasound"],
    answer: 2
  },
  {
    id: 83,
    question: "Which instrument is used to slice tissue samples into very thin sections for histological study?",
    options: ["Microtome", "Piezoresistive cantilever", "CNC Shield", "Hot plate"],
    answer: 0
  },
  {
    id: 84,
    question: "According to the lecture, which cancer is the second largest cause of cancer-related death in women?",
    options: ["Lung cancer", "Liver cancer", "Breast cancer", "Colon cancer"],
    answer: 2
  },
  {
    id: 85,
    question: "Why is front-to-back lithography specifically mentioned as important in sensor fabrication?",
    options: ["To reduce the cost of the silicon wafer.", "To align a diaphragm on the backside exactly below a pressure sensor on the front.", "To clean the cleanroom environment.", "To increase the thickness of the photoresist."],
    answer: 1
  },
  {
    id: 86,
    question: "Which specific pressure sensor module was demonstrated in the class using an Arduino?",
    options: ["DHT11", "HC-SR04", "BMP180", "MQ-2"],
    answer: 2
  },
  {
    id: 87,
    question: "Pressure sensors can be categorized into different types based on their working principle, which two types were mentioned in the introduction?",
    options: ["Resistive and Capacitive", "Inductive and Thermal", "Optical and Acoustic", "Magnetic and Fluidic"],
    answer: 0
  },
  {
    id: 88,
    question: "What is the primary role of the Arduino in this experimental setup?",
    options: ["To generate pressure.", "To act as an interfacing module to measure and display the output signal.", "To provide the physical substrate for the sensor.", "To act as a 3D printing controller."],
    answer: 1
  },
  {
    id: 89,
    question: "How many cables are typically found on the bipolar stepper motor shown in the demonstration?",
    options: ["2.0", "4.0", "6.0", "8.0"],
    answer: 1
  },
  {
    id: 90,
    question: "What is the function of the motor driver in a stepper motor setup?",
    options: ["To write the code for the Arduino.", "To switch the coils and change magnetism based on signals from the controller.", "To measure the torque of the motor.", "To reduce the voltage of the power supply."],
    answer: 1
  }
];

// Sensors and Actuators - Week 10 questions
questionsByDepartment["sensors-and-actuators"][10] = [
  {
    id: 91,
    question: "What is the primary goal of designing a sensor for mechanical phenotyping of breast cancer?",
    options: ["To replace histology entirely.", "To reduce false positive and false negative results by understanding changes in tissue stiffness and elasticity.", "To increase the speed of the PECVD process.", "To eliminate the need for clean room protocols."],
    answer: 1
  },
  {
    id: 92,
    question: "In the provided nomenclature for tissue samples (e.g., BE, CE, BS, CS), what does the \"S\" stand for?",
    options: ["Surface", "Sample", "Stromal", "Secondary"],
    answer: 2
  },
  {
    id: 93,
    question: "Which equipment is used to coat silicon dioxide at a lower temperature during the fabrication process?",
    options: ["Microtome", "PECVD (Plasma Enhanced Chemical Vapor Deposition)", "PVD System", "Spin Coater"],
    answer: 1
  },
  {
    id: 94,
    question: "What physical property of the tissue is being measured when using a piezoresistive microcantilever to \"indent\" a sample?",
    options: ["Electrical Resistance", "Stiffness/Elasticity", "Thermal Conductivity", "Optical Density"],
    answer: 1
  },
  {
    id: 95,
    question: "Which cancer is cited in the lecture as the second largest cause of cancer-related death in women?",
    options: ["Lung Cancer", "Ovarian Cancer", "Breast Cancer", "Colon Cancer"],
    answer: 2
  },
  {
    id: 96,
    question: "The lecture mentions that after measuring mechanical properties, the next step is to understand which other property?",
    options: ["Magnetic properties", "Thermal expansion", "Electrical properties (Impedance)", "Acoustic resonance"],
    answer: 2
  },
  {
    id: 97,
    question: "Which fabrication step follows the metal contact and front-to-back alignment in the process flow?",
    options: ["P+ diffusion", "DRIE (Deep Reactive Ion Etching)", "Photoresist coating", "Microtome slicing"],
    answer: 1
  },
  {
    id: 98,
    question: "What does PVD stand for in the context of thin-film deposition?",
    options: ["Pressure Vacuum Deposition", "Physical Vapour Deposition", "Plasma Variable Diffusion", "Photon Vaporization Device"],
    answer: 1
  },
  {
    id: 99,
    question: "Which two specific types of evaporation techniques are discussed as part of the PVD system?",
    options: ["Chemical and Biological", "Thermal and E-beam", "Sputtering and Etching", "Inductive and Resistive"],
    answer: 1
  },
  {
    id: 100,
    question: "Which component is used to monitor the thickness of the material being deposited in real-time?",
    options: ["Pirani Gauge", "Penning Gauge", "DTM (Digital Thickness Monitor) / QCM (Quartz Crystal Microbalance)", "Turret Indexer"],
    answer: 2
  }
];

// Sensors and Actuators - Week 11 questions
questionsByDepartment["sensors-and-actuators"][11] = [
  {
    id: 101,
    question: "What is the main advantage of measuring impedance instead of simple resistance when studying tissue properties?",
    options: ["It is faster to calculate.", "It requires less complex equipment.", "It accounts for parasitic effects like double-layer capacitance caused by saline or media.", "It eliminates the need for electrodes."],
    answer: 2
  },
  {
    id: 102,
    question: "Which conducting polymer is used to fabricate the piezoresistive sensor in this module?",
    options: ["SU-8", "PEDOT:PSS", "PDMS", "Polyimide"],
    answer: 1
  },
  {
    id: 103,
    question: "What is the primary function of the interdigitated electrodes (IDE) in the described biosensor?",
    options: ["To measure the stiffness of the tissue.", "To understand the electrical properties (impedance) of the tissue or cells.", "To act as a heating element for thermal study.", "To provide structural support for the cantilever."],
    answer: 1
  },
  {
    id: 104,
    question: "In the fabrication steps, what is the purpose of dipping the wafer in acetone?",
    options: ["To clean the gold electrodes.", "To strip off the photoresist and release the patterned layers.", "To cure the PDMS layer.", "To etch the silicon substrate."],
    answer: 1
  },
  {
    id: 105,
    question: "What happens to the resistance of the PEDOT:PSS sensor when pressure is applied to the substrate?",
    options: ["The resistance remains constant.", "The resistance changes due to the bending of the piezo resistor.", "The resistance drops to zero.", "The sensor becomes an insulator."],
    answer: 1
  },
  {
    id: 106,
    question: "The flexible sensor described in this module is designed to measure which two properties simultaneously?",
    options: ["Thermal and Magnetic", "Electrical and Mechanical", "Optical and Acoustic", "Chemical and Nuclear"],
    answer: 1
  },
  {
    id: 107,
    question: "Which material is used as the flexible substrate for the piezoresistive sensor?",
    options: ["Oxidized Silicon", "Chrome-Gold", "PDMS", "Glass"],
    answer: 2
  },
  {
    id: 108,
    question: "What is the future goal mentioned for the next generation of this biochip?",
    options: ["To make it entirely out of metal.", "To measure electrical, mechanical, and thermal properties simultaneously.", "To eliminate the use of microscopes.", "To use it only for brain tissue."],
    answer: 1
  },
  {
    id: 109,
    question: "What is the purpose of using an inverted microscope during tissue studies on a microgrid?",
    options: ["To measure the weight of the tissue.", "To see the tissue clearly when it is placed on the microgrid.", "To apply UV light for curing.", "To dice the silicon wafer."],
    answer: 1
  },
  {
    id: 110,
    question: "According to the process flow, what is the first step in creating the flexible sensor?",
    options: ["Taking an oxidized silicon substrate and spin-coating PDMS.", "Patterning gold electrodes.", "Dicing the wafer into small chips.", "Applying biomarkers to the tissue."],
    answer: 0
  }
];

// Sensors and Actuators - Week 12 questions
questionsByDepartment["sensors-and-actuators"][12] = [
  {
    id: 111,
    question: "In fused deposition modeling (FDM), the material is typically supplied in the form of:",
    options: ["Liquid resin", "Powder", "Thin sheets", "Filament"],
    answer: 3
  },
  {
    id: 112,
    question: "In 3D printing, slicing refers to:",
    options: ["Cutting the material manually", "Dividing the object into separate parts", "Converting a 3D model into layered instructions for printing", "Removing support structures"],
    answer: 2
  },
  {
    id: 113,
    question: "Which 3D printing technique uses liquid resin that solidifies when exposed to light?",
    options: ["FDM", "SLS", "Laminated manufacturing", "Stereolithography (SLA)"],
    answer: 3
  },
  {
    id: 114,
    question: "A key advantage of Selective Laser Sintering (SLS) is:",
    options: ["Lowest cost", "Requires no laser", "No need for additional support structures", "Uses filament-based material"],
    answer: 2
  },
  {
    id: 115,
    question: "Material jetting is similar to which common technology?",
    options: ["Laser cutting", "CNC milling", "Inkjet printing", "Injection molding"],
    answer: 2
  },
  {
    id: 116,
    question: "PLA is widely used in 3D printing mainly because it is:",
    options: ["Highly conductive", "Extremely strong", "Non-degradable", "Low-cost and biodegradable"],
    answer: 3
  },
  {
    id: 117,
    question: "Compared to PLA, ABS generally:",
    options: ["Requires no heated bed", "Is less strong", "Melts at room temperature", "Requires a heated bed to prevent warping"],
    answer: 3
  },
  {
    id: 118,
    question: "Flexible 3D printing materials are typically used for:",
    options: ["Electrical insulation only", "High-temperature resistance", "Applications requiring elasticity or vibration absorption", "Structural rigidity"],
    answer: 2
  },
  {
    id: 119,
    question: "Remote 3D printing using tools like OctoPrint allows users to:",
    options: ["Replace slicing software", "Print without a 3D model", "Avoid using filaments", "Control and monitor a 3D printer over a network"],
    answer: 3
  },
  {
    id: 120,
    question: "Increasing infill density in a 3D printed object will generally:",
    options: ["Reduce material usage", "Decrease strength", "Shorten print time", "Increase material usage and strength"],
    answer: 3
  }
];

// Industry 4.0 and Industrial IoT - Week 1 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][1] = [
  {
    id: 1,
    question: "Which of the following sensors is an example of a Zero Order System?",
    options: ["Thermometer", "Potentiometer", "Accelerometer", "Gyroscope"],
    answer: 1
  },
  {
    id: 2,
    question: "Which Zigbee device type acts as the root and also functions as the network bridge?",
    options: ["Zigbee Router", "Zigbee End Device", "Zigbee Coordinator", "Zigbee Gateway"],
    answer: 2
  },
  {
    id: 3,
    question: "Which physical principle primarily explains the operation of hydraulic actuators?",
    options: ["Pascal's law", "Bernoulli's principle", "Ideal gas law", "Faraday's law"],
    answer: 0
  },
  {
    id: 4,
    question: "At which OSI layer does the 6LoWPAN protocol primarily operate to enable IPv6 packets over IEEE 802.15.4?",
    options: ["Physical Layer", "Network Layer (Adaptation Layer)", "Transport Layer", "Application Layer"],
    answer: 1
  },
  {
    id: 5,
    question: "Which IEEE 802.15.4 variant introduces Direct Sequence Ultra-Wideband (UWB) Physical Layer?",
    options: ["802.15.4a", "802.15.4b", "802.15.4c", "802.15.4g"],
    answer: 0
  },
  {
    id: 6,
    question: "Fill in the blank: In the context of sensor characteristics, the properties of the system's transient response to an input are collectively termed as _________ characteristics.",
    options: ["Dynamic characteristics", "Static characteristics", "Time-domain characteristics", "Steady-state characteristics"],
    answer: 0
  },
  {
    id: 7,
    question: "In the context of the WirelessHART standard (IEC 62591) operating in the 2.4 GHz ISM band, what is the frequency gap maintained between two adjacent channels?",
    options: ["2 MHz", "5 MHz", "20 MHz", "25 MHz"],
    answer: 1
  },
  {
    id: 8,
    question: "State True or False. A Passive NFC device can neither transmit nor read any data.",
    options: ["True", "False"],
    answer: 1
  },
  {
    id: 9,
    question: "What is the data rate of Bluetooth 2.0?",
    options: ["1 Mbps", "2 Mbps", "3 Mbps", "4 Mbps"],
    answer: 2
  },
  {
    id: 10,
    question: "Fill in the blank: The primary focus of the ISA 100.11a technology is the implementation of _________ in the industrial environment.",
    options: ["Automation", "Connectivity", "Predictive maintenance", "Security"],
    answer: 0
  },
  {
    id: 11,
    question: "State True or False. Classical Internet is not meant for constrained IoT devices.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 12,
    question: "In the context of CoRE Service Discovery, IoT devices (acting as mini web servers) register their resources to the Resource Directory (RD) using which interface?",
    options: ["Lookup Interface (LI)", "Transport Interface (TI)", "Registration Interface (RI)", "Application Interface (AI)"],
    answer: 2
  },
  {
    id: 13,
    question: "In the context of QoS for IoT Networks, which data timeliness policy mandates dropping stale data and notifying the application that a deadline has been missed?",
    options: ["Latency budget policy", "Deadline policy", "Retention policy", "Priority policy"],
    answer: 1
  },
  {
    id: 14,
    question: "State True or False. MQTT works on the Request/Response framework on top of UDP.",
    options: ["True", "False"],
    answer: 1
  },
  {
    id: 15,
    question: "Which of the following is/are advantages of XMPP?",
    options: ["Interoperability", "Extensibility", "Flexibility", "All of these"],
    answer: 3
  }
];

// Industry 4.0 and Industrial IoT - Week 2 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][2] = [
  {
    id: 16,
    question: "Which type of waste in the Lean Production System is defined as \"Non value-added movement of people\"?",
    options: ["Transportation", "Motion", "Waiting", "Defects"],
    answer: 1
  },
  {
    id: 17,
    question: "Which type of business model value proposition exists when a bunch of goods/services are of higher value compared to the individual value of that product?",
    options: ["Efficiency-centric", "Novelty-centric", "Lock-in centric", "Complementary"],
    answer: 3
  },
  {
    id: 18,
    question: "In the context of Lean Manufacturing wastes, what causes \"Processing waste\"?",
    options: ["Producing products before demand", "Use of inappropriate tools for processing", "Excess inventory on the factory floor", "Non-value added movement of personnel"],
    answer: 1
  },
  {
    id: 19,
    question: "Which resource is primarily utilized to achieve \"Optimization\" in smart and connected products?",
    options: ["Optimization algorithms", "Custom software", "External data sources", "Sensors only"],
    answer: 0
  },
  {
    id: 20,
    question: "Which specific \"New Material\" mentioned in the context of Physical Megatrends is described as being stronger than steel but thinner than a human hair?",
    options: ["Carbon Fiber", "Graphene", "Aerogel", "Titanium Alloy"],
    answer: 1
  },
  {
    id: 21,
    question: "What are the three types of work to be noticed when analyzing \"Value streams\"?",
    options: ["Design, Production, and Delivery", "Value-added, Incidental, and Pure Waste", "Manual, Automated, and Hybrid", "Planning, Execution, and Monitoring"],
    answer: 1
  },
  {
    id: 22,
    question: "What are the three categories of Megatrends driving the Fourth Industrial Revolution?",
    options: ["Economic, Social, Political", "Physical, Digital, Biological", "Hardware, Software, Network", "Local, National, Global"],
    answer: 1
  },
  {
    id: 23,
    question: "Which material except Graphene is cited as an example of \"New Materials\" under Physical Megatrends?",
    options: ["Silicon", "Thermoset plastics", "Copper", "Aluminum"],
    answer: 1
  },
  {
    id: 24,
    question: "How do you define Sustainability in the context of a Manufacturing Industry?",
    options: ["To increase profit margins annually", "To continue at a fixed rate", "To eliminate all waste products", "To automate all processes"],
    answer: 1
  },
  {
    id: 25,
    question: "In the context of \"Government Regulations,\" what does the acronym EPA stand for?",
    options: ["Economic Policy Agency", "Environmental Protection Agencies", "Energy Production Association", "Employment Protection Act"],
    answer: 1
  },
  {
    id: 26,
    question: "Which of the following is a characteristic of an economic depression?",
    options: ["Duration is less than a year", "High employment rates", "Exponential unemployment increase", "Increase in available credit"],
    answer: 2
  },
  {
    id: 27,
    question: "Which layer in the architecture of smart and connected products is responsible for collecting and acquiring data?",
    options: ["Digital layer", "Connectivity layer", "Physical layer", "Application layer"],
    answer: 2
  },
  {
    id: 28,
    question: "Which of the following is a \"Lock-in centric\" value creation model?",
    options: ["Focusing on novelty", "Improving transaction efficiency", "Preventing customer migration", "Offering complementary products"],
    answer: 2
  },
  {
    id: 29,
    question: "Which characteristic of smart factories involves \"Self-configuration\"?",
    options: ["Proactivity", "Transparency", "Agility", "Connection"],
    answer: 2
  },
  {
    id: 30,
    question: "In the automation pyramid of a smart factory, which level is at the very top?",
    options: ["Device level", "Control level", "Manufacturing execution system level", "ERP level"],
    answer: 3
  }
];

// Industry 4.0 and Industrial IoT - Week 3 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][3] = [
  {
    id: 31,
    question: "Who developed the first functioning Augmented Reality (AR) system in 1992?",
    options: ["Ivan Sutherland", "Louis Rosenberg", "Thamos Caudell", "Morton Heilig"],
    answer: 1
  },
  {
    id: 32,
    question: "In the 5C Architecture of CPS, which level provides the \"Collaborative Diagnostics\" functionality?",
    options: ["Cyber Level", "Cognition Level", "Configuration Level", "Conversion Level"],
    answer: 1
  },
  {
    id: 33,
    question: "State True or False: AR technologies are widely used in the field of medical science to perform complex surgeries in the domain of Neurosurgery, MRI, and X-Ray systems.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 34,
    question: "Which \"V\" of Big Data refers to the fact that Big Data supports diverse categories and formats of data with no restrictions over input data formats?",
    options: ["Volume", "Velocity", "Variety", "Value"],
    answer: 2
  },
  {
    id: 35,
    question: "In the context of Data Acquisition in Industry 4.0, what are the three main steps followed during the \"Data pre-processing\" of relational data?",
    options: ["Collection, Transmission, Storage", "Integration, Clearing, Redundancy Mitigation", "Analysis, Visualization, Decision Making", "Encryption, Compression, Archiving"],
    answer: 1
  },
  {
    id: 36,
    question: "What is the first step involved in the working of a Virtual Reality (VR) system?",
    options: ["Display screen shows the user view through lenses", "Processing unit creates sensations for the user", "Lenses focus and reshape the image for each eye", "Sensors estimate the user's motion and direction in space"],
    answer: 3
  },
  {
    id: 37,
    question: "State True or False: Brain-machine interfaces are engineered systems based on cognition and neuroscience and are a part of CPS.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 38,
    question: "What are PMUs in the context of CPS for Smart Grid?",
    options: ["Power Management Unit", "Phasor Measurement Unit", "Performance Monitoring Unit", "Project Management Unit"],
    answer: 1
  },
  {
    id: 39,
    question: "Which of the following options best describes a Collaboration Platform?",
    options: ["Manufacturing hardware device", "Business networking software", "Entertainment social app", "Financial record database"],
    answer: 1
  },
  {
    id: 40,
    question: "What are the five phases of the Product Lifecycle?",
    options: ["Plan, Do, Check, Act", "Design, Build, Test, Deploy", "Ideate, Create, Market, Sell", "Visualize, Explain, Perceive, Retire"],
    answer: 3
  },
  {
    id: 41,
    question: "Which of the following is a Technique/Method proposed to refine production across the lifecycle?",
    options: ["ABC (Activity Based Costing)", "XYZ Analysis", "PQR Theory", "LMN Modeling"],
    answer: 0
  },
  {
    id: 42,
    question: "Which of the following best describes Artificial Intelligence (AI)?",
    options: ["Hardware manufacturing process", "Manmade thinking power", "Database management system", "Manual data entry"],
    answer: 1
  },
  {
    id: 43,
    question: "Fill in the blank. Declarative knowledge is also known as __________.",
    options: ["Operational knowledge", "Heuristic knowledge", "Relational knowledge", "Procedural knowledge"],
    answer: 2
  },
  {
    id: 44,
    question: "Which of the following is an usecase of AI in Industry 4.0?",
    options: ["Increasing manual labor", "Reducing internet usage", "Slowing production cycles", "Ensuring machine safety"],
    answer: 3
  },
  {
    id: 45,
    question: "Which of the following statement best describes the characteristics of Unstructured data?",
    options: ["Possesses pre-defined model", "Stored in relational databases", "Managed by SQL", "No pre-defined model"],
    answer: 3
  }
];

// Industry 4.0 and Industrial IoT - Week 4 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][4] = [
  {
    id: 46,
    question: "Which component of Cybersecurity protects applications from outer threats, often using firewalls?",
    options: ["Application Security", "Network Security", "Cloud Security", "End-user Education"],
    answer: 0
  },
  {
    id: 47,
    question: "What is Zephyr?",
    options: ["A Smart Sensor", "An Website", "An OS", "None of these"],
    answer: 2
  },
  {
    id: 48,
    question: "Fill in the blank: Most of the commonly used ransomware attacks use -----------, where the user receives a legal file as an attachment and is skillfully forced to download or open it.",
    options: ["Worm", "Virus", "Trojan", "Malware"],
    answer: 2
  },
  {
    id: 49,
    question: "In the Software-Defined Cloud Manufacturing Architecture (SDCMA), which component is responsible for \"detecting abnormality\"?",
    options: ["Control Elements (CE)", "Hardware Plane", "Ensemble Intelligence Framework (EIF)", "Software Plane"],
    answer: 2
  },
  {
    id: 50,
    question: "Fill in the blank: Typically, ----------- form the core of the smart sensor nodes.",
    options: ["Transistors", "Microprocessors", "MOSFETS", "Diodes"],
    answer: 1
  },
  {
    id: 51,
    question: "Which cybersecurity component involves \"strategies to maintain the availability, integrity, and confidentiality of business data\"?",
    options: ["Network Security", "Operational Security", "Information Security", "Physical Security"],
    answer: 2
  },
  {
    id: 52,
    question: "Which of the following is NOT a protected asset in cybersecurity?",
    options: ["Hardware", "Software", "Data", "Public domain information"],
    "answer": 3
  },
  {
    id: 53,
    question: "How does IIoT modify traditional automation techniques?",
    options: ["By removing all sensors", "By exploiting IT technology", "By using manual tools", "By ignoring data"],
    answer: 1
  },
  {
    id: 54,
    question: "Which of the following has been identified as a major challenge in IIoT deployment?",
    options: ["Excessive standardization", "Lack of generated data", "Surplus of skilled workers", "Data integration challenges"],
    answer: 3
  },
  {
    id: 55,
    question: "How does Industrial Internet assist Power Production?",
    options: ["Increases inspection costs", "Locates broken equipment easily", "Disconnects the grid", "Hides performance data"],
    answer: 1
  },
  {
    id: 56,
    question: "State True or False: The Industrial Internet can benefit commercial aviation industries by improving both airline operations and asset management.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 57,
    question: "What is considered the primary source of IIoT data?",
    options: ["Cloud Server", "Actuator", "Sensor", "Microprocessor"],
    answer: 2
  },
  {
    id: 58,
    question: "Fill in the blank. Conventional Sensing is primarily involved in -----------.",
    options: ["Feedback automation", "Cloud computing", "Internet connectivity", "Big data analytics"],
    answer: 0
  },
  {
    id: 59,
    question: "Which challenge of Industry 4.0 is directly associated with ageing society and lack of skilled workers?",
    options: ["Dynamic market conditions", "Resource utilization", "Constrained workforce", "Product management"],
    answer: 2
  },
  {
    id: 60,
    question: "Efficient use of materials, water, and energy is categorized under which expected feature of Industry 4.0?",
    options: ["Competitiveness", "Innovation", "Workforce", "Efficiency"],
    answer: 3
  }
];

// Industry 4.0 and Industrial IoT - Week 5 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][5] = [
  {
    id: 61,
    question: "In the context of the \"Value Proposition\" building block, which of the following is considered a qualitative value?",
    options: ["Price", "Post-purchase cost reduction", "Customer experience", "Product performance"],
    answer: 2
  },
  {
    id: 62,
    question: "A business model that serves specific and specialized customer groups is known as a:",
    options: ["Mass market", "Segmented market", "Niche market", "Diversified market"],
    answer: 2
  },
  {
    id: 63,
    question: "Credits and cash owned by an organization are classified under which asset category?",
    options: ["Physical assets", "Human assets", "Intellectual assets", "Financial assets"],
    answer: 3
  },
  {
    id: 64,
    question: "Which component of the IIoT business model focuses on solving the complexities and uncertainties inherent in interactions between various business actors?",
    options: ["Value Proposition", "Value Network", "Value Capturing", "Value Communication"],
    answer: 3
  },
  {
    id: 65,
    question: "The \"Information Domain\" in IIRA handles data persistence. In the context of Big Data generated by IIoT, which \"V\" refers to the trustworthiness or quality of the data?",
    options: ["Volume", "Velocity", "Variety", "Veracity"],
    answer: 3
  },
  {
    id: 66,
    question: "Which of the following is considered a \"Lagging KPI\" for occupational safety?",
    options: ["Percentage of workers with adequate safety training", "Number of OSH audits performed", "Frequency of observed unsafe behavior", "Number of production days lost due to sickness absence"],
    answer: 3
  },
  {
    id: 67,
    question: "Caterpillar uses IoT combined with which technology for machine monitoring?",
    options: ["Virtual Reality (VR)", "Augmented Reality (AR)", "Blockchain technology", "Quantum computing"],
    answer: 1
  },
  {
    id: 68,
    question: "Fill in the blank. Maersk uses IoT primarily for -----------.",
    options: ["Smart Logistics", "Manufacturing cars", "Generating electricity", "Mining coal"],
    answer: 0
  },
  {
    id: 69,
    question: "What does a Business Model primarily describe?",
    options: ["Technical hardware specifications", "Rationale of creating value", "Employee holiday schedules", "Office floor plan"],
    answer: 1
  },
  {
    id: 70,
    question: "State True or False: Lack of interoperability leads to increased complexity.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 71,
    question: "Fill in the blank. The three categories of IIoT business models are Cloud-based, Process-Oriented, and ----------- Business Model.",
    options: ["Hardware-Oriented", "Service-Oriented", "Product-Oriented", "Data-Oriented"],
    answer: 1
  },
  {
    id: 72,
    question: "In the IIRA Framework, what are defined as \"collection of ideas which describe, analyze, and solve the set of specific concerns\"?",
    options: ["Stakeholders", "Architecture Frames", "Viewpoints", "Testbeds"],
    answer: 2
  },
  {
    id: 73,
    question: "Which architecture pattern allows for fast device-to-device integration with minimum response time?",
    options: ["Three-tier architecture", "Client-Server architecture", "Layered Databus pattern", "Gateway-mediated architecture"],
    answer: 2
  },
  {
    id: 74,
    question: "Which element in the Usage Viewpoint of IIRA is defined as the \"basic unit of work\" carried out by a party assuming a role?",
    options: ["Task", "Activity", "Agent", "Workflow"],
    answer: 0
  },
  {
    id: 75,
    question: "Which IIRA viewpoint relates to the technical representation of an IIoT system including interfaces, protocols, and behaviors?",
    options: ["Functional Viewpoint", "Implementation Viewpoint", "Usage Viewpoint", "Business Viewpoint"],
    answer: 1
  }
];

// Industry 4.0 and Industrial IoT - Week 6 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][6] = [
  {
    id: 76,
    question: "What is the usual packet size requirement for uRLLC?",
    options: ["8 B", "16-32 B", "32-200 B", "1024 B"],
    answer: 2
  },
  {
    id: 77,
    question: "Fill in the blank: ModBus-TCP is an industrial communication protocol that is primarily designed to run over -----------.",
    options: ["Serial RS-232 links", "Standard Ethernet and TCP/IP", "Bluetooth Low Energy", "Satellite communication"],
    answer: 1
  },
  {
    id: 78,
    question: "Which Profibus variant is designed for high-speed communication between automation systems and equipment using RS-485 or fiber optics?",
    options: ["Profibus PA", "Profibus FMS", "Profibus DP", "Profinet"],
    answer: 2
  },
  {
    id: 79,
    question: "What is the maximum transmission rate of the \"Standard CC-Link\" technology?",
    options: ["156 kbps", "500 kbps", "10 Mbps", "1 Gbps"],
    answer: 2
  },
  {
    id: 80,
    question: "Which gas sensing method relies specifically on \"Electrical Variation\" for detection?",
    options: ["Acoustic Methods", "Optic Methods", "Metal Oxide Semiconductors (MOS)", "Calorimetric Method"],
    answer: 2
  },
  {
    id: 81,
    question: "In manufacturing processes, Fieldbus is primarily used for which type of data transfer?",
    options: ["Clock synchronization", "High-performance analytics", "Periodic I/O data transfer", "Wide Area Network (WAN) management"],
    answer: 2
  },
  {
    id: 82,
    question: "Under which category of sensors do \"smoke detectors\" and \"alcohol detectors\" fall in an industrial monitoring context?",
    options: ["Optical sensors", "Thermal sensors", "Chemical sensors", "Electrical sensors"],
    answer: 2
  },
  {
    id: 83,
    question: "Which variant of the CC-Link protocol is specifically designed to ensure error-free data communication of large data through Industrial Ethernet?",
    options: ["CC-Link Safety", "CC-Link LT", "CC-Link IE", "CC-Link RTU"],
    answer: 2
  },
  {
    id: 84,
    question: "Improvement of which of the following is emphasized as a key concern in IIoT systems?",
    options: ["Only profitability", "Only system throughput", "Efficiency, productivity, health, and safety", "Hardware miniaturization alone"],
    answer: 2
  },
  {
    id: 85,
    question: "State True or False. The output voltage of the LM35 sensor is linearly proportional to Kelvin temperature.",
    options: ["True", "False"],
    answer: 1
  },
  {
    id: 86,
    question: "Fill in the blank: Air quality monitoring and alert systems with gas sensing units are primarily deployed to -----------.",
    options: ["Improve network bandwidth", "Avoid risks of harmful gas exposure", "Reduce hardware cost", "Increase cloud storage"],
    answer: 1
  },
  {
    id: 87,
    question: "Which of the following belongs to the Fieldbus category?",
    options: ["Profinet", "EtherNet/IP", "TSN", "Modbus-RTU"],
    answer: 3
  },
  {
    id: 88,
    question: "Which Profibus variant handles communication between PCs and Programmable Logic Controllers?",
    options: ["Profibus DP", "Profibus PA", "Profibus FMS", "Profibus IE"],
    answer: 2
  },
  {
    id: 89,
    question: "Which network topology is used by Interbus?",
    options: ["Bus", "Star", "Active ring", "Hybrid"],
    answer: 2
  },
  {
    id: 90,
    question: "Which frequency band is classified as high band in 5G NR?",
    options: ["< 1 GHz", "1-6 GHz", "> 24 GHz", "6-24 GHz"],
    answer: 2
  }
];

// Industry 4.0 and Industrial IoT - Week 7 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][7] = [
  {
    id: 91,
    question: "What does LPWAN stand for?",
    options: ["Low Power Wireless Access Network", "Long Power Wide Area Network", "Low Power Wide Area Network", "Long Power Wireless Area Network"],
    answer: 2
  },
  {
    id: 92,
    question: "LoRa technology operates in which of the following frequency bands?",
    options: ["License-free sub-gigahertz bands", "Licensed microwave bands", "Optical frequency bands", "Millimeter-wave bands"],
    answer: 0
  },
  {
    id: 93,
    question: "What is the maximum wireless throughput achieved by SIGFOX?",
    options: ["1 kbps", "500 bps", "10 kbps", "100 bps"],
    answer: 3
  },
  {
    id: 94,
    question: "Which IEEE standard forms the basis of the physical and MAC layers of Zigbee?",
    options: ["IEEE 802.11", "IEEE 802.3", "IEEE 802.15.4", "IEEE 802.16"],
    answer: 2
  },
  {
    id: 95,
    question: "Which of the following is NOT a Zigbee-supported network topology?",
    options: ["Star", "Tree", "Mesh", "Ring"],
    answer: 3
  },
  {
    id: 96,
    question: "What is Xbee in the context of Zigbee communication?",
    options: ["A network protocol", "A product that uses the Zigbee protocol", "A routing algorithm", "A MAC-layer standard"],
    answer: 1
  },
  {
    id: 97,
    question: "Which sensor in an autonomous vehicle generates data in the range of 20-40 MB/s?",
    options: ["GPS", "RADAR", "Camera", "SONAR"],
    answer: 2
  },
  {
    id: 98,
    question: "What type of computing processes data closer to sensors before sending it to the cloud?",
    options: ["Edge computing", "Centralized computing", "Distributed computing", "Batch computing"],
    answer: 0
  },
  {
    id: 99,
    question: "In an end-to-end IIoT processing pipeline, where are rules initially configured?",
    options: ["At the sensor nodes", "In the cloud", "At the edge analytics agent", "At the actuators"],
    answer: 1
  },
  {
    id: 100,
    question: "What is the main objective of AR drones-based precision agriculture?",
    options: ["Monitoring soil moisture", "Precise fertilizer spray to weeds", "Autonomous harvesting", "Livestock monitoring"],
    answer: 1
  },
  {
    id: 101,
    question: "SWAMP enables a smart management layer between which two systems?",
    options: ["Water distribution network and farm-based irrigation system", "Cloud services and mobile applications", "Sensors and actuators", "Enterprise and automation networks"],
    answer: 0
  },
  {
    id: 102,
    question: "What do process variables represent in an industrial control system?",
    options: ["Controller decision outputs", "Standard operating limits", "Values of process parameters measured using sensors", "Signals sent to actuators"],
    answer: 2
  },
  {
    id: 103,
    question: "What is the fundamental element of industrial control systems for automatic control?",
    options: ["Control loops", "Sensors", "Controllers", "Actuators"],
    answer: 0
  },
  {
    id: 104,
    question: "Which component of a SCADA system interfaces directly with sensors to read and convert data?",
    options: ["The Supervisory System", "The Human Machine Interface (HMI)", "The Communication Infrastructure", "Programmable Logic Controllers (PLC) and Remote Terminal Units (RTU)"],
    answer: 3
  },
  {
    id: 105,
    question: "What is a primary advantage of PLCs over traditional hard-wired systems?",
    options: ["They are physically larger and more durable.", "They can be easily reprogrammed, making maintenance and upgrades more economical.", "They operate at a much higher voltage.", "They do not require a power supply."],
    answer: 1
  }
];

// Industry 4.0 and Industrial IoT - Week 8 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][8] = [
  {
    id: 106,
    question: "What is the purpose of feature extraction in ML?",
    options: ["Convert raw data into compressed bitstreams only", "Convert raw data to information that relates to the physical state of the asset", "Encrypt sensor data for security", "Remove time stamps from data"],
    answer: 1
  },
  {
    id: 107,
    question: "What is a primary goal of applying analytics in industrial systems?",
    options: ["Maximizing data volume", "Replacing all controllers with cloud services", "Improving operational platform, performance, and safety", "Eliminating human workers completely"],
    answer: 2
  },
  {
    id: 108,
    question: "What kind of data does supervised learning require?",
    options: ["Completely unlabeled streams", "Only binary sensor signals", "Labeled datasets with known output classes or values", "Data without any prior samples"],
    answer: 2
  },
  {
    id: 109,
    question: "Which of the following is explicitly listed as a goal of IIoT analytics?",
    options: ["Manual inspection", "Dynamic operations optimization", "Hardware miniaturization", "Network routing"],
    answer: 1
  },
  {
    id: 110,
    question: "What approach replaces physics-based models in modern IIoT analytics?",
    options: ["Data-driven modelling using ML and DL", "Heuristic optimization", "Rule-based control", "Manual calibration"],
    answer: 0
  },
  {
    id: 111,
    question: "Data Science is an interdisciplinary field involving which of the following areas?",
    options: ["Only computer science", "Only data processing", "Only artificial intelligence", "Computer science, statistics, mathematics, machine learning, and domain expertise"],
    answer: 3
  },
  {
    id: 112,
    question: "Fill in the blank. Unsupervised learning is primarily used for identifying similar groups of data called -----------",
    options: ["Clustering", "Classification", "Regression", "Prediction"],
    answer: 0
  },
  {
    id: 113,
    question: "Which clustering algorithm allows a data point to belong to more than one cluster?",
    options: ["K-Means", "Linear Regression", "Decision Tree", "Fuzzy c-Means"],
    answer: 3
  },
  {
    id: 114,
    question: "Fill in the blank. Machine learning algorithms are not useful for ----------- data.",
    options: ["Structured", "Temporal", "High dimensional", "Labeled"],
    answer: 2
  },
  {
    id: 115,
    question: "State True or False. Deep learning mimics the working function of billions of neurons in the human brain.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 116,
    question: "Platform-as-a-Service mainly allows industries to do what?",
    options: ["Only deploy hardware", "Self-develop applications", "Store raw sensor data only", "Replace networking infrastructure"],
    answer: 1
  },
  {
    id: 117,
    question: "Which type of data is explicitly mentioned as contributing to cloud demand in IIoT?",
    options: ["Image data", "M2M sensor data", "Social media data", "Textual reports"],
    answer: 1
  },
  {
    id: 118,
    question: "State True or False. Increase in number of devices makes IIoT ecosystems more complex, necessitating cloud-based device management.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 119,
    question: "What is one key purpose of a Service Level Agreement (SLA) for IIoT?",
    options: ["Eliminating cloud providers", "Promising deliverables from cloud providers", "Increasing hardware redundancy", "Enforcing local computation"],
    answer: 1
  },
  {
    id: 120,
    question: "Fill in the blank. A good SLA should be affordable, quantifiable, controllable, meaningful, mutually acceptable, and -----------.",
    options: ["Flexible", "Enforceable", "Achievable", "Adaptive"],
    answer: 2
  }
];

// Industry 4.0 and Industrial IoT - Week 9 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][9] = [
  {
    id: 121,
    question: "Why is Julia programming considered advantageous?",
    options: ["It is slower than Python.", "It merges Python's benefits with C's performance.", "It is a closed-source language.", "It does not support parallelism."],
    answer: 1
  },
  {
    id: 122,
    question: "What relationship does Linear Regression detect?",
    options: ["A non-linear relationship between binary variables", "A clustering pattern in unlabeled data", "A random relationship between unrelated variables", "A linear relationship between a dependent variable and independent variables"],
    answer: 3
  },
  {
    id: 123,
    question: "Which core concept defines Software-Defined Networking (SDN)?",
    options: ["Hardwiring control logic into every switch", "Decoupling the control plane from the data plane", "Combining all network functions into a single monolithic server", "Eliminating the need for any software in networking"],
    answer: 1
  },
  {
    id: 124,
    question: "Fill in the blank. Fog computing architecture places fog nodes between ----------- and the cloud.",
    options: ["Industrial end devices", "Enterprise servers", "Mobile applications", "Databases"],
    answer: 0
  },
  {
    id: 125,
    question: "What is the major challenge in handling data from sensors and machines in IIoT?",
    options: ["High cost of sensors", "Diversity in protocols, data syntax, and data sources", "Lack of storage capacity", "Insufficient processing power"],
    answer: 1
  },
  {
    id: 126,
    question: "State True or False. Fog computing in IIoT prevents unnecessary noisy big data crowd at the cloud.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 127,
    question: "State True or False. R is an open source tool for programming, statistical analysis, and graphics representation.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 128,
    question: "Which R package provides functions for fuzzy clustering, support vector machine, and naive bayes classifier?",
    options: ["rpart", "e1071", "nnet", "caret"],
    answer: 1
  },
  {
    id: 129,
    question: "Fill in the blank. The basic service models provided by cloud computing include IaaS, PaaS, and -----------.",
    options: ["DaaS", "NaaS", "SaaS", "FaaS"],
    answer: 2
  },
  {
    id: 130,
    question: "Which Hadoop component is described as a module containing the utilities that support the other Hadoop components?",
    options: ["HDFS", "MapReduce", "Hadoop Common", "YARN"],
    answer: 2
  },
  {
    id: 131,
    question: "What routing protocol does BCube run?",
    options: ["BSR (Bcube Source Routing)", "BGP", "OSPF", "RIP"],
    answer: 0
  },
  {
    id: 132,
    question: "Which of the following is mentioned as a data center network challenge?",
    options: ["High cost", "Poor server-to-server Connectivity", "Complex configuration", "Limited vendors"],
    answer: 1
  },
  {
    id: 133,
    question: "Which protocol is mentioned as part of SDN components?",
    options: ["TCP", "UDP", "OpenFlow", "HTTP"],
    answer: 2
  },
  {
    id: 134,
    question: "State True or False. GCAM is used to place flow-rules in SDN forwarding devices, but it is limited in capacity.",
    options: ["True", "False"],
    answer: 1
  },
  {
    id: 135,
    question: "Which advantage of SDIIoT enables events to be processed in order through deterministic forwarding of traffic?",
    options: ["Deterministic networking", "High availability", "Low-latency virtualization", "Robust security"],
    answer: 0
  }
];

// Industry 4.0 and Industrial IoT - Week 10 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][10] = [
  {
    id: 136,
    question: "What is the primary objective of the IETF 6TiSCH protocol in the context of IIoT?",
    options: ["To enable deterministic communication and efficient resource allocation", "To increase non-deterministic communication", "To replace SDN controllers entirely", "To increase jitter in the network"],
    answer: 0
  },
  {
    id: 137,
    question: "uSDN is integrated with which protocol stack?",
    options: ["Zigbee stack", "IPv4 stack", "Contiki IEEE 802.15.4-2015 stack", "LTE stack"],
    answer: 2
  },
  {
    id: 138,
    question: "Fill in the blank. The public network in SDIIoT consists of switches, routers, and ----------- network.",
    options: ["Sensor", "Access", "Control", "Storage"],
    answer: 1
  },
  {
    id: 139,
    question: "State True or False. Trustworthy IIoT includes security, privacy, safety, reliability, and resilience.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 140,
    question: "Fill in the blank. Current security architectures are mostly ------------centric.",
    options: ["OT", "IT", "Cloud", "Device"],
    answer: 1
  },
  {
    id: 141,
    question: "Which of the following is the first step in IIoT security risk management?",
    options: ["Mitigating risks", "Accepting risks", "Avoiding risks", "Outsourcing risks"],
    answer: 2
  },
  {
    id: 142,
    question: "Fill in the blank. Security of the whole IIoT system depends on deployed devices, communication security, data protection, and -----------.",
    options: ["Network topology", "Security management", "Sensor calibration", "Hardware redundancy"],
    answer: 1
  },
  {
    id: 143,
    question: "Fill in the blank. End device protection requires physical security, access control, identity, and ----------- protection.",
    options: ["Application", "Network", "Cloud", "Data"],
    answer: 3
  },
  {
    id: 144,
    question: "What is the primary security requirement of IIoT systems?",
    options: ["Device scalability", "End-to-end security", "High bandwidth", "Low latency"],
    answer: 1
  },
  {
    id: 145,
    question: "Which feature of a smart factory enables prediction of future outcomes?",
    options: ["Transparent", "Connected", "Proactive", "Agile"],
    answer: 2
  },
  {
    id: 146,
    question: "Airbus uses which technology to visualize production processes in real time?",
    options: ["Augmented Reality", "Blockchain visualization", "Virtual reality only", "3D real-time visualization"],
    answer: 3
  },
  {
    id: 147,
    question: "What technology does Amazon use to automate product search and retrieval in its warehouse?",
    options: ["Automated conveyor belts", "Robotic shelves", "Augmented Reality devices", "Autonomous forklifts"],
    answer: 1
  },
  {
    id: 148,
    question: "What is the role of the sensing layer in IoT-enabled food supply chains?",
    options: ["Data encryption", "Monitoring food quality using sensors", "Providing cloud analytics", "Managing business operations"],
    answer: 1
  },
  {
    id: 149,
    question: "What is one major benefit of supply chain transparency in the food industry?",
    options: ["Increased manual intervention", "Reduced food wastage", "Reduced sensor usage", "Elimination of automation"],
    answer: 1
  },
  {
    id: 150,
    question: "What does the \"Flavor Matrix\" by Culinary Science Industries use to enhance dishes?",
    options: ["Robot chefs", "Augmented Reality menus", "3D printed food", "Machine learning and data analysis of food ingredients"],
    answer: 3
  }
];

// Industry 4.0 and Industrial IoT - Week 11 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][11] = [
  {
    id: 151,
    question: "In the context of the IIoT Healthcare Architecture, which process immediately follows \"Sensing\"?",
    options: ["Learning", "Storing", "Sending", "Processing"],
    answer: 2
  },
  {
    id: 152,
    question: "State True or False: Asthma is a lifelong disease that can be completely cured using IIoT-based smart inhalers.",
    options: ["True", "False"],
    answer: 1
  },
  {
    id: 153,
    question: "Which of the following is given as an example of a wireless ECG monitoring device?",
    options: ["iHealth BP5", "Dexcom", "QardioCore", "Kinsa smart thermometer"],
    answer: 2
  },
  {
    id: 154,
    question: "State True or False: In Advanced Metering Infrastructure (AMI), Broadband over PowerLine and Fixed radio frequency are used for communication networks.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 155,
    question: "Which specific issue can IoT predict in the water sector besides tracking water pressure and water quality?",
    options: ["Water freezing points", "Exact rainwater volume", "Water leakage", "New underground water sources"],
    answer: 2
  },
  {
    id: 156,
    question: "How does a digital power plant reduce costs?",
    options: ["By increasing manpower", "By increasing fuel consumption", "By using manual monitoring", "By utilizing automated devices reducing the need for manpower and maintenance"],
    answer: 3
  },
  {
    id: 157,
    question: "Which type of RFID tag relies on backscattering and has no internal power source?",
    options: ["Active RFID", "Passive RFID", "Battery-Assisted Passive RFID", "Hybrid RFID"],
    answer: 1
  },
  {
    id: 158,
    question: "Which of the following is considered a primary Function of Inventory Management?",
    options: ["Increasing data scattering", "Decoupling components of the production-distribution system", "Broadcasting information signals", "Creating additional noise"],
    answer: 1
  },
  {
    id: 159,
    question: "Fill in the blank. Quality Control is defined as a system of routine technical activities to measure and control the quality of the inventory as it is being -----------.",
    options: ["Developed", "Transported to retail", "Sold to the customer", "Disposed of"],
    answer: 0
  },
  {
    id: 160,
    question: "Fill in the blank. The Intrusion Triangle consists of Opportunity, Means, and -----------.",
    options: ["Integrity", "Motive", "Availability", "Authentication"],
    answer: 1
  },
  {
    id: 161,
    question: "Which Software Security concept is responsible for the verification of credentials entered locally or remotely?",
    options: ["Integrity", "Authentication", "Availability", "Network segmentation"],
    answer: 1
  },
  {
    id: 162,
    question: "Which type of Network Security specifically scans for malware detection and prevention?",
    options: ["Access control", "Application security", "Behavioral analytics", "Antivirus/antimalware software"],
    answer: 3
  },
  {
    id: 163,
    question: "According to the Facilities Management Good Practice Guide, what does Facility Management manage on behalf of property owners?",
    options: ["Factory assembly lines", "Buildings, precincts, community infrastructure", "Cloud computing servers", "Retail supply chains"],
    answer: 1
  },
  {
    id: 164,
    question: "State True or False: In the scope of IoT in Facility Management, implementing new technology includes Light Fidelity (Li-Fi) and data security.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 165,
    question: "Which support service focuses on researching potential customers?",
    options: ["Administrative Support", "Marketing", "Business Development", "Information Technology"],
    answer: 1
  }
];

// Industry 4.0 and Industrial IoT - Week 12 questions
questionsByDepartment["industry-4-0-and-industrial-iot"][12] = [
  {
    id: 166,
    question: "In the Oil and Gas Industry Work-flow, which step immediately precedes the data moving to a cloud-based analytics platform?",
    options: ["Deploy IoT solutions", "Apply predictive analytics", "Data analysis by extraction, transform and load", "Identify required maintenance"],
    answer: 2
  },
  {
    id: 167,
    question: "State True or False: In the Machine Learning and Cloud Services work-flow, identifying specific data types occurs after analyzing and evaluating data.",
    options: ["True", "False"],
    answer: 0
  },
  {
    id: 168,
    question: "In the Chemical Industry, what is a primary goal of Predictive Maintenance?",
    options: ["Address real time issues", "Track vehicle locations", "Increase energy usage", "Optimize medicine routing"],
    answer: 0
  },
  {
    id: 169,
    question: "Which of the following actions is part of \"Improve Logistics\" in the Chemical Industry?",
    options: ["Analyzing water and nutrients", "Detection of contamination or attacks", "Pricing model with profit margin", "Reducing equipment breakdown"],
    answer: 1
  },
  {
    id: 170,
    question: "Fill in the blank. IoT applications in the Pharmaceutical Industry are deployed to connect different technologies including manufacturing, monitoring, controlling, and -----------",
    options: ["Distribution", "Farming", "Extraction", "Refining"],
    answer: 0
  },
  {
    id: 171,
    question: "How do UAVs typically communicate with industrial systems?",
    options: ["Through handwritten notes", "Through SCADA systems", "Via wired connections only", "They do not communicate with industrial systems"],
    answer: 1
  },
  {
    id: 172,
    question: "The ----------- generation of UAV technology features transformable designs with 360° gimbals, high quality video, and improved piloting modes.",
    options: ["Third", "Fourth", "Fifth", "Sixth"],
    answer: 2
  },
  {
    id: 173,
    question: "Which of the following is an application of UAVs in Energy Management?",
    options: ["Resisting deforestation", "Inspecting large boiler at power plants", "Delivery of defibrillators", "Broadcasting live events"],
    answer: 1
  },
  {
    id: 174,
    question: "In the mining industry, regular surface surveys by UAVs are primarily used for:",
    options: ["Watershed analysis", "Canopy mapping", "Finding missing items", "Optimized blast design"],
    answer: 3
  },
  {
    id: 175,
    question: "Fill in the blank. In the Healthcare sector, research is being done on drones with ----------- that can help the senior population.",
    "options": ["Manipulator arms", "Defibrillators", "Thermal imagery", "360° gimbals"],
    answer: 0
  },
  {
    id: 176,
    question: "How do UAVs specifically assist in testing networks within the Telecommunication sector?",
    options: ["By broadcasting live events", "By providing internet services to urban areas", "By monitoring construction sites", "By testing network coverage and stability"],
    answer: 3
  },
  {
    id: 177,
    question: "Fill in the blank. A case study enables a researcher to closely examine the data within a -----------.",
    options: ["Broad universal scope", "Specific context", "Simulated testing environment", "Purely hypothetical scenario"],
    answer: 1
  },
  {
    id: 178,
    question: "State True or False: Case studies are limited to providing only qualitative analysis of the data.",
    options: ["True", "False"],
    answer: 1
  },
  {
    id: 179,
    question: "Fill in the blank. A key point to ponder for all case studies is the reduction of ----------- of workers.",
    options: ["Mandatory work hours", "Annual paid leaves", "Technical training costs", "Health hazards"],
    answer: 3
  },
  {
    id: 180,
    question: "What do case studies explore and investigate through detailed analysis?",
    options: ["Real-life phenomenon", "Purely fictional events", "Ancient historical myths", "Unknown future predictions"],
    answer: 0
  }
];

// Blockchain and its Applications - Week 1 questions
questionsByDepartment["blockchain-and-its-applications"][1] = [
  {
    id: 1,
    question: "Which of the following statements is true regarding the foundational concepts of blockchain and cryptography?",
    options: ["Decentralization in blockchain ensures that a single authority controls the network for higher efficiency.", "SHA-256 is a cryptographic hash function widely used in blockchain due to its fixed output size and collision resistance.", "A hash chain is a sequence of cryptographic keys used to decode blockchain data.", "Cryptographic hash ensures that the blockchain data cannot be read by anyone outside the network."],
    answer: 1
  },
  {
    id: 2,
    question: "Consider the following input string: \"Hello World\". You apply SHA-256 to this string. Then, you change the input to \"Hello World!\" (added an exclamation mark) and apply SHA-256 again. Which statement describes the relationship between the two output hashes?",
    options: ["The two hashes will be identical.", "The second hash will be the same as the first, plus a few extra bits at the end.", "The two hashes will be completely different and uncorrelated.", "The second hash will be exactly 8 bits longer than the first."],
    answer: 2
  },
  {
    id: 3,
    question: "A blockchain network uses SHA-256 for its hashing process. If it takes 10^-8 seconds to compute a single SHA-256 hash, how long would it take (approximately) to compute 2^128 hashes for a collision attack?",
    options: ["10^10 years", "10^15 years", "10^20 years", "10^25 years"],
    answer: 3
  },
  {
    id: 4,
    question: "In a decentralized distributed system with 100 participants, which of the following statements is true regarding trust and communication?",
    options: ["At least 50 participants must trust each other for the system to function.", "A central body governing communication among all 100 participants is mandatory.", "Participants may or may not trust each other, as the system ensures integrity using cryptographic protocols and agreement through consensus protocols.", "All the 100 participants must trust each other."],
    answer: 2
  },
  {
    id: 5,
    question: "A blockchain network achieves an average block generation time of 5 minutes under normal conditions. However, due to scheduled maintenance, the network's hash rate is reduced by 50% for 4 hours daily. If the network operates for 12 hours in total (including the maintenance period), how many blocks will be added to the blockchain?",
    options: ["120", "200", "216", "240"],
    answer: 0
  },
  {
    id: 6,
    question: "Where are the transaction logs stored in a blockchain network?",
    options: ["In a centralized SQL database.", "On an immutable ledger controlled by a central authority.", "In metadata tables on each peer.", "In the distributed ledger of each peer across the network."],
    answer: 3
  },
  {
    id: 7,
    question: "An attacker wants to find a collision in a cryptographic hash function with a 128-bit output. What is the approximate number of hash operations required to succeed?",
    options: ["2^64", "2^256", "2^128", "0.5 x 2^128"],
    answer: 0
  },
  {
    id: 8,
    question: "Which of the following statements accurately describes a blockchain?",
    options: ["A centralized database where data is stored on a single server.", "A distributed ledger where data is stored across multiple nodes and is immutable.", "A system that only stores cryptocurrency transaction data on a single node.", "A network that uses a single user to control access and updates to the data."],
    answer: 1
  },
  {
    id: 9,
    question: "A centralized database processes transactions at 10,000 TPS (Transactions Per Second). You decide to move this system to a decentralized blockchain to increase trust. Which of the following is the most likely outcome regarding performance and control?",
    options: ["Throughput increases, and a single authority retains control.", "Throughput decreases, and control is distributed among peers.", "Throughput remains the same, but data becomes mutable.", "Throughput increases, and data becomes encrypted."],
    answer: 1
  },
  {
    id: 10,
    question: "Which of the following describes the avalanche effect in a cryptographic hash function?",
    options: ["Given the same input, the hash function returns a different hash 99.99% of the time.", "It takes 10^5 attempts to reverse-engineer the original message from the hash.", "A small change in the input causes a drastic change in the hash, flipping nearly all the bits.", "The hash function always returns the same hash for the same input."],
    answer: 2
  }
];

// Blockchain and its Applications - Week 2 questions
questionsByDepartment["blockchain-and-its-applications"][2] = [
  {
    id: 11,
    question: "Alice employs the RSA cryptosystem with the prime numbers p=11 and q=17 to derive her public and private keys. Given that her public key is e=13, what is her corresponding private key d?",
    options: ["71", "155", "37", "129"],
    answer: 2
  },
  {
    id: 12,
    question: "Bob receives a secure package from Alice, which was encrypted for confidentiality and digitally signed for integrity. To read the message and verify its origin, which keys must Bob use, and in what capacity?",
    options: ["Bob uses Alice's Public Key to decrypt the message and Bob's Private Key to verify the signature.", "Bob uses Bob's Private Key to decrypt the message and Alice's Public Key to verify the signature.", "Bob uses Bob's Public Key to decrypt the message and Alice's Private Key to verify the signature.", "Bob uses Alice's Private Key to decrypt the message and Bob's Public Key to verify the signature."],
    answer: 1
  },
  {
    id: 13,
    question: "Which statement best captures non-repudiation in blockchain transactions enabled by digital signatures?",
    options: ["Anyone can change a signed transaction without detection.", "The sender can later deny authoring the transaction even if it's signed.", "The sender cannot plausibly deny authoring the transaction, and others can verify the origin.", "Digital signatures hide the transaction contents from all nodes."],
    answer: 2
  },
  {
    id: 14,
    question: "In a typical blockchain transaction flow, what does verifying Alice's signature using Alice's public key ensure?",
    options: ["The message is encrypted for Alice only", "The message definitely remained confidential on the network", "The transaction was authorized by Alice and was not altered after signing", "The miners will include the transaction in the next block for sure"],
    answer: 2
  },
  {
    id: 15,
    question: "Consider 8 data points labeled 1 to 8. The post-order traversal of the Merkle Tree is provided as follows (where 1 represents the hash of data point 1, 56 denotes the combined hash of 5 and 6, and so on):",
    options: ["{12345678, 1234, 12, 1, 2, 34, 3, 4, 5678, 56, 5, 6, 78, 7, 8}", "{1, 2, 12, 3, 4, 34, 1234, 5, 6, 56, 7, 8, 78, 5678, 12345678}", "{1, 12, 2, 3, 34, 4, 1234, 5, 56, 6, 7, 78, 8, 5678, 12345678}", "{12, 1, 2, 34, 3, 4, 1234, 56, 5, 6, 78, 7, 8, 5678, 12345678}"],
    answer: 1
  },
  {
    id: 16,
    question: "In the Bitcoin Proof of Work (PoW) system, which field in the block header do miners constantly modify to find a hash that meets the difficulty target?",
    options: ["Previous Block Hash", "Merkle Root", "Nonce", "Timestamp"],
    answer: 2
  },
  {
    id: 17,
    question: "Which option most clearly conflicts with the typical design goals of public cryptocurrencies?",
    options: ["Open participation with peer-to-peer propagation", "Tamper-evident append-only ledger", "Central authority that can unilaterally reverse valid transactions", "Distributed validation through consensus"],
    answer: 2
  },
  {
    id: 18,
    question: "Which of the following accurately describes the role of Miners in the Bitcoin network?",
    options: ["They are central authorities appointed by the Bitcoin Foundation to issue currency.", "They use Proof of Stake (PoS) to vote on valid transactions based on their coin wealth.", "They solve computational puzzles (Proof of Work) to validate transactions and secure the network in exchange for rewards.", "They primarily focus on encrypting user passwords to prevent hacking."],
    answer: 2
  },
  {
    id: 19,
    question: "In the context of the Bitcoin network, how do nodes resolve a temporary 'fork' (where two different valid blocks are found at roughly the same time)?",
    options: ["They choose the block that contains the most transactions.", "They follow the \"Longest Chain\" rule (the chain with the most cumulative work).", "A central server decides which block is valid.", "Both blocks are discarded, and miners restart."],
    answer: 1
  },
  {
    id: 20,
    question: "In the context of blockchain distributed systems, what specific problem does the consensus algorithm (like Proof of Work) attempt to solve?",
    options: ["The Data Storage Problem: Ensuring all nodes have infinite storage capacity.", "The Byzantine Generals Problem: Reaching agreement even when some participants may act maliciously or send conflicting information.", "The Latency Problem: Ensuring data travels at the speed of light between nodes.", "The Encryption Problem: Making sure no one can read the transaction details."],
    answer: 1
  }
];

// Blockchain and its Applications - Week 3 questions
questionsByDepartment["blockchain-and-its-applications"][3] = [
  {
    id: 21,
    question: "If the current block reward for Bitcoin is 3.125 BTC, and the network remains calibrated so that a new block is found every 10 minutes on average, how much Bitcoin will be mined in a total 24-hour period?",
    options: ["312.5 BTC", "450 BTC", "252 BTC", "900 BTC"],
    answer: 1
  },
  {
    id: 22,
    question: "What is a fundamental difference between a permissionless (public) blockchain and a permissioned blockchain?",
    options: ["Permissioned blockchains do not use a distributed ledger.", "Permissionless blockchains require participants to prove their identity to a central authority before they can join the network.", "Permissioned blockchains utilize a gatekeeping mechanism that restricts the ability to validate transactions and update the ledger to a set of authorized nodes.", "Permissioned blockchains allow any user to participate in the consensus process without prior authorization."],
    answer: 2
  },
  {
    id: 23,
    question: "Which of the following combinations is correctly used to compute Bitcoin's current block hash?",
    options: ["Previous block's hash, Merkle root, block reward, nonce, timestamp, and block size", "Previous block's hash, timestamp, nonce, Merkle root, difficulty bits, and block version", "Block creator's public key, Merkle root, timestamp, block reward, nonce, and difficulty level", "Previous block's hash, nonce, Merkle root, height, timestamp, and difficulty bits"],
    answer: 1
  },
  {
    id: 24,
    question: "Which of the following difficulty targets would make it most difficult for miners to find a valid block?",
    options: ["0000000000000000000000000000000000000000000000000000000056789abcdef12", "00000000000000000000000000000000000000000000000000002dfe34a1b2c3d55", "0000000000000000000000000000000000000000000000000000000afc123987ab", "00000000000000000000000000000000000000000000000000000000000af467"],
    answer: 3
  },
  {
    id: 25,
    question: "In the Bitcoin, block identifier refers to",
    options: ["SHA1 (128 bits) of the future block header", "Double SHA256 of the current block header", "Double SHA256 of the difficulty bits only", "Triple SHA256 of the future block header"],
    answer: 1
  },
  {
    id: 26,
    question: "If a Bitcoin block contains 64 transactions, how many hashing steps (Merkle path length) are required to verify the inclusion of a specific transaction without downloading the entire block?",
    options: ["64", "32", "6", "12"],
    answer: 2
  },
  {
    id: 27,
    question: "In Bitcoin Script, the stack is shown from bottom to top, left to right.\nThe current stack is: Bottom - [ x1, x2, x3 ] - Top\nWhich opcode will transform the stack into: Bottom - [ x1, x3 ] - Top",
    options: ["OP_DROP", "OP_NIP", "OP_2DROP", "OP_DEPTH"],
    answer: 1
  },
  {
    id: 28,
    question: "If a Merkle tree is constructed from 16 transactions, what is the total number of hashes (nodes) in the entire tree, including the transaction hashes (leaves) and the Merkle root?",
    options: ["32", "16", "31", "15"],
    answer: 2
  },
  {
    id: 29,
    question: "The \"Nonce\" field in the Bitcoin block header is 32 bits long. What is the maximum value a miner can test in the nonce field before needing to change other header fields (like the timestamp or extra nonce)?",
    options: ["2^64 (approx 1.84 x 10^19)", "2^32 (approx 4 billion)", "2^256 (approx 1.15 x 10^77)", "1,000,000"],
    answer: 1
  },
  {
    id: 30,
    question: "What happens if the number of transactions in a Merkle tree is odd?",
    options: ["The tree cannot be built", "Dummy (duplicate) hashes are added to adjust", "Transactions are left out of the block", "The Merkle root is ignored"],
    answer: 1
  }
];

// Blockchain and its Applications - Week 4 questions
questionsByDepartment["blockchain-and-its-applications"][4] = [
  {
    id: 31,
    question: "Which of the following scenarios describes a \"Soft Fork\" in the Bitcoin network?",
    options: ["A protocol change where the new rules are stricter, making old blocks valid but new blocks potentially invalid to non-upgraded nodes.", "A divergence where the blockchain splits permanently into two incompatible chains (e.g., Bitcoin and Bitcoin Cash).", "A backward-compatible upgrade where non-upgraded nodes can still validate new blocks.", "A temporary split caused by two miners finding a block simultaneously."],
    answer: 2
  },
  {
    id: 32,
    question: "Suppose a miner initially receives 100 bitcoins as a reward for successfully mining a block at time Jan, 2009. The reward for mining a block is halved approximately every four years (or after every 210,000 blocks). Based on this halving process, which of the following statements are correct? \nI. In Jan 2013, the miner will receive 50 bitcoins for adding a new block. \nII. In Jan 2018, the miner will receive 25 bitcoins for adding a new block. \nIII. In Jan 2021, the miner will receive 12.5 bitcoins for adding a new block. \nIV. In Jan 2024, the miner will receive 6.25 bitcoins for adding a new block.",
    options: ["I and II", "I, II, and III", "II, III, and IV", "All of the above"],
    answer: 1
  },
  {
    id: 33,
    question: "In the absence of a central authority, why is the \"Longest Chain Rule\" crucial for preventing double-spending?",
    options: ["It ensures that the chain with the most cumulative computational work is accepted as the single source of truth.", "It allows users to spend the same UTXO multiple times if the chain is long enough.", "It encrypts the transaction data so it cannot be copied.", "It ensures that the timestamp of every block is exactly 10 minutes apart. A centralized authority will be used to verify each transaction before it is added to the blockchain."],
    answer: 0
  },
  {
    id: 34,
    question: "In a permissionless blockchain like Bitcoin, which specific attack vector is mitigated by requiring a costly resource (like computing power in PoW) to participate in consensus?",
    options: ["SQL Injection", "Sybil Attack", "Man-in-the-Middle Attack", "Phishing Ensuring that all participants trust a central authority"],
    answer: 1
  },
  {
    id: 35,
    question: "Which component in the block header serves as a \"fingerprint\" for all transactions included in that specific block?",
    options: ["The Nonce", "The Previous Block Hash", "The Merkle Root", "The Miner's Public Key"],
    answer: 2
  },
  {
    id: 36,
    question: "Traditional distributed databases handle \"Crash Faults\" effectively. What specific, more complex class of faults is the Bitcoin blockchain designed to tolerate?",
    options: ["Hardware Failures", "Network Latency", "Byzantine Faults", "Power Outages"],
    answer: 2
  },
  {
    id: 37,
    question: "Which of the following best describes Safety and Liveness in Bitcoin?",
    options: ["Safety ensures transactions are irreversible, while Liveness ensures transactions are eventually added.", "Safety guarantees quick transaction confirmation, while Liveness prevents forks.", "Safety prevents double-spending, while Liveness speeds up block creation.", "Safety ensures blocks are always valid, while Liveness ensures no transaction delays."],
    answer: 0
  },
  {
    id: 38,
    question: "Mathematically, what is a miner attempting to do during Proof of Work (PoW)?",
    options: ["Decrypt the previous block's signature.", "Find a nonce such that Hash(Block Header) < Target", "Sort all transactions in the mempool alphabetically.", "Calculate the private key of the Satoshi Nakamoto wallet."],
    answer: 1
  },
  {
    id: 39,
    question: "Before a miner begins the heavy computational work (hashing) to mine a new block, what must they typically do first?",
    options: ["Broadcast their solution to the network.", "Construct a candidate block by selecting valid transactions from their memory pool.", "Wait for the next difficulty adjustment period.", "Shut down their node to save power."],
    answer: 1
  },
  {
    id: 40,
    question: "What is the theoretical consequence if a single mining pool obtains >50% of the network's hashrate (The 51% Attack)?",
    options: ["They can steal funds from any user's wallet (e.g., transfer your BTC to them).", "They can change the maximum supply of Bitcoin to 42 million.", "They can reverse their own recent transactions (double spending) and block other transactions from confirming.", "They can shut down the internet connection of other miners."],
    answer: 2
  }
];

// Blockchain and its Applications - Week 5 questions
questionsByDepartment["blockchain-and-its-applications"][5] = [
  {
    id: 41,
    question: "Which of the following factors generally limit the scalability of permissionless blockchain consensus mechanisms? \nI. Requirement for a global agreement among nodes \nII. Centralized validator selection \nIII. High communication and computation overhead \nIV. Absence of cryptographic security",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  },
  {
    id: 42,
    question: "Which consensus mechanism relies on trusted hardware environments to ensure fairness in block proposer selection?",
    options: ["Proof of Stake", "Proof of Burn", "Proof of Elapsed Time", "Practical Byzantine Fault Tolerance"],
    answer: 2
  },
  {
    id: 43,
    question: "Which of the following properties is a key advantage of stake-based (PoS) consensus mechanisms compared to computation-based (PoW) mechanisms?",
    options: ["Complete elimination of forks", "Reduced energy consumption", "Guaranteed transaction finality", "Removal of the need for digital signatures"],
    answer: 1
  },
  {
    id: 44,
    question: "In a PoW-based blockchain system like Bitcoin, when two valid blocks are mined at the same time, which rule does the network primarily use to resolve the fork and identify the authoritative chain?",
    options: ["Number of transactions in each block", "Total accumulated computational work (heaviest chain)", "Size of the blockchain ledger", "Time since genesis block creation"],
    answer: 1
  },
  {
    id: 45,
    question: "Which component of the Ethereum architecture ensures deterministic execution of smart contracts across all nodes?",
    options: ["Ethereum Client", "Ethereum Virtual Machine", "Ethereum Wallet", "Ethereum Miner"],
    answer: 1
  },
  {
    id: 46,
    question: "Which of the following operations on Ethereum requires gas payment and inclusion in a block?",
    options: ["Querying an account balance", "Reading a public contract variable", "Executing a state-modifying function", "Simulating contract execution locally"],
    answer: 2
  },
  {
    id: 47,
    question: "Which Ethereum transaction parameter ensures transaction ordering and prevents replay attacks for a given account?",
    options: ["Gas", "Value", "Nonce", "Data"],
    answer: 2
  },
  {
    id: 48,
    question: "Which JSON-RPC method is used to retrieve the Ether balance of an Ethereum account?",
    options: ["eth_call", "eth_getBalance", "eth_getTransactionByHash", "eth_sendTransaction"],
    answer: 1
  },
  {
    id: 49,
    question: "Which consensus mechanism requires participants to irreversibly destroy cryptocurrency to demonstrate long-term commitment to the network?",
    options: ["Proof of Work (PoW)", "Proof of Burn (PoB)", "Proof of Stake (PoS)", "Proof of Elapsed Time (PoET)"],
    answer: 1
  },
  {
    id: 50,
    question: "Which of the following Ethereum unit relationships is CORRECT?",
    options: ["1 Ether = 10^9 Wei", "1 Gwei = 10^9 Wei", "1 Ether = 10^6 Gwei", "1 Wei = 10^9 Ether"],
    answer: 1
  }
];

// Blockchain and its Applications - Week 6 questions
questionsByDepartment["blockchain-and-its-applications"][6] = [
  {
    id: 51,
    question: "Which of the following statements correctly describe safety and liveness in consensus protocols? \nI. Safety ensures that conflicting decisions never occur \nII. Liveness ensures that the system eventually makes progress \nIII. Safety may be temporarily violated under network delays \nIV. Liveness guarantees agreement under all possible network conditions",
    options: ["I and II", "II and III", "III and IV", "I and IV"],
    answer: 0
  },
  {
    id: 52,
    question: "Which failure model is classical Paxos designed to tolerate?",
    options: ["Byzantine faults", "Crash faults", "Arbitrary malicious behavior", "Network-level message tampering"],
    answer: 1
  },
  {
    id: 53,
    question: "A distributed system consists of 7 nodes operating under a Byzantine Fault Tolerance (BFT) model. What is the maximum number of Byzantine faulty nodes that can be tolerated while still achieving consensus?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    id: 54,
    question: "Which of the following properties are typically associated with permissioned blockchain systems? \nI. Anonymous participation \nII. Identity management through a trusted authority \nIII. Restricted transaction visibility to authorized participants \nIV. No requirement for consensus",
    options: ["I and II", "II and III", "III and IV", "I and IV"],
    answer: 1
  },
  {
    id: 55,
    question: "Why must any two majorities (quorums) in Paxos intersect in at least one common node?",
    options: ["To ensure faster communication between nodes", "To guarantee safety by preventing two different values from being chosen", "To reduce network latency", "To eliminate the need for a coordinator"],
    answer: 1
  },
  {
    id: 56,
    question: "Which of the following characteristics distinguish Byzantine faults from crash faults? \nI. Byzantine faults may cause a node to send conflicting information to different nodes \nII. Crash faults allow a node to behave arbitrarily \nIII. Byzantine faults involve arbitrary or malicious behavior \nIV. Crash faults require digital signatures to detect",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  },
  {
    id: 57,
    question: "If fewer than a majority of acceptors respond during a Paxos round, which property of the protocol is affected?",
    options: ["Safety", "Liveness", "Agreement validity", "Deterministic execution"],
    answer: 1
  },
  {
    id: 58,
    question: "In a Byzantine Fault Tolerant system, why is the requirement n >= 3f + 1 necessary to tolerate f Byzantine faults?",
    options: ["To ensure faulty nodes can be isolated from the network", "To guarantee that the number of honest nodes exceeds faulty nodes by exactly one", "To ensure that any two decision quorums intersect in at least one honest node", "To eliminate the need for cryptographic authentication"],
    answer: 2
  },
  {
    id: 59,
    question: "What inefficiency in classic Paxos does Multi-Paxos primarily address?",
    options: ["Inability to tolerate crash faults", "Repeated execution of the prepare phase for each proposed value", "Lack of quorum intersection", "Absence of agreement guarantees"],
    answer: 1
  },
  {
    id: 60,
    question: "Which of the following statements about roles in Paxos are correct? \nI. A single physical node can simultaneously perform the roles of Proposer, Acceptor, and Learner. \nII. Roles are permanently fixed once assigned \nIII. Roles are dynamic and are not permanently tied to specific nodes. \nIV. Only one Acceptor is required to reach a consensus in a network of five nodes.",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  }
];

// Blockchain and its Applications - Week 7 questions
questionsByDepartment["blockchain-and-its-applications"][7] = [
  {
    id: 61,
    question: "Which of the following properties make PBFT suitable for enterprise blockchain environments? \nI. Deterministic transaction finality \nII. Anonymous validator participation \nIII. Tolerance to Byzantine faults \nIV. Dependence on computational mining",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  },
  {
    id: 62,
    question: "In Hyperledger Fabric, what is the primary role of the Membership Service Provider (MSP)?",
    options: ["Mining new blocks", "Defining the rules for identity validation and managing the roles of participants.", "Executing smart contracts", "Ordering transactions"],
    answer: 1
  },
  {
    id: 63,
    question: "Which of the following conditions must hold in a Byzantine quorum system to ensure safety?",
    options: ["Any two quorums must intersect in at least one correct (honest) replica", "Quorums may be completely disjoint to increase throughput", "Quorum size must equal exactly half of the network", "Faulty replicas must be able to form a standalone quorum."],
    answer: 0
  },
  {
    id: 64,
    question: "Which of the following are advantages of blockchain in supply-chain systems? \nI. Tamper-evident audit trail \nII. Automatic deletion of transaction history \nIII. Improved transparency among participants \nIV. Removal of all governance requirements",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  },
  {
    id: 65,
    question: "What mechanism ensures progress in PBFT when the primary replica becomes faulty?",
    options: ["Increasing block size", "Timeout-based view change protocol", "Switching to PoW", "Re-broadcasting old transactions"],
    answer: 1
  },
  {
    id: 66,
    question: "Which of the following statements correctly describe permissioned blockchain systems? \nI. Participants are authenticated before joining \nII. All nodes remain anonymous \nIII. Access to transaction data may be restricted \nIV. Consensus mechanisms are unnecessary",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  },
  {
    id: 67,
    question: "In Hyperledger Fabric, what is the purpose of channels?",
    options: ["To increase mining difficulty", "To create logically separate ledgers among subsets of participants", "To replace consensus mechanisms", "To store private cryptographic keys"],
    answer: 1
  },
  {
    id: 68,
    question: "In a Byzantine Fault Tolerant (BFT) system with f malicious nodes, why is the total number of replicas n >= 3f + 1 required?",
    options: ["To ensure that any two quorums of size 2f + 1 share at least one honest replica.", "To eliminate digital signatures and hashing.", "To ensure the system can function with 2f + 1 faulty nodes.", "To minimize the number of communication rounds to O(1)."],
    answer: 0
  },
  {
    id: 69,
    question: "Which of the following properties characterize committee-based consensus protocols such as Algorand? \nI. Committee membership is rotated and unique for every round \nII. Selection is based on cryptographic randomness (VRF) \nIII. Membership is publicly predictable long in advance \nIV. The entire network validates every block to ensure maximum security.",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 0
  },
  {
    id: 70,
    question: "Which of the following are key architectural features of Hyperledger Fabric? \nI. Modular design with pluggable components \nII. Mandatory native cryptocurrency \nIII. Separation of transaction endorsement and ordering \nIV. Public anonymous participation",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  }
];

// Blockchain and its Applications - Week 8 questions
questionsByDepartment["blockchain-and-its-applications"][8] = [
  {
    id: 71,
    question: "Which of the following statements is/are FALSE regarding the PBFT and PoW consensus mechanisms?",
    options: ["PBFT is generally used in permissioned blockchain environments with known validators.", "PoW is suited for open public networks where participants may be anonymous.", "PBFT is effective for large, highly decentralized public networks with thousands of nodes.", "PoW requires significant computational effort to validate new blocks"],
    answer: 2
  },
  {
    id: 72,
    question: "Which mechanism ensures deterministic finality in PBFT-based systems?",
    options: ["Longest-chain selection", "Computational difficulty", "Quorum-based agreement with overlapping honest replicas", "Randomized leader selection"],
    answer: 2
  },
  {
    id: 73,
    question: "In Bitcoin-NG, what is the primary effect of separating leader election from transaction serialization?",
    options: ["Eliminates Proof-of-Work", "Allows higher transaction throughput", "Makes block intervals deterministic", "Removes fork possibility"],
    answer: 1
  },
  {
    id: 74,
    question: "Which of the following statements is TRUE regarding block propagation in Bitcoin-NG?",
    options: ["Micro-blocks are used to carry transactions and are produced frequently between key-blocks.", "Key-blocks are produced frequently, while micro-blocks are infrequent.", "Both key-blocks and micro-blocks are produced at the same rate.", "Micro-blocks determine the leader, while key-blocks only store transactions."],
    answer: 0
  },
  {
    id: 75,
    question: "What scalability limitation of classical PBFT does CoSi attempt to improve?",
    options: ["Energy consumption", "Quadratic communication overhead", "Block size restrictions", "Lack of cryptographic signatures"],
    answer: 1
  },
  {
    id: 76,
    question: "Which of the following statements is TRUE regarding block (or commitment) propagation in Byzcoin?",
    options: ["Byzcoin uses collective signing (CoSi) to allow blocks to be committed quickly once validators reach agreement.", "Byzcoin relies on a single leader to sign each block, similar to classical PoW mining.", "In Byzcoin, blocks are only propagated after several minutes to reduce network traffic.", "Byzcoin avoids using keyblocks entirely and relies only on microblocks for consensus."],
    answer: 0
  },
  {
    id: 77,
    question: "In Byzcoin, what is the main benefit of using collective signing for block commitment?",
    options: ["Eliminates the need for leader election", "Reduces signature verification overhead", "Guarantees probabilistic finality", "Removes quorum requirements"],
    answer: 1
  },
  {
    id: 78,
    question: "Which trade-off best characterizes BFT-based consensus compared to Proof-of-Work?",
    options: ["Higher node scalability but lower throughput", "No need for identity management", "Lower communication cost but higher energy consumption", "Deterministic finality but limited scalability to very large networks"],
    answer: 3
  },
  {
    id: 79,
    question: "In Hyperledger Fabric, why is transaction endorsement performed before ordering?",
    options: ["To determine mining difficulty", "To execute business logic and verify endorsement policy compliance", "To reduce block interval", "To eliminate validation"],
    answer: 1
  },
  {
    id: 80,
    question: "What happens during the validation phase of a Fabric transaction?",
    options: ["Mining competition selects the block", "The world state is updated without verification", "Endorsement policies and read-write set consistency are verified before updating world state", "Proof-of-Work puzzles are solved"],
    answer: 2
  }
];


// Blockchain and its Applications - Week 9 questions
questionsByDepartment["blockchain-and-its-applications"][9] = [
  {
    id: 81,
    question: "What specific limitation of Bitcoin-NG does ByzCoin attempt to solve?",
    options: ["The requirement for all miners to share their private keys with the entire network", "The introduction of faulty or malicious microblocks that are only discovered at the end of a round", "The inability to elect a leader using proof of work", "The lack of support for any form of cryptographic signatures on transactions"],
    answer: 1
  },
  {
    id: 82,
    question: "The 'Blockchain Performance Triangle' illustrates the trade-offs between which three properties?",
    options: ["Throughput, Latency, and Scalability", "Scalability, Security, and Decentralization", "Consistency, Availability, and Tolerance", "Proof of Work, PBFT, and Collective Signing."],
    answer: 1
  },
  {
    id: 83,
    question: "ByzCoin improves upon traditional Practical Byzantine Fault Tolerance (PBFT) by integrating it with Proof of Work (PoW) and Collective Signing (CoSi). Which of the following statements correctly describe the technical improvements in ByzCoin for a network of n nodes? \nI. ByzCoin reduces communication complexity from O(n^2) to O(n) by using a tree-based multicast protocol. \nII. ByzCoin reduces consensus latency from O(n^2) to O(log n) by using a tree-based communication structure. \nIII. ByzCoin reduces verification complexity for third-party observers from O(n) to O(1) by using Schnorr multi-signatures. \nIV. ByzCoin eliminates the need for a leader node, reducing the communication complexity to O(1).",
    options: ["I and II", "II and III", "III and IV", "I and IV"],
    answer: 1
  },
  {
    id: 84,
    question: "To select a random committee without centralized coordination, Algorand uses Cryptographic Sortition via a Verifiable Random Function (VRF). When a user runs the VRF, it outputs a hash, a proof, and an integer j. If the algorithm returns j=0 for a user, what does this mathematically signify?",
    options: ["The user is selected as the sole block proposer for the current round.", "The user is a part of the committee, but with a voting weight of 0.", "The user is not a part of the consensus committee for that round.", "The VRF failed, and the user must re-run the algorithm using the seed from round r - 1."],
    answer: 2
  },
  {
    id: 85,
    question: "Under Algorand's synchrony assumptions, what characterizes weak synchrony?",
    options: ["There is no communication between nodes", "Messages are guaranteed to be received within a known time bound by almost all honest users.", "The network can be controlled by an adversary for a bounded period of time.", "The protocol only works if the majority of the money is held by one central bank."],
    answer: 2
  },
  {
    id: 86,
    question: "Which of the following is NOT true about Single Sign-on?",
    options: ["A single user can access multiple services.", "A single identity provider typically maintains the identity of an individual", "During authentication, the identity is not exposed to all the services", "Identity holders use the Identity Provider to authenticate other identity holders"],
    answer: 3
  },
  {
    id: 87,
    question: "Decentralized Identifiers (DIDs) are a W3C recommendation to implement self-sovereign identity. Which of the following accurately describes the technical components and structure of DIDs? \nI. A DID URI typically follows the syntax: did:<method-name>:<method-specific-identifier>. \nII. The DID document must contain only JSON-encoded data to ensure compatibility with all blockchain-verified registries. \nIII. The DID document includes cryptographic public keys and authentication methods so the verifier can verify that the subject controls the DID. \nIV. A DID document specifies a 'service endpoint,' which tells the verifier how to communicate with the DID subject for the next level of service.",
    options: ["I, II, and III", "I, III, and IV", "II, III, and IV", "All of the above"],
    answer: 1
  },
  {
    id: 88,
    question: "In the Verifiable Credentials (VC) data model, which entity is responsible for asserting claims about a subject and cryptographically signing them?",
    options: ["The Holder", "The Verifier", "The Issuer", "The Blockchain miner."],
    answer: 2
  },
  {
    id: 89,
    question: "If Algorand's BA* protocol fails to reach a final consensus in a single round, how does it resolve the situation mathematically and architecturally? \nI. It runs the BA* protocol repeatedly, then a timeout occurs, and the protocol moves to the next round with a newly selected random committee. \nII. Mathematically, exactly 10 executions of BA* are required to force a final consensus under weak synchrony. \nIII. Algorand mathematically demonstrates that running BA* 2 to 3 times is typically sufficient to reach final consensus, even if up to 49% of participants are malicious. \nIV. It permanently halts the blockchain to prevent a fork, requiring off-chain governance to reset the verifiable random functions.",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  },
  {
    id: 90,
    question: "In the structure of a Decentralized Identifier (DID) URI such as 'did:example:123', what does 'example' represent?",
    options: ["The DID method", "The DID subject identifier", "The DID document", "The DID scheme"],
    answer: 0
  }
];

// Blockchain and its Applications - Week 10 questions
questionsByDepartment["blockchain-and-its-applications"][10] = [
  {
    id: 91,
    question: "Which of the following denote properties of Hashed Timelock Contracts (HTLC)?",
    options: ["If the secret is not revealed, the funds are permanently locked and cannot be recovered.", "If the secret is not revealed, all contracts using that secret are automatically executed.", "HTLCs restrict the spending of funds until a valid secret (preimage) is revealed or a predefined timeout occurs.", "If the secret is not revealed, the funds are automatically transferred to the recipient after the timeout."],
    answer: 2
  },
  {
    id: 92,
    question: "If a participant in an atomic cross-chain swap halts during the \"triggering phase\" (after the hashlock secret has been revealed), what is the resulting state for a conforming counterparty?",
    options: ["The counterparty is \"worse off\" because they have lost their asset.", "The protocol guarantees that the conforming party either receives their intended asset or retains their original asset.", "All assets on all involved blockchains are permanently frozen.", "The counterparty must wait for a consensus-level view change to reclaim their funds."],
    answer: 1
  },
  {
    id: 93,
    question: "Which of the following are inherent risks or disadvantages associated with using a Centralized Trusted Third Party (TTP) for cross-chain asset transfers? \nI. Users must relinquish control of their funds to the third party. \nII. The third party represents a single point of failure. \nIII. Cross-chain transfers cannot be performed using a third party. \nIV. Users may lose funds if the third party is compromised or shuts down.",
    options: ["I, II, and III", "I, II, and IV", "II, III, and IV", "All of the above"],
    answer: 1
  },
  {
    id: 94,
    question: "Why is \"Consensus-driven\" data transfer emphasized for permissioned blockchains?",
    options: ["To ensure that only the administrator of the network can authorize a transfer.", "To guarantee that the data being moved is not a temporary or unconfirmed state of the source ledger.", "Because permissioned blockchains do not support hashlocks.", "To allow the destination network to participate in the mining process of the source network."],
    answer: 1
  },
  {
    id: 95,
    question: "In the three-party atomic swap scenario (Alice, Bob, Carol) involving an alt-coin, Bitcoin, and a car title, why is the sequence of timelocks (6Δ, 5Δ, 4Δ) critical?",
    options: ["To ensure the car title is transferred before Alice spends her alt-coins.", "To prevent the Bitcoin network from crashing due to high transaction volume.", "To allow Carol to claim her Bitcoin and Bob to claim his alt-coins before their respective contracts expire, even if the secret s is revealed late in the chain.", "To ensure that Alice, as the generator of the secret, has the least amount of time to act."],
    answer: 2
  },
  {
    id: 96,
    question: "According to the permissioned blockchain interoperability (e.g., between TradeLens and We.Trade), what must be included with the data moving from the source network to the destination? \nI. A set of endorsements or signatures representing the consensus view of the source network. \nII. A proof that the data has been encrypted using the destination network's private key. \nIII. Verification that the data sharing complies with the source network's 'Exposure Control' policy. \nIV. A physical bill of lading scanned into a PDF format.",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 1
  },
  {
    id: 97,
    question: "During the Hyperledger Indy identity configuration, which statements correctly describe the roles of Stewards and Trust Anchors? \nI. Stewards have the permission to register new DIDs (verinyms) on the ledger. \nII. Trust Anchors are responsible for maintaining the RBFT consensus nodes. \nIII. Trust Anchors, such as a University, have the authority to issue verifiable credentials to users. \nIV. Stewards are pre-approved participants who can approve the transition of a user to a Trust Anchor role.",
    options: ["I, II, and III", "I, III, and IV", "II, III, and IV", "All of the above"],
    answer: 1
  },
  {
    id: 98,
    question: "In the permissioned interoperability relay architecture, what does the \"Data Acceptance Policy\" in the destination network (Network A) evaluate?",
    options: ["The current exchange rate of the assets being transferred.", "Whether the received data has a sufficient number of valid attestations/signatures from the source network.", "The identity of the individual programmer who wrote the source chaincode.", "If the source network (Network B) has a higher market cap than Network A."],
    answer: 1
  },
  {
    id: 99,
    question: "Why does Hyperledger Indy use a \"Genesis Transaction\" file (pool_transactions_genesis) during the application setup?",
    options: ["It contains the history of every identity ever created since the start of the web.", "It is a legal document that Alice must sign before using the system.", "It reboots the nodes every time a new transaction is made.", "It provides the initial IP addresses, ports, and keys of the nodes in the Indy pool so the SDK can connect to the network."],
    answer: 3
  },
  {
    id: 100,
    question: "In the Indy tutorial, the University sets `support_revocation: False` when creating a Credential Definition. What is the implication of this setting?",
    options: ["The University can never issue more than one credential.", "Once issued, the University cannot use an Indy Revocation List to invalidate that specific transcript in the future.", "Alice is forbidden from showing her transcript to any company.", "The credential will automatically delete itself from Alice's wallet after 24 hours."],
    answer: 1
  }
];

// Blockchain and its Applications - Week 11 questions
questionsByDepartment["blockchain-and-its-applications"][11] = [
  {
    id: 101,
    question: "What specific gap does Hyperledger Aries fill when used alongside Hyperledger Indy?",
    options: ["It provides the consensus algorithm necessary for Indy to mine blocks.", "It introduces a new native cryptocurrency to incentivize Indy node operators.", "It gives the infrastructure for blockchain-routed peer-to-peer interactions and the secure transport of digital credentials between participants.", "It replaces Indy's distributed ledger entirely by acting as a faster, centralized database."],
    answer: 2
  },
  {
    id: 102,
    question: "According to the architecture of the Aries Cloud Agent Python (ACA-Py) discussed in the lecture, which of the following are primary modules/components? \nI. Core Capabilities \nII. REST API Module \nIII. Proof of Work Consensus Engine \nIV. Aries Protocols (DIDcomm)",
    options: ["I, II, and III", "I, II, and IV", "II, III, and IV", "All of the above"],
    answer: 1
  },
  {
    id: 103,
    question: "In the context of selfish mining, suppose an attacker's mining pool privately mines two consecutive blocks while the honest network mines one competing block. The attacker then releases its private chain, and both attacker blocks are successfully accepted into the main chain (i.e., no fork race or block loss occurs). If the block reward is 6.25 bitcoins per block, how much total reward does the attacker's pool earn?",
    options: ["6.25 bitcoins", "12.5 bitcoins", "18.75 bitcoins", "8.25 bitcoins"],
    answer: 1
  },
  {
    id: 104,
    question: "In the context of transaction privacy leakage, what mechanism is mentioned in the lecture as a way to use decoys to obscure the trace of cryptocurrency transactions?",
    options: ["Genesis Blocks", "Chaff coins (Mixins)", "51% Padding", "Webhooks"],
    answer: 1
  },
  {
    id: 105,
    question: "In an eclipse attack scenario discussed in lecture 54, suppose an attacker controls 40% of the network's hashing power, while a victim node has 30% and the rest of the network holds the remaining 30%. If the attacker successfully isolates (eclipses) the victim from the rest of the network, which of the following statements correctly describe what happens? \nI. The attacker now effectively controls 70% of the hashing power on the main chain. \nII. The honest nodes (victim + rest of the network) can no longer combine their 60% hashing power. \nIII. The attacker directly competes with the victim with a 40% vs 30% advantage. \nIV. The attacker directly competes with the rest of the network with a 40% vs 30% advantage.",
    options: ["I, II, and III", "I, III, and IV", "II, III, and IV", "All of the above"],
    answer: 2
  },
  {
    id: 106,
    question: "In the Fomo3D smart contract game, every time someone buys a ticket, the countdown timer is extended by 30 seconds. Suppose an attacker buys a ticket when there are exactly 3 minutes left on the clock, and then launches a suppression attack by flooding the network with high gas-price transactions so that no one else's transactions get included in blocks. Assuming no honest transactions go through during this time, how many ticket purchases did the attacker effectively prevent?",
    options: ["3 purchases", "6 purchases", "10 purchases", "30 purchases"],
    answer: 1
  },
  {
    id: 107,
    question: "What is the primary objective of an \"Eclipse Attack\" on a blockchain network?",
    options: ["To gain majority control (51%) of the network's hashing power by combining mining pools", "To isolate a target node from the rest of the network by filling its peer connections with attacker-controlled nodes", "To take advantage of smart contract bugs to steal funds", "To crack a user's private key using brute force"],
    answer: 1
  },
  {
    id: 108,
    question: "In an eclipse attack, an attacker can overwhelm a node by filling its \"new\" and \"tried\" peer tables with malicious IP addresses, effectively isolating it from honest peers. Based on the lecture, which of the following is a practical way developers can reduce this risk?",
    options: ["Force all nodes to rely on a centralized and trusted DNS server for peer discovery.", "Change how IP address buckets are managed so that malicious entries are gradually replaced by honest ones.", "Require nodes to pass a strict Proof of Stake check before joining the network.", "Encrypt the node's local database to hide the peer tables from attackers."],
    answer: 1
  },
  {
    id: 109,
    question: "In a double-spending attack where the attacker is working together with a mining pool, how is the vendor actually cheated?",
    options: ["The attacker sends a payment to the vendor and receives the service, but the colluding mining pool later confirms a conflicting transaction that sends the same coins back to the attacker.", "The attacker steals the vendor's digital signature and uses it to drain their wallet.", "The attacker creates a private chain of blocks that removes the vendor's node from the network.", "The attacker uses fake \"chaff coins\" to make the payment appear larger than it really is."],
    answer: 0
  },
  {
    id: 110,
    question: "In an Eclipse Attack, how does the attacker actually isolate a victim node from the rest of the network?",
    options: ["By interfering with the ISP's routing hardware", "By launching a DDoS attack on the victim's internet provider", "By hacking the victim's wallet so it ignores blocks", "By filling the victim's peer tables with attacker-controlled IPs"],
    answer: 3
  }
];

// Blockchain and its Applications - Week 12 questions
questionsByDepartment["blockchain-and-its-applications"][12] = [
  {
    id: 111,
    question: "Which of the following is a suitable use case for a blockchain-based solution in real-world systems?",
    options: ["Storing high-frequency sensor data that requires rapid deletion and modification", "Creating a transparent and tamper-evident supply-chain tracking system for goods", "Running a machine learning model training directly on a public blockchain", "Hosting large video files for a global streaming platform"],
    answer: 1
  },
  {
    id: 112,
    question: "In interbank settlements, what issue does Project Ubin Phase 2 try to solve using decentralized multilateral netting?",
    options: ["Preventing double-spending of digital currencies.", "Verifying identities between banks", "Resolving gridlock situations where banks lack liquidity for individual payments but are overall solvent", "Stopping unauthorized access to central bank accounts"],
    answer: 2
  },
  {
    id: 113,
    question: "The Stellar Consensus Protocol (SCP) uses federated voting. Which of the following are the key steps involved? \nI. Propose \nII. Vote \nIII. Accept \nIV. Prepare \nV. Confirm",
    options: ["I, II, and III", "II, III, and V", "II, IV, and V", "III, IV, and V"],
    answer: 1
  },
  {
    id: 114,
    question: "According to research by Amores-Sesar et al., what level of overlap in trusted nodes (UNL overlap) is now recommended for safety in the Ripple network?",
    options: ["20%", "40%", "80%", "Over 90%"],
    answer: 3
  },
  {
    id: 115,
    question: "In the CollabFed decentralized marketplace model, how is a request from a public blockchain verified and transferred to a private consortium ledger?",
    options: ["Through a central broker API", "Using SPV (Simplified Payment Verification) plus approval from two-thirds of service providers", "By running Proof of Work on the private ledger", "By encrypting it with a shared private key"],
    answer: 1
  },
  {
    id: 116,
    question: "Why is it better to use a blockchain-based access log for sensitive government data instead of duplicating the data itself?",
    options: ["It speeds up access to large files", "It allows deletion of stored data", "It minimizes breach risks while keeping a transparent record of access", "It removes the need for centralized storage"],
    answer: 2
  },
  {
    id: 117,
    question: "How does CollabFed combine multiple service provider signatures into a single response for users?",
    options: ["Schnorr multi-signatures", "CoSi (Collective Signing) using BLS signatures", "Ring signatures", "HMAC"],
    answer: 1
  },
  {
    id: 118,
    question: "What was the main goal of Project Ubin Phase 3 (Delivery versus Payment)?",
    options: ["Automating GST collection", "Enabling atomic exchange of cash and securities across different systems", "Supporting cross-border payments", "Building a retail payment interface"],
    answer: 1
  },
  {
    id: 119,
    question: "What performance characteristics were observed for the Stellar network? \nI. Transaction throughput of approximately 350 TPS. \nII. Transaction finality/latency of approximately 1 second. \nIII. Energy consumption comparable to Bitcoin mining. \nIV. Confirmation times ranging between 3 to 5 minutes.",
    options: ["I and II", "I and III", "II and IV", "III and IV"],
    answer: 0
  },
  {
    id: 120,
    question: "In decentralized marketplaces without platforms like Booking.com, what major challenge still remains?",
    options: ["Difficulty ordering transactions", "Lack of quick authority for real-time dispute resolution", "Poor blockchain interoperability", "High smart contract costs"],
    answer: 1
  }
];

export const getQuestionsByDepartmentWeek = (department, weekId) => {
  return questionsByDepartment[department] && questionsByDepartment[department][weekId]
    ? questionsByDepartment[department][weekId]
    : [];
};

export const getAllQuestionsByDepartment = (department) => {
  const departmentData = questionsByDepartment[department];
  if (!departmentData) return [];
  
  return Object.values(departmentData).flat();
};
