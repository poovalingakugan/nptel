// Questions organized by department and weeks
export const questionsByDepartment = {
  "sensors-and-actuators": {},
  "industry-4-0-and-industrial-iot": {}
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
