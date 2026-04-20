import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ProfileImage = ({ size = 'md', className = '' }) => {
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Load from localStorage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImage(savedImage);
    } else if (personalInfo.profileImage) {
      setProfileImage(personalInfo.profileImage);
    }

    // Listen for storage changes (when image is updated in another tab/component)
    const handleStorageChange = () => {
      const updatedImage = localStorage.getItem('profileImage');
      setProfileImage(updatedImage);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('profileImageUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profileImageUpdated', handleStorageChange);
    };
  }, []);

  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  };

  const iconSizes = {
    sm: 24,
    md: 48,
    lg: 64,
    xl: 80,
  };

  return (
    <div className={`relative ${className}`}>
      {profileImage ? (
        <img
          src={profileImage}
          alt={personalInfo.name}
          className={`${sizes[size]} rounded-full object-cover border-4 border-blue-500 shadow-lg`}
        />
      ) : (
        <div className={`${sizes[size]} rounded-full bg-gray-700 flex items-center justify-center border-4 border-gray-600 shadow-lg`}>
          <User size={iconSizes[size]} className="text-gray-500" />
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
