import React, { useState } from "react";

export default function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState([]);

  // Handle file selection
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    // Convert FileList into array of object URLs
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setSelectedImages((prev) => [...prev, ...newImages]);
  };

  // Remove image
  const handleRemoveImage = (index) => {
    setSelectedImages((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Upload Images
      </h2>

      {/* File Input */}
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <span className="text-gray-500 text-sm">
          Click to upload or drag and drop
        </span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImageChange}
        />
      </label>

      {/* Image Previews */}
      {selectedImages.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3">
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src={image.url}
                alt={`preview ${index}`}
                className="w-full h-24 object-cover"
              />
              {/* Remove Button */}
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
