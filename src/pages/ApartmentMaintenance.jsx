import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const ApartmentMaintenance = () => {
  const customFields = [
    {
      name: 'apartmentType',
      label: 'Apartment Type',
      type: 'select',
      options: ['1 BHK', '2 BHK', '3 BHK', 'Villa / Independent'],
      required: true,
      colSize: 6
    },
    {
      name: 'serviceFrequency',
      label: 'Service Frequency',
      type: 'select',
      options: ['One-time', 'Monthly', 'Quarterly', 'Annual'],
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Apartment Maintenance</h1>
          <p className="text-muted lead">Complete apartment maintenance services to keep your living space in perfect condition year-round.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Apartment Maintenance"
        title="Apartment Maintenance Enquiry"
        subtitle="Get comprehensive apartment maintenance services including plumbing, electrical, cleaning, and general repairs."
        customFields={customFields}
      />
    </div>
  );
};

export default ApartmentMaintenance;