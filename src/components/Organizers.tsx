const Organizers = () => {
  return (
    <section className="py-12 md:py-16 mb-16 md:mb-24 relative bg-background w-full">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Responsive: 2x2 for <lg, horizontal for lg+ */}
        <div className="flex flex-col lg:hidden items-center justify-center gap-6">
          {/* Organized By */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider">Organized By</h3>
            <div className="flex flex-row items-center justify-center gap-8">
            <img
              src="/images/IIITRanchi.jpg"
              alt="IIIT Ranchi"
              className="h-20 w-auto object-contain rounded-lg"
            />
            <img
              src="/images/hg.png"
              alt="HG"
              className="h-20 w-auto object-contain rounded-lg"
            />
          </div>
          </div>
          {/* Cross Divider */}
          <div className="flex justify-center my-2">
            <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white -translate-y-1/2 -rotate-45"></div>
            </div>
          </div>
          {/* Collaborators */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider text-center">In Collaboration With</h3>
            <div className="flex flex-row items-center justify-center gap-4">
            <img
              src="/images/ai-impact-logo.png"
              alt="AI Impact"
              className="h-20 w-auto object-contain rounded-lg"
            />
            <img
              src="/images/iic.png"
              alt="IIC"
              className="h-20 w-auto object-contain rounded-lg"
            />
          </div>
          </div>
        </div>
        {/* Desktop: horizontal row with one cross */}
        <div className="hidden lg:flex items-start justify-center gap-16 lg:gap-24 flex-wrap">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-12">
              <img
                src="/images/IIITRanchi.jpg"
                alt="IIIT Ranchi"
                className="h-28 lg:h-32 w-auto object-contain rounded-lg"
              />
              <img
                src="/images/hg.png"
                alt="HG"
                className="h-28 lg:h-32 w-auto object-contain rounded-lg"
              />
            </div>
            <h3 className="text-white/80 text-lg font-semibold uppercase tracking-wider">Organized By</h3>
          </div>
          <div className="relative w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 flex items-center justify-center mt-11">
            <div className="absolute top-1/2 left-0 w-full h-1 lg:h-1.5 bg-white -translate-y-1/2 rotate-45"></div>
            <div className="absolute top-1/2 left-0 w-full h-1 lg:h-1.5 bg-white -translate-y-1/2 -rotate-45"></div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-12">
              <img
                src="/images/ai-impact-logo.png"
                alt="AI Impact"
                className="h-28 lg:h-32 w-auto object-contain rounded-lg"
              />
              <img
                src="/images/iic.png"
                alt="IIC"
                className="h-28 lg:h-32 w-auto object-contain rounded-lg"
              />
            </div>
            <h3 className="text-white/80 text-lg font-semibold uppercase tracking-wider">In Collaboration With</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
