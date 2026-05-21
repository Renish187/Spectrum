/* ===================================================
   SPECTRUM SPA ROUTER
   =================================================== */

// Page titles
const pageTitles = {
  home:         'Home | Spectrum Club',
  events:       'Events & Competitions | Spectrum Club',
  projects:     'Projects | Spectrum Club',
  team:         'Team | Spectrum Club',
  gallery:      'Photo Gallery | Spectrum Club',
  publications: 'Publications | Spectrum Club',
  logistics:    'Logistics | Spectrum Club',
  about:        'About Us | Spectrum Club',
};

// ── View Templates ──────────────────────────────────

const views = {

  home: () => `

    <!-- ── HERO ── -->
    <section class="hero" id="home">
      <div class="hero-bg-grid"></div>
      <div class="hero-content">
        <div class="hero-badge">🤖 Student-Led Club</div>
        <h1 class="hero-title">
          Building the<br />
          <span class="gradient-text">Engineers</span><br />
          of Tomorrow
        </h1>
        <p class="hero-subtitle">
          Join a vibrant community of curious minds, creative thinkers, and future
          innovators shaping the world through Electronics and Robotics.
        </p>
        <div class="hero-buttons">
          <a href="#about" class="btn btn-primary" data-route="about">Join the Club</a>
          <a href="#events" class="btn btn-outline" data-route="events">Explore Events</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number" data-target="200">0</span><span>+</span>
            <p>Active Members</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number" data-target="10">0</span><span>+</span>
            <p>Events Yearly</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number" data-target="30">0</span><span>+</span>
            <p>Projects Built</p>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-number" data-target="15">0</span><span>+</span>
            <p>Competitions Won</p>
          </div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="circuit-card">
          <div class="circuit-lines"></div>
          <div class="robot-icon">🤖</div>
          <div class="floating-chip chip-1">⚙️</div>
          <div class="floating-chip chip-2">💡</div>
          <div class="floating-chip chip-3">🔌</div>
          <div class="floating-chip chip-4">📡</div>
        </div>
      </div>
    </section>

    <!-- ── WHO WE ARE ── -->
    <section class="home-whoweare">
      <div class="container">
        <div class="whoweare-wrapper">
          <div class="whoweare-content">
            <div class="section-label">Who We Are</div>
            <h2 class="whoweare-title">More Than a Club —<br /><span class="gradient-text">A Builder's Ecosystem</span></h2>
            <p class="whoweare-text">Spectrum is a student-led Electronics and Robotics Club dedicated to bridging the gap between classroom theory and real-world engineering. We build robots, design circuits, fly drones, and compete on national stages.</p>
            <p class="whoweare-text">Our culture is rooted in curiosity, hands-on innovation, and a relentless drive to push the boundaries of technology — from embedded systems to AI-powered hardware.</p>
            <div class="whoweare-pills">
              <span class="domain-pill">🔬 Research</span>
              <span class="domain-pill">🤖 Robotics</span>
              <span class="domain-pill">⚡ Electronics</span>
              <span class="domain-pill">🌐 IoT</span>
              <span class="domain-pill">🛸 Drones</span>
            </div>
            <a href="#about" class="btn btn-outline" data-route="about" style="margin-top:8px;">Learn More About Us →</a>
          </div>
          <div class="whoweare-stats">
            <div class="whoweare-stat-card reveal">
              <span class="whoweare-stat-num">2019</span>
              <p>YEAR FOUNDED</p>
            </div>
            <div class="whoweare-stat-card reveal">
              <span class="whoweare-stat-num">200+</span>
              <p>MEMBERS</p>
            </div>
            <div class="whoweare-stat-card reveal">
              <span class="whoweare-stat-num">30+</span>
              <p>PROJECTS</p>
            </div>
            <div class="whoweare-stat-card reveal">
              <span class="whoweare-stat-num">15+</span>
              <p>AWARDS WON</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── OUR DOMAINS ── -->
    <section class="home-domains">
      <div class="container">
        <div class="section-label">What We Work On</div>
        <h2 class="section-title">Our <span class="gradient-text">Domains</span></h2>
        <p class="section-subtitle">Spectrum operates across multiple technical domains, giving every member a space to explore their passion.</p>
        <div class="domains-grid">
          <div class="domain-card reveal">
            <div class="domain-icon">🤖</div>
            <h3>Robotics</h3>
            <p>Combat robots, autonomous bots, line followers, and humanoid research projects.</p>
          </div>
          <div class="domain-card reveal">
            <div class="domain-icon">🌐</div>
            <h3>IoT & Embedded</h3>
            <p>Smart devices, sensor networks, ESP32/Arduino projects, and cloud-connected systems.</p>
          </div>
          <div class="domain-card reveal">
            <div class="domain-icon">🛸</div>
            <h3>Drones & UAVs</h3>
            <p>FPV racing drones, autonomous UAVs, aerial photography, and flight controller development.</p>
          </div>
          <div class="domain-card reveal">
            <div class="domain-icon">⚡</div>
            <h3>Circuits & PCB</h3>
            <p>Analog/digital circuit design, PCB layout, power electronics, and hardware prototyping.</p>
          </div>
          <div class="domain-card reveal">
            <div class="domain-icon">🧠</div>
            <h3>AI & Machine Learning</h3>
            <p>Edge AI, computer vision on embedded hardware, gesture recognition, and neural networks.</p>
          </div>
          <div class="domain-card reveal">
            <div class="domain-icon">🔬</div>
            <h3>Research & Publications</h3>
            <p>Technical writing, research papers, documentation, and knowledge sharing within the community.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MEET THE CORE TEAM ── -->
    <section class="home-team">
      <div class="container">
        <div class="section-label" style="display:block;text-align:center;margin:0 auto 14px;">Our Leadership</div>
        <h2 class="section-title" style="text-align:center;">Meet the <span class="gradient-text">Core Team</span></h2>
        <p class="section-subtitle" style="text-align:center;margin:0 auto 44px;">Guided by experienced faculty and led by passionate students driving innovation.</p>
        <div class="home-team-grid">
          <div class="home-team-card reveal">
            <div class="home-team-avatar">👨‍🏫</div>
            <h3>[Faculty Name]</h3>
            <span class="home-team-role">Faculty Mentor</span>
            <p>Department of Electronics Engineering</p>
          </div>
          <div class="home-team-card reveal">
            <div class="home-team-avatar">
              <img src="team/Senior team/MEET.jpeg" alt="President" class="avatar-photo" />
            </div>
            <h3>Meet Patoliya</h3>
            <span class="home-team-role">President</span>
            <p>Final Year, Electronics Engineering</p>
          </div>
          <div class="home-team-card reveal">
            <div class="home-team-avatar">
              <img src="team/Senior team/VAISHVI.jpeg" alt="Vice President" class="avatar-photo" />
            </div>
            <h3>Vaishvi Rathod</h3>
            <span class="home-team-role">Vice President</span>
            <p>Third Year, Electronics Engineering</p>
          </div>
          <div class="home-team-card reveal">
            <div class="home-team-avatar">
              <img src="team/Senior team/SANKALP.jpeg" alt="Tech Head" class="avatar-photo" />
            </div>
            <h3>Sankalp Parik</h3>
            <span class="home-team-role">Tech Head</span>
            <p>Third Year, Electronics Engineering</p>
          </div>
        </div>
        <div style="text-align:center;margin-top:36px;">
          <a href="#team" class="btn btn-primary" data-route="team">Meet Whole Team →</a>
        </div>
      </div>
    </section>


    <section class="home-features">
      <div class="container">
        <div class="section-label">What We Do</div>
        <h2 class="section-title">Everything You Need to <span class="gradient-text">Grow as an Engineer</span></h2>
        <p class="section-subtitle">From hands-on workshops to national competitions — Spectrum gives you the tools, community, and stage to build something real.</p>
        <div class="features-grid">
          <div class="feature-card reveal">
            <div class="feature-icon">🏆</div>
            <h3>Competitions</h3>
            <p>Compete in RoboWars, Drone Racing, Hardware Hackathons, and more. Win prizes, gain recognition, and push your limits.</p>
            <a href="#events" class="feature-link" data-route="events">View Competitions →</a>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">🔧</div>
            <h3>Workshops</h3>
            <p>Hands-on sessions on Arduino, PCB design, IoT, ROS2, and more — taught by seniors and industry experts.</p>
            <a href="#events" class="feature-link" data-route="events">See Events →</a>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">🛠️</div>
            <h3>Projects</h3>
            <p>Build real hardware — from autonomous robots to smart IoT systems. Every member gets to work on a live project.</p>
            <a href="#projects" class="feature-link" data-route="projects">Explore Projects →</a>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">🔬</div>
            <h3>Lab Access</h3>
            <p>Use our fully equipped lab with soldering stations, oscilloscopes, 3D printers, and a 500+ component library.</p>
            <a href="#logistics" class="feature-link" data-route="logistics">Lab Details →</a>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">📰</div>
            <h3>Publications</h3>
            <p>Read and contribute to technical articles, research papers, and our quarterly newsletter — the Spectrum Digest.</p>
            <a href="#publications" class="feature-link" data-route="publications">Read Now →</a>
          </div>
          <div class="feature-card reveal">
            <div class="feature-icon">🤝</div>
            <h3>Community</h3>
            <p>Join a network of 200+ engineers, collaborate across domains, and build friendships that last beyond college.</p>
            <a href="#about" class="feature-link" data-route="about">About Us →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── UPCOMING EVENTS ── -->
    <section class="home-events">
      <div class="container">
        <div class="home-section-header">
          <div>
            <div class="section-label">Don't Miss Out</div>
            <h2 class="section-title">Upcoming <span class="gradient-text">Events</span></h2>
          </div>
          <a href="#events" class="btn btn-outline" data-route="events">View All Events</a>
        </div>
        <div class="home-events-grid">
          <div class="home-event-card featured-home reveal">
            <div class="home-event-badge">🔥 Flagship</div>
            <div class="home-event-icon">🎪</div>
            <div class="home-event-info">
              <span class="home-event-date">📅 April 2026</span>
              <h3>Spectrum Fest 2026</h3>
              <p>Our annual inter-college technical festival — competitions, exhibitions, guest lectures, and industry networking all in one place.</p>
              <a href="#" class="btn btn-primary" style="margin-top:14px;font-size:0.85rem;padding:10px 22px;">Register Now ⚡</a>
            </div>
          </div>
          <div class="home-event-card reveal">
            <div class="home-event-icon">🔧</div>
            <span class="home-event-date">📅 January 2026</span>
            <h3>Arduino Bootcamp</h3>
            <p>2-day beginner workshop — build your first robot from scratch.</p>
          </div>
          <div class="home-event-card reveal">
            <div class="home-event-icon">🖨️</div>
            <span class="home-event-date">📅 February 2026</span>
            <h3>PCB Design Workshop</h3>
            <p>Learn KiCad, design schematics, and get your boards manufactured.</p>
          </div>
          <div class="home-event-card reveal">
            <div class="home-event-icon">🌐</div>
            <span class="home-event-date">📅 March 2026</span>
            <h3>IoT & Embedded Systems</h3>
            <p>Deep-dive into ESP32, MQTT, and end-to-end IoT solutions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURED PROJECTS ── -->
    <section class="home-projects">
      <div class="container">
        <div class="home-section-header">
          <div>
            <div class="section-label">Built by Members</div>
            <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
          </div>
          <a href="#projects" class="btn btn-outline" data-route="projects">All Projects</a>
        </div>
        <div class="home-projects-grid">
          <div class="home-project-card reveal">
            <div class="home-project-img">🦾</div>
            <div class="home-project-info">
              <span class="project-tag">Robotics</span>
              <h3>Autonomous Line Follower</h3>
              <p>IR sensors + PID control for precision path tracking on complex tracks.</p>
            </div>
          </div>
          <div class="home-project-card reveal">
            <div class="home-project-img">🚁</div>
            <div class="home-project-info">
              <span class="project-tag">Drones</span>
              <h3>Quadcopter from Scratch</h3>
              <p>Custom-built quad with flight controller, ESCs, and FPV camera — all in-house.</p>
            </div>
          </div>
          <div class="home-project-card reveal">
            <div class="home-project-img">🌡️</div>
            <div class="home-project-info">
              <span class="project-tag">IoT</span>
              <h3>Smart Campus Monitor</h3>
              <p>Real-time temperature, humidity, and air quality monitoring across campus.</p>
            </div>
          </div>
          <div class="home-project-card reveal">
            <div class="home-project-img">🗣️</div>
            <div class="home-project-info">
              <span class="project-tag">AI + Hardware</span>
              <h3>Voice-Controlled Automation</h3>
              <p>Raspberry Pi home automation with offline voice recognition and relay control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── JOIN CTA ── -->
    <section class="home-cta">
      <div class="container">
        <div class="cta-card reveal">
          <div class="cta-glow"></div>
          <div class="cta-content">
            <div class="cta-badge">🚀 Open Enrollment</div>
            <h2>Ready to Build Something <span class="gradient-text">Amazing?</span></h2>
            <p>Join Spectrum and get access to our lab, workshops, competitions, and a community of 200+ engineers who love building things.</p>
            <div class="cta-buttons">
              <a href="#about" class="btn btn-primary" data-route="about">Join Spectrum ⚡</a>
              <a href="#logistics" class="btn btn-outline" data-route="logistics">How It Works</a>
            </div>
          </div>
          <div class="cta-icons">
            <span>⚙️</span><span>🤖</span><span>💡</span><span>🔌</span><span>📡</span><span>🛸</span>
          </div>
        </div>
      </div>
    </section>

  `,

  // competitions are part of the events page

  projects: () => `
    <section class="projects" id="projects">
      <div class="container">
        <div class="section-label">What We Build</div>
        <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
        <p class="section-subtitle">Real hardware, real code, real impact. Here's what our members have built.</p>
        <div class="projects-grid">
          <div class="project-card reveal">
            <div class="project-img">🦾</div>
            <div class="project-info">
              <span class="project-tag">Robotics</span>
              <h3>Autonomous Line Follower</h3>
              <p>Self-navigating robot using IR sensors and PID control for precision path tracking on complex tracks.</p>
            </div>
          </div>
          <div class="project-card reveal">
            <div class="project-img">🌡️</div>
            <div class="project-info">
              <span class="project-tag">IoT</span>
              <h3>Smart Campus Monitor</h3>
              <p>IoT system monitoring temperature, humidity, and air quality across campus in real time.</p>
            </div>
          </div>
          <div class="project-card reveal">
            <div class="project-img">🚁</div>
            <div class="project-info">
              <span class="project-tag">Drones</span>
              <h3>Quadcopter from Scratch</h3>
              <p>Custom-built quadcopter with flight controller, ESCs, and FPV camera system built entirely in-house.</p>
            </div>
          </div>
          <div class="project-card reveal">
            <div class="project-img">🖐️</div>
            <div class="project-info">
              <span class="project-tag">Embedded</span>
              <h3>Gesture-Controlled Car</h3>
              <p>RC car controlled via hand gestures using MPU6050 accelerometer and RF communication modules.</p>
            </div>
          </div>
          <div class="project-card reveal">
            <div class="project-img">🔋</div>
            <div class="project-info">
              <span class="project-tag">Power Electronics</span>
              <h3>Solar MPPT Charger</h3>
              <p>Maximum Power Point Tracking solar charger with custom PCB design and real-time efficiency monitoring.</p>
            </div>
          </div>
          <div class="project-card reveal">
            <div class="project-img">🗣️</div>
            <div class="project-info">
              <span class="project-tag">AI + Hardware</span>
              <h3>Voice-Controlled Home Automation</h3>
              <p>Raspberry Pi-based home automation system with offline voice recognition and relay control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>`,

  events: () => `
    <div id="events">

      <!-- Events Section -->
      <section class="events">
        <div class="container">
          <div class="section-label">What We Do</div>
          <h2 class="section-title">Events & <span class="gradient-text">Activities</span></h2>
          <p class="section-subtitle">Workshops, talks, fests, and more — there's always something happening at Spectrum.</p>
          <div class="events-grid">
            <div class="event-card featured reveal">
              <div class="event-tag">🔥 Upcoming</div>
              <div class="event-icon">🎪</div>
              <h3>Spectrum Fest 2026</h3>
              <p>Our annual inter-college technical festival featuring competitions, project exhibitions, guest lectures, and networking with industry professionals.</p>
              <div class="event-footer">
                <span class="event-date">April 2026</span>
                <a href="#" class="event-link">Register Now →</a>
              </div>
            </div>
            <div class="event-card reveal">
              <div class="event-icon">🔧</div>
              <h3>Arduino Bootcamp</h3>
              <p>Beginner-friendly 2-day workshop covering Arduino basics, sensors, and building your first robot.</p>
              <div class="event-footer">
                <span class="event-date">January 2026</span>
                <a href="#" class="event-link">Learn More →</a>
              </div>
            </div>
            <div class="event-card reveal">
              <div class="event-icon">🎙️</div>
              <h3>Tech Talks Series</h3>
              <p>Monthly sessions with industry experts, alumni, and researchers sharing cutting-edge insights in electronics and robotics.</p>
              <div class="event-footer">
                <span class="event-date">Monthly</span>
                <a href="#" class="event-link">View Schedule →</a>
              </div>
            </div>
            <div class="event-card reveal">
              <div class="event-icon">🖨️</div>
              <h3>PCB Design Workshop</h3>
              <p>Hands-on workshop on KiCad, schematic design, PCB layout, and getting your boards manufactured.</p>
              <div class="event-footer">
                <span class="event-date">February 2026</span>
                <a href="#" class="event-link">Learn More →</a>
              </div>
            </div>
            <div class="event-card reveal">
              <div class="event-icon">🌐</div>
              <h3>IoT & Embedded Systems</h3>
              <p>Deep-dive workshop on ESP32, MQTT, cloud integration, and building end-to-end IoT solutions.</p>
              <div class="event-footer">
                <span class="event-date">March 2026</span>
                <a href="#" class="event-link">Learn More →</a>
              </div>
            </div>
            <div class="event-card reveal">
              <div class="event-icon">🤝</div>
              <h3>Industry Visit</h3>
              <p>Annual visit to electronics manufacturing plants and robotics companies for real-world exposure.</p>
              <div class="event-footer">
                <span class="event-date">December 2025</span>
                <a href="#" class="event-link">Details →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Competitions Section -->
      <section class="competitions">
        <div class="container">
          <div class="section-label">Compete & Win</div>
          <h2 class="section-title">Our <span class="gradient-text">Competitions</span></h2>
          <p class="section-subtitle">From campus battles to national-level contests — Spectrum teams compete, learn, and dominate.</p>
          <div class="comp-grid">
            <div class="comp-card highlight reveal">
              <div class="comp-badge">🏆 Flagship</div>
              <div class="comp-icon">🤖</div>
              <h3>RoboWars</h3>
              <p>Annual combat robotics championship. Teams design, build, and battle custom robots in an arena showdown.</p>
              <div class="comp-meta">
                <span class="comp-tag">Combat Robotics</span>
                <span class="comp-prize">Prize Pool: ₹20,000</span>
              </div>
            </div>
            <div class="comp-card reveal">
              <div class="comp-icon">🛸</div>
              <h3>Drone Racing League</h3>
              <p>Build and pilot FPV drones through obstacle courses. Speed, precision, and engineering skill tested together.</p>
              <div class="comp-meta">
                <span class="comp-tag">Drones</span>
                <span class="comp-prize">Prize Pool: ₹10,000</span>
              </div>
            </div>
            <div class="comp-card reveal">
              <div class="comp-icon">⚡</div>
              <h3>Circuit Design Challenge</h3>
              <p>Design the most efficient circuit solution for a given problem. Judged on innovation, efficiency, and execution.</p>
              <div class="comp-meta">
                <span class="comp-tag">Electronics</span>
                <span class="comp-prize">Prize Pool: ₹8,000</span>
              </div>
            </div>
            <div class="comp-card reveal">
              <div class="comp-icon">🧠</div>
              <h3>Line Follower Showdown</h3>
              <p>Autonomous robots race through complex tracks. Fastest and most accurate bot wins.</p>
              <div class="comp-meta">
                <span class="comp-tag">Autonomous</span>
                <span class="comp-prize">Prize Pool: ₹6,000</span>
              </div>
            </div>
            <div class="comp-card reveal">
              <div class="comp-icon">🔧</div>
              <h3>Hardware Hackathon</h3>
              <p>24-hour sprint to build a working hardware prototype solving a real-world problem statement.</p>
              <div class="comp-meta">
                <span class="comp-tag">Hackathon</span>
                <span class="comp-prize">Prize Pool: ₹15,000</span>
              </div>
            </div>
            <div class="comp-card reveal">
              <div class="comp-icon">🌐</div>
              <h3>IoT Innovation Cup</h3>
              <p>Build smart connected devices. Projects judged on real-world impact, scalability, and technical depth.</p>
              <div class="comp-meta">
                <span class="comp-tag">IoT</span>
                <span class="comp-prize">Prize Pool: ₹12,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects have their own page -->

    </div>`,

  logistics: () => `
    <section class="logistics" id="logistics">
      <div class="container">
        <div class="section-label">Club Operations</div>
        <h2 class="section-title">Club <span class="gradient-text">Logistics</span></h2>
        <p class="section-subtitle">Everything you need to know about how Spectrum runs — membership, resources, lab access, and more.</p>
        <div class="logistics-grid">
          <div class="logistics-card reveal">
            <div class="logistics-icon">🪪</div>
            <h3>Membership</h3>
            <ul class="logistics-list">
              <li>Open to all engineering students</li>
              <li>Annual membership: ₹500</li>
              <li>Access to all workshops & events</li>
              <li>Priority registration for competitions</li>
              <li>Club ID card & merchandise</li>
            </ul>
          </div>
          <div class="logistics-card reveal">
            <div class="logistics-icon">🔬</div>
            <h3>Lab Access</h3>
            <ul class="logistics-list">
              <li>Dedicated Spectrum Lab – Room 204, E-Block</li>
              <li>Open Mon–Sat, 9 AM – 6 PM</li>
              <li>Soldering stations, oscilloscopes, 3D printers</li>
              <li>Component library with 500+ parts</li>
              <li>Raspberry Pi & Arduino kits available</li>
            </ul>
          </div>
          <div class="logistics-card reveal">
            <div class="logistics-icon">📦</div>
            <h3>Resources & Tools</h3>
            <ul class="logistics-list">
              <li>Component lending system for members</li>
              <li>PCB fabrication support</li>
              <li>Access to licensed EDA software</li>
              <li>Cloud storage for project files</li>
              <li>Mentorship from senior members</li>
            </ul>
          </div>
          <div class="logistics-card reveal">
            <div class="logistics-icon">📅</div>
            <h3>Meeting Schedule</h3>
            <ul class="logistics-list">
              <li>General body meeting: Every Saturday 4 PM</li>
              <li>Core team sync: Every Wednesday 5 PM</li>
              <li>Project reviews: Bi-weekly Fridays</li>
              <li>Workshop planning: Monthly first Sunday</li>
              <li>Emergency meets: As announced on WhatsApp</li>
            </ul>
          </div>
          <div class="logistics-card reveal">
            <div class="logistics-icon">💰</div>
            <h3>Funding & Sponsorship</h3>
            <ul class="logistics-list">
              <li>College-allocated annual budget</li>
              <li>Industry sponsorships for Spectrum Fest</li>
              <li>Project grants for competition teams</li>
              <li>Alumni donation fund</li>
              <li>Open to corporate partnerships</li>
            </ul>
          </div>
          <div class="logistics-card reveal">
            <div class="logistics-icon">📋</div>
            <h3>How to Join</h3>
            <ul class="logistics-list">
              <li>Fill the membership form (link below)</li>
              <li>Attend orientation session</li>
              <li>Choose your domain of interest</li>
              <li>Get assigned to a project team</li>
              <li>Start building from Day 1!</li>
            </ul>
            <a href="#about" class="btn btn-primary" data-route="about" style="margin-top:16px;font-size:0.85rem;padding:10px 20px;">Apply Now ⚡</a>
          </div>
        </div>
      </div>
    </section>`,

  gallery: () => `
    <section class="gallery" id="gallery">
      <div class="container">
        <div class="section-label">Memories</div>
        <h2 class="section-title">Photo <span class="gradient-text">Gallery</span></h2>
        <p class="section-subtitle">Snapshots from our workshops, competitions, fests, and everyday club life.</p>
        <div class="gallery-filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="competitions">Competitions</button>
          <button class="filter-btn" data-filter="workshops">Workshops</button>
          <button class="filter-btn" data-filter="events">Events</button>
          <button class="filter-btn" data-filter="team">Team</button>
        </div>
        <div class="gallery-grid" id="galleryGrid">
          <div class="gallery-item reveal" data-category="competitions">
            <div class="gallery-placeholder">🤖<span>RoboWars 2025</span></div>
          </div>
          <div class="gallery-item tall reveal" data-category="workshops">
            <div class="gallery-placeholder">🔧<span>Arduino Workshop</span></div>
          </div>
          <div class="gallery-item reveal" data-category="events">
            <div class="gallery-placeholder">🎪<span>Spectrum Fest 2025</span></div>
          </div>
          <div class="gallery-item wide reveal" data-category="team">
            <div class="gallery-placeholder">👥<span>Core Team 2025–26</span></div>
          </div>
          <div class="gallery-item reveal" data-category="competitions">
            <div class="gallery-placeholder">🏆<span>National Robotics 2025</span></div>
          </div>
          <div class="gallery-item reveal" data-category="workshops">
            <div class="gallery-placeholder">🖨️<span>PCB Design Session</span></div>
          </div>
          <div class="gallery-item tall reveal" data-category="events">
            <div class="gallery-placeholder">🎙️<span>Tech Talk – Dr. Sharma</span></div>
          </div>
          <div class="gallery-item reveal" data-category="competitions">
            <div class="gallery-placeholder">🛸<span>Drone Racing 2025</span></div>
          </div>
          <div class="gallery-item reveal" data-category="workshops">
            <div class="gallery-placeholder">🌐<span>IoT Workshop</span></div>
          </div>
        </div>
      </div>
    </section>`,

  publications: () => `
    <section class="publications" id="publications">
      <div class="container">
        <div class="section-label">Knowledge Hub</div>
        <h2 class="section-title">Our <span class="gradient-text">Publications</span></h2>
        <p class="section-subtitle">Technical articles, project reports, newsletters, and research papers authored by Spectrum members.</p>
        <div class="pub-grid">
          <div class="pub-card featured-pub reveal">
            <div class="pub-type">📰 Newsletter</div>
            <h3>Spectrum Digest – Vol. 3</h3>
            <p>Our quarterly newsletter covering club highlights, member spotlights, project showcases, and upcoming events for 2025–26.</p>
            <div class="pub-meta">
              <span>📅 October 2025</span>
              <span>✍️ Editorial Team</span>
            </div>
            <a href="#" class="pub-link">Read Now →</a>
          </div>
          <div class="pub-card reveal">
            <div class="pub-type">📄 Technical Report</div>
            <h3>Design of a Low-Cost MPPT Solar Charger</h3>
            <p>Detailed report on the design, simulation, and testing of a maximum power point tracking solar charger using Arduino.</p>
            <div class="pub-meta">
              <span>📅 August 2025</span>
              <span>✍️ Aryan Shah, Priya Mehta</span>
            </div>
            <a href="#" class="pub-link">Download PDF →</a>
          </div>
          <div class="pub-card reveal">
            <div class="pub-type">📝 Article</div>
            <h3>Getting Started with ROS2 for Robotics</h3>
            <p>A beginner's guide to Robot Operating System 2 — installation, nodes, topics, and building your first robot application.</p>
            <div class="pub-meta">
              <span>📅 July 2025</span>
              <span>✍️ Rohan Patel</span>
            </div>
            <a href="#" class="pub-link">Read Article →</a>
          </div>
          <div class="pub-card reveal">
            <div class="pub-type">🔬 Research Paper</div>
            <h3>Obstacle Avoidance Using Ultrasonic Sensor Fusion</h3>
            <p>Research on multi-sensor fusion techniques for reliable obstacle detection in autonomous ground vehicles.</p>
            <div class="pub-meta">
              <span>📅 June 2025</span>
              <span>✍️ Spectrum Research Team</span>
            </div>
            <a href="#" class="pub-link">View Paper →</a>
          </div>
          <div class="pub-card reveal">
            <div class="pub-type">📝 Article</div>
            <h3>PCB Design Best Practices with KiCad</h3>
            <p>Tips and tricks for designing clean, manufacturable PCBs — from schematic capture to Gerber file generation.</p>
            <div class="pub-meta">
              <span>📅 May 2025</span>
              <span>✍️ Neha Joshi</span>
            </div>
            <a href="#" class="pub-link">Read Article →</a>
          </div>
          <div class="pub-card reveal">
            <div class="pub-type">📰 Newsletter</div>
            <h3>Spectrum Digest – Vol. 2</h3>
            <p>Recap of Spectrum Fest 2025, RoboWars results, new member introductions, and the year's best projects.</p>
            <div class="pub-meta">
              <span>📅 April 2025</span>
              <span>✍️ Editorial Team</span>
            </div>
            <a href="#" class="pub-link">Read Now →</a>
          </div>
        </div>
      </div>
    </section>`,

  team: () => `
    <div id="team">

      <!-- ── FACULTY ── -->
      <section class="team-section">
        <div class="container">
          <div class="section-label" style="display:block;text-align:center;margin:0 auto 14px;">Faculty</div>
          <h2 class="section-title" style="text-align:center;">Faculty <span class="gradient-text">Mentors</span></h2>
          <div class="new-team-grid new-team-grid--center">
            <div class="new-team-card reveal">
              <div class="new-team-avatar">👨‍🏫</div>
              <h3>[Faculty Name]</h3>
              <span class="new-team-role">Faculty Mentor</span>
              <p>Department of Electronics Engineering</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── CORE TEAM ── -->
      <section class="team-section" style="background:var(--bg2);">
        <div class="container">
          <div class="section-label" style="display:block;text-align:center;margin:0 auto 14px;">Leadership</div>
          <h2 class="section-title" style="text-align:center;">Core <span class="gradient-text">Team</span></h2>
          <div class="new-team-grid">
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/MEET.jpeg" alt="President" class="avatar-photo" /></div>
              <h3>Meet Patoliya</h3>
              <span class="new-team-role">President</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/VAISHVI.jpeg" alt="Vice President" class="avatar-photo" /></div>
              <h3>Vaishvi Rathod</h3>
              <span class="new-team-role">Vice President</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/SANKALP.jpeg" alt="Tech Head" class="avatar-photo" /></div>
              <h3>Sankalp Parikh</h3>
              <span class="new-team-role">Tech Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/NISARG.jpeg" alt="Deputy Tech Head" class="avatar-photo" /></div>
              <h3>Nisarg Patel</h3>
              <span class="new-team-role">Deputy Tech Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/NISHANK.jpeg" alt="Presentation Head" class="avatar-photo" /></div>
              <h3>Nishank Mandalaywala</h3>
              <span class="new-team-role">Presentation Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/DRASHTI.jpeg" alt="Deputy Presentation Head" class="avatar-photo" /></div>
              <h3>Drashti Patel</h3>
              <span class="new-team-role">Deputy Presentation Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/RAHIL.jpeg" alt="On-Ground Head" class="avatar-photo" /></div>
              <h3>Rahil Alad</h3>
              <span class="new-team-role">On-Ground Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/RUTANSH.jpeg" alt="Deputy On-Ground Head" class="avatar-photo" /></div>
              <h3>Rutansh Patel</h3>
              <span class="new-team-role">Deputy On-Ground Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/VEDANSHI.jpeg" alt="Treasurer" class="avatar-photo" /></div>
              <h3>Vedanshi Palan</h3>
              <span class="new-team-role">Treasurer</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/HARSH.jpeg" alt="Logistics Head" class="avatar-photo" /></div>
              <h3>Harsh Parmar</h3>
              <span class="new-team-role">Logistics Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/RUDRA.jpeg" alt="Deputy Logistics Head" class="avatar-photo" /></div>
              <h3>Rudra Panchal</h3>
              <span class="new-team-role">Deputy Logistics Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/PRACHET.png" alt="Graphics Head" class="avatar-photo" /></div>
              <h3>Prachet Patel</h3>
              <span class="new-team-role">Graphics Designing Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/MAAHI.png" alt="Deputy Graphics Head" class="avatar-photo" /></div>
              <h3>Maahi Parekh</h3>
              <span class="new-team-role">Deputy Graphics Designing Head</span>
            </div>
            <div class="new-team-card reveal">
              <div class="new-team-avatar"><img src="team/Senior team/SHREYAS.jpeg" alt="AV Head" class="avatar-photo" /></div>
              <h3>Shreyas Shah</h3>
              <span class="new-team-role">Audio Video Head</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ── SENIOR ASSOCIATES ── -->
      <section class="team-section">
        <div class="container">

          <!-- Technical Team -->
          <div class="associates-group">
            <div class="associates-header">
              <div class="associates-line left"></div>
              <h3>Technical Team</h3>
              <div class="associates-line"></div>
            </div>
            <div class="new-team-grid">
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/UTSAV.jpeg" alt="Utsav" class="avatar-photo" /></div><h3>Utsav Dave</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/MIHIR.jpeg" alt="Mihir" class="avatar-photo" /></div><h3>Mihir Thacker</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/KRISH.jpeg" alt="Krish" class="avatar-photo" /></div><h3>Krish Patel</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/PRIYANSHU.jpeg" alt="Priyanshu" class="avatar-photo" /></div><h3>Priyanshu Kanani</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/NILU.jpeg" alt="Nilu" class="avatar-photo" /></div><h3>Nilu Suthar</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/RENISH.jpeg" alt="Renish" class="avatar-photo" /></div><h3>Renish Doshi</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/HENIL.png" alt="Henil" class="avatar-photo" /></div><h3>Henil Vaghasiya</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/RUTVI.jpeg" alt="Rutvi" class="avatar-photo" /></div><h3>Rutvi Hadiya</h3><span class="new-team-role">Senior Associate</span></div>
            </div>
          </div>

          <!-- Presentation Team -->
          <div class="associates-group">
            <div class="associates-header">
              <div class="associates-line left"></div>
              <h3>Presentation Team</h3>
              <div class="associates-line"></div>
            </div>
            <div class="new-team-grid">
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/MAITRI.jpeg" alt="Maitri" class="avatar-photo" /></div><h3>Maitri Dhorajiya</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/TANMAY.jpeg" alt="Tanmay" class="avatar-photo" /></div><h3>Tanmay Aroda</h3><span class="new-team-role">Senior Associate</span></div>
            </div>
          </div>

          <!-- On-Ground Team -->
          <div class="associates-group">
            <div class="associates-header">
              <div class="associates-line left"></div>
              <h3>On-Ground Team</h3>
              <div class="associates-line"></div>
            </div>
            <div class="new-team-grid">
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/VISHAKHA.jpeg" alt="Vishakha" class="avatar-photo" /></div><h3>Vishakha Thakkar</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/KHUSHI.jpeg" alt="Khushi" class="avatar-photo" /></div><h3>Khushi Patel</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/JAY.jpeg" alt="Jay" class="avatar-photo" /></div><h3>Jay Patel</h3><span class="new-team-role">Senior Associate</span></div>
            </div>
          </div>

          <!-- Graphics Designing Team -->
          <div class="associates-group">
            <div class="associates-header">
              <div class="associates-line left"></div>
              <h3>Graphics Designing Team</h3>
              <div class="associates-line"></div>
            </div>
            <div class="new-team-grid">
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/DIYA.jpeg" alt="Diya" class="avatar-photo" /></div><h3>Diya Pandya</h3><span class="new-team-role">Senior Associate</span></div>
              <div class="new-team-card reveal"><div class="new-team-avatar"><img src="team/Senior team/CHARMI.jpeg" alt="Charmi" class="avatar-photo" /></div><h3>Charmi Sanchala</h3><span class="new-team-role">Senior Associate</span></div>
            </div>
          </div>

        </div>
      </section>

    </div>`,

  about: () => `
    <section class="about" id="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-content">
            <div class="section-label">Who We Are</div>
            <h2 class="section-title">About <span class="gradient-text">Spectrum Club</span></h2>
            <p class="about-text">
              Spectrum is a student-led Electronics and Robotics Club dedicated to bridging the gap between
              classroom theory and real-world engineering. Founded by a group of passionate students, we've
              grown into a thriving community of builders, tinkerers, and innovators.
            </p>
            <p class="about-text">
              We believe the best learning happens when you get your hands dirty — soldering circuits,
              programming microcontrollers, building robots, and competing on national stages. Spectrum is
              where ideas become reality.
            </p>
            <div class="about-values">
              <div class="value-pill">🔬 Curiosity</div>
              <div class="value-pill">🤝 Community</div>
              <div class="value-pill">🏆 Excellence</div>
              <div class="value-pill">💡 Innovation</div>
            </div>
            <a href="#" class="btn btn-primary">Join Spectrum ⚡</a>
          </div>
          <div class="about-cards">
            <div class="about-stat-card reveal">
              <span class="about-stat-num">2019</span>
              <p>Year Founded</p>
            </div>
            <div class="about-stat-card reveal">
              <span class="about-stat-num">200+</span>
              <p>Members</p>
            </div>
            <div class="about-stat-card reveal">
              <span class="about-stat-num">30+</span>
              <p>Projects</p>
            </div>
            <div class="about-stat-card reveal">
              <span class="about-stat-num">15+</span>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>`

}; // end views


/* ===================================================
   ROUTER
   =================================================== */

const app     = document.getElementById('app');
const overlay = document.getElementById('pageOverlay');
const ROUTES  = Object.keys(views);
const DEFAULT = 'home';

function getRoute() {
  const hash = window.location.hash.replace('#', '').trim();
  return ROUTES.includes(hash) ? hash : DEFAULT;
}

function renderView(route, pushState = false) {
  // Always keep the URL hash in sync
  if (pushState) {
    window.history.pushState({ route }, '', `#${route}`);
  } else if (window.location.hash !== `#${route}`) {
    window.history.replaceState({ route }, '', `#${route}`);
  }

  // Update browser tab title
  document.title = pageTitles[route] || pageTitles.home;

  // Fade out → swap content → fade in
  overlay.classList.add('active');

  setTimeout(() => {
    app.innerHTML = views[route]();
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateNavActive(route);
    initView(route);

    // Small rAF delay so browser paints the new content before fading in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => overlay.classList.remove('active'));
    });
  }, 220);
}

function updateNavActive(route) {
  // Only highlight nav-links anchors, not the logo or CTA button
  document.querySelectorAll('.nav-links [data-route]').forEach(el => {
    el.classList.toggle('active', el.dataset.route === route);
  });
}

// ── Per-view initialisation ──────────────────────────

function initView(route) {
  initReveal();

  if (route === 'home')    initCounters();
  if (route === 'gallery') initGalleryFilter();
}

// ── Scroll reveal ────────────────────────────────────

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const parent = entry.target.closest(
        '.comp-grid,.projects-grid,.events-grid,.logistics-grid,.gallery-grid,.pub-grid,.team-grid,.about-cards'
      );
      const delay = parent
        ? Array.from(parent.children).indexOf(entry.target) * 70
        : 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Animated counters (home only) ────────────────────

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const step   = target / (1600 / 16);
  let current  = 0;
  const timer  = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current);
  }, 16);
}

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-number').forEach(el => obs.observe(el));
}

// ── Gallery filter ────────────────────────────────────

function initGalleryFilter() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.toggle('hidden', filter !== 'all' && item.dataset.category !== filter);
      });
    });
  });
}


/* ===================================================
   NAVBAR
   =================================================== */

const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

// Scroll → sticky style
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Hamburger toggle
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  const [s1, s2, s3] = hamburger.querySelectorAll('span');
  s1.style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
  s2.style.opacity   = open ? '0' : '';
  s3.style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close menu only when an anchor inside it is clicked
navLinks.addEventListener('click', e => {
  if (!e.target.closest('a')) return;
  navLinks.classList.remove('open');
  hamburger.querySelectorAll('span').forEach(s => {
    s.style.transform = '';
    s.style.opacity   = '';
  });
});

/* ===================================================
   LINK DELEGATION  (nav + footer + in-view links)
   =================================================== */

document.addEventListener('click', e => {
  const link = e.target.closest('[data-route]');
  if (!link) return;
  e.preventDefault();
  const route = link.dataset.route;
  if (ROUTES.includes(route)) renderView(route, true);
});

/* ===================================================
   BROWSER BACK / FORWARD
   =================================================== */

window.addEventListener('popstate', () => {
  renderView(getRoute(), false);
});

/* ===================================================
   BOOT
   =================================================== */

renderView(getRoute(), false);
