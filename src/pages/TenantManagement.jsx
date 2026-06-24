import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const TenantManagement = () => {
  const customFields = [
    {
      name: 'propertyType',
      label: 'Property Type',
      type: 'select',
      options: ['Apartment', 'Villa', 'Commercial', 'Plot'],
      required: true,
      colSize: 6
    },
    {
      name: 'tenantCount',
      label: 'Number of Tenants',
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
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Tenant Management</h1>
          <p className="text-muted lead">End-to-end tenant management services ensuring smooth rental operations and tenant satisfaction.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Tenant Management"
        title="Tenant Management Enquiry"
        subtitle="Get professional tenant management services including screening, lease management, rent collection, and maintenance coordination."
        customFields={customFields}
      />
    </div>
  );
};

export default TenantManagement;