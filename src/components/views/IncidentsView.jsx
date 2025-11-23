import React from 'react';
import { FaPaw, FaBan, FaExclamationTriangle } from 'react-icons/fa'; // Icons for visual grouping

// Define the incident data, with most recent LAST (which is correct for an array)
// The map function below will reverse this array to display chronologically (most recent first)
const incidentData = [
  // Animal Incidents (Oldest First)
  { 
    id: 1, 
    category: 'Animal Incidents', 
    title: 'Trespassing and attacking dogs.', 
    report: 'Kane County Animal Control A24-009656-1',
    icon: FaPaw,
    color: 'text-yellow-600',
  },
  { 
    id: 2, 
    category: 'Animal Incidents', 
    title: 'Dog attack in neighbor’s yard.', 
    report: 'Kane County Sheriff Report 24-42827',
    icon: FaPaw,
    color: 'text-yellow-600',
  },
  { 
    id: 3, 
    category: 'Animal Incidents', 
    title: 'Animal complaint for dogs trespassing on neighboring property.', 
    report: 'Kane County Sheriff Report 24-43978',
    icon: FaPaw,
    color: 'text-yellow-600',
  },
  { 
    id: 4, 
    category: 'Animal Incidents', 
    title: 'Dogs Running at Large citation; resulted in dog bite injury to a neighbor’s dog.', 
    report: 'Kane County Sheriff Report 24-48109',
    icon: FaPaw,
    color: 'text-yellow-600',
  },
  // Trespassing/Harassment
  { 
    id: 5, 
    category: 'Trespassing/Harassment', 
    title: 'Suspicious person and trespassing; police issued a BOLO after an occupant threatened to harm a neighbor and an intoxicated individual nearly required EMS.', 
    report: 'Kane County Sheriff Report 25-11784',
    icon: FaBan,
    color: 'text-red-600',
  },
  { 
    id: 6, 
    category: 'Trespassing/Harassment', 
    title: 'Harassment by tenant on property line for over an hour.', 
    report: 'Kane County Sheriff Report 25-26117',
    icon: FaBan,
    color: 'text-red-600',
  },
  // Property/Code Violations (Most Recent Incidents are listed last in this source data)
  { 
    id: 7, 
    category: 'Property/Code Violations', 
    title: 'Violation of county code regarding grass taller than 1 foot and yard neglect.', 
    report: 'Kane County Nuisance Complaint',
    icon: FaExclamationTriangle,
    color: 'text-green-600',
  },
  { 
    id: 8, 
    category: 'Property/Code Violations', 
    title: 'Toxic invasive plant identified on the rental property near the property line.', 
    report: 'Poison hemlock',
    icon: FaExclamationTriangle,
    color: 'text-green-600',
  },
];

// Helper component for a single timeline item
const TimelineItem = ({ category, title, report, Icon, color, isLast }) => (
  <div className="flex relative">
    {/* Vertical Line and Dot */}
    <div className="flex flex-col items-center mr-4">
      {/* Circle Icon */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 border-white ${color} bg-gray-100 shadow-md`}>
        <Icon className="w-4 h-4" />
      </div>
      {/* Vertical Line (Hidden for the last item) */}
      {!isLast && (
        <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 my-1"></div>
      )}
    </div>
    
    {/* Content Card */}
    <div className={`flex-grow pb-8 pt-0.5 ${isLast ? '' : 'mb-4'}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {category}
      </span>
      <h4 className="text-lg font-bold text-gray-800 mt-1 mb-1">
        {report}
      </h4>
      <p className="text-sm text-gray-600">
        {title}
      </p>
    </div>
  </div>
);

// Main Component
const IncidentsView = () => {
  // CRITICAL: Reverse the array to show most recent incident first (at the top)
  const sortedIncidents = [...incidentData].reverse();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Card Header (Matches the style of other components) */}
      <div className="bg-white rounded-lg p-6 mb-8 card-shadow">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Incident Log Timeline</h2>
        <p className="text-gray-600">
          A chronological record of reported incidents, listed most recent first. Report numbers are provided where applicable.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative">
        {sortedIncidents.map((incident, index) => (
          <TimelineItem
            key={incident.id}
            category={incident.category}
            title={incident.title}
            report={incident.report}
            Icon={incident.icon}
            color={incident.color}
            isLast={index === sortedIncidents.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default IncidentsView;