import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ngăn chặn menu chuột phải trên ảnh
  useEffect(() => {
    const preventRightClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventRightClick);
    
    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);

  const experiences = [
    {
      position: "PG sampling",
      description: "",
      images: ["/images/sampling1.jpg", "/images/sampling2.jpg", "/images/sampling3.jpg", "/images/sampling4.jpg"]
    },
    {
      position: "PG inline",
      description: "",
      images: ["/images/inline1.jpg", "/images/inline2.jpg"]
    },
    {
      position: "PG đổi quà",
      description: "",
      images: ["/images/gift1.jpg", "/images/gift2.jpg"]
    },
    {
      position: "PG sự kiện",
      description: "",
      images: ["/images/event1.jpg", "/images/event2.jpg"]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-[#121212] text-white' : 'bg-white text-gray-900'}`}>
      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-4 right-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-be hover:bg-pink-200'} transition-colors duration-300`}
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      {/* Trang chủ */}
      <section className={`w-full py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-be'}`}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <img
            src="/images/avatar2.jpg"
            alt="Nguyễn Thị Hà"
            className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-white font-sans">Nguyễn Thị Hà</h1>
        </div>
      </section>

      {/* Sơ yếu lý lịch */}
      <section className={`max-w-2xl mx-auto w-full py-12 px-4 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-4 uppercase ${isDarkMode ? 'text-pink-300' : 'text-be'}`}>Sơ yếu lý lịch</h2>
        <div className={`rounded-lg p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
          <p>
            <strong>Họ và tên:</strong> Nguyễn Thị Hà
          </p>
          <p>
            <strong>Ngày/Tháng/Năm sinh:</strong> 14/09/2002
          </p>
          <p>
            <strong>Chiều Cao:</strong> 1m63
          </p>
          <p>
            <strong>Cân Nặng:</strong> 50kg
          </p>
          <p>
            <strong>STK:</strong> 0866492365 MB bank
          </p>
          <p>
            <strong>Chi Nhánh:</strong> Bình Dương
          </p>
          <p className="mt-2">
            <strong>Sơ lược kinh nghiệm:</strong>
          </p>
          <p className="italic">
            - PG sampling<br />
            - PG inline<br />
            - PG đổi quà<br />
            - PG sự kiện
          </p>
        </div>
      </section>

      {/* Kinh nghiệm */}
      <section className={`w-full py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-be'}`}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-[#ff1493] text-center">Kinh nghiệm</h2>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`mb-6 rounded-lg shadow p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            >
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-pink-300' : 'text-be'}`}>- {exp.position}</h3>
                </div>
                {exp.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.images.map((image, imageIdx) => (
                      <img
                        key={imageIdx}
                        src={image}
                        alt={`${exp.position} ${imageIdx + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Liên hệ */}
      <section className={`max-w-2xl mx-auto w-full py-12 px-4 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-4 uppercase ${isDarkMode ? 'text-pink-300' : 'text-be'}`}>Liên hệ</h2>
        <div className={`rounded-lg p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-pink-50'}`}>
          <p>
            Email:{" "}
            <a 
              href="mailto:Hanguyen14092005@gmail.com" 
              className={`underline ${isDarkMode ? 'text-pink-300 hover:text-pink-200' : 'text-be hover:text-pink-300'}`}
            >
              Hanguyen14092005@gmail.com
            </a>
          </p>
          <p>Điện thoại: 0866492365</p>
        </div>
      </section>

      {/* Credit */}
      <div className={`fixed bottom-4 right-4 text-base md:text-lg font-semibold ${isDarkMode ? 'text-pink-300' : 'text-be'}`}>
        <a 
          href="https://www.facebook.com/QUts.Deraz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors duration-300"
        >
          Được tạo bởi Hiep.Ng
        </a>
      </div>
    </div>
  );
};

export default App; 