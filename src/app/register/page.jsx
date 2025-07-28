"use client";

export default function Register() {
  return (
    <div>
      <h1 className="title">Register</h1>
      <form action="" className="form-class">
        <label className="label-class">Email</label>
        <input
          type="email"
          name="email"
          className="input-class"
          placeholder="Enter your email"
        />

        <label className="label-class">Password</label>
        <input
          type="password"
          name="password"
          className="input-class"
          placeholder="Enter your password"
        />

        <label className="label-class">Confirm password</label>
        <input
          type="password"
          name="confirmPassword"
          className="input-class"
          placeholder="Re-enter your password"
        />

        <button className="reg-btn">Register</button>
      </form>
    </div>
  );
}
