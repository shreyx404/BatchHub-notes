# Academic Syllabus & Curriculum Reference (`SYLLABUS.md`)

> **Scope**: This document defines the canonical academic syllabus, unit breakdown, core concepts, textbook references, and high-frequency exam topics for the **5 core engineering curriculum subjects** hosted in `BatchHub-notes`.
>
> **Authority**: All AI agents and human contributors authoring notes MUST align their unit content and naming strictly with this specification.

---

## 1. Curriculum Overview

| Subject Code | Folder | Full Course Title | Typical Semester | Total Units |
|---|---|---|---|---|
| **`dcn`** | `notes/dcn/` | Data Communication & Networks | Sem 4 / 5 | 6 Units |
| **`fds`** | `notes/fds/` | Fundamentals of Data Science | Sem 4 / 5 | 6 Units |
| **`oop`** | `notes/oop/` | Object-Oriented Programming | Sem 3 / 4 | 6 Units |
| **`biot`** | `notes/biot/` | Basics of Internet of Things (BIoT) | Sem 4 / 5 | 6 Units |
| **`pas`** | `notes/pas/` | Probability and Statistics | Sem 3 / 4 | 6 Units |

---

## 2. Subject Specifications

### 2.1 Data Communication & Networks (`dcn`)

* **Target Folder**: `notes/dcn/`
* **Core Textbooks**: 
  - *Data Communications and Networking* — Behrouz A. Forouzan (5th/6th Ed.)
  - *Computer Networks* — Andrew S. Tanenbaum, David J. Wetherall (5th Ed.)

#### Unit Breakdown & Scope
1. **Unit 1: Introduction to Data Communication & Physical Layer** (`DCNU1.html`)
   - *Concepts*: Data communication model, components, data representation, data flow (simplex, half duplex, full duplex). Network criteria, physical structures, topologies (mesh, star, bus, ring, hybrid). Categories of networks (LAN, MAN, WAN). Transmission media (guided: twisted pair, coaxial, fiber; unguided: radio, microwave, infrared). Signals (analog vs digital, periodic vs non-periodic, composite signals, bandwidth, bit rate). Transmission impairments (attenuation, distortion, noise). Nyquist bit rate & Shannon capacity theorems.
   - *Exam Weightage*: 12–15 marks.
   - *Key Derivations/Problems*: Shannon capacity formula calculations, Nyquist maximum data rate.

2. **Unit 2: Network Reference Models & Architecture** (`DCNU2.html`)
   - *Concepts*: Layered tasks, sender/receiver protocol hierarchies. The OSI 7-Layer Reference Model (Physical, Data Link, Network, Transport, Session, Presentation, Application layers). Functions, PDUs, and headers at each layer. Encapsulation & decapsulation process. The TCP/IP Protocol Suite (4/5-layer model). Comprehensive comparison: OSI vs. TCP/IP. Addressing modes (Physical/MAC, Logical/IP, Port, Specific addresses).
   - *Exam Weightage*: 12–15 marks.
   - *Key Questions*: Detailed 7-layer breakdown with header roles; OSI vs TCP/IP architectural contrasts.

3. **Unit 3: Data Link Layer & Medium Access Control (MAC)** (`DCNU3.html`)
   - *Concepts*: DLL design issues, framing (character counting, byte stuffing, bit stuffing). Error detection & correction (parity check, checksum, Cyclic Redundancy Check - CRC generator polynomials, Hamming Code distance and single-bit correction). Elementary flow control protocols (Unrestricted Simplex, Stop-and-Wait). Sliding window protocols (Go-Back-N, Selective Repeat ARQ, efficiency derivations). Multiple access protocols: Random access (ALOHA, Slotted ALOHA, CSMA, CSMA/CD with binary exponential backoff, CSMA/CA). Controlled access (Reservation, Polling, Token passing). Channelization (FDMA, TDMA, CDMA principles). Wired LANs: Standard Ethernet (802.3), frame format, Fast/Gigabit Ethernet overview.
   - *Exam Weightage*: 16–20 marks.

4. **Unit 4: Network Layer & IP Addressing** (`DCNU4.html`)
   - *Concepts*: Network layer design issues, store-and-forward packet switching, connection-oriented (Virtual Circuit) vs connectionless (Datagram) service. IPv4 addressing: Classful addressing, subnets, subnet masking, supernetting, CIDR notation, VLSM calculations. IPv4 datagram format, fragmentation and reassembly, options. IPv6 addressing architecture, 128-bit address representation, IPv6 packet header, transition mechanisms (dual stack, tunneling, header translation). Address resolution: ARP and RARP mechanics. Internet control: ICMPv4 (error and query messages).
   - *Exam Weightage*: 18–20 marks.

5. **Unit 5: Routing Protocols & Transport Layer** (`DCNU5.html`)
   - *Concepts*: Routing algorithms: Shortest path routing (Dijkstra’s algorithm), Distance Vector routing (Bellman-Ford algorithm, Count-to-Infinity problem and solutions: split horizon, poison reverse), Link State routing (LSP generation and flooding). Hierarchical routing. Interior vs Exterior routing protocols (RIP, OSPF, BGP overview). Transport Layer services: Port numbers, socket abstraction, connection multiplexing. UDP: format, checksum, lightweight nature. TCP: Segment format, connection management (3-way handshake, 4-step teardown, SYN flood attack), sliding window flow control (receiver window credit mechanism), congestion control algorithms (Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery - AIMD).
   - *Exam Weightage*: 18–20 marks.

6. **Unit 6: Application Layer & Network Security** (`DCNU6.html`)
   - *Concepts*: Application architecture: Client-Server vs P2P. Domain Name System (DNS): namespace, resource records, recursive vs iterative query resolution. Electronic Mail: SMTP, POP3, IMAP, MIME format. World Wide Web: HTTP/1.0, HTTP/1.1 (persistent connections, pipelining), HTTP/2 (multiplexed streams), HTTP/3 (QUIC overview). Network Security fundamentals: CIA triad, symmetric key cryptography (AES/DES overview), asymmetric key cryptography (RSA algorithm, public/private keys), digital signatures, digital certificates and PKI. Transport Layer Security: SSL/TLS handshake protocol, HTTPS operation. Firewalls (packet filtering, stateful inspection) and NAT (Network Address Translation).
   - *Exam Weightage*: 14–16 marks.

---

### 2.2 Fundamentals of Data Science (`fds`)

* **Target Folder**: `notes/fds/`
* **Core Textbooks**:
  - *Python for Data Analysis* — Wes McKinney (O'Reilly)
  - *An Introduction to Statistical Learning* — Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani
  - *Data Science from Scratch* — Joel Grus

#### Unit Breakdown & Scope
1. **Unit 1: Introduction to Data Science & Python Scientific Computing** (`FDSU1.html`)
   - *Concepts*: Data Science lifecycle, roles, structured vs unstructured data. Scientific computing with NumPy: `ndarray` creation, indexing, slicing, broadcasting, vectorized operations, universal functions (`ufunc`), linear algebra operations. Pandas fundamentals: `Series` and `DataFrame` objects, hierarchical indexing, data ingestion (CSV, JSON, SQL), head/tail, info, describe summaries.
   - *Exam Weightage*: 12–14 marks.

2. **Unit 2: Data Cleaning, Preprocessing & Feature Engineering** (`FDSU2.html`)
   - *Concepts*: Missing data handling (MCAR, MAR, MNAR, imputation techniques: mean/median/mode, KNN imputer). Outlier detection & treatment (Z-score, IQR rule, Winsorization). Data transformation: Min-Max scaling, Standardization (Z-score), Robust scaler, Log/Power transforms. Categorical encoding: Nominal (One-Hot, Target encoding) vs Ordinal (Label encoding). Feature engineering: polynomial features, binning, interaction terms. Feature selection: Filter methods (Pearson correlation, Chi-Square, ANOVA), Wrapper methods (RFE), Embedded methods (L1 Lasso, L2 Ridge).
   - *Exam Weightage*: 15–18 marks.

3. **Unit 3: Exploratory Data Analysis (EDA) & Data Visualization** (`FDSU3.html`)
   - *Concepts*: Univariate, bivariate, and multivariate analysis. Statistical summaries: measures of central tendency (mean, median, trimmed mean), measures of dispersion (variance, standard deviation, IQR, MAD). Skewness and Kurtosis. Data visualization principles: Matplotlib and Seaborn architecture. Plot types: histograms, KDE plots, box plots, violin plots, scatter plots, pair plots, heatmaps with correlation matrices. Choosing the right visualization for distribution vs relationship vs composition.
   - *Exam Weightage*: 14–16 marks.

4. **Unit 4: Statistical Inference & Hypothesis Testing** (`FDSU4.html`)
   - *Concepts*: Population vs Sample, sampling techniques (random, stratified, cluster). Central Limit Theorem (CLT) and sampling distributions. Confidence intervals for mean and proportions. Hypothesis testing framework: Null ($H_0$) vs Alternative ($H_1$) hypotheses, Type I ($\alpha$) and Type II ($\beta$) errors, power of a test, p-value interpretation. Parametric tests: One-sample and two-sample Student's t-test, paired t-test, Z-test, One-Way and Two-Way ANOVA ($F$-test). Non-parametric tests: Chi-Square goodness of fit and independence test, Mann-Whitney U test.
   - *Exam Weightage*: 16–18 marks.

5. **Unit 5: Supervised Learning (Regression & Classification)** (`FDSU5.html`)
   - *Concepts*: Supervised learning paradigm. Linear Regression: Ordinary Least Squares (OLS) derivation, assumptions of linear regression, multicollinearity and VIF, metrics ($R^2$, Adjusted $R^2$, MSE, RMSE, MAE). Regularized regression: Ridge ($L_2$), Lasso ($L_1$), ElasticNet. Logistic Regression: Sigmoid activation, log-odds, cross-entropy loss function. Classification metrics: Confusion matrix, Accuracy, Precision, Recall, F1-Score, ROC-AUC curve. k-Nearest Neighbors (k-NN) classification, distance metrics. Decision Trees: splitting criteria (Entropy, Information Gain, Gini Impurity), pruning strategies.
   - *Exam Weightage*: 18–20 marks.

6. **Unit 6: Unsupervised Learning & Model Evaluation** (`FDSU6.html`)
   - *Concepts*: Unsupervised paradigm. Clustering algorithms: K-Means clustering (algorithm steps, inertia, Elbow method, Silhouette score), Hierarchical clustering (Agglomerative, Divisive, linkage criteria, dendrograms), DBSCAN (density reachability, core/border/noise points). Dimensionality reduction: Principal Component Analysis (PCA - covariance matrix decomposition, eigenvectors, scree plot, explained variance ratio). Bias-Variance tradeoff, overfitting vs underfitting. Cross-validation techniques (k-fold, Stratified k-fold, Leave-One-Out). Hyperparameter tuning (GridSearchCV, RandomizedSearchCV).
   - *Exam Weightage*: 15–18 marks.

---

### 2.3 Object-Oriented Programming (`oop`)

* **Target Folder**: `notes/oop/`
* **Core Textbooks**:
  - *Object-Oriented Programming with C++* — E. Balagurusamy
  - *The C++ Programming Language* — Bjarne Stroustrup
  - *Core Java: Fundamentals* — Cay S. Horstmann

#### Unit Breakdown & Scope
1. **Unit 1: Foundations of OOP & Class Anatomy** (`OOPU1.html`)
   - *Concepts*: Procedural vs Object-Oriented paradigm. The 4 Pillars of OOP: Abstraction, Encapsulation, Inheritance, Polymorphism. Classes and Objects: state, behavior, identity. Access specifiers (private, protected, public). Inline functions, friend functions, friend classes. Static data members and static member functions. Memory layout of an object in C++.
   - *Exam Weightage*: 12–14 marks.

2. **Unit 2: Constructors, Destructors & Dynamic Memory Management** (`OOPU2.html`)
   - *Concepts*: Constructors: default, parameterized, copy constructor (deep copy vs shallow copy mechanics), dynamic constructors. Member initializer lists. Destructors and resource cleanup order. Dynamic memory allocation: `new` and `delete` operators vs `malloc`/`free`. Pointer to objects, `this` pointer applications. Memory leaks and dangling pointer prevention. Smart pointers overview (`unique_ptr`, `shared_ptr`).
   - *Exam Weightage*: 14–16 marks.

3. **Unit 3: Inheritance & Hierarchical Modeling** (`OOPU3.html`)
   - *Concepts*: Types of inheritance: Single, Multilevel, Multiple, Hierarchical, Hybrid. Base class access control (public, protected, private inheritance). Order of constructor and destructor invocation in inheritance chains. Virtual Base Classes and resolving the Diamond Problem. Composition (Has-A) vs Inheritance (Is-A).
   - *Exam Weightage*: 16–18 marks.

4. **Unit 4: Polymorphism & Virtual Functions** (`OOPU4.html`)
   - *Concepts*: Compile-time (Static) Polymorphism: Function overloading, Operator overloading (unary, binary, stream `<<` and `>>` operators via friend functions). Rules for overloading operators. Run-time (Dynamic) Polymorphism: Virtual functions, `override` keyword. Virtual table (`vtable`) and virtual table pointer (`vptr`) internal mechanism. Pure virtual functions and Abstract classes. Virtual destructors and their necessity.
   - *Exam Weightage*: 18–20 marks.

5. **Unit 5: Templates & Exception Handling** (`OOPU5.html`)
   - *Concepts*: Generic programming principles. Function templates, multiple arguments, template specialization. Class templates with default and non-type parameters. Exception handling architecture: `try`, `catch`, `throw` statements. Catching multiple exceptions, re-throwing exceptions, `catch(...)` catch-all block. Exception specifications, custom exception classes, RAII (Resource Acquisition Is Initialization) pattern.
   - *Exam Weightage*: 14–16 marks.

6. **Unit 6: Standard Template Library (STL) & Modern Design Patterns** (`OOPU6.html`)
   - *Concepts*: Components of STL: Containers, Iterators, Algorithms. Sequence containers (`vector`, `list`, `deque`). Associative containers (`set`, `map`, `multimap`). Container adapters (`stack`, `queue`, `priority_queue`). Standard algorithms (sort, search, transform, accumulate). Functors and Lambda expressions in C++11/14. Introduction to Design Patterns: Creational (Singleton, Factory Method), Structural (Adapter), Behavioral (Observer).
   - *Exam Weightage*: 14–16 marks.

---

### 2.4 Basics of Internet of Things (`biot`)

* **Target Folder**: `notes/biot/`
* **Core Textbooks**:
  - *Internet of Things: A Hands-On Approach* — Arshdeep Bahga, Vijay Madisetti
  - *IoT Fundamentals: Networking Technologies, Protocols, and Use Cases for IoT* — David Hanes et al. (Cisco Press)

#### Unit Breakdown & Scope
1. **Unit 1: Introduction to IoT Architecture & Smart Objects** (`BIOTU1.html`)
   - *Concepts*: Definition, characteristics, and physical/logical design of IoT. IoT enabling technologies (wireless sensor networks, cloud computing, big data analytics, embedded systems). IoT levels and deployment templates. Sensors (temperature, humidity, PIR, ultrasonic, IMU/accelerometer) vs Actuators (relays, motors, solenoids). Signal conditioning, Analog-to-Digital conversion (ADC), and resolution.
   - *Exam Weightage*: 12–14 marks.

2. **Unit 2: Microcontrollers & Hardware Prototyping Platforms** (`BIOTU2.html`)
   - *Concepts*: Embedded computing hardware: Arduino (AVR architecture), ESP8266 / ESP32 (Wi-Fi + BLE SoC), Raspberry Pi (Single Board Computer, Linux OS). Interfacing protocols: GPIO, PWM (Pulse Width Modulation), UART (serial), SPI (Serial Peripheral Interface - master/slave, clock polarity/phase), I2C (Inter-Integrated Circuit - 2-wire bus, addressing, master/slave arbitration). Power management and sleep modes in constrained nodes.
   - *Exam Weightage*: 16–18 marks.

3. **Unit 3: IoT Wireless Connectivity & Networking** (`BIOTU3.html`)
   - *Concepts*: IEEE 802.15.4 physical and MAC layer standard. Low-power PANs: Zigbee (mesh topology, coordinator, router, end device), 6LoWPAN (IPv6 over low-power wireless personal area networks - header compression and fragmentation). Bluetooth Low Energy (BLE): GAP, GATT, advertising, peripheral vs central. Long-Range IoT (LPWAN): LoRa and LoRaWAN (architecture, spreading factors, gateway, chirp spread spectrum), NB-IoT, cellular IoT standards.
   - *Exam Weightage*: 16–18 marks.

4. **Unit 4: IoT Application & Messaging Protocols** (`BIOTU4.html`)
   - *Concepts*: Constraints of traditional HTTP in IoT. Message Queuing Telemetry Transport (MQTT): publish-subscribe architecture, MQTT broker, topics, QoS levels (QoS 0, 1, 2), retain flags, Last Will and Testament (LWT). Constrained Application Protocol (CoAP): RESTful architecture over UDP, confirmable vs non-confirmable messages, observe pattern, CoAP vs HTTP comparison. WebSockets for bidirectional full-duplex communication.
   - *Exam Weightage*: 18–20 marks.

5. **Unit 5: IoT Cloud, Edge & Data Pipelines** (`BIOTU5.html`)
   - *Concepts*: Cloud IoT platforms (AWS IoT Core, Azure IoT Hub, ThingsBoard). Device shadows / digital twins. Telemetry ingestion, time-series data storage, real-time analytics. Edge computing vs Fog computing vs Cloud computing: latency reduction, bandwidth conservation, offline resilience. Edge analytics architectures.
   - *Exam Weightage*: 14–16 marks.

6. **Unit 6: IoT Security, Privacy & Industry Applications** (`BIOTU6.html`)
   - *Concepts*: Vulnerabilities in IoT devices (default passwords, unencrypted firmware, lack of secure boot). IoT security layers: perception layer, network layer, application layer security. Secure device provisioning, TLS for constrained devices, firmware updates over the air (FOTA). Real-world case studies: Smart Home automation, Smart Agriculture (soil moisture & precision irrigation), Smart City (smart streetlights & waste management), Industrial IoT (IIoT - predictive maintenance).
   - *Exam Weightage*: 14–16 marks.

---

### 2.5 Probability and Statistics (`pas`)

* **Target Folder**: `notes/pas/`
* **Core Textbooks**:
  - *Probability and Statistics for Engineers and Scientists* — Ronald E. Walpole, Raymond H. Myers
  - *Higher Engineering Mathematics* — B.S. Grewal

#### Unit Breakdown & Scope
1. **Unit 1: Probability Theory & Random Variables** (`PASU1.html`)
   - *Concepts*: Sample space, events, axioms of probability. Conditional probability, multiplication rule, independent events. Law of Total Probability and Bayes' Theorem with diagnostic/engineering applications. Random variables: definition, discrete vs continuous. Probability Mass Function (PMF), Probability Density Function (PDF), Cumulative Distribution Function (CDF) and their properties. Mathematical Expectation, Variance, Standard Deviation, properties of expectation and variance.
   - *Exam Weightage*: 15–18 marks.

2. **Unit 2: Standard Discrete Probability Distributions** (`PASU2.html`)
   - *Concepts*: Bernoulli trials. Binomial Distribution: assumptions, PMF, derivation of mean ($\mu = np$) and variance ($\sigma^2 = npq$), fitting of binomial distribution. Poisson Distribution: Poisson process assumptions, PMF, limiting case of binomial distribution, derivation of mean and variance ($\mu = \lambda$, $\sigma^2 = \lambda$). Geometric Distribution: memoryless property. Negative Binomial and Hypergeometric distributions overview. Real-world modeling: packet arrival rates, defect modeling.
   - *Exam Weightage*: 15–18 marks.

3. **Unit 3: Standard Continuous Probability Distributions** (`PASU3.html`)
   - *Concepts*: Continuous Uniform distribution: PDF, mean, variance. Normal (Gaussian) Distribution: properties of normal curve, standard normal variable ($Z$), standard normal tables, 68-95-99.7 empirical rule, applications in error modeling. Exponential Distribution: PDF, mean, variance, memoryless property, modeling waiting times and device lifetimes. Gamma, Weibull, and Beta distributions overview.
   - *Exam Weightage*: 16–18 marks.

4. **Unit 4: Two-Dimensional Random Variables & Joint Distributions** (`PASU4.html`)
   - *Concepts*: Joint PMF and joint PDF. Marginal distributions and conditional distributions. Independence of random variables. Covariance and Pearson’s correlation coefficient ($r$), properties of correlation ($ -1 \le r \le 1 $). Regression lines of $Y$ on $X$ and $X$ on $Y$, angle between regression lines. Transformation of random variables. Central Limit Theorem (CLT) statement and practical applications for large sample sums and averages.
   - *Exam Weightage*: 16–18 marks.

5. **Unit 5: Statistical Inference & Hypothesis Testing** (`PASU5.html`)
   - *Concepts*: Parameter estimation: point estimation (unbiasedness, consistency), maximum likelihood estimation (MLE). Interval estimation: confidence intervals for population mean (known and unknown variance) and proportions. Statistical hypothesis testing: null and alternative hypotheses, Type I ($\alpha$) and Type II ($\beta$) errors, critical regions, level of significance, p-value. Large sample tests ($Z$-tests): test for single mean, difference of means, single proportion, difference of proportions. Small sample tests: Student's $t$-test (single mean, difference of means, paired $t$-test), Snedecor's $F$-test for equality of variances, Chi-Square ($\chi^2$) test for goodness of fit and independence of attributes in contingency tables.
   - *Exam Weightage*: 18–20 marks.

6. **Unit 6: Queuing Theory & Stochastic Processes** (`PASU6.html`)
   - *Concepts*: Stochastic processes: discrete-time vs continuous-time, Markov property. Markov chains, transition probability matrix (TPM), Chapman-Kolmogorov equations, steady-state probabilities. Queuing system characteristics: arrival process, service mechanism, queue discipline, Kendall’s notation. $M/M/1$ Queuing System: birth-death process, steady-state probability distribution, average queue length ($L_q$), average system length ($L$), average waiting time in queue ($W_q$), average waiting time in system ($W$), Little’s formulas ($L = \lambda W$, $L_q = \lambda W_q$). $M/M/1/K$ (finite capacity queue) overview. Applications in network packet buffer dimensioning.
   - *Exam Weightage*: 16–18 marks.

---

## 3. Operational Rule for All Contributors & Agents

> ⚡ **Mandatory Synchronization Invariant**:  
> **After every task or any updation, modify all the system markdowns (`PRD.md`, `AGENTS.md`, `TASKS.md`, `ARCHITECTURE.md`, `README.md`, `SYLLABUS.md`, `STYLEGUIDE.md`, `API.md`, `CONTRIBUTING.md`, `CHANGELOG.md`) to reflect the latest state, and push the entire codebase to GitHub `main`.**
