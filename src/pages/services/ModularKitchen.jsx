import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const ModularKitchen = () => {
  const customFields = [
    {
      name: 'serviceType',
      label: 'Service Type',
      type: 'select',
      options: ['Modular Kitchen'],
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Modular Kitchen</h1>
          <p className="text-muted lead">Modern modular kitchen designs that combine style, functionality, and durability.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Modular Kitchen"
        title="Modular Kitchen Enquiry"
        subtitle="Get customized modular kitchen solutions with premium materials and expert installation services."
        customFields={customFields}
      />
    </div>
  );
};

export default ModularKitchen;