export default function Login() {
  return (
    <div>
      <h1 className="title">Login to your Account</h1>
      <form action="" className="form-class">
        <label className="label-class">Email</label>
        <input
          type="text"
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
        <button className="login-btn">Sign in</button>
      </form>
    </div>
  );
}
