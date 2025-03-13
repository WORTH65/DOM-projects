function App() {
  // Function to show password
  const showPassword = (event) => {
    console.log(event.target());
  }

  return (
    <>
      <section id="formWrapper">
        <div className="formContainer container">
          <h1 className="formHead">Registration Form</h1>
          <form id="form" className="form">
            <div className="formControl">
              <label htmlFor="username" className="formLabel">Username</label>
              <input type="text" name="username" maxLength={16} placeholder="Max allowed length 16" className="formInput" id="username" />
            </div>
            <div className="formControl">
              <label htmlFor="email" className="formLabel">Email</label>
              <input type="email" name="email"maxLength={255} placeholder="Enter valid number" id="email" className="formInput" />
            </div>
            <div className="formControl passwordField">
              <label htmlFor="password" className="formLabel">Password</label>
              <input type="password" name="password" maxLength={255} placeholder="Enter a strong password" id="password" className="formInput" />
              <button type="button" onClick={showPassword} className="showPassword"></button>
            </div>
            <div className="formControl passwordField">
              <label htmlFor="confirmPassword" className="formLabel">Confirm Password</label>
              <input type="password" name="confirmPassword" maxLength={255} placeholder="Re-enter pasword" id="confirmPassword" className="formInput" />
            </div>
            <div className="formControl text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default App
