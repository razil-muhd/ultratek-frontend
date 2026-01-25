export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  faqs: { question: string; answer: string }[];
}

export const servicesData: Service[] = [
  {
    id: '1',
    title: 'Cold Storage Facility',
    slug: 'cold-storage-facility',
    shortDescription: 'Turnkey solutions for temperature-sensitive inventory with advanced climate control.',
    fullDescription: `Designing a cold storage facility requires careful planning, engineering expertise, and advanced climate control to ensure the safe storage of temperature-sensitive goods. A professionally designed cold store by Ultratek Arabia delivers top-quality, turnkey solutions that provide reliable temperature management, efficient workflow, and long-term protection for frozen foods, pharmaceuticals, dairy, seafood, perishables, and other sensitive inventory.

A leading cold storage warehouse is built with high-quality insulation, durable structural design, energy-efficient refrigeration systems, and humidity control to maintain consistent temperatures and product quality. The facility layout is optimized for maximum space utilization, smooth movement of goods, and minimal cooling loss during loading and unloading operations. Dedicated areas for trucking, docking, receiving, and dispatching enhance operational efficiency, reduce handling time, and improve overall logistics.

By integrating advanced climate technology, safety systems, and workflow optimization, a top-tier cold storage facility ensures product freshness, reduces energy consumption, and boosts supply chain performance. Ultratek Arabia offers complete turnkey services including warehouse layout design, civil and structural construction, insulated panel installation, refrigeration system integration, racking and storage solutions, and loading dock optimization. Investing in a best-in-class cold storage facility with Ultratek Arabia helps businesses maintain competitive advantage, lead the market, and achieve long-term operational excellence.`,
    icon: '❄️',
    image: '/services/cold-storage.png',
    faqs: [
      {
        question: 'What is a cold storage facility?',
        answer: 'A cold storage facility is a temperature-controlled warehouse used to store perishable or sensitive goods, keeping them at specific temperature and humidity levels to maintain quality and extend shelf life.'
      },
      {
        question: 'Can a cold storage facility be expanded later?',
        answer: 'Yes. When designed properly, cold stores allow modular expansion—additional chambers, larger docks, or capacity upgrades. It’s important to plan ahead for future growth during the initial design stage.'
      },
      {
        question: 'How does Ultratek Arabia support cold storage projects?',
        answer: 'Ultratek Arabia provides complete cold storage solutions, including layout design, civil and insulated panel construction, refrigeration integration, racking systems, loading dock optimization, and full turnkey execution—ensuring a durable, efficient, and fully customized facility.'
      },
      {
        question: 'What makes a cold storage facility different from a regular warehouse?',
        answer: 'Cold stores use advanced refrigeration, insulation panels, and humidity control to maintain consistent cooling. Ultratek Arabia specializes in constructing insulated panel structures and integrating climate-control systems that meet food and pharmaceutical standards.'
      },
      {
        question: 'What safety features are required in a cold storage facility?',
        answer: 'Critical safety elements include anti-slip flooring, emergency lighting, fire-suppression systems, insulated doors, and temperature alarms. Ultratek Arabia ensures compliance with safety codes by integrating the right protective features during construction.'
      },
      {
        question: 'How long does it take to build a cold storage facility?',
        answer: 'The timeline depends on size, complexity, and systems integration. Small facilities may take 2–3 months, medium 4–6 months, and large industrial projects 6–12 months. Ultratek Arabia offers turnkey solutions, managing design, construction, refrigeration, and racking to deliver projects efficiently on schedule.'
      }
    ]
  },
  {
    id: '2',
    title: 'Structural and Civil Works',
    slug: 'structural-civil-works',
    shortDescription: 'High-quality infrastructure designed to support heavy loads and withstand harsh conditions.',
    fullDescription: `High-quality structural and civil works are essential for building strong, safe, and long-lasting industrial and commercial infrastructure. As a top, leading provider of engineering and construction solutions, we deliver the best structural systems designed to support heavy loads, withstand harsh conditions, and ensure long-term reliability.

Our services cover the complete construction scope, including deep foundations, reinforced concrete flooring, precision structural framing, robust load-bearing walls, advanced roofing systems, site leveling, grading, and efficient drainage networks. Every component is built using premium, weather-resistant materials to ensure maximum durability, stability, and performance.

With a strong commitment to engineering accuracy and international safety standards, our structural and civil works enhance operational efficiency, reduce maintenance costs, and deliver exceptional reliability for industrial and commercial environments.

As one of the best and top-rated companies in the industry, Ultratek Arabia ensures seamless project execution, high-quality workmanship, and long-lasting infrastructure solutions tailored to your specific requirements. Choosing us means partnering with a leading construction and engineering expert dedicated to delivering superior results.`,
    icon: '🏗️',
    image: '/services/structural-civil.png',
    faqs: [
      {
        question: 'Why are structural and civil works important for industrial and commercial projects?',
        answer: 'They form the backbone of any project, supporting heavy loads, advanced equipment, and operational efficiency. Properly executed works reduce maintenance costs, ensure stability, and enhance workflow.'
      },
      {
        question: 'What makes Ultratek Arabia a leading company in structural and civil works?',
        answer: 'Ultratek Arabia is recognized as a top, leading company delivering best-in-class engineering solutions, including foundations, reinforced flooring, structural framing, roofing systems, drainage, and complete site development, all built to international standards.'
      },
      {
        question: 'How long does structural and civil work take for industrial projects?',
        answer: 'Project timelines vary depending on size and complexity. Ultratek Arabia ensures efficient planning and execution, delivering top-quality results within scheduled deadlines.'
      },
      {
        question: 'Can Ultratek Arabia handle turnkey structural and civil projects?',
        answer: 'Yes. As a leading company, Ultratek Arabia provides complete turnkey solutions—from design and planning to construction and site development—for a seamless project experience.'
      },
      {
        question: 'Can structural and civil works be customized for my project?',
        answer: 'Yes. Ultratek Arabia provides tailored solutions to match your facility’s load requirements, workflow, and operational needs, ensuring efficient and reliable infrastructure.'
      },
      {
        question: 'How do structural and civil works benefit my business?',
        answer: 'They ensure durable, safe, and efficient infrastructure, support heavy loads and advanced equipment, reduce maintenance costs, and improve overall operational efficiency.'
      }
    ]
  },
  {
    id: '3',
    title: 'Sandwich Panel',
    slug: 'sandwich-panel',
    shortDescription: 'Superior thermal resistance and airtight sealing for refrigerated warehouses.',
    fullDescription: `Sandwich panels play a crucial role in building high-performance cold storage systems, offering the best insulation efficiency, structural strength, and long-lasting durability. Known for their superior thermal resistance and airtight sealing, these panels are considered one of the top solutions for maintaining stable temperatures in refrigerated warehouses, food processing units, and pharma storage environments.

Designed with advanced insulation cores and durable metal layers, sandwich panels ensure leading energy savings, improved hygiene, and exceptional protection against moisture and temperature fluctuations. Their lightweight construction allows for faster installation while ensuring strong performance and minimal maintenance.

As one of the best and most reliable panel systems in the industry, sandwich panels provided by Ultratek Arabia help businesses achieve higher efficiency, reduced energy costs, and long-term operational stability. Their versatility makes them ideal for walls, ceilings, partitions, and custom-built temperature-controlled rooms—making them the top choice for modern refrigeration infrastructure.`,
    icon: '🧱',
    image: '/services/sandwich-panel.png',
    faqs: [
      {
        question: 'How long do sandwich panels last?',
        answer: 'With proper installation and maintenance, sandwich panels can last 20–30 years, providing long-term insulation and structural performance.'
      },
      {
        question: 'Are sandwich panels suitable for large-scale cold storage project?',
        answer: 'Yes. Their modular design, high insulation, and structural strength make them the best solution for large warehouses and industrial cold storage facilities.'
      },
      {
        question: 'Why are sandwich panels considered a top option for industrial construction?',
        answer: 'They are lightweight, strong, quick to install, and designed to resist moisture, fire, and corrosion. These features make sandwich panels a top-performing material for modern industrial projects seeking long-term reliability.'
      },
      {
        question: 'Do sandwich panels require specialized labor for installation?',
        answer: 'No. While installation should follow best practices, sandwich panels are designed for quick and easy assembly, reducing labor costs and project timelines.'
      },
      {
        question: 'How do sandwich panels compare with traditional brick or concrete walls?',
        answer: 'Sandwich panels are lighter, faster to install, better insulated, and more cost-effective, providing superior energy efficiency and operational flexibility'
      },
      {
        question: 'Why are Ultratek Arabia’s sandwich panels considered the best in the market?',
        answer: 'Ultratek Arabia offers top-quality, industry-leading sandwich panels with premium materials, expert installation, and full compliance with international standards, ensuring maximum efficiency, durability, and performance.'
      }
    ]
  },
  {
    id: '4',
    title: 'Warehouse Cooling System',
    slug: 'warehouse-cooling-system',
    shortDescription: 'Precision temperature management and energy-efficient cooling solutions.',
    fullDescription: `A warehouse cooling system is a critical solution for maintaining optimal temperatures, energy efficiency, and product integrity in modern storage facilities. These systems are indispensable for warehouses handling temperature-sensitive goods such as food, pharmaceuticals, electronics, and perishables. By ensuring consistent climate control, a reliable cooling system protects inventory from spoilage, enhances employee comfort, and reduces operational costs. From basic ventilation and air circulation setups to advanced industrial refrigeration and air conditioning systems, warehouse cooling solutions can be customized to meet the specific needs of any facility.

Ultratek Arabia is a leading provider of top-quality warehouse cooling systems, offering best-in-class solutions that combine durability, energy efficiency, and precision temperature management. Our systems feature high-performance refrigeration units, advanced airflow management, humidity control, and real-time temperature monitoring, ensuring that your warehouse operates at peak efficiency. With expert design and professional installation, Ultratek Arabia delivers turnkey cooling solutions that seamlessly integrate with your facility layout, workflow, and operational requirements.

Investing in a top-tier warehouse cooling system from Ultratek Arabia guarantees long-term reliability, reduced energy consumption, and maximum protection for your valuable inventory. Whether for small-scale warehouses or large industrial storage facilities, our best-in-class cooling solutions provide consistent performance, operational efficiency, and a safe, productive working environment. By choosing Ultratek Arabia, businesses gain a leading-edge solution that supports sustainability, minimizes product loss, and ensures operational excellence for years to come.`,
    icon: '❄️',
    image: '/services/cooling-system.png',
    faqs: [
      {
        question: 'Why is a warehouse cooling system important?',
        answer: 'It ensures consistent temperature control, preserves the quality of temperature-sensitive products, enhances employee comfort, and reduces operational costs, making it a top solution for modern warehouses.'
      },
      {
        question: 'How long does it take to install a warehouse cooling system?',
        answer: 'Installation depends on the system type and warehouse size, but Ultratek Arabia provides fast, efficient, and turnkey solutions to minimize downtime.'
      },
      {
        question: 'How long do warehouse cooling systems last?',
        answer: 'With proper installation and maintenance, top-quality systems from Ultratek Arabia can provide years of reliable performance, making them a long-term investment for any facility.'
      },
      {
        question: 'Are Ultratek Arabia cooling systems compliant with safety standards?',
        answer: 'Yes. Ultratek Arabia offers top-quality, leading solutions that comply with international standards for energy efficiency, safety, and operational reliability.'
      },
      {
        question: 'Can warehouse cooling systems be monitored remotely?',
        answer: 'Yes. Modern systems can include remote monitoring and control, allowing warehouse managers to track temperature, humidity, and energy usage in real time for optimal operational efficiency.'
      },
      {
        question: 'Can Ultratek Arabia provide turnkey warehouse cooling solutions?',
        answer: 'Yes. Ultratek Arabia is a leading provider offering complete turnkey solutions, including design, supply, installation, and post-installation support for warehouse cooling systems.'
      }
    ]
  },
  {
    id: '5',
    title: 'Doors and Shutters Lighting',
    slug: 'doors-shutters-lighting',
    shortDescription: 'High-performance lighting for safety and visibility at all access points.',
    fullDescription: `Doors and shutters lighting is a critical feature in warehouses, cold storage facilities, and industrial setups, ensuring safety, visibility, and operational efficiency. Proper illumination at entry and exit points allows for smooth loading, unloading, and movement of goods, even in low-light or nighttime conditions. High-quality lighting not only enhances safety but also minimizes operational errors and accidents, making it a top choice for modern industrial facilities.

Ultratek Arabia is a leading provider of best-in-class doors and shutters lighting solutions, offering durable, energy-efficient, and high-performance systems. Our solutions include LED lighting, motion sensors, emergency lighting, and high-lumen fixtures, tailored to ensure optimal brightness, long lifespan, and minimal energy consumption. With precision design and professional installation, Ultratek Arabia delivers lighting solutions that integrate seamlessly with warehouse operations and facility infrastructure.

By investing in top-quality doors and shutters lighting from Ultratek Arabia, businesses achieve enhanced safety, improved workflow, and energy-efficient performance. Our customized solutions and expert support make Ultratek Arabia the leading company for industrial lighting, providing reliable, durable, and high-performing illumination for all access points in warehouses, cold storage, and industrial environments.`,
    icon: '💡',
    image: '/services/lighting.png',
    faqs: [
      {
        question: 'Why is doors and shutters lighting important in industrial and warehouse facilities?',
        answer: 'Doors and shutters lighting provides essential visibility for safe loading, unloading, and staff movement. It reduces accidents, improves productivity, and ensures smooth operations, especially in low-light or high-traffic areas.'
      },
      {
        question: 'Does Ultratek Arabia provide complete lighting solutions?',
        answer: 'Yes. Ultratek Arabia offers top-rated lighting design, supply, and installation for doors and shutters across warehouses, factories, and cold storage facilities.'
      },
      {
        question: 'How do I choose the best lighting for industrial shutters?',
        answer: 'Choose lighting with a high IP rating, strong lumen output, low power consumption, and motion-sensor options. A leading company like Ultratek Arabia can guide you with expert recommendations.'
      },
      {
        question: 'Are custom lighting solutions available for unique shutter sizes and warehouse layouts?',
        answer: 'Yes. Lighting can be fully customized to match door height, dock design, aisle spacing, and operational requirements, ensuring optimal coverage.'
      },
      {
        question: 'Can these lighting systems operate in cold storage environments?',
        answer: 'Absolutely. Ultratek Arabia lighting solutions are engineered to perform reliably in extreme temperatures, making them ideal for cold storage and freezer areas.'
      },
      {
        question: 'Do you offer maintenance services for installed lighting systems?',
        answer: 'Yes. Ultratek Arabia offers periodic inspection, cleaning, and maintenance services to ensure optimal performance and extended lifespan.'
      }
    ]
  },
  {
    id: '6',
    title: 'Loading Bay Facilities',
    slug: 'loading-bay-facilities',
    shortDescription: 'Advanced systems for streamlined and safe movement of goods.',
    fullDescription: `Loading bay facilities play a vital role in ensuring fast, safe, and streamlined movement of goods in warehouses and cold storage environments. From receiving shipments to dispatching products, every step depends on a well-structured and efficiently designed loading bay. Proper loading bay infrastructure not only improves workflow but also protects temperature-sensitive items, reduces energy loss, and enhances overall operational productivity.

Ultratek Arabia is recognized as one of the top and leading providers of loading bay facility solutions, offering advanced systems engineered for maximum performance. Our loading bay setups include high-precision dock levelers, insulated dock shelters, heavy-duty sectional doors, safety barriers, and energy-efficient lighting — all designed to meet the demands of modern warehouse and cold chain operations. As the best company in delivering durable and high-quality loading bay systems, Ultratek Arabia ensures that each installation supports smooth material handling while maintaining strict hygiene and safety standards.

With our tailored solutions, businesses benefit from reduced downtime, improved worker safety, and seamless integration with existing warehouse infrastructure. Whether you’re upgrading an existing bay or setting up a new facility, Ultratek Arabia provides top-grade loading bay designs that guarantee optimal efficiency and long-lasting reliability. Trusted across industries, we help companies create a high-performance loading environment that supports consistent, temperature-controlled, and error-free operations.`,
    icon: '🚛',
    image: '/services/loading-bay.png',
    faqs: [
      {
        question: 'What are loading bay facilities in a warehouse?',
        answer: 'Loading bay facilities are specialized areas designed for loading and unloading goods efficiently in warehouses and cold storage units. They include dock levelers, dock shelters, sectional doors, and safety systems that ensure smooth and safe material handling.'
      },
      {
        question: 'What makes Ultratek Arabia a leading provider of loading bay facility solutions?',
        answer: 'Ultratek Arabia offers high-performance, durable, and energy-efficient loading bay systems tailored for warehouses, logistics centers, and cold storage facilities. As a leading company, we provide expert installation, premium materials, and long-lasting reliability.'
      },
      {
        question: 'Can loading bay systems be upgraded to meet modern warehouse standards?',
        answer: 'Yes, older loading bays can be upgraded with new dock levelers, LED lighting, safety bumpers, and energy-efficient doors to match modern warehouse performance standards.'
      },
      {
        question: 'Which loading bay equipment is best for heavy-duty warehouse operations?',
        answer: 'Hydraulic dock levelers, industrial dock shelters, sectional doors, and anti-slip platforms are among the best equipment for high-volume and heavy-duty warehouse operations.'
      },
      {
        question: 'Why do leading warehouses invest in advanced loading bay technology?',
        answer: 'Top warehouses invest in advanced systems to boost loading speed, improve safety, enhance energy efficiency, reduce labor effort, and maintain a reliable logistics workflow.'
      },
      {
        question: 'How do loading bay facilities enhance warehouse workflow and productivity?',
        answer: 'Loading bay facilities improve workflow by enabling faster, safer, and more organized loading and unloading. With equipment like dock levelers, dock shelters, and high-speed doors, they reduce delays, prevent bottlenecks, and ensure a smooth flow of goods—boosting overall warehouse productivity.'
      }
    ]
  },
  {
    id: '7',
    title: 'Fire Fighting System',
    slug: 'fire-fighting-system',
    shortDescription: 'Automated suppression and detection to safeguard personnel and inventory.',
    fullDescription: `A fire fighting system is essential for protecting warehouses, cold storage facilities, and industrial operations from fire risks. Designed to address the unique challenges of low-temperature environments, insulation materials, and combustible goods, these systems provide top-level safety, protect valuable inventory, and ensure compliance with fire safety regulations.

The best firefighting solutions include automated sprinkler systems, fire hydrants, heat and smoke detectors, gas-based suppression systems, emergency alarms, and monitoring solutions. These systems deliver fast detection and suppression, minimizing damage and downtime while safeguarding employees and assets.

As a leading provider, Ultratek Arabia offers fully customized firefighting systems tailored to each facility’s size, layout, and operational requirements. With expert engineering, precise installation, and ongoing maintenance, Ultratek Arabia ensures your warehouse or cold storage facility benefits from reliable, durable, and high-performance fire protection, giving businesses peace of mind and operational efficiency.`,
    icon: '🔥',
    image: '/services/fire-fighting.png',
    faqs: [
      {
        question: 'What types of fire fighting systems are best for warehouses?',
        answer: 'The best systems include sprinkler systems, fire hydrants, gas-based suppression systems, smoke and heat detectors, alarms, and emergency lighting — all designed for leading industrial fire protection.'
      },
      {
        question: 'How quickly should a fire fighting system respond in case of a fire?',
        answer: 'The fastest response is critical. Leading fire systems detect fire within seconds and activate suppression mechanisms immediately to minimize damage and operational disruption.'
      },
      {
        question: 'Can fire fighting systems protect both people and goods simultaneously?',
        answer: 'Absolutely. Modern systems are designed to safeguard employees, reduce injury risk, and protect goods by providing rapid containment and fire suppression.'
      },
      {
        question: 'Can fire fighting systems be monitored remotely?',
        answer: 'Yes. Modern systems can be integrated with IoT and building management systems for remote monitoring, real-time alerts, and proactive maintenance'
      },
      {
        question: 'How do emergency lighting and alarms integrate with fire fighting systems?',
        answer: 'Emergency lighting and alarms guide personnel to safety, trigger suppression systems, and communicate with building management for coordinated evacuation.'
      },
      {
        question: 'What factors make a fire fighting system the best choice for industrial warehouses?',
        answer: 'The best fire fighting systems combine fast detection, reliable suppression, energy-efficient operation, compliance with safety standards, and durability—ensuring maximum protection for personnel and warehouse inventory.'
      }
    ]
  },
  {
    id: '8',
    title: 'Rack System and Equipment',
    slug: 'rack-system-equipment',
    shortDescription: 'Maximized storage efficiency with selective, drive-in, and cantilever solutions.',
    fullDescription: `A rack system and equipment is essential for warehouses, cold storage units, and industrial facilities seeking maximum storage efficiency and operational safety. The right racking system ensures proper space utilization, easy accessibility, and streamlined material handling, making it one of the best solutions for modern warehouse operations.

Ultratek Arabia, a leading provider of top-quality warehouse solutions, offers customized racking systems designed to meet diverse storage needs. Our offerings include selective pallet racks, push-back racks, drive-in racks, cantilever racks, and mezzanine platforms — all engineered for strength, durability, and compliance with industry standards.

By integrating advanced racking solutions with forklifts, conveyors, and warehouse management systems, Ultratek Arabia helps businesses optimize storage capacity, improve workflow efficiency, and ensure safety. Investing in our best-in-class rack systems guarantees long-term reliability, better inventory management, and enhanced operational performance for warehouses and cold storage facilities.`,
    icon: '🏗️',
    image: '/services/rack-system.png',
    faqs: [
      {
        question: 'What is a rack system and why is it important for warehouses?',
        answer: 'A rack system is a structured storage solution that maximizes space utilization, organizes inventory, and ensures safe and efficient material handling in warehouses and cold storage facilities.'
      },
      {
        question: 'How do rack systems improve operational efficiency?',
        answer: 'By providing easy access to goods, reducing retrieval times, and supporting forklifts and conveyors, rack systems streamline warehouse operations and boost productivity.'
      },
      {
        question: 'Can rack systems be customized for cold storage?',
        answer: 'Yes. Ultratek Arabia provides customized rack systems for cold storage, designed with corrosion-resistant materials to withstand low temperatures.'
      },
      {
        question: 'How do rack systems contribute to energy efficiency in cold storage?',
        answer: 'Efficient rack layouts improve airflow, reduce obstruction, and optimize space usage, helping maintain consistent temperatures and reducing energy costs.'
      },
      {
        question: 'How long do Ultratek Arabia racking systems typically last?',
        answer: 'With premium materials, expert installation, and proper maintenance, Ultratek Arabia rack systems can last 15–25 years, providing long-term durability and ROI.'
      },
      {
        question: 'Why are Ultratek Arabia rack systems considered a leading choice in the industry?',
        answer: 'Ultratek Arabia combines top-quality materials, customized design, professional installation, and expert support to deliver reliable, high-performance rack solutions for warehouses and cold storage facilities.'
      }
    ]
  }
];
