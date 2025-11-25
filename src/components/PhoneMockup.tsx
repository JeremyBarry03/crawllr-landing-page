import screenshot from "/images/Screenshot.png";

export function PhoneMockup() {
  return (
    <div className="relative perspective-[2000px]">
      <div 
        className="relative w-[280px] md:w-[340px] mx-auto"
        style={{
          transform: "rotateY(-5deg) rotateX(5deg)",
          transformStyle: "preserve-3d"
        }}
      >
        {/* iPhone 14 Frame */}
        <div className="relative bg-[#1a1a1a] rounded-[50px] p-3 shadow-2xl shadow-black/50">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#1a1a1a] rounded-b-[20px] z-10" />
          
          {/* Screen Container */}
          <div className="relative bg-black rounded-[42px] overflow-hidden">
            {/* Screen Content */}
            <img 
              src={screenshot} 
              alt="Crawllr App Screenshot" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Side Buttons */}
          <div className="absolute -left-[2px] top-[100px] w-[3px] h-[30px] bg-[#0a0a0a] rounded-l-sm" />
          <div className="absolute -left-[2px] top-[140px] w-[3px] h-[60px] bg-[#0a0a0a] rounded-l-sm" />
          <div className="absolute -left-[2px] top-[210px] w-[3px] h-[60px] bg-[#0a0a0a] rounded-l-sm" />
          <div className="absolute -right-[2px] top-[140px] w-[3px] h-[80px] bg-[#0a0a0a] rounded-r-sm" />
          
          {/* Device Shine/Reflection */}
          <div 
            className="absolute inset-0 rounded-[50px] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)"
            }}
          />
        </div>
        
        {/* Shadow beneath phone */}
        <div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[40px] bg-[#ba185e]/20 blur-[40px] rounded-full"
        />
      </div>
    </div>
  );
}
