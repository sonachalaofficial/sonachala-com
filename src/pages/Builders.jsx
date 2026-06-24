import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const Builders = () => {
  const customFields = [
    {
      name: 'projectType',
      label: 'Project Type',
      type: 'select',
      options: ['Residential', 'Commercial', 'Industrial', 'Renovation'],
      required: true,
      colSize: 6
    },
    {
      name: 'projectScale',
      label: 'Project Scale',
      type: 'select',
      options: ['Small', 'Medium', 'Large', 'Mega'],
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Builders</h1>
          <p className="text-muted lead">Reliable construction and builder services for residential and commercial projects with quality assurance.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Builders"
        title="Builders Enquiry"
        subtitle="Get professional construction and builder services with transparent pricing, timely delivery, and quality workmanship."
        customFields={customFields}
      />
    </div>
  );
};

export default Builders;