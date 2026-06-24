import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const GlassWork = () => {
  const customFields = [
    {
      name: 'serviceType',
      label: 'Service Type',
      type: 'select',
      options: ['Glass Work'],
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Glass Work</h1>
          <p className="text-muted lead">Premium glass work solutions for modern interiors and exteriors.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Glass Work"
        title="Glass Work Enquiry"
        subtitle="Get professional glass installation and fabrication services for your residential or commercial space."
        customFields={customFields}
      />
    </div>
  );
};

export default GlassWork;