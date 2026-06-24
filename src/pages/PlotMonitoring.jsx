import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const PlotMonitoring = () => {
  const customFields = [
    {
      name: 'plotLocation',
      label: 'Plot Location',
      type: 'select',
      options: ['Urban', 'Semi-Urban', 'Rural', 'Coastal'],
      required: true,
      colSize: 6
    },
    {
      name: 'plotSize',
      label: 'Plot Size',
      type: 'select',
      options: ['Below 1000 sq ft', '1000-5000 sq ft', '5000-10000 sq ft', '10000+ sq ft'],
      required: true,
      colSize: 6
    }
  ];

  return (
    <div>
      <div className="py-5 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 className="fw-bold mb-3" style={{ color: '#038A5E' }}>Plot Monitoring</h1>
          <p className="text-muted lead">Professional plot monitoring and supervision services to ensure your land development stays on track.</p>
        </div>
      </div>
      <EnquiryForm
        pageType="Plot Monitoring"
        title="Plot Monitoring Enquiry"
        subtitle="Get reliable plot monitoring services with regular site visits, progress reports, and quality checks for your land projects."
        customFields={customFields}
      />
    </div>
  );
};

export default PlotMonitoring;