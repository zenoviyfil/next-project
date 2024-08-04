"use client";

import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Register
        </h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm text-gray-400">
              USERNAME:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-400">
              EMAIL:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-gray-400">
              PASSWORD:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-400"
            >
              CONFIRM PASSWORD:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            REGISTER
          </button>
        </form>
        <div className="flex flex-col items-center">
          <p className="w-full flex justify-center mt-5">
            Already have an account?
          </p>
          <button
            type="button"
            onClick={() => router.push("/auth/login")}
            className="w-fit py-2 px-3 bg-green-500 hover:bg-green-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Log in!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
