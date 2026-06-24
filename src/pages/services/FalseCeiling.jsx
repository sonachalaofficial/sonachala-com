import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const FalseCeiling = () => {
  const customFields = [
    {
      name: 'serviceType',
      label: 'Service Type',
      type: 'select',
      options: ['False Ceiling'],
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>False Ceiling</h1>
          <p className="text-muted lead">Elegant false ceiling designs to enhance the beauty and ambiance of your space.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="False Ceiling"
        title="False Ceiling Enquiry"
        subtitle="Get expert consultation and installation services for premium false ceiling designs tailored to your space."
        customFields={customFields}
      />
    </div>
  );
};

export default FalseCeiling;