import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const PropertyManagement = () => {
  const customFields = [
    {
      name: 'propertyType',
      label: 'Property Type',
      type: 'select',
      options: ['Residential', 'Commercial', 'Industrial', 'Plot'],
      required: true,
      colSize: 6
    },
    {
      name: 'propertyCount',
      label: 'Number of Properties',
      type: 'select',
      options: ['1', '2-5', '6-10', '10+'],
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Property Management</h1>
          <p className="text-muted lead">Comprehensive property management services to maximize your investment returns with professional care.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Property Management"
        title="Property Management Enquiry"
        subtitle="Get expert property management services including tenant screening, rent collection, maintenance, and financial reporting."
        customFields={customFields}
      />
    </div>
  );
};

export default PropertyManagement;