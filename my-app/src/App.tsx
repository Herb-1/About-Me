import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ngăn chặn menu chuột phải và các hành động copy/tải ảnh
  useEffect(() => {
    const preventImageActions = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Ngăn chặn menu chuột phải
    document.addEventListener('contextmenu', preventImageActions);
    
    // Ngăn chặn kéo thả ảnh
    document.addEventListener('dragstart', preventImageActions);
    
    // Ngăn chặn copy ảnh
    document.addEventListener('copy', preventImageActions);
    
    // Ngăn chặn phím tắt copy
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        const target = e.target as HTMLElement;
        if (target.tagName === 'IMG') {
          e.preventDefault();
          return false;
        }
      }
    });

    // Thêm thuộc tính draggable="false" cho tất cả ảnh
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute('draggable', 'false');
    }
    
    return () => {
      document.removeEventListener('contextmenu', preventImageActions);
      document.removeEventListener('dragstart', preventImageActions);
      document.removeEventListener('copy', preventImageActions);
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
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
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
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
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
        <h2 className={`text-2xl font-semibold mb-6 uppercase text-center ${isDarkMode ? 'text-pink-300' : 'text-be'}`}>Liên hệ</h2>
        <div className={`rounded-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-pink-50'} shadow-lg`}>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a 
                href="mailto:Hanguyen14092005@gmail.com" 
                className={`hover:underline ${isDarkMode ? 'text-pink-300 hover:text-pink-200' : 'text-be hover:text-pink-400'}`}
              >
                Hanguyen14092005@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>0866492365</span>
            </div>

            {/* Facebook */}
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              <a 
                href="https://www.facebook.com/hama.hippo" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:underline ${isDarkMode ? 'text-pink-300 hover:text-pink-200' : 'text-be hover:text-pink-400'}`}
              >
                @hama.hippo
              </a>
            </div>

            {/* Instagram */}
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <a 
                href="https://www.instagram.com/hanguyn1409" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:underline ${isDarkMode ? 'text-pink-300 hover:text-pink-200' : 'text-be hover:text-pink-400'}`}
              >
                @hanguyn1409
              </a>
            </div>

            {/* TikTok */}
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <a 
                href="https://www.tiktok.com/@hazy140904" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`hover:underline ${isDarkMode ? 'text-pink-300 hover:text-pink-200' : 'text-be hover:text-pink-400'}`}
              >
                @hazy140904
              </a>
            </div>
          </div>
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