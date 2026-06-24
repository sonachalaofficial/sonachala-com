import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const UPVCWindows = () => {
  const customFields = [
    {
      name: 'serviceType',
      label: 'Service Type',
      type: 'select',
      options: ['UPVC Windows'],
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>UPVC Windows</h1>
          <p className="text-muted lead">Energy-efficient UPVC windows that offer durability, security, and style.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="UPVC Windows"
        title="UPVC Windows Enquiry"
        subtitle="Get premium quality UPVC window installation services with excellent thermal insulation and noise reduction."
        customFields={customFields}
      />
    </div>
  );
};

export default UPVCWindows;