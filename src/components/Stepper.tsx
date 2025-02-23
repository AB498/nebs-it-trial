import React, { useState } from 'react';

function SolarForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    homeowner: '',
    electricityBill: '',
    creditScore: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    callTime: ''
  });

  const totalSteps = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = (step: number) => {
    console.log(formData);
    let error = false;
    switch (step) {
      case 1:
        if (!formData.homeowner) error = true;
        break;
      case 2:
        if (!formData.electricityBill) error = true;
        break;
      case 3:
        if (!formData.creditScore) error = true;
        break;
      case 4:
        if (!formData.name || !formData.address || !formData.city || !formData.state || !formData.zip) error = true;
        break;
      case 5:
        if (!formData.phone || !formData.callTime) error = true;
        break;
      default:
        break;
    }
    if (error) return;
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep(5); // Move to thank you step
  };

  const backToHome = () => {
    location.reload();
  }

  const renderProgressSteps = () => {
    return (
      <div className="flex items-center justify-between mb-8">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col relative">

              <div className={`
              w-8 h-8 rounded-full flex items-center justify-center border-gray-500 border-[2px]
              ${step >= index + 1 ? 'border-blue-500' : 'border-black text-black'}
              `}>
                {index + 1}
              </div>
              <div className='absolute top-full left-1/2 -translate-x-1/2 text-xs'>
                {index + 1 === totalSteps ? 'Last Page' : 'Next'}
              </div>
            </div>
            {index < totalSteps - 1 && (
              <div className={`flex-1 h-[2px] mx-2 
                ${step > index + 1 ? 'bg-blue-500' : step == index + 1 ? 'bg-black' : 'bg-gray-200'}
                `}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  if (step > totalSteps) {
    return (
      <div className="bg-white rounded-[25px] p-8 shadow-xl w-full max-w-2xl lg:max-w-xl flex flex-col gap-6 px-12">
        <p className="text-center">
          Thank you for your response
        </p>
        <div className={`shrink-0 grow-0 h-[1px] bg-black mx-2`}></div>
        <h2 className="text-xl font-semibold mb-4">You're about to save estimated 18,000 USD.</h2>
        <p className="">
          We’ll contact with you soon with
          proper credentials.
        </p>
        <button
          type={step === totalSteps ? 'submit' : 'button'}
          onClick={backToHome}
          className="px-8 py-3 border-2 border-blue-600 rounded-full min-w-[200px] text-xl font-extrabold
          hover:text-blue-600 hover:bg-white bg-blue-900 text-white transition-colors self-center"
        >
          Back To Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[25px] p-8 shadow-xl w-full max-w-2xl lg:max-w-xl">
      <h2 className="text-md lg:text-xl font-medium mb-6">
        Complete the steps to unlock your solar potential
      </h2>

      {renderProgressSteps()}

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className='text-lg'>
            <label className="block font-semibold text-md lg:text-xl mb-4">
              Are you a home owner? *
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="homeowner"
                  value="yes"
                  checked={formData.homeowner === 'yes'}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="homeowner"
                  value="no"
                  checked={formData.homeowner === 'no'}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className='text-lg'>
            <label className="block font-semibold text-md lg:text-xl mb-4">
              Is your monthly electricity bill over $99? *
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="electricityBill"
                  value="yes"
                  checked={formData.electricityBill === 'yes'}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="electricityBill"
                  value="no"
                  checked={formData.electricityBill === 'no'}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span>No</span>
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className='text-lg'>
            <label className="block font-semibold text-md lg:text-xl mb-4">
              Your estimated credit score? *
            </label>
            <div className="space-y-3">
              {[
                'More Than 740 (Excellent)',
                '680 - 739 (Good)',
                'Less than 569 (Poor)',
                'I\'m not sure'
              ].map(score => (
                <label key={score} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="creditScore"
                    value={score}
                    checked={formData.creditScore === score}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span>{score}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Type Your Name"
                className="w-full px-3 py-2 border border-black rounded-full"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street Address"
                className="w-full px-3 py-2 border border-black rounded-full"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="w-full px-3 py-2 border border-black rounded-full"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                className="w-full px-3 py-2 border border-black rounded-full"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                placeholder="ZIP"
                className="w-full px-3 py-2 border border-black rounded-full"
                required
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">One last thing...</h3>
            <div>
              <label className="block mb-2">Contact *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
                className="w-full px-3 py-2 border border-black rounded-full"
                required
              />
            </div>
            <div className='text-lg'>
              <label className="block font-semibold text-md lg:text-xl mb-4">
                Preferred time of calling? *
              </label>
              <div className="space-y-3">
                {[
                  '9 AM - 11 AM',
                  '6 PM - 8 PM',
                  'I\'m available to pick anytime'
                ].map(time => (
                  <label key={time} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="callTime"
                      value={time}
                      checked={formData.callTime === time}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full min-w-[200px] text-xl font-extrabold
              hover:bg-blue-900 hover:text-white transition-colors"
            >
              Back
            </button>
          )}
          <button
            type={step === totalSteps ? 'submit' : 'button'}
            onClick={step === totalSteps ? undefined : () => nextStep(step)}
            className="px-8 py-3 border-2 border-blue-600 rounded-full min-w-[200px] text-xl font-extrabold
             hover:text-blue-600 hover:bg-white bg-blue-900 text-white transition-colors"
          >
            {step === totalSteps ? 'Submit' : 'Next'}
          </button>

        </div>
      </form>
    </div>
  );
}

export default SolarForm;