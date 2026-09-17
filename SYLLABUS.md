# Academic Syllabus & Curriculum Reference (`SYLLABUS.md`)

> **Institution**: Bansilal Ramnath Agarwal Charitable Trust's **Vishwakarma Institute of Technology, Pune**  
> *(An Autonomous Institute affiliated to Savitribai Phule Pune University)*  
> **Department**: Department of Computer Science & Engineering (Internet of Things & Cyber Security Including Block Chain Technology) [CSE-IoTCSBT]  
> **Curriculum Pattern**: **Pattern 'A-25'** · **Year**: Second Year (S.Y. B.Tech.)  
> **Academic Year**: 2025–26 / 2026–27 · **Issue**: 01 · **Rev**: 00  
>
> **Authority**: All AI agents and human contributors authoring notes in `BatchHub-notes` MUST align their unit content, numbering, and naming strictly with this official syllabus specification.

---

## 1. Curriculum Structure & Course Overview

| Subject No. | Course Code | Subject Code (Folder) | Course Title | Teaching Scheme (Th/Lab/Tut) | Total Credits | Exam Pattern | Total Units | Notes Status |
|---|---|---|---|---|---|---|---|---|
| **S1** | `CB2003` | **`fds`** | **Fundamentals of Data Structures** | 3 / 2 / 0 | 4 | CP(20) + LAB(40) + ESE TH(40) | **6 Units** | In Backlog (0/6) |
| **S2** | `CB2004` | **`dcn`** | **Data Communication and Networking** | 2 / 0 / 1 | 3 | CVV(20) + CP(30) + GD/PPT(10) + MSE(40) | **4 Units** | 🟡 50% (2/4) |
| **S3** | `CB2005` | **`biot`** | **Basics of IoT** | 2 / 2 / 0 | 3 | CVV(20) + CP(30) + GD/PPT(10) + ESE TH(40) | **4 Units** | In Backlog (0/4) |
| **S4** | `CB2006` | **`oop`** | **Object Oriented Programming** | 1 / 2 / 0 | 3 (2 Th+Lab) | CVV(20) + CP(30) + GD/PPT(10) + ESE TH(40) | **4 Units** | In Backlog (0/4) |
| **S5 (MDM)**| `MM0501` | **`pas`** | **Probability and Statistics** | 2 / 0 / 1 | 3 | CVV(20) + CP(20) + HA(20) + MSE(40) | **4 Units** | In Backlog (0/4) |
| **S6 (HSS)**| `HS2002` | — | From Campus to Corporate - 1 | 2 / 0 / 0 | 2 | MSE(R)(50) + ESE(R)(50) | 3 Verticals | Reference |
| **S7 (RAD)**| `HS2001` | — | Reasoning and Aptitude Development - 3 | 1 / 0 / 0 | 1 | Direct Evaluation (100) | 2 Sections | Reference |
| **S8 (DT)** | `CB2001` / `IR2101` | — | Design Thinking – 1 / Int'l Tech Front | 0 / 0 / 1 | 1 | Direct Evaluation (100) | 2 Sections | Reference |
| **S9 (EDI)**| `CB2002` / `IR2102` | — | Engineering Design & Innovation – 1 | 0 / 4 / 0 | 2 | MSE(R)(30) + ESE(R)(70) | 2 Sections | Reference |

**Total Core Note Deliverables**: **22 Units** across the 5 primary technical subjects (FDS: 6, DCN: 4, BIOT: 4, OOP: 4, PAS: 4).

---

## 2. Detailed Technical Subject Syllabi

### 2.1 CB2003: Fundamentals of Data Structures (`fds`)

* **Target Folder**: `notes/fds/`
* **Credits**: 4 | **Teaching Scheme**: Theory: 3 Hours/Week, Lab: 2 Hours/Week
* **Prerequisites**: Knowledge of programming fundamentals using C or Python, control structures, functions, arrays, memory management, and file handling.
* **Core Textbooks**:
  1. E. Horowitz, S. Sahni, D. Mehta; *Fundamentals of Data Structures in C*; 2nd Edition; Universities Press; 2008.
  2. Y. Langsam, M. Augenstein, A. Tannenbaum; *Data Structures Using C and C++*; 2nd Edition; Pearson Education; 2006.
* **Reference E-Books & Resources**:
  1. Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein; *Introduction to Algorithms* (CLRS); 3rd Edition; MIT Press.
  2. Brad Miller, David Ranum; *Problem Solving with Algorithms and Data Structures using Python*; Runestone Academy.
  3. NPTEL: *Data Structures and Algorithms Design* by Prof. Nitin Saxena (IIT Kanpur).
  4. Coursera: *Data Structures* (UC San Diego).

#### Course Outcomes (COs)
- **CO1**: Analyze and compute time and space complexity of algorithms.
- **CO2**: Apply searching and sorting algorithms to solve computational problems.
- **CO3**: Implement and apply stack and queue operations in applications.
- **CO4**: Develop and use various types of linked lists to manage dynamic data.
- **CO5**: Apply tree data structures for hierarchical data representation and operations.
- **CO6**: Demonstrate understanding of graph and their applications.

#### Unit Breakdown & Scope (6 Units)

##### SECTION I
1. **Unit 1: Introduction to Data Structures and Complexity** (7 Hours) — `FDSU1.html`
   - *Concepts*: Abstract Data Types (ADTs), need of data structures, classification of data structures (primitive vs non-primitive, linear vs non-linear). Complexity analysis of algorithms using asymptotic notations: Big-O ($\mathcal{O}$), Big-$\Omega$, and Big-$\Theta$ notations. Time-space trade-off. Recursion basics and applications.
   - *Key Derivations/Problems*: Recurrence relation analysis, growth rates of functions.

2. **Unit 2: Arrays and Searching & Sorting Techniques** (7 Hours) — `FDSU2.html`
   - *Concepts*: 1D and 2D arrays, address calculation, sparse matrix representation and transpose algorithms, strings and string manipulation, dynamic arrays. Linear search and binary search (iterative and recursive). Sorting algorithms: Bubble sort, Selection sort, Insertion sort, Merge sort, Quick sort. Comprehensive time & space complexity analysis of all techniques.
   - *Case Studies*: Sensor data buffering using arrays, Pattern matching in intrusion detection, or Analyzing large-scale array logs for anomalies.

3. **Unit 3: Linked Lists** (7 Hours) — `FDSU3.html`
   - *Concepts*: Memory fragmentation & pointer behavior, Singly linked list (SLL), Doubly linked list (DLL), Circular linked list (CLL). Core operations: insert (beginning, end, position), delete, traverse, search. Applications: polynomial representation and addition/multiplication, dynamic memory management allocation simulation.

##### SECTION II
4. **Unit 4: Stacks and Queues** (7 Hours) — `FDSU4.html`
   - *Concepts*: Stack ADT, array and linked implementation. Stack applications: expression evaluation (postfix/prefix), infix to postfix conversion, recursion using call stack. Queue ADT: operations, linear queue limitations, Circular queue, Priority queue, Double-Ended Queue (Deque). Applications of queues in real-world problems (CPU scheduling, print queues).

5. **Unit 5: Trees** (7 Hours) — `FDSU5.html`
   - *Concepts*: Tree terminologies (root, node, edge, degree, height, depth). Binary trees, properties, representation. Binary Search Trees (BST): insertion, deletion, search, find height, mirror. Tree traversals: In-order, Pre-order, Post-order (recursive and non-recursive), Level-order display. Expression trees, Huffman coding algorithm. Applications in decision-making and hierarchical file systems.

6. **Unit 6: Graphs** (7 Hours) — `FDSU6.html`
   - *Concepts*: Graph representations: Adjacency matrix, Adjacency list. Graph traversals: Breadth First Search (BFS), Depth First Search (DFS). Applications of graphs in networking and social media: Transitive closure (Warshall’s algorithm), Topological sorting. Applications: Networking, Social graphs, IoT network routing, Blockchain peer-to-peer networks.
   - *Case Study*: Attack path modelling using graphs.

#### Standard Lab Assignments
1. Implement recursive functions and analyze complexity: Permutations of string OR Tower of Hanoi.
2. Search on database: Linear and binary search on employee/student records OR phone contact prefix search.
3. Sort array of movie names (Selection & Insertion sort pass-wise).
4. Implement and compare Merge Sort vs Quick Sort with large datasets and running time plots.
5. Singly, doubly, and circular linked list music playlist manager (add/delete/skip/next/previous).
6. Stack ADT: Postfix evaluation OR Balanced HTML/XML tag sequence verification.
7. Print queue simulation (FIFO) OR Railway ticket booking with circular queue and deque.
8. Expression tree construction from prefix/postfix with recursive & non-recursive traversals.
9. BST operations: Insert, Inorder, Search, Height, Level-wise, Delete, Mirror.
10. Graph BFS and DFS using adjacency matrix and adjacency list.

---

### 2.2 CB2004: Data Communication and Networking (`dcn`)

* **Target Folder**: `notes/dcn/`
* **Credits**: 3 | **Teaching Scheme**: Theory: 2 Hours/Week, Lab/Tut: 1 Hour/Week
* **Prerequisites**: Working of computer, Number Systems.
* **Core Textbooks**:
  1. B. A. Forouzan; *Data Communications and Networking*; New Delhi, India: Tata McGraw-Hill; 2006.
  2. J. F. Kurose and K. W. Ross; *Computer Networking: A Top-Down Approach*; Pearson; 2021.
* **Reference Books & Resources**:
  1. A. Godbole; *Data Communication and Networking*; Tata McGraw-Hill; 2002.
  2. A. S. Tanenbaum and D. J. Wetherall; *Computer Networks*; 5th ed.; PHI Learning; 2011.
  3. CCNA: *Introduction to Networks* (Cisco Networking Academy).

#### Course Outcomes (COs)
- **CO1**: Explain and apply the fundamentals of data communication and networking concepts such as transmission media, protocols, and network devices.
- **CO2**: Analyze and differentiate the functions of each layer in the OSI reference model using real-world examples and scenarios.
- **CO3**: Analyze the TCP/IP network communication model and evaluate its layered structure through case studies and configuration exercises.
- **CO4**: Design and implement a small computer network by assigning and configuring IP addresses, subnet masks, and basic routing.

#### Unit Breakdown & Scope (4 Units)

##### SECTION I
1. **Unit 1: Data communication and its components** (7 Hours) — `DCNU1.html` ✅ *Published*
   - *Concepts*: Process of data communication and its 5 components: Transmitter (Sender), Receiver, Medium, Message, Protocol. Protocols, Standards, Standard organizations (IEEE, ITU-T, IETF, ISO). Bandwidth, Data Transmission Rate, Baud Rate vs Bits per second (bps). Modes of Communication: Simplex, Half-duplex, Full-duplex. Signal and its properties: analog vs digital, frequency, wavelength, phase. Types of Errors: Single-Bit Error and Burst Error. Redundancy Error Detection: Longitudinal Redundancy Check (LRC), Vertical Redundancy Check (VRC), Cyclic Redundancy Check (CRC). IEEE standards: 802.1, 802.2, 802.3 (Ethernet), 802.4 (Token Bus), 802.5 (Token Ring). Wireless LANs: 802.11 Architecture, MAC Sublayer.

2. **Unit 2: OSI Reference Model** (7 Hours) — `DCNU2.html` ✅ *Published*
   - *Concepts*: Layered Architecture, Peer-to-Peer Processes, Interfaces between Layers, Protocols, Organization of the Layers, Encapsulation and Decapsulation. Layers of the OSI Reference Model (Functions, Services, and Features of each Layer):
     - Layer 1: Physical Layer (bit transmission, topology, data rate, line configuration).
     - Layer 2: Data-Link Layer (framing, physical addressing, error & flow control, access control).
     - Layer 3: Network Layer (logical addressing, packet routing, fragmenting).
     - Layer 4: Transport Layer (service-point port addressing, segmentation & reassembly, connection control, flow/error control).
     - Layer 5: Session Layer (dialog control, synchronization, token management).
     - Layer 6: Presentation Layer (translation, compression, encryption).
     - Layer 7: Application Layer (network virtual terminal, FTAM, mail services, directory services).

##### SECTION II
3. **Unit 3: IP addressing** (7 Hours) — `DCNU3.html` 🟡 *Pending*
   - *Concepts*: Addressing mechanisms in the Internet. IP Addressing: IPv4 address format, dotted-decimal notation. Classful IP Address classes (Class A, B, C, D, E) and default masks. IP addressing mechanisms: Subnetting (custom subnet masks, subnet address calculations), Supernetting, Masking. CIDR notation and VLSM. IPv6 addressing: 128-bit representation (colon-hexadecimal, zero compression rule), address space allocation, unicast/multicast/anycast, IPv6 Auto-configuration (SLAAC, DHCPv6).

4. **Unit 4: TCP/IP Model** (7 Hours) — `DCNU4.html` 🟡 *Pending*
   - *Concepts*: TCP/IP Layered Architecture vs OSI model. Data Link Layer in TCP/IP: Nodes and links, services, categories of links, sub-layers. Link layer addressing: three types of addresses (physical, logical, port), Address Resolution Protocol (ARP) operation, cache, and packet format. Transport layer protocols: transport layer services, connectionless vs connection-oriented service. Transmission Control Protocol (TCP): features, segment format, 3-way handshake, 4-way teardown, flow and error control. User Datagram Protocol (UDP): features, datagram format, checksum calculation, application use cases.

#### Standard Lab Practicals
1. Study of Number Systems.
2. Network Topologies: Bus, Ring, Star, Mesh, Tree, Hybrid.
3. Network Connecting Devices: Hub, Switch, Router, Repeater, Bridge, Gateway, Modem, Wireless components.
4. Cable creation: Straight-through and Crossover standard network cables testing with cable tester.
5. Wired media topology setup.
6. Wireless media topology setup.
7. Configure Static and Dynamic IP addresses.
8. Configure DHCP server.
9. TCP/IP Utilities and commands: `ipconfig`, `ping`, `traceroute`, `netstat`, `pathping`, `route`.
10. Install Wireshark and configure as packet sniffer for traffic capture.

---

### 2.3 CB2005: Basics of IoT (`biot`)

* **Target Folder**: `notes/biot/`
* **Credits**: 3 | **Teaching Scheme**: Theory: 2 Hours/Week, Lab: 2 Hours/Week
* **Prerequisites**: Digital System Design, Electronics Workshop, Fundamentals of IoT.
* **Core Textbooks**:
  1. Hakima Chaouchi; *The Internet of Things Connecting Objects to the Web*; Wiley; 2010.
  2. Olivier Hersent, David Boswarthick, Omar Elloumi; *The Internet of Things: Key Applications and Protocols*; Wiley.
  3. Daniel Minoli; *Building the Internet of Things with IPv6 and MIPv6: The Evolving World of M2M Communications*; Wiley.
* **Reference Books**:
  1. A. Bahga and V. Madisetti; *Internet of Things: A Hands-On Approach*; 2014.
* **MOOCs**:
  1. NPTEL: *Introduction To Internet of Things* by Prof. Sudip Misra (IIT Kharagpur).
  2. Infosys Springboard: *IoT Devices*.

#### Course Outcomes (COs)
- **CO1**: Explain and demonstrate the use of concepts, terminologies, and architecture of IoT systems through case studies and system design examples.
- **CO2**: Compare and analyze the working principles of microprocessors and microcontrollers through practical experiments and simulations.
- **CO3**: Apply appropriate communication protocols for the design and implementation of IoT systems in real-world scenarios.
- **CO4**: Identify and apply IoT security and privacy methods to secure IoT devices, data, and communication channels in given problem statements.

#### Unit Breakdown & Scope (4 Units)

##### SECTION I
1. **Unit 1: Introduction to IoT** (7 Hours) — `BIOTU1.html`
   - *Concepts*: Introduction, Definitions & Characteristics of IoT, History of IoT. IoT Architectures (3-layer, 5-layer, ITU-T reference architecture). Physical and Logical Design of IoT. Enabling Technologies in IoT (Sensors, Actuators, WSN, Cloud, Big Data). About "Things" in IoT, Identifiers in IoT (RFID, Barcode, IP, MAC). About the Internet in IoT. IoT Frameworks. Difference between IoT and M2M (Machine-to-Machine).

2. **Unit 2: Introduction of Microprocessor & Microcontroller** (7 Hours) — `BIOTU2.html`
   - *Concepts*: Basics of Microprocessors, types and evolutionary timeline, block diagram and operational functioning. Evolution of microcontrollers, selection criteria for particular IoT applications. MCS-51 (8051) architecture, family devices and derivatives. 8051 Pin configuration, Port architecture (Ports 0, 1, 2, 3), memory organization (internal RAM/ROM, SFRs), external memory interfacing.

##### SECTION II
3. **Unit 3: IP based Protocols for IoT** (7 Hours) — `BIOTU3.html`
   - *Concepts*: Need for lightweight IP protocols in constrained nodes. IPv6 and 6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks - header compression, adaptation layer). RPL (Routing Protocol for Low-Power and Lossy Networks). Web services: REST architecture. Messaging protocols: AMQP (Advanced Message Queuing Protocol), CoAP (Constrained Application Protocol — REST over UDP), MQTT (Message Queuing Telemetry Transport — pub/sub, broker, QoS levels 0/1/2). Authorization and Access Control in IoT.

4. **Unit 4: IoT Security and Privacy** (7 Hours) — `BIOTU4.html`
   - *Concepts*: Challenges and threats to IoT security (hardware vulnerabilities, unencrypted communications, botnets). Encryption and authentication techniques for constrained devices (AES, lightweight cryptography, PKI). Privacy concerns, user privacy rights, and regulatory frameworks. Best practices for securing IoT devices and deployments (secure boot, firmware updates, network isolation).

#### Standard Lab Practicals
1. Study & survey of development boards for IoT (Arduino, ESP32, Raspberry Pi, NodeMCU).
2. Study & survey of various IoT cloud platforms (ThingsBoard, Blynk, AWS IoT, Adafruit IO).
3. Interfacing basic sensors and actuators with Arduino Uno.
4. Build a cloud-ready temperature sensor with Arduino Uno and an IoT platform.
5. Sensor and actuator integration with Arduino.
6. IoT-based Stepper Motor Control using Raspberry Pi.
7. IoT-based Web-Controlled Home Automation using Arduino Uno.
8. Simple IoT project with ESP8266 Wi-Fi module.
9. Implementation of an RFID-based IoT project.

---

### 2.4 CB2006: Object Oriented Programming (`oop`)

* **Target Folder**: `notes/oop/`
* **Credits**: 3 | **Teaching Scheme**: Theory: 1 Hour/Week, Lab: 2 Hours/Week
* **Prerequisites**: Basic Programming such as C language.
* **Core Textbooks**:
  1. E. Balagurusamy; *Object-Oriented Programming with C++*; 4th ed.; McGraw-Hill; 2008.
  2. Bjarne Stroustrup; *The C++ Programming Language*; 3rd ed.; Pearson Education.
  3. Jeff Friesen; *Beginning Java 6 Platform from Novice to Professional*; Apress/Springer.
  4. Gallardo, Burnette, McGovern; *Eclipse in Action: A Guide for Java Developers*; Manning.
* **Reference Books**:
  1. Herbert Schildt; *C++ The Complete Reference*; 8th ed.; McGraw-Hill; 2011.
  2. Robert Lafore; *Object-Oriented Programming in C++*; 4th ed.; Sams Publishing.
  3. Khalid A. Mughal; *A Programmer's Guide to Java SCJP Certification*; 3rd ed.; Pearson.
* **MOOCs**: Swayam: *Programming in Modern C++* by Prof. Partha Pratim Das (IIT Kharagpur).

#### Course Outcomes (COs)
- **CO1**: Understanding and Implementation of OOP Fundamentals.
- **CO2**: Apply inheritance, templates, and STL to develop C++ programs.
- **CO3**: Demonstrate the use of Java syntax, OOP principles, and packages to develop applications.
- **CO4**: Design Java applications using exception handling, event handling, collections, and JDBC.

#### Unit Breakdown & Scope (4 Units)

##### SECTION I: C++ Programming
1. **Unit 1: Introduction to OOP** (7 Hours) — `OOPU1.html`
   - *Concepts*: Fundamentals of OOP paradigm. Introduction to Programming and C++, Differences between C and C++. Variables, Data Types, and Operators. Control Structures, Loops, and Iteration. Functions and Modular Programming. Basics of Console Input and Output streams (`cin`, `cout`). Dynamic Memory Allocation (`new`, `delete`). Introduction to Classes and Objects, Creation and Destruction of Objects. Data Members, Member Functions, Access Specifiers (`private`, `protected`, `public`). `this` Pointer. Constructors (default, parameterized, copy) and Destructors. Static Class Members and Static Member Functions. Friend Classes and Friend Functions. Function Overloading and Operator Overloading.

2. **Unit 2: OOP Principles** (7 Hours) — `OOPU2.html`
   - *Concepts*: Introduction to Inheritance, Base and Derived class Constructors, Types of Inheritance (Single, Multilevel, Multiple, Hierarchical, Hybrid). Down-casting and Up-casting. Function Overriding, Virtual Functions, Polymorphism, Pure Virtual Functions, Abstract Classes, Virtual Base Classes (Diamond problem resolution). C++ Class Hierarchy. File Streams (`ifstream`, `ofstream`, `fstream`), Text File Handling, Binary File Handling. Function Templates, Class Templates. Standard Template Library (STL): containers (`vector`, `list`, `map`), iterators, algorithms.

##### SECTION II: Java Programming
3. **Unit 3: Fundamentals of Java Programming and Object-Oriented Concepts** (7 Hours) — `OOPU3.html`
   - *Concepts*: Introduction to Java, History and Features of Java, Comparison with C and C++. JDK, JRE, and JVM architecture. First Java Program, Data types, Variables, Constants, Literals, Operators, Strings, Arrays. Control Flow statements. OOP in Java: Classes and Objects, Getters/Setters, Methods, `Scanner` class. Constructors, `super` and `this` keywords. Access Modifiers, `static` keyword. Encapsulation, Data protection. Inheritance in Java: types, `extends` and `implements` keywords. Polymorphism: Compile-time (Method Overloading) vs Runtime (Method Overriding). Static and Dynamic Binding. Abstraction: Interfaces and Abstract classes, abstract vs non-abstract methods. Memory management in Java (Heap vs Stack, Garbage Collection basics). Packages and import mechanisms.

4. **Unit 4: Exception Handling, GUI and Database Programming in Java** (7 Hours) — `OOPU4.html`
   - *Concepts*: Exception Handling: `try`, `catch`, `finally` blocks, Multiple catch, Nested `try`, `throw` and `throws` keywords. `final` vs `finally` vs `finalize`. Designing Graphical User Interfaces in Java: Components and Containers, Layout Managers (`FlowLayout`, `BorderLayout`, `GridLayout`). AWT Components, Window Menus. Extending GUI features using Swing Components (`JFrame`, `JButton`, `JTextField`, etc.). Java Utilities (`java.util` package). Event-Driven Programming in Java: Event-handling mechanism, Delegation Event Model, Event Classes, Event Sources, Event Listeners. JDBC: JDBC Drivers, steps to connect to Database, connectivity with MySQL / Oracle, `DriverManager`. Types of JDBC statements: `Statement`, `PreparedStatement`, `CallableStatement`, `ResultSet`, CRUD operations. Java Collections Framework: Collections of Objects, Collection Types, `List` (`ArrayList`, `Vector`), `Set` (`HashSet`, `TreeSet`), `Queue`, `Map` (`HashMap`), Hashing mechanism.

#### Standard Lab Practicals
- **Part I (C++)**:
  1. Basics: Area of rectangle, Celsius to Fahrenheit conversion, Voting eligibility, Fibonacci series, Factorial recursion, Prime testing.
  2. Constructors: Rectangle class, basic Banking system.
  3. Static members & `this` pointer.
  4. Operator overloading using friend function.
  5. Inheritance: Shape hierarchy with virtual area function.
  6. Polymorphism: Polymorphic banking system with savings/checking accounts.
  7. Function template for maximum of two values.
- **Part II (Java)**:
  1. Bank account class with `Scanner`, constructor, deposit/withdraw methods, `toString()`.
  2. Inheritance hierarchy with `super`, `this`, `static`, `final`, polymorphism.
  3. Abstract class and Interface on `Document` class with multiple interfaces.
  4. Java Database Connectivity (JDBC) with MySQL/Oracle for CRUD operations.
  5. GUI Java application with Swing and event handling.

---

### 2.5 MM0501: Probability and Statistics (`pas`)

* **Target Folder**: `notes/pas/`
* **Credits**: 3 | **Teaching Scheme**: Theory: 2 Hours/Week, Tutorial: 1 Hour/Week
* **Prerequisites**: Basic algebra, Calculus, Logical reasoning, and basic problem-solving skills.
* **Core Textbooks**:
  1. Sheldon M. Ross; *Probability and Statistics for Engineers and Scientists*; 5th ed.; Elsevier.
  2. *Schaum's Outline of Probability and Statistics*; 4th ed.; McGraw-Hill.
  3. J. L. Devore; *Probability and Statistics for Engineering and the Sciences*; 9th ed.; Cengage Learning; 2016.
* **Reference Books**:
  1. Richard A. Johnson, I. Miller, J. E. Freund; *Probability and Statistics for Engineers*; 9th ed.; PHI; 2016.
  2. G. S. Rao; *Probability and Statistics for Science and Engineering*; 11th ed.; Universities Press; 2018.
  3. R. E. Walpole, R. H. Myers, S. L. Myers, K. Ye; *Probability and Statistics for Engineers and Scientists*; 9th ed.; Pearson; 2012.
* **MOOCs**:
  1. NPTEL: *Probability and Statistics* by Prof. Somesh Kumar (IIT Kharagpur).
  2. NPTEL: *Introduction to Probability* by Prof. G. Srinivasan (IIT Madras).
  3. HarvardX: *Introduction to Probability*.

#### Course Outcomes (COs)
- **CO1**: Use descriptive statistics, probability concepts, and random variables to process data.
- **CO2**: Apply discrete and continuous probability distributions to engineering problems.
- **CO3**: Perform statistical inference using estimation and hypothesis testing.
- **CO4**: Analyze and interpret relationships in data using correlation and regression.

#### Unit Breakdown & Scope (4 Units)

##### SECTION I
1. **Unit 1: Descriptive Statistics** (6 Hours) — `PASU1.html`
   - *Concepts*: Types of data: Qualitative, Quantitative, Discrete, Continuous. Frequency distributions. Visualizations: Histograms, Bar charts, Box plots, Scatter plots. Measures of Central Tendency: Mean, Median, Mode. Measures of Dispersion: Variance, Standard Deviation, Range, Quartiles, Coefficient of Variation (CV).

2. **Unit 2: Probability Basics and distributions** (8 Hours) — `PASU2.html`
   - *Concepts*: Basic probability rules: Axioms of probability, Complement rule, Addition rule. Conditional Probability & Independence of events, Multiplication rule. Bayes’ Theorem and its engineering diagnostic applications. Random Variables: Discrete and Continuous random variables. Probability Mass Function (PMF), Probability Density Function (PDF), Cumulative Distribution Function (CDF). Mathematical Expectation, Variance, and their algebraic properties. Discrete distributions: Bernoulli, Binomial ($B(n, p)$), Poisson ($\text{Pois}(\lambda)$). Continuous distributions: Uniform, Exponential. Applications in engineering and component reliability.

##### SECTION II
3. **Unit 3: Normal Distribution & Sampling Theory** (6 Hours) — `PASU3.html`
   - *Concepts*: Normal (Gaussian) Distribution: Standard normal distribution, $Z$-scores, Properties of the bell curve. Tests involving the Normal distribution, One-Tailed and Two-Tailed tests, $P$-value. Special applications of normal distribution (engineering tolerances, quality control). Normal approximation to Binomial and Poisson distributions. Sampling Theory: Random sampling, Sample mean, Sample variance. Sampling distribution of the sample mean. Standard Error (SE). Central Limit Theorem (CLT) — intuitive explanation, significance, and numerical applications.

4. **Unit 4: Estimation, Hypothesis Testing, Correlation & Regression** (8 Hours) — `PASU4.html`
   - *Concepts*:
     - **Estimation**: Point estimation, properties of good estimators (unbiasedness, consistency, efficiency). Interval estimation: Confidence Intervals for mean ($\sigma$ known and $\sigma$ unknown).
     - **Hypothesis Testing**: Null ($H_0$) and Alternative ($H_1$) hypotheses, Type I ($\alpha$) and Type II ($\beta$) errors, Level of significance. One-sample $Z$-test and $t$-test.
     - **Goodness of Fit & Independence**: Chi-Square ($\chi^2$) Tests: Test for goodness of fit, Test for independence of attributes in contingency tables.
     - **ANOVA**: Analysis of Variance: One-way ANOVA, $F$-test, and variance ratio interpretation.
     - **Correlation & Regression**: Correlation analysis, Pearson's correlation coefficient, Line of regression ($Y$ on $X$ and $X$ on $Y$), Standard error of estimate, Spearman's rank correlation. Single and multiple regression, Linear regression, Curve fitting by the Method of Least Squares.

#### Standard Tutorials
1. Descriptive Statistics for Factory Production (mean, median, mode, variance, SD, CV).
2. Probability in Electrical Component Failure & Bayes' Theorem.
3. Modeling Call Arrivals Using Discrete Distributions (Binomial and Poisson).
4. Reliability Analysis Using Exponential Distribution and MTBF.
5. Normal Distribution in Quality Control ($Z$-scores, tolerance limits).
6. Hypothesis Testing for Process Verification (one-sample $Z$-test / $t$-test).
7. Chi-Square Test for Inspection Data (Tool-based: Python / Excel).
8. One-Way ANOVA for Comparing Manufacturing Methods (Tool-based: Python / Excel).

---

## 3. Ancillary Curriculum Modules (Reference Only)

The official VIT CSE-IoTCSBT A-25 scheme also encompasses four institutional modules:
- **`HS2002` From Campus to Corporate – 1** (Credits: 2 | 2 Hours/Week):
  - *Vertical 1*: Companies & Industry (Domains, Strategy, P&L, Balance Sheet, AOP Budgeting).
  - *Vertical 2*: Application of Knowledge (Product Management, UX/UI, Go-to-Market, QA & Testing, Customer Success, Security/Privacy, AI Evolution).
  - *Vertical 3*: Professional Skills (Curiosity, Articulation, Problem Breakdown with Mind Maps, Project Management, Critical Thinking with Mental Models).
- **`HS2001` Reasoning and Aptitude Development – 3** (Credits: 1 | 1 Hour/Week):
  - *Section I*: English Language & Communication Skills + Logical and Analytical Reasoning (Syllogisms, Coding-Decoding, Data Sufficiency, Series).
  - *Section II*: Quantitative Aptitude Fundamentals (Number systems, HCF/LCM, Profit/Loss, Speed-Time-Distance, P&C, Probability, Spatial reasoning).
- **`CB2001` Design Thinking – 1** / `IR2101` International Tech Front Module (Credits: 1):
  - Paper publications, patents, literature reviews, journal evaluation, IPR, research ethics, and paper drafting.
- **`CB2002` / `ML2002` Engineering Design and Innovation – 1** / `IR2102` (Credits: 2 | Lab: 4 Hours/Week):
  - Project Centric Learning (PCL), Raspberry Pi/IoT hardware case studies (soil moisture, temperature, motion, smoke, collision detection).

---

## 4. Operational Rule for All Contributors & Agents

> ⚡ **Mandatory Synchronization Invariant**:  
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**
