const SplashPage = () => {
  return (
    <div className="w-full h-full max-w-[768px] flex flex-col overflow-hidden relative">
      <img className="absolute top-0 left-0 w-full h-full object-contain" src="/splash-bg.png" alt="Splash" />
      <img className="w-full z-10 pt-10 px-5" src="/logo.png" alt="Logo" />

      <div className="absolute bottom-0 h-[50%] w-full bg-linear-to-t from-black/80 to-gray z-20"></div>

      <div className="flex-1 flex items-end pb-10 z-30 w-full">
        <div className="w-full flex flex-col justify-center items-center gap-1">
          <div className="w-full h-5 border border-white bg-ui-navy rounded-full max-w-64">
            <div className="w-1/2 h-full rounded-full bg-linear-to-r from-button-start to-button-end"></div>
          </div>

          <div className="flex items-center gap-1 font-['Baloo_2'] text-sm text-white">
            <span className="font-bold">
              Tips:
            </span>
            <span>
              Training everyday good for your health
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;