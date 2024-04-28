import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    personalDetails: {
      fullName: '',
      dateOfBirth: '',
      gender: '',
      nationality: ''
    },
    contactInformation: {
      emailAddress: '',
      phoneNumber: '',
      homeAddress: '',
      workAddress: ''
    },
    professionalInformation: {
      occupation: '',
      companyName: '',
      workExperience: '',
      skills: ''
    },
    emergencyContactInformation: {
      emergencyContactName: '',
      emergencyContactRelationship: '',
      emergencyContactPhoneNumber: '',
      emergencyContactEmailAddress: ''
    },
    healthInformation: {
      bloodType: '',
      allergies: '',
      medications: '',
      primaryCarePhysicianContactInfo: ''
    },
    preferences: {
      favoriteColor: '',
      favoriteFood: '',
      hobbies: '',
      interests: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [category, field] = name.split('.');
    setFormData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value
      }
    }));
  };

  return (
    <div className="App">
      <h1>Personal Information Form</h1>
      <form>
        <div className="form-section">
        <h2>Personal Details</h2>
        <div className="glass-card">
        <input type="text" name="personalDetails.fullName" placeholder="Full Name" value={formData.personalDetails.fullName} onChange={handleChange} />
        <input type="text" name="personalDetails.dateOfBirth" placeholder="Date of Birth" value={formData.personalDetails.dateOfBirth} onChange={handleChange} />
        <input type="text" name="personalDetails.gender" placeholder="Gender" value={formData.personalDetails.gender} onChange={handleChange} />
        <input type="text" name="personalDetails.nationality" placeholder="Nationality" value={formData.personalDetails.nationality} onChange={handleChange} />
        </div>
        </div>

        <div className="form-section">
        <h2>Contact Information</h2>
        <div className="glass-card">
        <input type="text" name="contactInformation.emailAddress" placeholder="Email Address" value={formData.contactInformation.emailAddress} onChange={handleChange} />
        <input type="text" name="contactInformation.phoneNumber" placeholder="Phone Number" value={formData.contactInformation.phoneNumber} onChange={handleChange} />
        <input type="text" name="contactInformation.homeAddress" placeholder="Home Address" value={formData.contactInformation.homeAddress} onChange={handleChange} />
        <input type="text" name="contactInformation.workAddress" placeholder="Work Address" value={formData.contactInformation.workAddress} onChange={handleChange} />
        </div>
        </div>

        <div className="form-section">
        <h2>Professional Information</h2>
        <div className="glass-card">
        <input type="text" name="professionalInformation.occupation" placeholder="Occupation" value={formData.professionalInformation.occupation} onChange={handleChange} />
        <input type="text" name="professionalInformation.companyName" placeholder="Company Name" value={formData.professionalInformation.companyName} onChange={handleChange} />
        <input type="text" name="professionalInformation.workExperience" placeholder="Work Experience" value={formData.professionalInformation.workExperience} onChange={handleChange} />
        <input type="text" name="professionalInformation.skills" placeholder="Skills" value={formData.professionalInformation.skills} onChange={handleChange} />
        </div>
        </div>

        <div className="form-section">
        <h2>Emergency Contact Information</h2>
        <div className="glass-card">
        <input type="text" name="emergencyContactInformation.emergencyContactName" placeholder="Emergency Contact Name" value={formData.emergencyContactInformation.emergencyContactName} onChange={handleChange} />
        <input type="text" name="emergencyContactInformation.emergencyContactRelationship" placeholder="Emergency Contact Relationship" value={formData.emergencyContactInformation.emergencyContactRelationship} onChange={handleChange} />
        <input type="text" name="emergencyContactInformation.emergencyContactPhoneNumber" placeholder="Emergency Contact Phone Number" value={formData.emergencyContactInformation.emergencyContactPhoneNumber} onChange={handleChange} />
        <input type="text" name="emergencyContactInformation.emergencyContactEmailAddress" placeholder="Emergency Contact Email Address" value={formData.emergencyContactInformation.emergencyContactEmailAddress} onChange={handleChange} />
        </div>
        </div>

        <div className="form-section">
        <h2>Health Information</h2>
        <div className="glass-card">
        <input type="text" name="healthInformation.bloodType" placeholder="Blood Type" value={formData.healthInformation.bloodType} onChange={handleChange} />
        <input type="text" name="healthInformation.allergies" placeholder="Allergies" value={formData.healthInformation.allergies} onChange={handleChange} />
        <input type="text" name="healthInformation.medications" placeholder="Medications" value={formData.healthInformation.medications} onChange={handleChange} />
        <input type="text" name="healthInformation.primaryCarePhysicianContactInfo" placeholder="Primary Care Physician Contact Information" value={formData.healthInformation.primaryCarePhysicianContactInfo} onChange={handleChange} />
        </div>
        </div>

        <div className="form-section">
        <h2>Preferences</h2>
        <div className="glass-card">
        <input type="text" name="preferences.favoriteColor" placeholder="Favorite Color" value={formData.preferences.favoriteColor} onChange={handleChange} />
        <input type="text" name="preferences.favoriteFood" placeholder="Favorite Food" value={formData.preferences.favoriteFood} onChange={handleChange} />
        <input type="text" name="preferences.hobbies" placeholder="Hobbies" value={formData.preferences.hobbies} onChange={handleChange} />
        <input type="text" name="preferences.interests" placeholder="Interests" value={formData.preferences.interests} onChange={handleChange} />
        </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
