import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form", data);
  }

  return (
    <div className="flex justify-center items-center h-[800px] w-2/5 bg-gray-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-5/6 bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">First Name:</label>
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            {...register('firstName', {
              required: 'First Name is required',
              minLength: { value: 3, message: 'Minimum length is 3' },
              maxLength: { value: 6, message: 'Maximum length is 6' },
            })}
            placeholder="Enter First Name"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Middle Name:</label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 border-gray-300"
            {...register('middleName')}
            placeholder="Enter Middle Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Last Name:</label>
          <input
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            {...register('lastName', {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Invalid characters in Last Name',
              },
            })}
            placeholder="Enter Last Name"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 mt-4 bg-cyan-700 text-white rounded-lg hover:bg-cyan-500 transition-all disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Form;
