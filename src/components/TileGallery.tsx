"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TileGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setIsPopping(true);
      // Reset popping state after animation finishes to allow re-trigger if needed
      const timer = setTimeout(() => setIsPopping(false), 800);
      return () => clearTimeout(timer);
    }
  }, [selectedImage]);

  return (
    <>
      <div className="gallery-grid fade-in-up delay-100">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item" onClick={() => setSelectedImage(img)}>
            <Image 
              src={`/${img}`} 
              alt={`Gitai Tile ${idx + 1}`} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="gallery-image"
              loading={idx < 6 ? "eager" : "lazy"}
            />
            <div className="gallery-overlay glass">
              <span>View Details</span>
            </div>
          </div>
        ))}
        {images.length === 0 && (
          <p className="text-center">No images found in the public folder.</p>
        )}
      </div>

      {/* Modal with Popping Candy Effect */}
      {selectedImage && (
        <div className="modal-backdrop" onClick={() => setSelectedImage(null)}>
          <div className={`modal-content ${isPopping ? 'popping-candy-effect' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
            <div className="modal-image-wrapper">
              <Image 
                src={`/${selectedImage}`} 
                alt="Selected Tile" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            {/* Candy Particles */}
            {isPopping && (
              <>
                <div className="candy particle-1"></div>
                <div className="candy particle-2"></div>
                <div className="candy particle-3"></div>
                <div className="candy particle-4"></div>
                <div className="candy particle-5"></div>
                <div className="candy particle-6"></div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
