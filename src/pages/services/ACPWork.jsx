import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const ACPWork = () => {
  const customFields = [
    {
      name: 'serviceType',
      label: 'Service Type',
      type: 'select',
      options: ['ACP Work'],
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>ACP Work</h1>
          <p className="text-muted lead">High-quality ACP (Aluminium Composite Panel) work for modern building facades.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="ACP Work"
        title="ACP Work Enquiry"
        subtitle="Get durable and aesthetic ACP cladding solutions for your building exterior and interior applications."
        customFields={customFields}
      />
    </div>
  );
};

export default ACPWork;