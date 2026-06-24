import React from 'react';
import EnquiryForm from '../../components/EnquiryForm';

const AluminiumPartition = () => {
  const customFields = [
    {
      name: 'serviceType',
      label: 'Service Type',
      type: 'select',
      options: ['Aluminium Partition'],
      required: true,
      colSize: 12
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Aluminium Partition</h1>
          <p className="text-muted lead">Sleek and durable aluminium partition solutions for modern spaces.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Aluminium Partition"
        title="Aluminium Partition Enquiry"
        subtitle="Get custom aluminium partition designs for offices, commercial spaces, and residential interiors."
        customFields={customFields}
      />
    </div>
  );
};

export default AluminiumPartition;