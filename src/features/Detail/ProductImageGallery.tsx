import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  title: string;
}

export const ProductImageGallery = ({ images, title }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage] || images[0]}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer ${
                selectedImage === index ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              <img src={image} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
