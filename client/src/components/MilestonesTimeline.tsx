
interface Milestone {
  id: number;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Company Founded",
    description: "Vara Global Trading established with a focus on food distribution."
  },
  {
    id: 2,
    title: "Expansion into Electronics",
    description: "Launch of the electronics division, bringing innovative home appliances to the market."
  },
  {
    id: 3,
    title: "Real Estate Division",
    description: "Entry into the real estate sector with our first housing development project."
  },
  {
    id: 4,
    title: "International Expansion",
    description: "Opening of regional offices across West Africa."
  },
  {
    id: 5,
    title: "Sustainable Initiatives",
    description: "Launch of eco-friendly product lines and sustainable building practices."
  }
];

const MilestonesTimeline = () => {
  return (
    <div></div>
    // <section className="py-20 md:px-12 bg-white">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-16">
    //       <h2 className="section-title mb-4">Company Milestones</h2>
    //       <p className="section-subtitle mx-auto">
    //         A journey of growth, innovation, and impact over the years.
    //       </p>
    //     </div>

    //     <div className="max-w-4xl mx-auto">
    //       {milestones.map((milestone, index) => (
    //         <div 
    //           key={milestone.id} 
    //           className="timeline-item animate-fade-in"
    //           style={{ animationDelay: `${index * 150}ms` }}
    //         >
    //           <div className="timeline-marker" />
    //           <div className="timeline-content">
    //             <div className="bg-vara-light rounded-lg p-6 shadow-sm">
    //               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
    //                 <h3 className="text-xl font-semibold text-vara-primary">{milestone.title}</h3>
    //                 <span className="text-vara-secondary font-medium bg-vara-accent px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
    //                   {milestone.year}
    //                 </span>
    //               </div>
    //               <p className="text-gray-600">{milestone.description}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default MilestonesTimeline;
