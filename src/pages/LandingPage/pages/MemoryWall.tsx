import React, { useState } from 'react';
import { X, Heart, Upload, User, MessageSquare } from 'lucide-react';

const MemoryWall = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memories, setMemories] = useState([
    {
      id: 1,
      date: 'September 27, 2023',
      message: 'In memory of Raymond H. Moore, a beacon of love and wisdom.\nHis legacy of kindness and his genuine love for people will forever inspire us. Though he\'s gone, his spirit lives on in our hearts.\n\nFarewell, dear friend.',
      author: 'Clayton Steinberg',
      image: '/api/placeholder/200/200',
      likes: 0
    }
  ]);
  const [formData, setFormData] = useState({
    message: '',
    author: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [likedMemories, setLikedMemories] = useState(new Set());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message.trim() && formData.author.trim()) {
      const newMemory = {
        id: Date.now(),
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        message: formData.message,
        author: formData.author,
        image: imagePreview,
        likes: 0
      };
      setMemories(prev => [newMemory, ...prev]);
      setFormData({ message: '', author: '', image: null });
      setImagePreview(null);
      setIsModalOpen(false);
    }
  };

  const handleLike = (id) => {
    if (likedMemories.has(id)) {
      setLikedMemories(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
      setMemories(prev => prev.map(m => 
        m.id === id ? { ...m, likes: m.likes - 1 } : m
      ));
    } else {
      setLikedMemories(prev => new Set([...prev, id]));
      setMemories(prev => prev.map(m => 
        m.id === id ? { ...m, likes: m.likes + 1 } : m
      ));
    }
  };

  return (
    <section id="memory-wall" className="py-16 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2 tracking-wide ">
            Forever Remembered
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            A Wall of Remembrance
          </h2>
          <div className="h-[5px] bg-gradient-to-r from-transparent via-[#fcbb68] to-transparent divider-line mx-auto rounded"></div>
          
          <p className="text-gray-700 italic max-w-2xl mx-auto mb-8">
            "To live in the hearts we leave behind is not to die."
            <br />
            <span className="text-sm">Please share your Photos and Memories about Olaseni Babatunde Olagbaju.</span>
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#deac6c] hover:bg-[#8a7160] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contribute →
          </button>
        </div>

        {/* Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-6 transform hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-gray-500 italic">{memory.date}</p>
                <button
                  onClick={() => handleLike(memory.id)}
                  className="flex items-center gap-1 group"
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      likedMemories.has(memory.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  />
                  {memory.likes > 0 && (
                    <span className="text-sm text-gray-600">{memory.likes}</span>
                  )}
                </button>
              </div>
              
              <p className="text-gray-700 mb-4 font-light whitespace-pre-line leading-relaxed">
                {memory.message}
              </p>
              
              <div className="flex items-center gap-4 mt-6">
                {memory.image && (
                  <img
                    src={memory.image}
                    alt="Memory"
                    className="w-20 h-20 rounded-lg object-cover shadow-md"
                  />
                )}
                <p className="text-[#deac6c] font-serif text-lg ml-auto">
                  {memory.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-800">Share a Memory</h3>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setFormData({ message: '', author: '', image: null });
                  setImagePreview(null);
                }}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4" />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fcbb68] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  Your Memory *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Share your favorite memory, story, or message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fcbb68] focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Upload className="w-4 h-4" />
                  Add Photo (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#fcbb68] transition-all bg-gray-50 hover:bg-orange-50"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-full object-contain rounded-lg"
                      />
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">Click to upload a photo</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormData({ message: '', author: '', image: null });
                    setImagePreview(null);
                  }}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#deac6c] hover:bg-[#8a7160] text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Share Memory
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default MemoryWall;