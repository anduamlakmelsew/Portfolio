import { useState, useRef } from 'react';
import { Upload, User, Camera, X, Check, Cloud, HardDrive } from 'lucide-react';
import Button from '../components/Button';
import { personalInfo } from '../data/portfolioData';

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem('profileImage') || personalInfo.profileImage || null
  );
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [storageType, setStorageType] = useState('local'); // 'local' or 'server'
  const fileInputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please select an image file' });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Image size must be less than 5MB' });
      return;
    }

    setSelectedFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      setMessage({ type: '', text: '' });
    };
    reader.readAsDataURL(file);
  };

  const handleUploadLocal = async () => {
    if (!previewImage) return;

    setIsUploading(true);
    setMessage({ type: '', text: '' });

    try {
      // Store in localStorage
      localStorage.setItem('profileImage', previewImage);
      setProfileImage(previewImage);
      setPreviewImage(null);
      setSelectedFile(null);
      setMessage({ type: 'success', text: 'Profile photo saved locally!' });
      
      // Dispatch custom event to update ProfileImage component
      window.dispatchEvent(new Event('profileImageUpdated'));
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save image. Please try again.' });
    } finally {
      setIsUploading(false);
    }
  };

  const handleUploadServer = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setMessage({ type: '', text: '' });

    try {
      const formData = new FormData();
      formData.append('profileImage', selectedFile);

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/upload/profile`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        const serverImageUrl = `${API_URL}${data.imageUrl}`;
        localStorage.setItem('profileImage', serverImageUrl);
        localStorage.setItem('profileImageFilename', data.filename);
        setProfileImage(serverImageUrl);
        setPreviewImage(null);
        setSelectedFile(null);
        setMessage({ type: 'success', text: 'Profile photo uploaded to server!' });
        
        // Dispatch custom event
        window.dispatchEvent(new Event('profileImageUpdated'));
        
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to upload to server' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please check your connection.' });
    } finally {
      setIsUploading(false);
    }
  };

  const handleUpload = () => {
    if (storageType === 'local') {
      handleUploadLocal();
    } else {
      handleUploadServer();
    }
  };

  const handleRemove = async () => {
    const filename = localStorage.getItem('profileImageFilename');
    
    // If image was stored on server, delete it
    if (filename && profileImage?.includes('/uploads/')) {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        await fetch(`${API_URL}/api/upload/profile/${filename}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.error('Failed to delete from server:', error);
      }
    }

    localStorage.removeItem('profileImage');
    localStorage.removeItem('profileImageFilename');
    setProfileImage(null);
    setPreviewImage(null);
    setSelectedFile(null);
    setMessage({ type: 'success', text: 'Profile photo removed' });
    
    // Dispatch custom event
    window.dispatchEvent(new Event('profileImageUpdated'));
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCancel = () => {
    setPreviewImage(null);
    setSelectedFile(null);
    setMessage({ type: '', text: '' });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const displayImage = previewImage || profileImage;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="section-title">Profile Settings</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">Profile Photo</h2>
          
          {/* Current/Preview Image */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              {displayImage ? (
                <img
                  src={displayImage}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                />
              ) : (
                <div className="w-40 h-40 rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-600">
                  <User size={64} className="text-gray-500" />
                </div>
              )}
              
              {previewImage && (
                <div className="absolute -top-2 -right-2 bg-yellow-500 rounded-full p-2">
                  <Camera size={20} className="text-white" />
                </div>
              )}
            </div>
            
            <p className="text-gray-400 mt-4 text-center">
              {previewImage ? 'Preview - Click Save to confirm' : 'Your profile photo'}
            </p>
          </div>

          {/* Storage Type Selection */}
          {previewImage && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Storage Location
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setStorageType('local')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    storageType === 'local'
                      ? 'border-blue-500 bg-blue-900/20'
                      : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                  }`}
                >
                  <HardDrive className="mx-auto mb-2 text-blue-500" size={24} />
                  <div className="text-sm font-medium">Local Storage</div>
                  <div className="text-xs text-gray-400 mt-1">Browser only</div>
                </button>
                <button
                  onClick={() => setStorageType('server')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    storageType === 'server'
                      ? 'border-blue-500 bg-blue-900/20'
                      : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                  }`}
                >
                  <Cloud className="mx-auto mb-2 text-blue-500" size={24} />
                  <div className="text-sm font-medium">Server Storage</div>
                  <div className="text-xs text-gray-400 mt-1">Persistent</div>
                </button>
              </div>
            </div>
          )}

          {/* Upload Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Choose Photo
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
                id="profile-upload"
              />
              <label
                htmlFor="profile-upload"
                className="flex items-center justify-center w-full px-4 py-3 bg-gray-700 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:bg-gray-600 hover:border-blue-500 transition-all"
              >
                <Upload className="mr-2" size={20} />
                <span>Click to select image</span>
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: JPG, PNG, GIF (Max 5MB)
              </p>
            </div>

            {/* Action Buttons */}
            {previewImage && (
              <div className="flex gap-3">
                <Button
                  onClick={handleUpload}
                  isLoading={isUploading}
                  className="flex-1"
                >
                  <Check className="mr-2" size={20} />
                  {storageType === 'local' ? 'Save Locally' : 'Upload to Server'}
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="secondary"
                  disabled={isUploading}
                >
                  <X className="mr-2" size={20} />
                  Cancel
                </Button>
              </div>
            )}

            {profileImage && !previewImage && (
              <Button
                onClick={handleRemove}
                variant="danger"
                className="w-full"
              >
                <X className="mr-2" size={20} />
                Remove Photo
              </Button>
            )}

            {/* Status Message */}
            {message.text && (
              <div
                className={`flex items-center p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-900/20 border border-green-800 text-green-400'
                    : 'bg-red-900/20 border border-red-800 text-red-400'
                }`}
              >
                {message.type === 'success' ? (
                  <Check className="mr-3 flex-shrink-0" size={20} />
                ) : (
                  <X className="mr-3 flex-shrink-0" size={20} />
                )}
                <span>{message.text}</span>
              </div>
            )}
          </div>

          {/* Info Boxes */}
          <div className="mt-6 space-y-3">
            <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
              <h3 className="font-semibold mb-2 text-blue-400 flex items-center">
                <HardDrive className="mr-2" size={18} />
                Local Storage
              </h3>
              <p className="text-sm text-gray-400">
                Stores image in your browser. Fast and private, but only available on this device.
              </p>
            </div>

            <div className="p-4 bg-purple-900/20 border border-purple-800 rounded-lg">
              <h3 className="font-semibold mb-2 text-purple-400 flex items-center">
                <Cloud className="mr-2" size={18} />
                Server Storage
              </h3>
              <p className="text-sm text-gray-400">
                Uploads to server. Accessible from any device, but requires backend to be running.
              </p>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 p-4 bg-gray-700/50 border border-gray-600 rounded-lg">
            <h3 className="font-semibold mb-2">Tips for best results:</h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Use a square image for best results</li>
              <li>• Ensure good lighting and clear focus</li>
              <li>• Professional headshot works best</li>
              <li>• Image will be displayed as a circle</li>
              <li>• Recommended size: 400x400 pixels or larger</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
