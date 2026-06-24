import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const RealEstate = () => {
  const customFields = [
    {
      name: 'propertyType',
      label: 'Property Type',
      type: 'select',
      options: ['Residential', 'Commercial', 'Plot', 'Agricultural'],
      required: true,
      colSize: 6
    },
    {
      name: 'budgetRange',
      label: 'Budget Range',
      type: 'select',
      options: ['Below 50L', '50L - 1Cr', '1Cr - 5Cr', '5Cr+'],
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Real Estate</h1>
          <p className="text-muted lead">Expert real estate services for buying, selling, and investing in properties with trusted guidance.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Real Estate"
        title="Real Estate Enquiry"
        subtitle="Get professional real estate consultation for property buying, selling, and investment opportunities tailored to your needs."
        customFields={customFields}
      />
    </div>
  );
};

export default RealEstate;