import React from 'react';
import { motion } from 'framer-motion';
import './HistoryTimeline.css';

const timelineEvents = [
  {
    year: 1996,
    title: 'ICCM Founded',
    description:
      'International Child Care Ministries began in Kenya as an initiative to help Rwandese refugee children access education.',
    image:
      'https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    year: 2000,
    title: 'Expanded to Local Communities',
    description:
      'Local children began benefiting from schools run within Free Methodist Churches, building communities that supported sponsored children.',
    image:
      'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    year: 2005,
    title: 'Family Support Programs',
    description:
      'Launched initiatives to support entire families, recognizing that children thrive best in healthy family environments.',
    image:
      'https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    year: 2010,
    title: 'Educational Excellence Initiative',
    description:
      'Focused on improving educational quality and outcomes for sponsored children through teacher training and resource development.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    year: 2020,
    title: 'Digital Learning Programs',
    description:
      'Adapted to global challenges by implementing digital learning solutions to ensure education continuity.',
    image:
      'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const HistoryTimeline = () => {
  return (
    <section className="history-timeline-section">
      <div className="history-container">
        
        <div className="history-header">
          <h2>Our Journey Since 1996</h2>
          <p>
            For over 25 years, we've been dedicated to changing children's lives
            through education and support.
          </p>
        </div>

        
        <div className="history-timeline-items">
          <div className="history-timeline-line"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              
              <div className="timeline-image-container">
                <div className="timeline-image-box">
                  <img src={event.image} alt={event.title} />
                </div>
              </div>

              
              <div className="timeline-content-container">
                <div className="timeline-dot"></div>
                <div
                  className={`timeline-content-box ${
                    index % 2 === 0 ? 'margin-right' : 'margin-left'
                  }`}
                >
                  <span className="timeline-year">{event.year}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          className="impact-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>
            "Sponsorship can change the entire trajectory of a child's life."
          </h3>
          <p>
            Through education, supplies, nutrition, and activities for holistic
            development, we provide children with the most essential gift: HOPE.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryTimeline;