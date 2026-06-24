import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const PackersMovers = () => {
  const customFields = [
    {
      name: 'moveType',
      label: 'Move Type',
      type: 'select',
      options: ['Local', 'Domestic', 'International', 'Office Relocation'],
      required: true,
      colSize: 6
    },
    {
      name: 'propertySize',
      label: 'Property Size',
      type: 'select',
      options: ['1 BHK', '2 BHK', '3 BHK', '4+ BHK / Villa'],
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Packers & Movers</h1>
          <p className="text-muted lead">Reliable packing and moving services for safe and hassle-free relocation of your belongings.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Packers & Movers"
        title="Packers & Movers Enquiry"
        subtitle="Get professional packing and moving services with safe handling, timely delivery, and complete insurance coverage."
        customFields={customFields}
      />
    </div>
  );
};

export default PackersMovers;