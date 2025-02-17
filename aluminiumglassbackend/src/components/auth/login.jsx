import React from "react";

export default function ExampleV3() {
  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
              {/* Email input */}
              <input
                type="email"
                className="form-input mb-6 w-full rounded-lg border border-neutral-300 bg-white px-6 py-3 text-lg placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Email address"
              />

              {/* Password input */}
              <input
                type="password"
                className="form-input mb-6 w-full rounded-lg border border-neutral-300 bg-white px-6 py-3 text-lg placeholder-neutral-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Password"
              />

              {/* Remember me checkbox */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 rounded border border-neutral-300 bg-white text-primary focus:outline-none"
                    type="checkbox"
                    id="rememberMe"
                    defaultChecked
                  />
                  <label className="ml-2 text-neutral-600" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>

                {/* Forgot password link */}
                <a
                  href="#!"
                  className="text-primary hover:text-primary-600 focus:text-primary-600"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full rounded bg-primary px-7 py-3 text-sm font-medium text-white shadow-md hover:bg-primary-600 focus:bg-primary-600"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-neutral-600">
                  OR
                </p>
              </div>

              {/* Social login buttons */}
              <a
                href="#!"
                className="mb-3 flex items-center justify-center w-full rounded bg-primary px-7 py-3 text-sm font-medium text-white shadow-md hover:bg-primary-600 focus:bg-primary-600"
                style={{ backgroundColor: "#3b5998" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Continue with Facebook
              </a>

              <a
                href="#!"
                className="mb-3 flex items-center justify-center w-full rounded bg-info px-7 py-3 text-sm font-medium text-white shadow-md hover:bg-info-600 focus:bg-info-600"
                style={{ backgroundColor: "#55acee" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
