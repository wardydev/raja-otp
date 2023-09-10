const LoadingSpinner: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 bg-[#ffffff8f] w-full h-full flex items-center justify-center">
      <div className="cool-spinner">
        <div className="spinner">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
          <div className="dot dot4"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
