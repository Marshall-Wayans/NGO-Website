import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";
import "./Schools.css"; 


const schoolIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1670/1670614.png",
  iconSize: [35, 35],
});


const schools = [
  {
    id: 1,
    name: "Kibera Hope Academy",
    county: "Nairobi",
    students: 87,
    coords: [-1.311, 36.816],
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=80",
    description:
      "Located in Nairobi’s Kibera, this school provides education and hope to children from underserved communities.",
  },
  {
    id: 2,
    name: "Nakuru Christian School",
    county: "Nakuru",
    students: 62,
    coords: [-0.303, 36.08],
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    description:
      "A beacon of faith and learning in Nakuru, nurturing children academically and spiritually.",
  },
  {
    id: 3,
    name: "Kisumu Lakeside Academy",
    county: "Kisumu",
    students: 73,
    coords: [-0.091, 34.768],
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    description:
      "Providing holistic education along the beautiful shores of Lake Victoria.",
  },
];

export default function ICCMSchools() {
  const [selectedSchool, setSelectedSchool] = useState(null);

  return (
    <section className="iccm-schools-wrapper">
      
      <div className="iccm-schools-floating-icons">
        <i className="fas fa-map-marker-alt"></i>
        <i className="fas fa-book"></i>
        <i className="fas fa-globe-africa"></i>
      </div>

      
      <div className="iccm-schools-header">
        <h1 className="fade-in">Our Schools</h1>
        <p className="fade-in-delay">
          ICCM Kenya supports 13 Free Methodist schools across Kenya,
          providing quality education and hope to over 400 children.
        </p>
      </div>

     
      <div className="iccm-schools-grid">
        {schools.map((school) => (
          <div
            key={school.id}
            className="iccm-schools-card fade-slide"
            onClick={() => setSelectedSchool(school)}
          >
            <img src={school.image} alt={school.name} />
            <div className="iccm-schools-info">
              <h3>{school.name}</h3>
              <div className="iccm-schools-location">
                <MapPin size={14} /> {school.county}, Kenya
              </div>
              <p>{school.students} children supported</p>
            </div>
          </div>
        ))}
      </div>

     
      <div className="iccm-schools-map fade-in">
        <MapContainer
          center={[-0.5, 37]}
          zoom={6}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%", borderRadius: "20px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {schools.map((school) => (
            <Marker
              key={school.id}
              position={school.coords}
              icon={schoolIcon}
              eventHandlers={{
                click: () => setSelectedSchool(school),
              }}
            >
              <Popup>{school.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      
      {selectedSchool && (
        <div
          className="iccm-schools-modal-overlay"
          onClick={() => setSelectedSchool(null)}
        >
          <div
            className="iccm-schools-modal fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedSchool.image}
              alt={selectedSchool.name}
              className="iccm-schools-modal-img"
            />
            <h2>{selectedSchool.name}</h2>
            <p>{selectedSchool.description}</p>
            <button
              className="iccm-schools-close-btn"
              onClick={() => setSelectedSchool(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      
      <section className="iccm-schools-cta fade-in-delay">
        <h2>Get Involved</h2>
        <p>
          Join us in empowering children and communities across Kenya through
          education, health, and development programs.
        </p>
        <div className="iccm-schools-cta-buttons">
          <a href="/sponsor" className="iccm-schools-btn sponsor">
            Sponsor a Child
          </a>
          <a href="/contact" className="iccm-schools-btn contact">
            Contact Us
          </a>
        </div>
      </section>
    </section>
  );
}